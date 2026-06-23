import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { PDFParse } from 'pdf-parse';
import { mockRequirements as existingRequirements } from '../src/data/mockRequirements';

// Types to match src/data/mockRequirements.ts
interface Course {
  code: string;
  name: string;
  units: number;
  type: 'Required' | 'Recommended' | 'Highly Recommended';
  category: 'IGETC' | 'MajorPrep';
  description?: string;
  isOverlap?: boolean;
  orGroup?: string;
  satisfies?: {
    code: string;
    name: string;
  };
}

interface TransferRequirement {
  fromCollege: string;
  toUniversity: string;
  major: string;
  courses: Course[];
}

const URLS_FILE = path.join(__dirname, '../urls.txt');
const REQUIREMENTS_FILE = path.join(__dirname, '../src/data/mockRequirements.ts');

// Clean JSON response from code block wraps
function cleanJsonResponse(text: string): string {
  let cleaned = text.trim();
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```[a-zA-Z]*\n/, '').replace(/\n```$/, '');
  }
  return cleaned.trim();
}

// Call LLM API (Gemini or OpenAI) to parse agreement text
async function parseAgreementWithLLM(text: string): Promise<TransferRequirement> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Please set GEMINI_API_KEY or OPENAI_API_KEY environment variable.');
  }

  const prompt = `Analyze the following articulation agreement text between a community college and a university.
Extract all major preparation and general education requirements listed in the agreement.
Adhere strictly to this JSON format (do not return any markdown formatting outside of the JSON block):
{
  "fromCollege": "De Anza College" (or the community college name from the agreement),
  "toUniversity": "UC Berkeley" (or the university name),
  "major": "Computer Science" (or the major name),
  "courses": [
    {
      "code": "MATH 1A", (the community college course code)
      "name": "Calculus I", (the community college course name)
      "units": 5.0, (the course units as a number)
      "type": "Required" | "Recommended" | "Highly Recommended", (determine from the text)
      "category": "MajorPrep" | "IGETC", (MajorPrep for major requirements, IGETC for general education like English composition)
      "description": "...", (optional description if available in the text)
      "isOverlap": false, (set to true if this course overlaps with another major's requirements - defaults to false)
      "orGroup": "...", (if this course is part of an OR selection, specify a descriptive group name, e.g., "CS Data Structures Selection". All alternative courses in this selection must share the exact same orGroup name)
      "satisfies": { "code": "COMPSCI 61B", "name": "Data Structures" } (if this community college course satisfies a specific university course, specify the university course code and name)
    }
  ]
}

Important parsing rules:
1. For courses that are part of an OR selection (e.g. "MATH 2A & 2B" OR "ENGR 37 & 2A & 2B"), group them by setting the same "orGroup" name. If a course satisfies a specific university course, include the "satisfies" field.
2. If multiple courses are required together to satisfy a requirement (e.g., De Anza's MATH 1B & 1C satisfies UCB's MATH 52), list them as separate courses in the array, but make sure they have the same "satisfies" target (and if inside an OR selection, they should also share the same "orGroup" name).
3. If the agreement lists "No Course Articulated" for a university course, do not add a De Anza course for it.
4. Set the "type" field carefully: "Required" for required courses, "Highly Recommended" for strongly/highly recommended courses, and "Recommended" for other recommended courses.
5. Do not include Honors courses (e.g. courses with "Honors" in their name or course codes ending in "H"). Only extract the regular versions of the courses.

Agreement Text:
${text}`;

  if (process.env.GEMINI_API_KEY) {
    console.log('Sending request to Gemini API...');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error: ${response.status} ${response.statusText} - ${errText}`);
    }

    const resJson = await response.json();
    const responseText = resJson.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) throw new Error('Empty response from Gemini API.');
    return JSON.parse(cleanJsonResponse(responseText));
  } else {
    console.log('Sending request to OpenAI API...');
    const url = 'https://api.openai.com/v1/chat/completions';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText} - ${errText}`);
    }

    const resJson = await response.json();
    const responseText = resJson.choices?.[0]?.message?.content;
    if (!responseText) throw new Error('Empty response from OpenAI API.');
    return JSON.parse(cleanJsonResponse(responseText));
  }
}

// Format the TransferRequirement object into formatted TypeScript string
function serializeRequirement(req: TransferRequirement): string {
  const coursesStr = req.courses.map(c => {
    const fields: string[] = [];
    fields.push(`code: '${c.code}'`);
    fields.push(`name: '${c.name.replace(/'/g, "\\'")}'`);
    fields.push(`units: ${c.units.toFixed(1)}`);
    fields.push(`type: '${c.type}'`);
    fields.push(`category: '${c.category}'`);
    if (c.description) fields.push(`description: '${c.description.replace(/'/g, "\\'")}'`);
    if (c.isOverlap) fields.push(`isOverlap: true`);
    if (c.orGroup) fields.push(`orGroup: '${c.orGroup.replace(/'/g, "\\'")}'`);
    if (c.satisfies) {
      fields.push(`satisfies: { code: '${c.satisfies.code}', name: '${c.satisfies.name.replace(/'/g, "\\'")}' }`);
    }
    return `      { ${fields.join(', ')} }`;
  }).join(',\n');

  return `  {
    fromCollege: '${req.fromCollege}',
    toUniversity: '${req.toUniversity}',
    major: '${req.major.replace(/'/g, "\\'")}',
    courses: [
${coursesStr}
    ]
  }`;
}

