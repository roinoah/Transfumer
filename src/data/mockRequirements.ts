export interface Course {
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
  // ================= UC BERKELEY MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Infinite series, vectors, vector-valued functions, multivariable calculus.' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' }, orGroup: 'CS Linear Algebra Selection' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' }, orGroup: 'CS Linear Algebra Selection' },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Introduction to circuit analysis, network theorems, and AC circuits.', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' }, orGroup: 'CS Linear Algebra Selection' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' }, orGroup: 'CS Linear Algebra Selection' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' }, orGroup: 'CS Linear Algebra Selection' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced structures and abstract data types.', orGroup: 'CS Data Structures Selection' },
      { code: 'CIS 26B', name: 'Advanced C Programming', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced C programming concepts, structural programming, memory allocation and pointer arrays.', orGroup: 'CS Data Structures Selection' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC', description: 'Expositing writing, reading and research.' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Argumentative writing and textual analysis.' },
      { code: 'PHIL 1', name: 'Introduction to Philosophy', units: 4.0, type: 'Recommended', category: 'IGETC', description: 'Survey of principal philosophical themes.' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Data Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.' },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Recommended', category: 'MajorPrep', description: 'Introduction to computer programming.' },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Object-oriented programming in C++.' },
      { code: 'CIS 40', name: 'Introduction to Programming in Python', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Beginning programming, variable types, loops and functions in Python.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC', description: 'Expository writing, reading and research.' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Argumentative writing and textual analysis.' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'EECS',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Waves, Fluids, and Optics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 6C', name: 'Evolution, Systematics and Ecology', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 1B', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 1C', name: 'General Chemistry and Qualitative Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'CHEM 12C', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 40A', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 40B', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' }, orGroup: 'EECS Science Elective' },
      { code: 'BIOL 40C', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' }, orGroup: 'EECS Science Elective' },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' }, orGroup: 'EECS Science Elective' },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Recommended', category: 'MajorPrep', description: 'Introduction to circuit analysis, network theorems, and AC circuits.' },
      { code: 'ENGR 37L', name: 'Introduction to Circuit Analysis Laboratory', units: 2.0, type: 'Recommended', category: 'MajorPrep', description: 'Laboratory instruction for introduction to circuit analysis.' },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for academic reading, composition, and research.' },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for critical reading, reasoning, and argumentative writing.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Economics',
    courses: [
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Business Administration',
    courses: [
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACCT 1A', name: 'Financial Accounting I', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACCT 1B', name: 'Financial Accounting II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACCT 1C', name: 'Managerial Accounting', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 1B', name: 'Reading, Writing & Research', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Mechanical Engineering',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4C', name: 'Physics: Fluids, Waves & Optics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Political Science',
    courses: [
      { code: 'POLI 1', name: 'American Government and Politics', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'POLI 2', name: 'Comparative Politics', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'HIST 17A', name: 'History of the United States to 1877', units: 4.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Psychology',
    courses: [
      { code: 'PSYC 1', name: 'General Psychology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PSYC 2', name: 'Research Methods in Psychology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 10', name: 'Introductory Biology', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'SOC 1', name: 'Introduction to Sociology', units: 4.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Integrative Biology',
    courses: [
      { code: 'BIOL 6A', name: 'Form & Function', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 6B', name: 'Cell & Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 6C', name: 'Evolution & Ecology', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 2A', name: 'General Physics: Mechanics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 2B', name: 'General Physics II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Applied Mathematics',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Sociology',
    courses: [
      { code: 'SOC 1', name: 'Introduction to Sociology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'SOC 5', name: 'Sociology of Gender', units: 4.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'English',
    courses: [
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 1B', name: 'Reading, Writing & Research', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'HIST 3A', name: 'History of Western Civilization', units: 4.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'HIST 3B', name: 'History of Western Civilization II', units: 4.0, type: 'Recommended', category: 'MajorPrep' }
    ]
  },

  // ================= UCLA MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Multivariable Calculus.' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector calculus and series.' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Ordinary differential equations.' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.' },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Recommended', category: 'MajorPrep', description: 'Introduction to computer programming.' },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Object-oriented programming in C++.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Algorithms and structures.' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Calculus-based classical mechanics.', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Electrostatics and electromagnetic fields.' },
      { code: 'PHYS 4C', name: 'Physics: Fluids, Waves & Optics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Fluids, waves, and optics.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'COMM 1', name: 'Public Speaking', units: 4.0, type: 'Recommended', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Business Economics',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Analysis of the aggregate economy, national income, monetary and fiscal policies.' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Analysis of supply and demand, consumer behavior, and market structures.' },
      { code: 'ACCT 1A', name: 'Financial Accounting I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Introduction to financial accounting theory and practice.' },
      { code: 'ACCT 1B', name: 'Financial Accounting II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Continuation of financial accounting theory and practices.' },
      { code: 'ACCT 1C', name: 'Managerial Accounting', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Study of accounting information used for internal decision making.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Psychology',
    courses: [
      { code: 'PSYC 1', name: 'General Psychology', units: 4.0, type: 'Required', category: 'MajorPrep', description: 'Introduction to biological, cognitive, social, and clinical psychology.' },
      { code: 'PSYC 2', name: 'Research Methods in Psychology', units: 4.0, type: 'Required', category: 'MajorPrep', description: 'Scientific methods and design in psychological research.' },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Probability, hypothesis testing, correlation, and regression.' },
      { code: 'BIOL 10', name: 'Introductory Biology', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Non-majors biology covering major cell and organ systems.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'PHIL 1', name: 'Introduction to Philosophy', units: 4.0, type: 'Recommended', category: 'IGETC', description: 'Survey of principal philosophical themes.' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Economics',
    courses: [
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Mathematics',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Biology',
    courses: [
      { code: 'BIOL 6A', name: 'Form & Function', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 6B', name: 'Cell & Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BIOL 6C', name: 'Evolution & Ecology', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 12B', name: 'Organic Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 12C', name: 'Organic Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 2A', name: 'General Physics: Mechanics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 2B', name: 'General Physics II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 2C', name: 'General Physics III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Political Science',
    courses: [
      { code: 'POLI 1', name: 'American Government and Politics', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'POLI 2', name: 'Comparative Politics', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Sociology',
    courses: [
      { code: 'SOC 1', name: 'Introduction to Sociology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'SOC 5', name: 'Sociology of Gender', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Communication',
    courses: [
      { code: 'COMM 1', name: 'Public Speaking', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'COMM 10', name: 'Fundamentals of Oral Communication', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ANTH 2', name: 'Cultural Anthropology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'English',
    courses: [
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 1B', name: 'Reading, Writing & Research', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'HIST 3A', name: 'History of Western Civilization', units: 4.0, type: 'Recommended', category: 'MajorPrep' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Cognitive Science',
    courses: [
      { code: 'PSYC 1', name: 'General Psychology', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction & Structures', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'BIOL 10', name: 'Introductory Biology', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHIL 1', name: 'Introduction to Philosophy', units: 4.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Physics',
    courses: [
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4C', name: 'Physics: Fluids, Waves & Optics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4D', name: 'Physics: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= UC SAN DIEGO MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC San Diego',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC San Diego',
    major: 'Data Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= UC IRVINE MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Irvine',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Irvine',
    major: 'Business Administration',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 10', name: 'Introductory Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACCT 1A', name: 'Financial Accounting I', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACCT 1B', name: 'Financial Accounting II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= UC DAVIS MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= UC SANTA BARBARA MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Santa Barbara',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= UC SANTA CRUZ MAJORS =================
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Santa Cruz',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22A', name: 'Beginning C++', units: 4.5, type: 'Recommended', category: 'MajorPrep' },
      { code: 'CIS 22B', name: 'Intermediate C++', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  // ================= FOOTHILL COLLEGE MAJORS =================
  {
    fromCollege: 'Foothill College',
    toUniversity: 'UC Berkeley',
    major: 'Business Administration',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 10', name: 'Elementary Statistics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACTG 1A', name: 'Financial Accounting I', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACTG 1B', name: 'Financial Accounting II', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ACTG 1C', name: 'Managerial Accounting', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ENGL 1A', name: 'Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'ENGL 1B', name: 'Composition & Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  }
];
