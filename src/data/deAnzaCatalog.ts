export interface CatalogCourse {
  code: string;
  name: string;
  units: number;
  description: string;
}

export const deAnzaCatalog: Record<string, CatalogCourse[]> = {
  "Accounting (ACCT)": [
    { code: "ACCT 1A", name: "Financial Accounting I", units: 5.0, description: "Introduction to financial accounting theory and practice." },
    { code: "ACCT 1B", name: "Financial Accounting II", units: 5.0, description: "Continuation of financial accounting theory and practices." },
    { code: "ACCT 1C", name: "Managerial Accounting", units: 5.0, description: "Study of accounting information used for internal decision making." },
    { code: "ACCT 88", name: "Excel for Accounting", units: 4.0, description: "Application of spreadsheets to solve accounting and financial problems." }
  ],
  "Anthropology (ANTH)": [
    { code: "ANTH 1", name: "Physical Anthropology", units: 4.0, description: "Introduction to human biology, genetics, and evolutionary theory." },
    { code: "ANTH 1L", name: "Physical Anthropology Laboratory", units: 1.0, description: "Practical laboratory experience in physical anthropology." },
    { code: "ANTH 2", name: "Cultural Anthropology", units: 4.0, description: "Comparative study of human cultures and societies." },
    { code: "ANTH 3", name: "Introduction to Archaeology", units: 4.0, description: "Study of the methods and theories used to reconstruct past cultures." }
  ],
  "Art (ARTS)": [
    { code: "ARTS 1A", name: "Introduction to the Visual Arts", units: 4.0, description: "Survey of world art from prehistoric times to the Middle Ages." },
    { code: "ARTS 1B", name: "Introduction to the Visual Arts", units: 4.0, description: "Survey of world art from the Renaissance to the present." },
    { code: "ARTS 2A", name: "History of Art: Europe and the Near East", units: 4.0, description: "Western art history from antiquity to early Christian period." },
    { code: "ARTS 4A", name: "Beginning Drawing", units: 4.0, description: "Introduction to materials and methods of drawing." }
  ],
  "Astronomy (ASTR)": [
    { code: "ASTR 4", name: "Solar System Astronomy", units: 4.0, description: "Introduction to the history, structure and evolution of the solar system." },
    { code: "ASTR 10", name: "Stellar and Galactic Astronomy", units: 4.0, description: "Introduction to stars, galaxies, and the large-scale structure of the universe." }
  ],
  "Biology (BIOL)": [
    { code: "BIOL 6A", name: "Form and Function in the Biological World", units: 6.0, description: "Principles of plant and animal biology, structure, and physiology." },
    { code: "BIOL 6B", name: "Cell and Molecular Biology", units: 6.0, description: "Structure and function of biomolecules, cells, and genetics." },
    { code: "BIOL 6C", name: "Evolution, Systematics and Ecology", units: 6.0, description: "Principles of evolution, classification, and ecosystem dynamics." },
    { code: "BIOL 10", name: "Introductory Biology", units: 5.0, description: "Non-majors biology covering major cell and organ systems." },
    { code: "BIOL 40A", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 1 of the study of structure and function of the human body." },
    { code: "BIOL 40B", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 2 of the study of structure and function of the human body." },
    { code: "BIOL 40C", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 3 of the study of structure and function of the human body." }
  ],
  "Business (BUS)": [
    { code: "BUS 10", name: "Introduction to Business", units: 5.0, description: "Survey of business functions, organization, and economic environment." },
    { code: "BUS 18", name: "Business Law I", units: 5.0, description: "Principles of law applicable to business transactions and contracts." },
    { code: "BUS 21", name: "Business Communication", units: 4.0, description: "Written and oral communication principles for professional business settings." }
  ],
  "Chemistry (CHEM)": [
    { code: "CHEM 1A", name: "General Chemistry", units: 5.0, description: "First quarter of general chemistry for science and engineering majors." },
    { code: "CHEM 1B", name: "General Chemistry", units: 5.0, description: "Second quarter of general chemistry for science and engineering majors." },
    { code: "CHEM 1C", name: "General Chemistry and Qualitative Analysis", units: 5.0, description: "Third quarter of general chemistry and qualitative analysis." },
    { code: "CHEM 12A", name: "Organic Chemistry", units: 5.0, description: "Structure, bonding and reactivity of organic compounds." },
    { code: "CHEM 12B", name: "Organic Chemistry", units: 5.0, description: "Continuation of organic chemistry topics and reactions." },
    { code: "CHEM 12C", name: "Organic Chemistry", units: 5.0, description: "Advanced organic chemistry reactions, mechanisms and synthesis." },
    { code: "CHEM 25", name: "Preparation for General Chemistry", units: 5.0, description: "Introductory course preparing students for general chemistry." }
  ],
  "Communication Studies (COMM)": [
    { code: "COMM 1", name: "Public Speaking", units: 5.0, description: "Theory and practice of public speaking, speech organization, and delivery." },
    { code: "COMM 7", name: "Intercultural Communication", units: 5.0, description: "Study of communication practices across diverse cultural groups." },
    { code: "COMM 10", name: "Fundamentals of Oral Communication", units: 5.0, description: "Introduction to interpersonal, group, and public communication." }
  ],
  "Computer Information Systems (CIS)": [
    { code: "CIS 22A", name: "Beginning Programming Methodologies in C++", units: 4.5, description: "Introduction to computer programming and problem solving in C++." },
    { code: "CIS 22B", name: "Intermediate Programming Methodologies in C++", units: 4.5, description: "Object-oriented programming, classes, pointers, and file processing in C++." },
    { code: "CIS 22C", name: "Data Abstraction and Structures", units: 4.5, description: "Advanced data structures, linked lists, trees, graphs, and sorting algorithms." },
    { code: "CIS 21JA", name: "Introduction to x86 Processor Assembly Language", units: 4.5, description: "Computer organization, binary/hexadecimal math, and x86 assembly language." },
    { code: "CIS 35A", name: "Java Programming", units: 4.5, description: "Object-oriented software development in Java." },
    { code: "CIS 40", name: "Introduction to Programming in Python", units: 4.5, description: "Beginning programming, variable types, loops and functions in Python." },
    { code: "CIS 41A", name: "Python Programming", units: 4.5, description: "Intermediate object-oriented programming and libraries in Python." },
    { code: "CIS 18A", name: "Introduction to Unix/Linux", units: 4.5, description: "Unix/Linux operating system commands, file structure, and shell scripting." },
    { code: "CIS 36A", name: "Introduction to Computer Science Using Java", units: 4.5, description: "Basic concepts of computer science and java programming." }
  ],
  "Economics (ECON)": [
    { code: "ECON 1A", name: "Principles of Macroeconomics", units: 5.0, description: "Analysis of the aggregate economy, national income, monetary and fiscal policies." },
    { code: "ECON 1B", name: "Principles of Microeconomics", units: 5.0, description: "Analysis of supply and demand, consumer behavior, and market structures." }
  ],
  "English/Writing (EWRT)": [
    { code: "EWRT 1A", name: "Introduction to College Composition", units: 5.0, description: "Development of college-level expository writing, reading, and research." },
    { code: "EWRT 1B", name: "Reading, Writing and Research", units: 5.0, description: "Instruction in critical reading and writing about literature and research." },
    { code: "EWRT 2", name: "Critical Reading, Writing and Thinking", units: 5.0, description: "Development of analytical and argumentative writing skills." }
  ],
  "Environmental Studies (ES)": [
    { code: "ES 1", name: "Introduction to Environmental Studies", units: 4.0, description: "Interdisciplinary study of human-environment relations and solutions." },
    { code: "ES 2", name: "Humans, the Environment, and Sustainability", units: 4.0, description: "Exploration of sustainability principles and ecological footprints." }
  ],
  "Geography (GEO)": [
    { code: "GEO 1", name: "Physical Geography", units: 4.0, description: "Study of Earth's physical systems, weather, climate, and landforms." },
    { code: "GEO 2", name: "Human Geography", units: 4.0, description: "Study of human patterns of settlement, culture, and economic activity." }
  ],
  "History (HIST)": [
    { code: "HIST 3A", name: "History of Western Civilization", units: 4.0, description: "History of the ancient world through the Middle Ages." },
    { code: "HIST 3B", name: "History of Western Civilization", units: 4.0, description: "Western history from the Renaissance to the early modern period." },
    { code: "HIST 17A", name: "History of the United States to 1877", units: 4.0, description: "Survey of US history from colonial times through Reconstruction." },
    { code: "HIST 17B", name: "History of the United States from 1865 to 1914", units: 4.0, description: "Survey of US history from industrialization through Gilded Age." },
    { code: "HIST 17C", name: "History of the United States from 1914 to the Present", units: 4.0, description: "Survey of modern US history through the Cold War and beyond." }
  ],
  "Humanities (HUMI)": [
    { code: "HUMI 1", name: "Creative Minds", units: 4.0, description: "Exploration of human creativity across various art forms." },
    { code: "HUMI 2", name: "American Studies", units: 4.0, description: "Interdisciplinary study of American culture and values." }
  ],
  "Mathematics (MATH)": [
    { code: "MATH 1A", name: "Calculus I", units: 5.0, description: "Differential calculus of functions of a single variable." },
    { code: "MATH 1B", name: "Calculus II", units: 5.0, description: "Integral calculus, techniques, and applications of integration." },
    { code: "MATH 1C", name: "Calculus III", units: 5.0, description: "Infinite series, vectors, vector-valued functions, multivariable calculus." },
    { code: "MATH 1D", name: "Calculus IV", units: 5.0, description: "Vector calculus: Green's Theorem, Stokes' Theorem, Divergence Theorem." },
    { code: "MATH 2A", name: "Differential Equations", units: 5.0, description: "Ordinary differential equations, linear and non-linear systems." },
    { code: "MATH 2B", name: "Linear Algebra", units: 5.0, description: "Vector spaces, matrices, determinants, eigenvalues, eigenvectors." },
    { code: "MATH 10", name: "Introductory Statistics", units: 5.0, description: "Probability, hypothesis testing, correlation, and regression." },
    { code: "MATH 22", name: "Discrete Mathematics", units: 4.0, description: "Set theory, logic, proof techniques, counting, and graphs." },
    { code: "MATH 31", name: "Precalculus I: Algebra", units: 5.0, description: "Preparation for calculus: polynomial, rational, exponential, and logarithmic functions." },
    { code: "MATH 32", name: "Precalculus II: Trigonometric Functions", units: 5.0, description: "Preparation for calculus: trigonometric functions, identities, and equations." }
  ],
  "Music (MUSI)": [
    { code: "MUSI 1A", name: "Music Appreciation", units: 4.0, description: "Introduction to listening to Western classical music." },
    { code: "MUSI 8", name: "History of Rock and Rap Music", units: 4.0, description: "Development and influence of rock and rap music genres." }
  ],
  "Philosophy (PHIL)": [
    { code: "PHIL 1", name: "Introduction to Philosophy", units: 4.0, description: "Survey of major topics in metaphysics, epistemology, and ethics." },
    { code: "PHIL 2", name: "Social and Political Philosophy", units: 4.0, description: "Introduction to issues in social justice, authority, and rights." },
    { code: "PHIL 3", name: "Critical Thinking and Informal Logic", units: 4.0, description: "Development of logical reasoning and argument evaluation." },
    { code: "PHIL 4", name: "Critical Thinking and Writing", units: 4.0, description: "Integrating critical thinking skills with composition." }
  ],
  "Physics (PHYS)": [
    { code: "PHYS 2A", name: "General Physics: Mechanics", units: 5.0, description: "Algebra-based mechanics, forces, energy, and momentum." },
    { code: "PHYS 4A", name: "Physics for Scientists and Engineers: Mechanics", units: 6.0, description: "Calculus-based classical mechanics." },
    { code: "PHYS 4B", name: "Physics for Scientists and Engineers: Electricity & Magnetism", units: 6.0, description: "Calculus-based electrostatics, circuits, and magnetism." },
    { code: "PHYS 4C", name: "Physics for Scientists and Engineers: Waves, Fluids, and Optics", units: 6.0, description: "Calculus-based study of wave motion, fluids, heat, and light." },
    { code: "PHYS 4D", name: "Physics for Scientists and Engineers: Modern Physics", units: 6.0, description: "Introduction to relativity, quantum theory, and atomic structures." }
  ],
  "Political Science (POLI)": [
    { code: "POLI 1", name: "American Government and Politics", units: 4.0, description: "Structure, dynamics, and processes of US government." },
    { code: "POLI 2", name: "Comparative Politics", units: 4.0, description: "Comparison of political systems and institutions around the world." }
  ],
  "Psychology (PSYC)": [
    { code: "PSYC 1", name: "General Psychology", units: 4.0, description: "Introduction to biological, cognitive, social, and clinical psychology." },
    { code: "PSYC 2", name: "Research Methods in Psychology", units: 4.0, description: "Scientific methods and design in psychological research." },
    { code: "PSYC 4", name: "Abnormal Psychology", units: 4.0, description: "Study of psychological disorders and therapeutic treatments." }
  ],
  "Sociology (SOC)": [
    { code: "SOC 1", name: "Introduction to Sociology", units: 4.0, description: "Introduction to social structures, groups, and social processes." },
    { code: "SOC 5", name: "Sociology of Gender", units: 4.0, description: "Examination of gender roles, socialization, and inequality." },
    { code: "SOC 15", name: "Discussion on Social Problems", units: 4.0, description: "Analysis of major contemporary social problems in the US." }
  ]
};
