export interface Course {
  code: string;
  name: string;
  units: number;
  type: 'Required' | 'Recommended';
  category: 'IGETC' | 'MajorPrep';
  description?: string;
  isOverlap?: boolean;
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
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Multivariable Calculus.' },
      { code: 'MATH 22', name: 'Discrete Mathematics', units: 4.0, type: 'Required', category: 'MajorPrep', description: 'Mathematical foundations of Computer Science.' },
      { code: 'CIS 22A', name: 'Beginning Programming Methodologies in C++', units: 4.5, type: 'Recommended', category: 'MajorPrep', description: 'Introduction to computer programming.' },
      { code: 'CIS 22B', name: 'Intermediate Programming Methodologies in C++', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Object-oriented programming in C++.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Advanced structures and abstract data types.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC', description: 'Expositing writing, reading and research.' },
      { code: 'EWRT 2', name: 'Critical Thinking and Writing', units: 5.0, type: 'Required', category: 'IGETC', description: 'Argumentative writing and textual analysis.' },
      { code: 'PHIL 1', name: 'Introduction to Philosophy', units: 4.0, type: 'Recommended', category: 'IGETC', description: 'Survey of principal philosophical themes.' },
      { code: 'PHYS 4A', name: 'Physics for Scientists and Engineers: Mechanics', units: 6.0, type: 'Required', category: 'IGETC', description: 'Classical mechanics, vectors, and forces.', isOverlap: true }
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
      { code: 'MATH 2B', name: 'Linear Algebra', units: 5.0, type: 'Required', category: 'MajorPrep', description: 'Vector spaces, matrices, and linear transforms.' },
      { code: 'CIS 22C', name: 'Data Abstraction and Structures', units: 4.5, type: 'Required', category: 'MajorPrep', description: 'Algorithms and structures.' },
      { code: 'PHYS 4A', name: 'Physics: Mechanics', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Calculus-based classical mechanics.', isOverlap: true },
      { code: 'PHYS 4B', name: 'Physics: Electricity and Magnetism', units: 6.0, type: 'Required', category: 'MajorPrep', description: 'Electrostatics and electromagnetic fields.' },
      { code: 'EWRT 1A', name: 'English Composition', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'EWRT 2', name: 'Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'COMM 1', name: 'Public Speaking', units: 4.0, type: 'Recommended', category: 'IGETC' }
    ]
  },
  {
    fromCollege: 'Foothill College',
    toUniversity: 'UC Berkeley',
    major: 'Business Administration',
    courses: [
      { code: 'MATH 1A', name: 'Calculus I', units: 5.0, type: 'Required', category: 'MajorPrep', isOverlap: true },
      { code: 'MATH 1C', name: 'Calculus III', units: 5.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'ECON 1A', name: 'Principles of Macroeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'ECON 1B', name: 'Principles of Microeconomics', units: 5.0, type: 'Required', category: 'MajorPrep' },
      { code: 'BUSI 18', name: 'Business Law I', units: 4.0, type: 'Recommended', category: 'MajorPrep' },
      { code: 'ENGL 1A', name: 'Composition and Reading', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'ENGL 1B', name: 'Composition & Critical Thinking', units: 5.0, type: 'Required', category: 'IGETC' },
      { code: 'PSYC 1', name: 'General Psychology', units: 5.0, type: 'Recommended', category: 'IGETC' }
    ]
  }
];