// Write the updated mockRequirements array back to the file
function writeRequirementsFile(requirements: TransferRequirement[]) {
  const content = `export interface Course {
  code: string;
  name: string;
  units: number;
  type: 'Required' | 'Recommended' | 'Highly Recommended';
  category: 'IGETC' | 'MajorPrep';
  description?: string;
  isOverlap?: boolean;
  orGroup?: string;
  satisfies?: {
    code: string;
    name: string;
  };
}

export interface TransferRequirement {
  fromCollege: string;
  toUniversity: string;
  major: string;
  courses: Course[];
}

export const mockRequirements: TransferRequirement[] = [
${requirements.map(serializeRequirement).join(',\n\n')}
];
`;
  fs.writeFileSync(REQUIREMENTS_FILE, content, 'utf8');
}

// Git operations helper
function handleGitWorkflow(major: string) {
  const slug = major.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const branchName = `feat/align-${slug}-requirements`;

  console.log(`Checking out new branch: ${branchName}...`);
  try {
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
  } catch {
    console.error(`Branch ${branchName} already exists or checkout failed. Continuing...`);
  }

  console.log(`Staging files...`);
  execSync(`git add "${REQUIREMENTS_FILE}"`, { stdio: 'inherit' });

  console.log(`Committing changes...`);
  execSync(`git commit -m "feat(requirements): align UCB ${major} requirements from URL"`, { stdio: 'inherit' });

  console.log(`Pushing to remote origin...`);
  try {
    execSync(`git push -u origin ${branchName}`, { stdio: 'inherit' });
    console.log(`Successfully pushed to origin ${branchName}!`);
  } catch {
    console.error('Failed to push to remote. Please push manually.');
  }
}

async function main() {
  if (!fs.existsSync(URLS_FILE)) {
    fs.writeFileSync(URLS_FILE, '# Put one PDF URL per line here\n', 'utf8');
    console.log('Created urls.txt. Please add the PDF URLs to it and run this script again.');
    process.exit(0);
  }

  const urls = fs.readFileSync(URLS_FILE, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));

  if (urls.length === 0) {
    console.log('No URLs found in urls.txt. Please add PDF URLs and re-run.');
    process.exit(0);
  }

  console.log(`Found ${urls.length} URL(s) to process.`);

  // Load existing database
  const requirementsMap = new Map<string, TransferRequirement>();
  for (const req of existingRequirements) {
    const key = `${req.fromCollege}|${req.toUniversity}|${req.major}`;
    requirementsMap.set(key, req);
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] Processing URL: ${url}...`);

    try {
      // 1. Fetch PDF from URL
      console.log('Downloading PDF into memory...');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch URL. Status: ${response.status} ${response.statusText}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const dataBuffer = Buffer.from(arrayBuffer);

      // 2. Parse PDF in memory
      console.log('Parsing PDF contents...');
      const parser = new PDFParse({ data: dataBuffer });
      const parsedPdfText = await parser.getText();
      const reqData = await parseAgreementWithLLM(parsedPdfText.text);
      await parser.destroy();

      // 3. Coerce common LLM naming mistakes and filter out honors courses
      if (reqData && reqData.courses) {
        reqData.courses = reqData.courses
          .filter(c => {
            const code = c.code.trim();
            const name = c.name.toLowerCase();
            const isHonors = code.endsWith('H') || name.includes('honors');
            return !isHonors;
          })
          .map(c => {
            let typeStr = c.type as string;
            if (typeStr === 'Strongly Recommended') {
              typeStr = 'Highly Recommended';
            }
            return { ...c, type: typeStr as 'Required' | 'Recommended' | 'Highly Recommended' };
          });
      }

      // 4. Normalize university names to keep database consistent
      if (reqData && reqData.toUniversity) {
        let univ = reqData.toUniversity.trim();
        if (univ.includes('Berkeley') || univ === 'UCB') {
          univ = 'UC Berkeley';
        } else if (univ.includes('Los Angeles') || univ === 'UCLA') {
          univ = 'UCLA';
        }
        reqData.toUniversity = univ;
      }

      console.log(`Successfully parsed major: "${reqData.major}" for university: "${reqData.toUniversity}"`);
      const key = `${reqData.fromCollege}|${reqData.toUniversity}|${reqData.major}`;
      requirementsMap.set(key, reqData);

      // 5. Write updated array
      writeRequirementsFile(Array.from(requirementsMap.values()));
      console.log(`Updated mockRequirements.ts!`);

      // 6. Run build & test validation
      console.log('Running code validation (lint & build)...');
      execSync('npm run lint && npm run build', { stdio: 'inherit' });

      // 7. Run Git workflow
      handleGitWorkflow(reqData.major);

      // 8. Remove the successfully processed URL from urls.txt
      const remainingUrls = urls.slice(i + 1);
      const header = '# Put one PDF URL per line here\n';
      fs.writeFileSync(URLS_FILE, header + remainingUrls.join('\n') + '\n', 'utf8');
      console.log('Removed URL from urls.txt.');

      // 9. Cool down interval to avoid server rate limit
      if (i < urls.length - 1) {
        console.log('Sleeping for 4 seconds before the next request...');
        await new Promise(resolve => setTimeout(resolve, 4000));
      }

    } catch (error) {
      console.error(`Failed to process URL ${url}:`, error);
      console.log('Stopping execution so you can check the error and re-run.');
      process.exit(1);
    }
  }

  console.log('\nAll URLs processed successfully!');
}

main().catch(console.error);
