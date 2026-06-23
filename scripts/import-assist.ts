import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
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
  "toUniversity": "UC Davis" (or the university name),
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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
    let attempts = 0;
    const maxAttempts = 5;
    let delay = 2000;

    while (attempts < maxAttempts) {
      attempts++;
      try {
        console.log(`Sending request to Gemini (attempt ${attempts}/${maxAttempts})...`);
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
          console.warn(`Gemini attempt ${attempts} failed with status ${response.status}: ${errText}`);
          if ((response.status === 429 || response.status === 503 || response.status >= 500) && attempts < maxAttempts) {
            console.log(`Retrying in ${delay}ms due to transient error...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
            continue;
          }
          throw new Error(`Gemini API error: ${response.status} ${response.statusText} - ${errText}`);
        }

        const resJson = await response.json();
        const responseText = resJson.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!responseText) throw new Error('Empty response from Gemini API.');
        return JSON.parse(cleanJsonResponse(responseText));
      } catch (error) {
        if (attempts >= maxAttempts) {
          throw error;
        }
        console.warn(`Error on attempt ${attempts}: ${(error as Error).message || error}`);
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
    throw new Error('Failed after maximum retry attempts.');
  } else {
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
  const branchName = 'feat/align-uc-davis-engineering-requirements';

  console.log(`Checking out/switching to branch: ${branchName}...`);
  try {
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
  } catch {
    try {
      execSync(`git checkout ${branchName}`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`Failed to checkout branch ${branchName}:`, e);
    }
  }

  console.log(`Staging files...`);
  execSync(`git add "${REQUIREMENTS_FILE}"`, { stdio: 'inherit' });

  console.log(`Committing changes...`);
  try {
    execSync(`git commit -m "feat(requirements): align UC Davis ${major} requirements from Assist"`, { stdio: 'inherit' });
  } catch {
    console.log('No changes to commit or commit failed.');
  }

  console.log(`Pushing to remote origin...`);
  try {
    execSync(`git push -u origin ${branchName}`, { stdio: 'inherit' });
    console.log(`Successfully pushed to origin ${branchName}!`);
  } catch {
    console.error('Failed to push to remote. Please push manually.');
  }
}

// Build text summary from structured JSON details
function buildTextSummary(majorName: string, assets: any[], articulations: any[]): string {
  let summary = `Articulation Agreement: ${majorName} (De Anza College to UC Davis)\n\n`;

  // Parse template assets to map structure
  assets.forEach((asset: any) => {
    if (asset.type === 'RequirementTitle') {
      summary += `\n=== SECTION: ${asset.content.toUpperCase()} ===\n`;
    } else if (asset.type === 'RequirementGroup') {
      const isHighlyRecommended = asset.attributes?.some((attr: any) => attr.content.toLowerCase().includes('recommended')) || false;
      const isRecommended = asset.attributes?.some((attr: any) => attr.content.toLowerCase().includes('recommended'));
      const defaultStatus = isHighlyRecommended ? 'Highly Recommended' : (isRecommended ? 'Recommended' : 'Required');

      asset.sections.forEach((sec: any) => {
        if (sec.type === 'SectionHeader') {
          summary += `\n[Category: ${sec.content}] (Status: ${defaultStatus})\n`;
        } else if (sec.type === 'Section') {
          sec.rows.forEach((row: any) => {
            row.cells.forEach((cell: any) => {
              if (cell.type === 'Course' || cell.type === 'Series') {
                let coursePrefix = '';
                let courseNumber = '';
                let courseTitle = '';
                let minUnits = 0;

                if (cell.type === 'Course') {
                  const rc = cell.course;
                  coursePrefix = rc.prefix;
                  courseNumber = rc.courseNumber;
                  courseTitle = rc.courseTitle;
                  minUnits = rc.minUnits;
                } else {
                  const s = cell.series;
                  coursePrefix = '';
                  courseNumber = '';
                  courseTitle = s.name;
                  minUnits = s.courses.reduce((sum: number, c: any) => sum + (c.minUnits || 0), 0);
                }

                const matchArt = articulations.find((a: any) => a.templateCellId === cell.id);
                
                if (cell.type === 'Course') {
                  summary += `UC Davis Course: ${coursePrefix} ${courseNumber} - ${courseTitle} (${minUnits} units)\n`;
                } else {
                  summary += `UC Davis Course Series: ${courseTitle} (${minUnits} units total)\n`;
                }
                
                if (matchArt && matchArt.articulation) {
                  const sa = matchArt.articulation.sendingArticulation;
                  if (sa.noArticulationReason) {
                    summary += `  -> Equivalents: No Course Articulated\n`;
                  } else {
                    sa.items.forEach((item: any, optIndex: number) => {
                      // Programmatically filter out honors courses from options
                      const hasHonors = item.items.some((c: any) => {
                        const code = `${c.prefix} ${c.courseNumber}`.trim();
                        const name = c.courseTitle.toLowerCase();
                        return code.endsWith('H') || name.includes('honors');
                      });
                      
                      if (!hasHonors) {
                        const coursesStr = item.items.map((c: any) => `${c.prefix} ${c.courseNumber} - ${c.courseTitle} (${c.minUnits} units)`).join(' AND ');
                        summary += `  -> Option ${optIndex + 1}: ${coursesStr}\n`;
                      }
                    });
                  }
                } else {
                  summary += `  -> Equivalents: Not Articulated\n`;
                }
              }
            });
          });
        }
      });
    }
  });

  return summary;
}

async function main() {
  const RECEIVING_ID = 89; // UC Davis
  const SENDING_ID = 113;  // De Anza College
  const YEAR_ID = 76;      // 2025-2026 Academic Year

  console.log('Fetching published UC Davis majors list...');
  const listUrl = `https://prod.assistng.org/articulation/api/Agreements/Published/for/${RECEIVING_ID}/to/${SENDING_ID}/in/${YEAR_ID}?types=Major`;
  const listResponse = await fetch(listUrl);
  if (!listResponse.ok) {
    throw new Error(`Failed to fetch majors list. Status: ${listResponse.status}`);
  }
  const listJson = await listResponse.json();
  const allMajors = listJson.result?.reports || [];
  
  // Filter for Engineering majors
  const engineeringMajors = allMajors.filter((m: any) => m.label.toLowerCase().includes('engineering'));
  console.log(`Found ${engineeringMajors.length} engineering majors to process.`);

  // Load existing database
  const requirementsMap = new Map<string, TransferRequirement>();
  for (const req of existingRequirements) {
    const key = `${req.fromCollege}|${req.toUniversity}|${req.major}`;
    requirementsMap.set(key, req);
  }

  for (let i = 0; i < engineeringMajors.length; i++) {
    const majorInfo = engineeringMajors[i];
    const majorName = majorInfo.label;
    const existingKey = `De Anza College|UC Davis|${majorName}`;
    if (requirementsMap.has(existingKey)) {
      console.log(`\n[${i + 1}/${engineeringMajors.length}] Major "${majorName}" already exists in mockRequirements.ts. Skipping...`);
      continue;
    }

    console.log(`\n[${i + 1}/${engineeringMajors.length}] Fetching agreement details for: ${majorName}...`);
    
    try {
      const detailUrl = `https://prod.assistng.org/articulation/api/Agreements?key=${encodeURIComponent(majorInfo.key)}`;
      const detailResponse = await fetch(detailUrl);
      if (!detailResponse.ok) {
        throw new Error(`Failed to fetch agreement detail for key: ${majorInfo.key}`);
      }
      const detailJson = await detailResponse.json();
      
      const assets = JSON.parse(detailJson.result?.templateAssets || '[]');
      const articulations = JSON.parse(detailJson.result?.articulations || '[]');
      
      const textSummary = buildTextSummary(majorName, assets, articulations);
      console.log(`Generated text summary (${textSummary.length} chars). Sending to LLM...`);

      const reqData = await parseAgreementWithLLM(textSummary);

      if (!reqData) {
        throw new Error('LLM returned null or empty response.');
      }

      // Fallback keys if LLM naming varies
      if (!reqData.courses) {
        const potentialKeys = ['courseList', 'course_list', 'requirements', 'majorPrep', 'major_prep', 'classes'];
        for (const k of potentialKeys) {
          if ((reqData as any)[k] && Array.isArray((reqData as any)[k])) {
            reqData.courses = (reqData as any)[k];
            break;
          }
        }
      }

      if (!reqData.courses || !Array.isArray(reqData.courses)) {
        console.error('LLM raw response structure:', JSON.stringify(reqData, null, 2));
        throw new Error('LLM response is missing the "courses" array.');
      }

      // Coerce common LLM naming mistakes and filter out honors courses just in case
      reqData.courses = reqData.courses
        .filter(c => {
          if (!c || !c.code) return false;
          const code = c.code.trim();
          const name = (c.name || '').toLowerCase();
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

      // Normalize university, college, and major names
      reqData.toUniversity = 'UC Davis';
      reqData.fromCollege = 'De Anza College';
      reqData.major = majorName;

      console.log(`Successfully parsed major: "${reqData.major}"`);
      const key = `${reqData.fromCollege}|${reqData.toUniversity}|${reqData.major}`;
      requirementsMap.set(key, reqData);

      // Write updated array
      writeRequirementsFile(Array.from(requirementsMap.values()));
      console.log(`Updated mockRequirements.ts!`);

      // Run build & test validation
      console.log('Running code validation (lint & build)...');
      execSync('npm run lint && npm run build', { stdio: 'inherit' });

      // Run Git workflow
      handleGitWorkflow(reqData.major);

      // Cool down interval to avoid server rate limit
      if (i < engineeringMajors.length - 1) {
        console.log('Sleeping for 4 seconds before the next request...');
        await new Promise(resolve => setTimeout(resolve, 4000));
      }

    } catch (error) {
      console.error(`Failed to process major ${majorInfo.label}:`, error);
      console.log('Stopping execution so you can check the error and re-run.');
      process.exit(1);
    }
  }

  console.log('\nAll UC Davis Engineering majors processed successfully!');
}

main().catch(console.error);
