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
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II (MATH 52) Requirement', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1CH', name: 'Calculus III - HONORS', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1DH', name: 'Calculus IV - HONORS', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Multivariable Calculus (MATH 53) Prep', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2AH', name: 'Differential Equations - HONORS', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2BH', name: 'Linear Algebra - HONORS', units: 5.0, type: 'Highly Recommended', category: 'MajorPrep', orGroup: 'Linear Algebra & Differential Equations (MATH 54) Prep', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
      { code: 'STAT C1000', name: 'Introduction to Statistics', units: 5.0, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
      { code: 'STAT C1000H', name: 'Introduction to Statistics - HONORS', units: 5.0, type: 'Recommended', category: 'MajorPrep', orGroup: 'Introduction to Statistics (STAT 2) Selection', satisfies: { code: 'STAT 2', name: 'Introduction to Statistics' } },
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
      { code: 'ECON 1H', name: 'Principles of Macroeconomics - HONORS', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Introductory Economics Sequence', satisfies: { code: 'ECON 1', name: 'Introduction to Economics' } },
      { code: 'ECON 2H', name: 'Principles of Microeconomics - HONORS', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Introductory Economics Sequence', satisfies: { code: 'ECON 2', name: 'Introduction to Economics' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1AH', name: 'Calculus I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'MATH 1CH', name: 'Calculus III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Required Calculus Sequence' },
      { code: 'STAT 20', name: 'Introduction to Probability and Statistics', units: 4.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'This course has a prerequisite of one semester of calculus', orGroup: 'Statistics Course', satisfies: { code: 'STAT 20', name: 'Introduction to Probability and Statistics' } },
      { code: 'STAT 21', name: 'Introductory Probability and Statistics for Business', units: 4.0, type: 'Highly Recommended', category: 'MajorPrep', description: 'This course has a prerequisite of one semester of calculus', orGroup: 'Statistics Course', satisfies: { code: 'STAT 21', name: 'Introductory Probability and Statistics for Business' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'UC Berkeley',
    major: 'Political Economy, B.A.',
    courses: [
      { code: 'ECON 1', name: 'Introduction to Economics', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Political Economy Macro/Micro Economics Requirement', satisfies: { code: 'ECON 1 & 2', name: 'Principles of Macroeconomics & Microeconomics' } },
      { code: 'ECON 1H', name: 'Principles of Macroeconomics - HONORS', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Political Economy Macro/Micro Economics Requirement', satisfies: { code: 'ECON 1', name: 'Principles of Macroeconomics' } },
      { code: 'ECON 2H', name: 'Principles of Microeconomics - HONORS', units: 4.0, type: 'Required', category: 'MajorPrep', orGroup: 'Political Economy Macro/Micro Economics Requirement', satisfies: { code: 'ECON 2', name: 'Principles of Microeconomics' } }
    ]
  },

  {
    fromCollege: 'De Anza College',
    toUniversity: 'University of California, Berkeley',
    major: 'Chemical Engineering',
    courses: [
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1AL', name: 'General Chemistry Laboratory' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Regular Series', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1AH', name: 'General Chemistry I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Honors Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1BH', name: 'General Chemistry II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Honors Series', satisfies: { code: 'CHEM 1AL', name: 'General Chemistry Laboratory' } },
      { code: 'CHEM 1CH', name: 'General Chemistry III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Chemistry Honors Series', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 3A', name: 'Chemical Structure and Reactivity', units: 3.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12A', name: 'Organic Chemistry I' } },
      { code: 'CHEM 3AL', name: 'Organic Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12A', name: 'Organic Chemistry I' } },
      { code: 'CHEM 3B', name: 'Chemical Structure and Reactivity', units: 3.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12B', name: 'Organic Chemistry II' } },
      { code: 'CHEM 3BL', name: 'Organic Chemistry Laboratory', units: 2.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CHEM 12B', name: 'Organic Chemistry II' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Biology Series', satisfies: { code: 'BIOLOGY 1A', name: 'General Biology Lecture' } },
      { code: 'BIOL 6B', name: 'Cell and Molecular Biology', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Biology Series', satisfies: { code: 'BIOLOGY 1A', name: 'General Biology Lecture' } },
      { code: 'BIOL 6AH', name: 'Form and Function in the Biological World - HONORS', units: 6.0, type: 'Required', category: 'MajorPrep', orGroup: 'General Biology Series', satisfies: { code: 'BIOLOGY 1A', name: 'General Biology Lecture' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Regular Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Regular Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1AH', name: 'Calculus I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Honors Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus I Honors Series', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Regular Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Regular Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Honors Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1CH', name: 'Calculus III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Calculus II Honors Series', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Regular Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1D', name: 'Calculus IV', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Regular Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1CH', name: 'Calculus III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Honors Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1DH', name: 'Calculus IV - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Multivariable Calculus Honors Series', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Regular Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Regular Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2AH', name: 'Differential Equations - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Honors Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2BH', name: 'Linear Algebra - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'Linear Algebra & Diff Eq Honors Series', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Courses that satisfy Reading & Composition A', orGroup: 'R&C Requirement', satisfies: { code: 'READING & COMPOSITION A', name: 'Reading & Composition A' } },
      { code: 'ENGL C1000H', name: 'Academic Reading and Writing - HONORS', units: 5.0, type: 'Required', category: 'IGETC', description: 'Courses that satisfy Reading & Composition A', orGroup: 'R&C Requirement', satisfies: { code: 'READING & COMPOSITION A', name: 'Reading & Composition A' } },
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
      { code: 'CHEM 1AH', name: 'General Chemistry I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1BH', name: 'General Chemistry II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1CH', name: 'General Chemistry III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1A.', orGroup: 'De Anza Gen Chem 1 Series', satisfies: { code: 'CHEM 1A', name: 'General Chemistry' } },
      { code: 'CHEM 1A', name: 'General Chemistry I', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1B', name: 'General Chemistry II', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1C', name: 'General Chemistry III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1A, 1B, 1C) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1AH', name: 'General Chemistry I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1BH', name: 'General Chemistry II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'CHEM 1CH', name: 'General Chemistry III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Part of a series (CHEM 1AH, 1BH, 1CH) that collectively satisfies UCB CHEM 1B. This series also satisfies UCB CHEM 1A.', isOverlap: true, orGroup: 'De Anza Gen Chem 1 Series (Alternative for UCB CHEM 1B)', satisfies: { code: 'CHEM 1B', name: 'General Chemistry' } },
      { code: 'BIOL 6A', name: 'Form and Function in the Biological World', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6C (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'BIOL 6C', name: 'Ecology and Evolution', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6A (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'BIOL 6AH', name: 'Form and Function in the Biological World - HONORS', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6C (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'BIOL 6CH', name: 'Ecology and Evolution - HONORS', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with BIOL 6A (or honors) to satisfy UCB BIOLOGY 1B.', orGroup: 'De Anza Biology Series for UCB BIOLOGY 1B', satisfies: { code: 'BIOLOGY 1B', name: 'General Biology (Plant Form & Function, Ecology, Evolution)' } },
      { code: 'GEOL 10', name: 'Introductory Geology', units: 5.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'CIV ENG 70', name: 'Engineering Geology' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4D to satisfy UCB PHYSICS 7C.', orGroup: 'De Anza Physics Series for UCB PHYSICS 7C', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4D', name: 'Physics for Scientists and Engineers: Modern Physics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4C to satisfy UCB PHYSICS 7C.', orGroup: 'De Anza Physics Series for UCB PHYSICS 7C', satisfies: { code: 'PHYSICS 7C', name: 'Physics for Scientists and Engineers' } },
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 1', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1AH', name: 'Calculus I - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 1', satisfies: { code: 'MATH 51', name: 'Calculus I' } },
      { code: 'MATH 1B', name: 'Calculus II', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 2', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1BH', name: 'Calculus II - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 2', satisfies: { code: 'MATH 52', name: 'Calculus II' } },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 3', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 1CH', name: 'Calculus III - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza Calculus 3', satisfies: { code: 'MATH 53', name: 'Multivariable Calculus' } },
      { code: 'MATH 2A', name: 'Differential Equations', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2B (or honors) to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2A (or honors) to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2AH', name: 'Differential Equations - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2BH to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'MATH 2BH', name: 'Linear Algebra - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Paired with MATH 2AH to satisfy UCB MATH 54.', orGroup: 'De Anza Linear Algebra & Diff Eq', satisfies: { code: 'MATH 54', name: 'Linear Algebra and Differential Equations' } },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', satisfies: { code: 'PHYSICS 7A', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4B', name: 'Physics for Scientists and Engineers: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4C to satisfy UCB PHYSICS 7B.', orGroup: 'De Anza Physics 2 Series', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'PHYS 4C', name: 'Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Paired with PHYS 4B to satisfy UCB PHYSICS 7B.', orGroup: 'De Anza Physics 2 Series', satisfies: { code: 'PHYSICS 7B', name: 'Physics for Scientists and Engineers' } },
      { code: 'ENGL C1000', name: 'Academic Reading and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C A Fulfillment', satisfies: { code: 'Reading and Composition A', name: 'Reading and Composition A Requirement' } },
      { code: 'ENGL C1000H', name: 'Academic Reading and Writing - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C A Fulfillment', satisfies: { code: 'Reading and Composition A', name: 'Reading and Composition A Requirement' } },
      { code: 'ESL 5', name: 'Advanced Composition and Reading', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C A Fulfillment', satisfies: { code: 'Reading and Composition A', name: 'Reading and Composition A Requirement' } },
      { code: 'ENGL C1001', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'ENGL C1001H', name: 'Critical Thinking and Writing - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'EWRT 1B', name: 'Reading, Writing and Research', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'EWRT 1BH', name: 'Reading, Writing and Research - HONORS', units: 5.0, type: 'Required', category: 'MajorPrep', orGroup: 'De Anza R&C B Fulfillment', satisfies: { code: 'Reading and Composition B', name: 'Reading and Composition B Requirement' } },
      { code: 'CIS 11', name: 'Foundations of Data Science for All', units: 4.5, type: 'Highly Recommended', category: 'MajorPrep', satisfies: { code: 'COMPSCI C8', name: 'Foundations of Data Science' } }
    ]
  }
];
