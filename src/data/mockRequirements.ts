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
  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Computer Science',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Infinite series, vectors, vector-valued functions, multivariable calculus.' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'CS Linear Algebra Selection', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.', orGroup: 'CS Linear Algebra Selection', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Introduction to circuit analysis, network theorems, and AC circuits.', orGroup: 'CS Linear Algebra Selection', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'CS Linear Algebra Selection', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.', orGroup: 'CS Linear Algebra Selection', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
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
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Infinite series, vectors, vector-valued functions, multivariable calculus.' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Ordinary differential equations.' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Vector calculus and series.' },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Introduction to data science: computation, statistics, and visualization.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced structures and abstract data types.', orGroup: 'DS Data Structures Selection' },
      { code: 'CIS 26B', name: 'Advanced C Programming', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced C programming concepts, structural programming, memory allocation and pointer arrays.', orGroup: 'DS Data Structures Selection' },
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
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'BIOL 6C', name: 'Evolution, Systematics and Ecology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry and Qualitative Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12C', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'BIOL 40A', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40B', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40C', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'EECS Science Elective', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
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
    major: 'Electrical & Computer Engineering',
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
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'BIOL 6C', name: 'Evolution, Systematics and Ecology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry and Qualitative Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12C', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'BIOL 40A', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40B', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40C', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'ECE Science Elective', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
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
    major: 'Aerospace Engineering',
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
      { code: 'ASTR 10', name: 'Stellar Astronomy', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'ASTRON 10', name: 'Stellar Astronomy' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'BIOLOGY 1A & 1AL', name: 'General Biology and Lab' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'BIOL 6C', name: 'Evolution, Systematics and Ecology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology' } },
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry and Qualitative Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 1A & 1AL & 1B', name: 'General Chemistry' } },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'CHEM 12C', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'CHEM 3B & 3BL', name: 'Organic Chemistry' } },
      { code: 'BIOL 40A', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40B', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'BIOL 40C', name: 'Human Anatomy and Physiology', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'MCELLBI 32 & 32L', name: 'Human Physiology' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Aerospace Science Elective', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for academic reading, composition, and research.' },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for critical reading, reasoning, and argumentative writing.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Bioengineering',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL', name: 'General Chemistry and Lab' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL', name: 'General Chemistry and Lab' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A & 1AL', name: 'General Chemistry and Lab' } },
      { code: 'CHEM 12A', name: 'Organic Chemistry', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry and Lab' } },
      { code: 'CHEM 12B', name: 'Organic Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 3A & 3AL', name: 'Organic Chemistry and Lab' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity & Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Waves, Fluids, and Optics', units: 6.0, type: 'Required', category: 'MajorPrep' },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Introduction to data science: computation, statistics, and visualization.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced structures and abstract data types.', orGroup: 'Bioeng Data Structures Selection' },
      { code: 'CIS 26B', name: 'Advanced C Programming', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Advanced C programming concepts, structural programming, memory allocation and pointer arrays.', orGroup: 'Bioeng Data Structures Selection' },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Introduction to circuit analysis, network theorems, and AC circuits.', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for academic reading, composition, and research.' },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Statewide common course for critical reading, reasoning, and argumentative writing.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC' }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Statistics',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Differential Calculus.', isOverlap: true },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Integral Calculus.', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Infinite series, vectors, vector-valued functions, multivariable calculus.' },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector calculus and series.', orGroup: 'Statistics Core Selection', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Ordinary differential equations.', orGroup: 'Statistics Core Selection', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.', orGroup: 'Statistics Core Selection', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Introduction to data science: computation, statistics, and visualization.' },
      { code: 'STAT C1000', name: 'Introduction to Statistics', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Statewide common course for introductory statistics and data analysis.', orGroup: 'Statistics STAT 2 Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
      { code: 'MATH 17', name: 'Integrated Statistics 2', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Statewide common course for integrated statistics.', orGroup: 'Statistics STAT 2 Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
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

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Computer Science',
    courses: [
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Computer Science II', satisfies: { code: 'COM SCI 32', name: 'Introduction to Computer Science II' } },
      { code: 'CIS 21JA', name: 'Introduction to x86 Processor Assembly Language and Computer Architecture', units: 4.5, type: 'Required', category: 'MajorPrep', satisfies: { code: 'COM SCI 33', name: 'Introduction to Computer Organization' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I for MATH 31A', satisfies: { code: 'MATH 31A', name: 'Differential and Integral Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II & III for MATH 31B (Option 1 of 4)', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II & III for MATH 31B (Option 1 of 4)', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II & III for MATH 31B (Option 2 of 4)', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II & III for MATH 31B (Option 3 of 4)', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus III for MATH 32A', satisfies: { code: 'MATH 32A', name: 'Calculus of Several Variables' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus IV for MATH 32B', satisfies: { code: 'MATH 32B', name: 'Calculus of Several Variables' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra for MATH 33A', satisfies: { code: 'MATH 33A', name: 'Linear Algebra and Applications' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Differential Equations for MATH 33B', satisfies: { code: 'MATH 33B', name: 'Differential Equations' } },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Discrete Mathematics for MATH 61', satisfies: { code: 'MATH 61', name: 'Introduction to Discrete Structures' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1A', name: 'Physics for Scientists and Engineers: Mechanics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1B', name: 'Physics for Scientists and Engineers: Oscillations, Waves, Electric and Magnetic Fields' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1C', name: 'Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition A', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition B', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition B', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition B', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition B', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'PHIL 3', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'English Composition B', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'CIS 27', name: 'Programming in C++ for C/Java Programmers', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Computer Science I', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 29', name: 'Advanced C++ Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Computer Science I', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Computer Science I', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Computer Science I', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } }
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
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Statistics, B.A.',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II (MATH 52) Requirement', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
      { code: 'STAT C1000', name: 'Introduction to Statistics', units: 5.0, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
      { code: 'MATH 17', name: 'Integrated Statistics 2', units: 5.0, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Economics, B.A.',
    courses: [
      { code: 'ECON 1', name: 'Principles of Macroeconomics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Introductory Economics Sequence', satisfies: { code: 'ECON 1', name: 'Introduction to Economics' } },
      { code: 'ECON 2', name: 'Principles of Microeconomics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Introductory Economics Sequence', satisfies: { code: 'ECON 2', name: 'Introduction to Economics' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'STAT 20', name: 'Introduction to Probability and Statistics', units: 4.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'This course has a prerequisite of one semester of calculus', orGroup: 'Statistics Course', satisfies: { code: 'STAT 20', name: 'Introduction to Probability and Statistics' } },
      { code: 'STAT 21', name: 'Introductory Probability and Statistics for Business', units: 4.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'This course has a prerequisite of one semester of calculus', orGroup: 'Statistics Course', satisfies: { code: 'STAT 21', name: 'Introductory Probability and Statistics for Business' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Political Economy, B.A.',
    courses: [
      { code: 'ECON 1', name: 'Introduction to Economics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Political Economy Macro/Micro Economics Requirement', satisfies: { code: 'ECON 1 & 2', name: 'Principles of Macroeconomics & Microeconomics' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Chemical Engineering',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1AL', name: 'General Chemistry Laboratory' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 3A', name: 'Chemical Structure and Reactivity', units: 3.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12A', name: 'Organic Chemistry I' } },
      { code: 'CHEM 3AL', name: 'Organic Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12A', name: 'Organic Chemistry I' } },
      { code: 'CHEM 3B', name: 'Chemical Structure and Reactivity', units: 3.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12B', name: 'Organic Chemistry II' } },
      { code: 'CHEM 3BL', name: 'Organic Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12B', name: 'Organic Chemistry II' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Biology Series', satisfies: { code: 'BIOLOGY 1A', name: 'General Biology Lecture' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Biology Series', satisfies: { code: 'BIOLOGY 1A', name: 'General Biology Lecture' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Regular Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Regular Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Regular Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Regular Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Regular Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Regular Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Regular Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Regular Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Courses that satisfy Reading & Composition A', orGroup: 'R&C Requirement', satisfies: { code: 'READING & COMPOSITION A', name: 'Reading & Composition A' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', description: 'Courses that satisfy Reading & Composition A', orGroup: 'R&C Requirement', satisfies: { code: 'READING & COMPOSITION A', name: 'Reading & Composition A' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Civil Engineering',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6C (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'BIOL 6C', name: 'Ecology and Evolution', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6A (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'GEOL 10', name: 'Introductory Geology', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CIV ENG 70', name: 'Engineering Geology' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4D to satisfy UCB PHYSICS 7C.', orGroup: 'De Anza Physics Series for UCB PHYSICS 7C', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4C to satisfy UCB PHYSICS 7C.', orGroup: 'De Anza Physics Series for UCB PHYSICS 7C', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 1', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 2', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 3', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2B (or honors) to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2A (or honors) to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4C to satisfy UCB PHYSICS 7B.', orGroup: 'De Anza Physics 2 Series', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4B to satisfy UCB PHYSICS 7B.', orGroup: 'De Anza Physics 2 Series', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C A Fulfillment', satisfies: { code: 'Reading and Composition A', name: 'Reading and Composition A Requirement' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C A Fulfillment', satisfies: { code: 'Reading and Composition A', name: 'Reading and Composition A Requirement' } },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', satisfies: { code: 'COMPSCI C8', name: 'Foundations of Data Science' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Environmental Economics and Policy, B.S.',
    courses: [
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UCB R&C Area A' },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UCB R&C Area A' },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UCB R&C Area B' },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UCB R&C Area B' },
      { code: 'ECON 1', name: 'Principles of Macroeconomics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Economics Requirement', satisfies: { code: 'ECON 1', name: 'Principles of Macroeconomics' } },
      { code: 'ECON 2', name: 'Principles of Microeconomics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Economics Requirement', satisfies: { code: 'ECON 2', name: 'Principles of Microeconomics' } },
      { code: 'ECON C3', name: 'Introduction to Environmental Economics and Policy', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Economics Requirement', satisfies: { code: 'ENVECON 1', name: 'Introduction to Environmental Economics and Policy' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 1: MATH 16A/16B)', satisfies: { code: 'MATH 16A', name: 'Analytic Geometry and Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 1: MATH 16A/16B)', satisfies: { code: 'MATH 16B', name: 'Analytic Geometry and Calculus' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 2: MATH 51/52)', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 2: MATH 51/52)', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 2: MATH 51/52)', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'UCB Math Requirement (Path 2: MATH 51/52)', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'ARTS 1A', name: 'Introduction to the Visual Arts', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 1B', name: 'Architecture Past and Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2A', name: 'History of Art: Europe from Prehistory through Early Christianity', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2B', name: 'History of Art: Europe During the Middle Ages and the Renaissance', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2C', name: 'History of Art: Europe from the Baroque Period through Impressionism', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2D', name: 'History of Art: Europe and the United States from Post-Impressionism to the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2F', name: 'History of Art (Multicultural Arts in the United States)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2G', name: 'History of Art: Arts of Asia', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 2J', name: 'History of Art: Arts of Africa, Oceania and Native North America', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 3TC', name: 'Women and Art', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ARTS 3TE', name: 'Today\'s Art Scene', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'DANC 38A', name: 'Appreciation of Dance', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 10', name: 'Introduction to Fiction', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 11', name: 'Introduction to Poetry', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 12', name: 'Introduction to Dramatic Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 17', name: 'Introduction to Shakespeare', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 19', name: 'Introduction to the Bible as Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 21', name: 'Women in Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 22', name: 'Mythology and Folklore', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 24', name: 'Asian Pacific American Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 46A', name: 'Major British Writers (Medieval and Renaissance)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 46B', name: 'Major British Writers (Neo-Classical and Romantic)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 46C', name: 'Major British Writers (Victorian and Modern)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 47A', name: 'World Literature: Antiquity to 1500s', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 47B', name: 'World Literature: Africa and Latin America', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 48A', name: 'Major American Writers (Colonial and Romantic, 1620-1865)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 48B', name: 'Major American Writers (The Advent of Realism, 1865-1914)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ELIT 48C', name: 'Major American Writers (The Modern Age, 1914 - The Present)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 1', name: 'Introduction to Cinematic Arts', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2A', name: 'History of the Cinema (1895-1950)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2AW', name: 'History of Cinema (1895-1950)', units: 4.5, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2B', name: 'History of Cinema (1950-Present)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2BW', name: 'History of Cinema (1950-Present)', units: 4.5, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2C', name: 'Contemporary World Cinema', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 2CW', name: 'Contemporary World Cinema', units: 4.5, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 41', name: 'Film Genres', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 42', name: 'National Cinemas', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 43', name: 'Film Artists', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 45', name: 'History of Experimental Film/Video', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 2', name: 'But is it Art? Questions and Criticism', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CETH 13', name: 'History of Art (Multicultural Arts in the United States)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 20', name: 'Asian Pacific American Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHLX 11', name: 'Chicanx Culture', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHLX 13', name: 'The Chicanx and Latinx and the Arts', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHLX 35', name: 'Chicano/a, Latino/a Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 13', name: 'Survey of Native American Arts', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 40', name: 'History of Art: Arts of Asia', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 32', name: 'Vietnamese Literature from Traditional to Asian American Expressions', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'INTL 21', name: 'History of Art: Native Arts of Mesoamerica and the Andes', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'INTL 22', name: 'History of Art: Arts of Africa, Oceania and Native North America', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MUSI 1A', name: 'Music Appreciation: Music in Western Cultures', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MUSI 1B', name: 'Music Appreciation: Jazz Styles', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MUSI 1C', name: 'Music Appreciation: World Music in America', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MUSI 1D', name: 'Music Appreciation: Rock - From Roots to Rap', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'THEA 1', name: 'Appreciation of Theatre', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 3C', name: 'Women and Art', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ANTH 1', name: 'Physical Anthropology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 6C', name: 'Ecology and Evolution', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 10', name: 'Introductory Biology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 11', name: 'Human Biology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 13', name: 'Marine Biology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 15', name: 'California Ecology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 26', name: 'Introductory Microbiology', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 40A', name: 'Human Anatomy and Physiology I', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 40B', name: 'Human Anatomy and Physiology II', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 40C', name: 'Human Anatomy and Physiology III', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'BIOL 45', name: 'Introduction to Human Nutrition', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ESCI 19', name: 'Environmental Biology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 24', name: 'Introduction to Psychobiology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 3A', name: 'World History from Prehistory to 750 CE', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 3B', name: 'World History from 750 to 1750 CE', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 3C', name: 'World History from 1750 CE to the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 6A', name: 'History of Western Civilization: Pre-History to 750 C.E.', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 6B', name: 'History of Western Civilization: 750 C.E. to 1750 C.E.', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 6C', name: 'History of Western Civilization: 1750 C.E. to Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 7A', name: 'Colonial Latin American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 7B', name: 'Modern Latin American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 9', name: 'Women in American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 10', name: 'History of California', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 16A', name: 'History of Africa to 1800', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 16B', name: 'History of Africa From 1800 to the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 17A', name: 'History of the United States to Early National Era', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 17B', name: 'History of the United States from 1800 to 1900', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 17C', name: 'History of the United States From 1900 to the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 18A', name: 'African American History to 1865', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 18B', name: 'African American History Since 1865', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 19A', name: 'History of Asian Civilization: China and Japan (to the 19th Century)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 42B', name: 'History of Asian Civilization: China and Japan (19th - 21st Centuries)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'AFAM 11', name: 'Sankofa: Roots of the African American Experience', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 16A', name: 'History of Africa to 1800', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 16B', name: 'History of Africa From 1800 to the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'AFAM 12A', name: 'African American History to 1865', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'AFAM 12B', name: 'African American History Since 1865', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHLX 12', name: 'Chicanx and Latinx History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 37', name: 'Ancient Peoples of Mesoamerica', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 38A', name: 'Colonial Latin American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 38B', name: 'Modern Latin American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 16', name: 'California Native Americans', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 42A', name: 'History of Asian Civilization: China and Japan (to the 19th Century)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HIST 19B', name: 'History of Asian Civilization: China and Japan (19th - 21st Centuries)', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 41', name: 'Introduction to Korean Popular Culture', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEO 10', name: 'World Regional Geography', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GERM 4', name: 'Intermediate German (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 13', name: 'Introduction to Korean Popular Culture', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'INTL 5', name: 'Contemporary Global Issues', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'INTL 8', name: 'Sociology of Globalization and Social Change', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'JAPN 4', name: 'Intermediate Japanese (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'JAPN 5', name: 'Intermediate Japanese (Second Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'JAPN 6', name: 'Intermediate Japanese (Third Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'KORE 4', name: 'Intermediate Korean (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MAND 4', name: 'Intermediate Mandarin (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MAND 5', name: 'Intermediate Mandarin (Second Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MAND 6', name: 'Intermediate Mandarin (Third Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 2', name: 'Comparative Politics', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 3', name: 'International Relations', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 5', name: 'Sociology of Globalization and Social Change', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SPAN 4', name: 'Intermediate Spanish (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SPAN 5', name: 'Intermediate Spanish (Second Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SPAN 6', name: 'Intermediate Spanish (Third Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'VIET 4', name: 'Intermediate Vietnamese (First Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'VIET 5', name: 'Intermediate Vietnamese (Second Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'VIET 6', name: 'Intermediate Vietnamese (Third Quarter)', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 1', name: 'Creative Minds', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 7', name: 'The Arts and the Human Spirit', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 9', name: 'Introduction to Comparative Religion', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 10', name: 'Global Religious Perspectives: Judaism, Christianity and Islam', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 15', name: 'Discussion on the Arts', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 16', name: 'Arts, Ideas and Values', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 18', name: 'History as Mystery: A Critique of Western Perspectives in a Global Context', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMI 20', name: 'The Greek Achievement', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 17', name: 'Critical Consciousness and Social Change', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 14', name: 'Ethnic Studies and the Religious Traditions of Native Americans', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 1', name: 'Introduction to Philosophy', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 2', name: 'Social and Political Philosophy', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 4', name: 'Critical Thinking', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 8', name: 'Ethics', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 20A', name: 'History of Western Philosophy- Ancient Greece', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 20B', name: 'History of Western Philosophy- 1400 - 1800', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 20C', name: 'History of Western Philosophy- 1800 - the Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 24', name: 'Philosophy of Religion', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 30', name: 'Introduction to Existentialism', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHIL 49', name: 'Women and Philosophy', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 5', name: 'Introduction to Political Thought and Theory', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 49', name: 'Women and Philosophy', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASTR 4', name: 'Solar System Astronomy', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASTR 10', name: 'Stellar Astronomy', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 10', name: 'Introductory Chemistry', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 12A', name: 'Organic Chemistry I', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 12B', name: 'Organic Chemistry II', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHEM 12C', name: 'Organic Chemistry III', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEO 1', name: 'Physical Geography', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEOL 10', name: 'Introductory Geology', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEOL 20', name: 'General Oceanography', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'MET 10', name: 'Weather and Climate Processes', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 2A', name: 'General Physics I', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 2B', name: 'General Physics II', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 2C', name: 'General Physics III', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PHYS 10', name: 'Concepts of Physics', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ADMJ 3', name: 'Concepts of Criminal Law', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ADMJ 11', name: 'Federal Courts and Constitutional Law', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ADMJ 25', name: 'Law and Social Change', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ADMJ 29', name: 'Ethnic Studies, Cultural Pluralism, and American Law and Justice', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ANTH 2', name: 'Cultural Anthropology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ANTH 4', name: 'World Prehistory', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ANTH 6', name: 'Linguistic Anthropology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ECON 3', name: 'Environmental Economics', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ECON 4', name: 'Economics of Public Issues', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'E S 1', name: 'Introduction to Environmental Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'E S 3', name: 'Imagery of the Environment', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'F/TV 10', name: 'Introduction to Electronic Media', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEO 4', name: 'Cultural Geography', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'GEO 5', name: 'A Geography of California', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'HUMA 10', name: 'Human Sexuality', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CETH 10', name: 'Introduction to Ethnic Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CETH 11', name: 'Race and Ethnicity: Belonging and Exclusion in the U.S.', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'AFAM 10', name: 'An Introduction to African American Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 19', name: 'Making a Difference: Transforming Relations of Nature, Community, and Power', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 1', name: 'Asian American Experiences Past to Present', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 31', name: 'Ethnic Studies: Native Hawaiian and Pacific Islander Experiences', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ASAM 10', name: 'Contemporary Asian American Communities', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 25', name: 'Grassroots Democracy: Race, Politics and the American Promise', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 26', name: 'Introduction to Lesbian, Gay, Bisexual, Transgender and Queer Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 27', name: 'Grassroots Democracy: Leadership and Power', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CETH 29', name: 'Ethnic Studies, Cultural Pluralism, and American Law and Justice', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'CHLX 10', name: 'Introduction to Chicanx and Latinx Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'ICS 36', name: 'Grassroots Democracy: Social Movements Since the 1960s', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 11', name: 'Ethnic Studies and Native American Contemporary Society', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'NAIS 12', name: 'Ethnic Studies and the Historical Experiences of Native Americans', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'JOUR 2', name: 'Media and Its Impact on Society', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'LING 1', name: 'Introduction to Linguistics', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLS C1000', name: 'American Government and Politics', units: 5.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PARA 11', name: 'Federal Courts and Constitutional Law', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PARA 25', name: 'Law and Social Change', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 15', name: 'Grassroots Democracy: Race, Politics and the American Promise', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 16', name: 'Grassroots Democracy: Social Movements Since the 1960s', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 17', name: 'Grassroots Democracy: Leadership and Power', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'POLI 11', name: 'Federal Courts and Constitutional Law', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC C1000', name: 'Introduction to Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 3', name: 'An Introduction to Cognitive Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 4', name: 'Abnormal Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 5', name: 'Introduction to Theories of Personality', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 6', name: 'Introduction to Humanistic Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 8', name: 'Introduction to Social Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 9', name: 'Psychology of Human Relationships and Normal Adjustment', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 12', name: 'Psychology of Gender', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 14', name: 'Developmental Aspects of Psychology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'PSYC 15', name: 'Statistics and Research Methods in Social Science', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 1', name: 'Introduction to Sociology', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 15', name: 'Statistics and Research Methods in Social Science', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 20', name: 'Social Problems', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 28', name: 'Sociology of Gender', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'SOC 35', name: 'Marriage, Family, and Intimate Relationships', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 1', name: 'Introduction to Women\'s Studies', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 8', name: 'Women of Color in the USA', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 9', name: 'Women in American History', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 12', name: 'Psychology of Gender', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 24', name: 'Women and Gender in Global Perspectives', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 25', name: 'Introduction to Black Feminism', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 27', name: 'Women and Gendered Violence', units: 4.0, type: 'Highly Recommended', category: 'IGETC' },
      { code: 'WMST 28', name: 'Sociology of Gender', units: 4.0, type: 'Highly Recommended', category: 'IGETC' }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Energy Engineering, B.S.',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry', units: 3.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1AL', name: 'General Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 1AL', name: 'General Chemistry Laboratory' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 51 Calculus I', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 52 Calculus II', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 53 Multivariable Calculus', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 54 Linear Algebra and Differential Equations', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 54 Linear Algebra and Differential Equations', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Reading and Composition A', satisfies: { code: 'READING COMPOSITION A', name: 'Courses that satisfy Reading & Composition A' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Reading and Composition A', satisfies: { code: 'READING COMPOSITION A', name: 'Courses that satisfy Reading & Composition A' } },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Reading and Composition B', satisfies: { code: 'READING COMPOSITION B', name: 'Courses that satisfy Reading & Composition B' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Reading and Composition B', satisfies: { code: 'READING COMPOSITION B', name: 'Courses that satisfy Reading & Composition B' } },
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 1: UCB CHEM 1B', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 1: UCB CHEM 1B', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 1: UCB CHEM 1B', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 3A', name: 'Chemical Structure and Reactivity', units: 3.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 2: UCB CHEM 3A/3AL', satisfies: { code: 'CHEM 3A', name: 'Chemical Structure and Reactivity' } },
      { code: 'CHEM 3AL', name: 'Organic Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 2: UCB CHEM 3A/3AL', satisfies: { code: 'CHEM 3AL', name: 'Organic Chemistry Laboratory' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Chem/Physics Selection - Option 3: UCB PHYSICS 7C', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Strongly Recommended Discrete Mathematics', satisfies: { code: 'MATH 55', name: 'Discrete Mathematics' } },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - CS 61B Options', satisfies: { code: 'COMPSCI 61B', name: 'Data Structures' } },
      { code: 'CIS 26B', name: 'Advanced C Programming', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - CS 61B Options', satisfies: { code: 'COMPSCI 61B', name: 'Data Structures' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - EECS 16A Options', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - EECS 16A Options', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - EECS 16A Options', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'Must complete an additional university course after transfer to satisfy this requirement', orGroup: 'Strongly Recommended Elective - EECS 16A Options', satisfies: { code: 'EECS 16A', name: 'Designing Information Devices and Systems I' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Strongly Recommended Elective - EECS 16B Options', satisfies: { code: 'EECS 16B', name: 'Designing Information Devices and Systems II' } },
      { code: 'ENGR 37L', name: 'Introduction to Circuit Analysis Laboratory', units: 2.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Strongly Recommended Elective - EECS 16B Options', satisfies: { code: 'EECS 16B', name: 'Designing Information Devices and Systems II' } },
      { code: 'GEOL 10', name: 'Introductory Geology', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Strongly Recommended Elective - CIV ENG 70 Option', satisfies: { code: 'CIV ENG 70', name: 'Engineering Geology' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Materials Science and Engineering',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Series - Regular', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Series - Regular', satisfies: { code: 'CHEM 1AL', name: 'General Chemistry Laboratory' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Series - Regular', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 51 Selection', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 52 Selection', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 53 Selection', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 54 Pathway - Single Course', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 54 Pathway - Diff Eq & Lin Alg Regular', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Math 54 Pathway - Diff Eq & Lin Alg Regular', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Physics 7C Series', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Physics 7C Series', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'R&C A Selection', satisfies: { code: 'undefined', name: 'Reading & Composition A' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'R&C A Selection', satisfies: { code: 'undefined', name: 'Reading & Composition A' } },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'R&C B Selection', satisfies: { code: 'undefined', name: 'Reading & Composition B' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'R&C B Selection', satisfies: { code: 'undefined', name: 'Reading & Composition B' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', satisfies: { code: 'COMPSCI C8', name: 'Foundations of Data Science' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UCLA',
    major: 'Computer Science and Engineering/B.S.',
    courses: [
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'COM SCI 31 Equivalency', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 29', name: 'Advanced C++ Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'COM SCI 31 Equivalency', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 27', name: 'Programming in C++ for C/Java Programmers', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'COM SCI 31 Equivalency', satisfies: { code: 'COM SCI 31', name: 'Introduction to Computer Science I' } },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'COM SCI 32 Equivalency', satisfies: { code: 'COM SCI 32', name: 'Introduction to Computer Science II' } },
      { code: 'CIS 21JA', name: 'Introduction to x86 Processor Assembly Language and Computer Architecture', units: 4.5, type: 'Required', category: 'MajorPrep', satisfies: { code: 'COM SCI 33', name: 'Introduction to Computer Organization' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 31A Equivalency', satisfies: { code: 'MATH 31A', name: 'Differential and Integral Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 31B & 32A Equivalency Group 1', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 31B & 32A Equivalency Group 1', satisfies: { code: 'MATH 32A', name: 'Calculus of Several Variables' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 31B & 32A Equivalency Group 2', satisfies: { code: 'MATH 31B', name: 'Integration and Infinite Series' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 31B & 32A Equivalency Group 3', satisfies: { code: 'MATH 32A', name: 'Calculus of Several Variables' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 32B Equivalency', satisfies: { code: 'MATH 32B', name: 'Calculus of Several Variables' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 33A Equivalency', satisfies: { code: 'MATH 33A', name: 'Linear Algebra and Applications' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 33B Equivalency', satisfies: { code: 'MATH 33B', name: 'Differential Equations' } },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'MATH 61 Equivalency', satisfies: { code: 'MATH 61', name: 'Introduction to Discrete Structures' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1A', name: 'Physics for Scientists and Engineers: Mechanics' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 4AL', name: 'Physics Laboratory for Scientists and Engineers: Mechanics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1B', name: 'Physics for Scientists and Engineers: Oscillations, Waves, Electric and Magnetic Fields' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 4BL', name: 'Physics Laboratory for Scientists and Engineers: Electricity and Magnetism' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 1C', name: 'Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'IGETC Area 1A Equivalency', satisfies: { code: 'ENGCOMP 3', name: 'English Composition, Rhetoric, and Language' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', description: 'Satisfies general critical thinking/writing requirement.', orGroup: 'IGETC Area 1B Equivalency' },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', description: 'Satisfies general critical thinking/writing requirement.', orGroup: 'IGETC Area 1B Equivalency' },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', description: 'Satisfies general critical thinking/writing requirement.', orGroup: 'IGETC Area 1B Equivalency' },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Satisfies general critical thinking/writing requirement.', orGroup: 'IGETC Area 1B Equivalency' },
      { code: 'PHIL 3', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Satisfies general critical thinking/writing requirement.', orGroup: 'IGETC Area 1B Equivalency' },
      { code: 'CIS 27', name: 'Programming in C++ for C/Java Programmers', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'General Programming Requirement' },
      { code: 'CIS 29', name: 'Advanced C++ Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'General Programming Requirement' },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'General Programming Requirement' },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'General Programming Requirement' }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Biochemical Engineering B.S.',
    courses: [
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 017', name: 'Circuits I' } },
      { code: 'ENGR 35', name: 'Statics', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 035', name: 'Statics' } },
      { code: 'CIS 41A', name: 'Python Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Equivalents', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Equivalents', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalents', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalents', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002A', name: 'Introduction to Biology: Essentials of Life on Earth' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHE 002C', name: 'General Chemistry' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021B', name: 'Calculus' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009C', name: 'Classical Physics' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } },
      { code: 'CHEM 12A', name: 'Organic Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHE 129A', name: 'Organic Chemistry Laboratory' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Aerospace Science & Engineering B.S.',
    courses: [
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalence', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalence', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalence', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalence', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalence', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalence', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009C', name: 'Classical Physics' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 017', name: 'Circuits I' } },
      { code: 'ENGR 35', name: 'Statics', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 035', name: 'Statics' } },
      { code: 'COMM C1000', name: 'Introduction to Public Speaking', units: 5.0, type: 'Required', category: 'IGETC', satisfies: { code: 'CMN 001', name: 'Introduction to Public Speaking' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021B', name: 'Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Biomedical Engineering B.S.',
    courses: [
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } },
      { code: 'ENGR 35', name: 'Statics', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 035', name: 'Statics' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 017', name: 'Circuits I' } },
      { code: 'CIS 41A', name: 'Python Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Programming Selection', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Programming Selection', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009D', name: 'Modern Physics' } },
      { code: 'BIOL 6C', name: 'Ecology and Evolution', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002B', name: 'Introduction to Biology: Principles of Ecology & Evolution' } },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ECS 032B', name: 'Introduction to Data Structures' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002C', name: 'Introduction to Biology: Biodiversity & the Tree of Life' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002A', name: 'Introduction to Biology: Essentials of Life on Earth' } },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Literature Selection', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Literature Selection', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Academic Literacies Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Academic Literacies Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Academic Literacies Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Academic Literacies Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHE 002C', name: 'General Chemistry' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009C', name: 'Classical Physics' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021B', name: 'Calculus' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Civil Engineering B.S.',
    courses: [
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } },
      { code: 'ENGR 35', name: 'Statics', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 035', name: 'Statics' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'IGETC', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalents', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'ENL 003 Equivalents', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'UWP 001 Equivalents', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002A', name: 'Introduction to Biology: Essentials of Life on Earth' } },
      { code: 'BIOL 6C', name: 'Ecology and Evolution', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'BIS 002B', name: 'Introduction to Biology: Principles of Ecology & Evolution' } },
      { code: 'CIS 41A', name: 'Python Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Equivalents', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'ECS 032A Equivalents', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009C', name: 'Classical Physics' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021B', name: 'Calculus' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Computer Science & Engineering B.S.',
    courses: [
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'COMM C1000', name: 'Introduction to Public Speaking', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CMN 001', name: 'Introduction to Public Speaking' } },
      { code: 'ENGR 37', name: 'Introduction to Circuit Analysis', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ENG 017', name: 'Circuits I' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Data Structures Selection', satisfies: { code: 'ECS 032B', name: 'Introduction to Data Structures' } },
      { code: 'CIS 26B', name: 'Advanced C Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 26A', name: 'C as a Second Programming Language', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 35A', name: 'Java Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 27', name: 'Programming in C++ for C/Java Programmers', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming Selection', satisfies: { code: 'ECS 036A', name: 'Programming & Problem Solving' } },
      { code: 'CIS 36B', name: 'Intermediate Problem Solving in Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'OO Programming Selection', satisfies: { code: 'ECS 036B', name: 'Software Development & Object-Oriented Programming in C++' } },
      { code: 'CIS 35A', name: 'Java Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'OO Programming Selection', satisfies: { code: 'ECS 036B', name: 'Software Development & Object-Oriented Programming in C++' } },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'OO Programming Selection', satisfies: { code: 'ECS 036B', name: 'Software Development & Object-Oriented Programming in C++' } },
      { code: 'CIS 29', name: 'Advanced C++ Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'OO Programming Selection', satisfies: { code: 'ECS 036B', name: 'Software Development & Object-Oriented Programming in C++' } },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ECS 036C', name: 'Data Structures, Algorithms, & Programming' } },
      { code: 'CIS 41A', name: 'Python Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Intro Programming Selection', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Intro Programming Selection', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 21JA', name: 'Introduction to x86 Processor Assembly Language and Computer Architecture', units: 4.5, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ECS 050', name: 'Computer Organization & Machine-Dependent Programming' } },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'ECS 020', name: 'Discrete Mathematics For Computer Science' } },
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHE 002A', name: 'General Chemistry' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009C', name: 'Classical Physics' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009D', name: 'Modern Physics' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'MAT 021B', name: 'Calculus' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Lit Selection', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Lit Selection', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Academic Literacy Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Academic Literacy Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Academic Literacy Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Academic Literacy Selection', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Davis',
    major: 'Environmental Engineering B.S.',
    courses: [
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra', satisfies: { code: 'MAT 022A', name: 'Linear Algebra' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Differential Equations', satisfies: { code: 'MAT 022B', name: 'Differential Equations' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Introduction to Biology', satisfies: { code: 'BIS 002A', name: 'Introduction to Biology: Essentials of Life on Earth' } },
      { code: 'ENGR 35', name: 'Statics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Statics', satisfies: { code: 'ENG 035', name: 'Statics' } },
      { code: 'ELIT 39', name: 'Contemporary Literature', units: 4.0, type: 'Required', category: 'IGETC', orGroup: 'Contemporary World Literature', satisfies: { code: 'COM 004', name: 'Major Works of the Contemporary World' } },
      { code: 'EWRT 1C', name: 'Literature and Composition', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Introduction to Literature', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Introduction to Literature', satisfies: { code: 'ENL 003', name: 'Introduction to Literature' } },
      { code: 'COMM 9', name: 'Argumentation: Analysis of Oral and Written Communication', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Academic Literacies', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Academic Literacies', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Academic Literacies', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC', orGroup: 'Academic Literacies', satisfies: { code: 'UWP 001', name: 'Introduction to Academic Literacies' } },
      { code: 'NAIS 15', name: 'Ethnic Studies and Native American Literature', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Native American Literature', satisfies: { code: 'NAS 005', name: 'Introduction to Native American Literature' } },
      { code: 'CIS 41A', name: 'Python Programming', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'CIS 36A', name: 'Introduction to Computer Programming Using Java', units: 4.5, type: 'Required', category: 'MajorPrep', orGroup: 'Programming', satisfies: { code: 'ECS 032A', name: 'Introduction to Programming' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II', satisfies: { code: 'MAT 021B', name: 'Calculus' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I', satisfies: { code: 'MAT 021A', name: 'Calculus' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Classical Physics A', satisfies: { code: 'PHY 009A', name: 'Classical Physics' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'Classical Physics B', satisfies: { code: 'PHY 009B', name: 'Classical Physics' } }
    ]
  }
];
