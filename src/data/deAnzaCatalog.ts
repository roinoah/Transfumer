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
  "Administration of Justice (ADMJ)": [
    { code: "ADMJ 29", name: "Administration of Justice 29", units: 4.0, description: "Comprehensive study of key topics and concepts in Administration of Justice." }
  ],
  "Anthropology (ANTH)": [
    { code: "ANTH 1", name: "Physical Anthropology", units: 4.0, description: "Introduction to human biology, genetics, and evolutionary theory." },
    { code: "ANTH 12", name: "ANTH 12", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 14", name: "ANTH 14", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 16", name: "ANTH 16", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 1H", name: "ANTH 1H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 1L", name: "Physical Anthropology Laboratory", units: 1.0, description: "Practical laboratory experience in physical anthropology." },
    { code: "ANTH 2", name: "Cultural Anthropology", units: 4.0, description: "Comparative study of human cultures and societies." },
    { code: "ANTH 2H", name: "ANTH 2H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 3", name: "Introduction to Archaeology", units: 4.0, description: "Study of the methods and theories used to reconstruct past cultures." },
    { code: "ANTH 4", name: "Intermediate ANTH II", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 5", name: "ANTH 5", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 6", name: "ANTH 6", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 7", name: "ANTH 7", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." },
    { code: "ANTH 8", name: "ANTH 8", units: 4.0, description: "Comprehensive study of key topics and concepts in ANTH." }
  ],
  "Art (ARTS)": [
    { code: "ARTS 1A", name: "Introduction to the Visual Arts", units: 4.0, description: "Survey of world art from prehistoric times to the Middle Ages." },
    { code: "ARTS 1B", name: "Introduction to the Visual Arts", units: 4.0, description: "Survey of world art from the Renaissance to the present." },
    { code: "ARTS 2A", name: "History of Art: Europe and the Near East", units: 4.0, description: "Western art history from antiquity to early Christian period." },
    { code: "ARTS 2B", name: "ARTS 2B", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2C", name: "ARTS 2C", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2D", name: "ARTS 2D", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2F", name: "ARTS 2F", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2G", name: "ARTS 2G", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2H", name: "ARTS 2H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 2J", name: "ARTS 2J", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 3TC", name: "ARTS 3TC", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 3TE", name: "ARTS 3TE", units: 4.0, description: "Comprehensive study of key topics and concepts in ARTS." },
    { code: "ARTS 4A", name: "Beginning Drawing", units: 4.0, description: "Introduction to materials and methods of drawing." }
  ],
  "Astronomy (ASTR)": [
    { code: "ASTR 10", name: "Stellar and Galactic Astronomy", units: 4.0, description: "Introduction to stars, galaxies, and the large-scale structure of the universe." },
    { code: "ASTR 4", name: "Solar System Astronomy", units: 4.0, description: "Introduction to the history, structure and evolution of the solar system." }
  ],
  "Biology (BIOL)": [
    { code: "BIOL 10", name: "Introductory Biology", units: 5.0, description: "Non-majors biology covering major cell and organ systems." },
    { code: "BIOL 10H", name: "BIOL 10H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 11", name: "BIOL 11", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 13", name: "BIOL 13", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 15", name: "BIOL 15", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 26", name: "BIOL 26", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 40A", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 1 of the study of structure and function of the human body." },
    { code: "BIOL 40B", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 2 of the study of structure and function of the human body." },
    { code: "BIOL 40C", name: "Human Anatomy and Physiology", units: 5.0, description: "Part 3 of the study of structure and function of the human body." },
    { code: "BIOL 6A", name: "Form and Function in the Biological World", units: 6.0, description: "Principles of plant and animal biology, structure, and physiology." },
    { code: "BIOL 6AH", name: "BIOL 6AH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." },
    { code: "BIOL 6B", name: "Cell and Molecular Biology", units: 6.0, description: "Structure and function of biomolecules, cells, and genetics." },
    { code: "BIOL 6C", name: "Evolution, Systematics and Ecology", units: 6.0, description: "Principles of evolution, classification, and ecosystem dynamics." },
    { code: "BIOL 6CH", name: "BIOL 6CH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in BIOL." }
  ],
  "Business (BUS)": [
    { code: "BUS 10", name: "Introduction to Business", units: 5.0, description: "Survey of business functions, organization, and economic environment." },
    { code: "BUS 18", name: "Business Law I", units: 5.0, description: "Principles of law applicable to business transactions and contracts." },
    { code: "BUS 21", name: "Business Communication", units: 4.0, description: "Written and oral communication principles for professional business settings." }
  ],
  "Chemistry (CHEM)": [
    { code: "CHEM 10", name: "CHEM 10", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." },
    { code: "CHEM 12A", name: "Organic Chemistry", units: 5.0, description: "Structure, bonding and reactivity of organic compounds." },
    { code: "CHEM 12B", name: "Organic Chemistry", units: 5.0, description: "Continuation of organic chemistry topics and reactions." },
    { code: "CHEM 12C", name: "Organic Chemistry", units: 5.0, description: "Advanced organic chemistry reactions, mechanisms and synthesis." },
    { code: "CHEM 1A", name: "General Chemistry", units: 5.0, description: "First quarter of general chemistry for science and engineering majors." },
    { code: "CHEM 1AH", name: "CHEM 1AH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." },
    { code: "CHEM 1B", name: "General Chemistry", units: 5.0, description: "Second quarter of general chemistry for science and engineering majors." },
    { code: "CHEM 1BH", name: "CHEM 1BH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." },
    { code: "CHEM 1C", name: "General Chemistry and Qualitative Analysis", units: 5.0, description: "Third quarter of general chemistry and qualitative analysis." },
    { code: "CHEM 1CH", name: "CHEM 1CH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." },
    { code: "CHEM 25", name: "Preparation for General Chemistry", units: 5.0, description: "Introductory course preparing students for general chemistry." },
    { code: "CHEM 30A", name: "CHEM 30A", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." },
    { code: "CHEM 30B", name: "CHEM 30B", units: 5.0, description: "Comprehensive study of key topics and concepts in CHEM." }
  ],
  "Communication Studies (COMM)": [
    { code: "COMM 1", name: "Public Speaking", units: 5.0, description: "Theory and practice of public speaking, speech organization, and delivery." },
    { code: "COMM 10", name: "Fundamentals of Oral Communication", units: 5.0, description: "Introduction to interpersonal, group, and public communication." },
    { code: "COMM 10H", name: "COMM 10H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in COMM." },
    { code: "COMM 7", name: "Intercultural Communication", units: 5.0, description: "Study of communication practices across diverse cultural groups." },
    { code: "COMM 7H", name: "COMM 7H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in COMM." },
    { code: "COMM 9", name: "COMM 9", units: 5.0, description: "Comprehensive study of key topics and concepts in COMM." },
    { code: "COMM 9H", name: "COMM 9H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in COMM." },
    { code: "COMM C1000", name: "Introduction to Communication Studies", units: 5.0, description: "Survey of communication principles, public speaking, group and interpersonal communication." },
    { code: "COMM C1000H", name: "COMM C1000H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in COMM." }
  ],
  "Computer Information Systems (CIS)": [
    { code: "CIS 18A", name: "Introduction to Unix/Linux", units: 4.5, description: "Unix/Linux operating system commands, file structure, and shell scripting." },
    { code: "CIS 21JA", name: "Introduction to x86 Processor Assembly Language", units: 4.5, description: "Computer organization, binary/hexadecimal math, and x86 assembly language." },
    { code: "CIS 22A", name: "Beginning Programming Methodologies in C++", units: 4.5, description: "Introduction to computer programming and problem solving in C++." },
    { code: "CIS 22B", name: "Intermediate Programming Methodologies in C++", units: 4.5, description: "Object-oriented programming, classes, pointers, and file processing in C++." },
    { code: "CIS 22C", name: "Data Abstraction and Structures", units: 4.5, description: "Advanced data structures, linked lists, trees, graphs, and sorting algorithms." },
    { code: "CIS 35A", name: "Java Programming", units: 4.5, description: "Object-oriented software development in Java." },
    { code: "CIS 36A", name: "Introduction to Computer Science Using Java", units: 4.5, description: "Basic concepts of computer science and java programming." },
    { code: "CIS 40", name: "Introduction to Programming in Python", units: 4.5, description: "Beginning programming, variable types, loops and functions in Python." },
    { code: "CIS 41A", name: "Python Programming", units: 4.5, description: "Intermediate object-oriented programming and libraries in Python." }
  ],
  "Dance (DANC)": [
    { code: "DANC 38A", name: "Dance 38A", units: 4.0, description: "Comprehensive study of key topics and concepts in Dance." }
  ],
  "Economics (ECON)": [
    { code: "ECON 1", name: "Principles of Macroeconomics", units: 5.0, description: "Introduction to aggregate economic analysis, national income, monetary and fiscal policies." },
    { code: "ECON 1A", name: "Principles of Macroeconomics", units: 5.0, description: "Analysis of the aggregate economy, national income, monetary and fiscal policies." },
    { code: "ECON 1B", name: "Principles of Microeconomics", units: 5.0, description: "Analysis of supply and demand, consumer behavior, and market structures." },
    { code: "ECON 1H", name: "ECON 1H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." },
    { code: "ECON 2", name: "Principles of Microeconomics", units: 5.0, description: "Introduction to consumer behavior, market structures, and resource allocation." },
    { code: "ECON 2H", name: "ECON 2H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." },
    { code: "ECON 3", name: "Intermediate ECON I", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." },
    { code: "ECON 3H", name: "ECON 3H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." },
    { code: "ECON 4", name: "Intermediate ECON II", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." },
    { code: "ECON 5", name: "Principles of Microeconomics", units: 4.0, description: "Comprehensive study of key topics and concepts in ECON." }
  ],
  "Engineering (ENGR)": [
    { code: "ENGR 37", name: "Introduction to Circuit Analysis", units: 5.0, description: "Introduction to circuit analysis, network theorems, and AC circuits." },
    { code: "ENGR 37L", name: "Introduction to Circuit Analysis Laboratory", units: 2.0, description: "Laboratory instruction for introduction to circuit analysis." }
  ],
  "English as a Second Language (ESL)": [
    { code: "ESL 5", name: "English as a Second Language 5", units: 5.0, description: "Comprehensive study of key topics and concepts in English as a Second Language." },
    { code: "ESL 6", name: "English as a Second Language 6", units: 5.0, description: "Comprehensive study of key topics and concepts in English as a Second Language." }
  ],
  "English/Writing (EWRT)": [
    { code: "ENGL C1000", name: "Academic Reading and Writing", units: 5.0, description: "Statewide common course for academic reading, composition, and research." },
    { code: "ENGL C1000H", name: "ENGL C1000H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in ENGL." },
    { code: "ENGL C1001", name: "Critical Thinking and Composition", units: 5.0, description: "Statewide common course for critical reading, reasoning, and argumentative writing." },
    { code: "ENGL C1001H", name: "ENGL C1001H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in ENGL." },
    { code: "EWRT 1A", name: "Introduction to College Composition", units: 5.0, description: "Development of college-level expository writing, reading, and research." },
    { code: "EWRT 1B", name: "Reading, Writing and Research", units: 5.0, description: "Instruction in critical reading and writing about literature and research." },
    { code: "EWRT 1C", name: "EWRT 1C", units: 5.0, description: "Comprehensive study of key topics and concepts in EWRT." },
    { code: "EWRT 2", name: "Critical Reading, Writing and Thinking", units: 5.0, description: "Development of analytical and argumentative writing skills." }
  ],
  "Environmental Science (ESCI)": [
    { code: "ESCI 1", name: "Environmental Science 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Environmental Science." },
    { code: "ESCI 19", name: "Environmental Science 19", units: 4.0, description: "Comprehensive study of key topics and concepts in Environmental Science." },
    { code: "ESCI 1L", name: "Environmental Science Laboratory", units: 1.0, description: "Practical laboratory experiences in Environmental Science to accompany lectures." }
  ],
  "Environmental Studies (ES)": [
    { code: "ES 1", name: "Introduction to Environmental Studies", units: 4.0, description: "Interdisciplinary study of human-environment relations and solutions." },
    { code: "ES 2", name: "Humans, the Environment, and Sustainability", units: 4.0, description: "Exploration of sustainability principles and ecological footprints." }
  ],
  "Ethnic Studies (CETH)": [
    { code: "AFAM 10", name: "An Introduction to African American Studies", units: 4.0, description: "Interdisciplinary introduction to African American history, culture, and social movements." },
    { code: "AFAM 11", name: "African American Studies 11", units: 4.0, description: "Comprehensive study of key topics and concepts in African American Studies." },
    { code: "AFAM 12A", name: "African American Studies 12A", units: 4.0, description: "Comprehensive study of key topics and concepts in African American Studies." },
    { code: "AFAM 12B", name: "African American Studies 12B", units: 4.0, description: "Comprehensive study of key topics and concepts in African American Studies." },
    { code: "AFAM 25", name: "African American Studies 25", units: 4.0, description: "Comprehensive study of key topics and concepts in African American Studies." },
    { code: "ASAM 1", name: "Asian American Studies 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 10", name: "Asian American Studies 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 11", name: "Asian Americans and Racism", units: 4.0, description: "Analysis of racialization, discrimination, and activism in Asian American history." },
    { code: "ASAM 12", name: "Asian American Studies 12", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 13", name: "Asian American Studies 13", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 20", name: "Asian American Studies 20", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 21", name: "Asian American Studies 21", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 22", name: "Asian American Studies Seminar", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 30", name: "Asian American Studies 30", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 32", name: "Asian American Studies 32", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 40", name: "Asian American Studies 40", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "ASAM 41", name: "Asian American Studies 41", units: 4.0, description: "Comprehensive study of key topics and concepts in Asian American Studies." },
    { code: "CETH 10", name: "Introduction to Ethnic Studies", units: 4.0, description: "Comparative study of the history, culture, and struggles of racialized minority groups in the US." },
    { code: "CETH 11", name: "Ethnic Studies 11", units: 4.0, description: "Comprehensive study of key topics and concepts in Ethnic Studies." },
    { code: "CETH 13", name: "Ethnic Studies 13", units: 4.0, description: "Comprehensive study of key topics and concepts in Ethnic Studies." },
    { code: "CETH 19", name: "Ethnic Studies 19", units: 4.0, description: "Comprehensive study of key topics and concepts in Ethnic Studies." },
    { code: "CETH 29", name: "Ethnic Studies 29", units: 4.0, description: "Comprehensive study of key topics and concepts in Ethnic Studies." },
    { code: "CETH 8", name: "Ethnic Studies 8", units: 4.0, description: "Comprehensive study of key topics and concepts in Ethnic Studies." },
    { code: "CHLX 10", name: "Introduction to Chicanx/Latinx Studies", units: 4.0, description: "Introduction to the social, political, and cultural experiences of Chicanx and Latinx communities." },
    { code: "CHLX 11", name: "Chicanx/Latinx Studies 11", units: 4.0, description: "Comprehensive study of key topics and concepts in Chicanx/Latinx Studies." },
    { code: "CHLX 12", name: "Chicanx/Latinx Studies 12", units: 4.0, description: "Comprehensive study of key topics and concepts in Chicanx/Latinx Studies." },
    { code: "CHLX 13", name: "Chicanx/Latinx Studies 13", units: 4.0, description: "Comprehensive study of key topics and concepts in Chicanx/Latinx Studies." },
    { code: "CHLX 26", name: "Chicanx/Latinx Studies 26", units: 4.0, description: "Comprehensive study of key topics and concepts in Chicanx/Latinx Studies." },
    { code: "CHLX 35", name: "Chicanx/Latinx Studies 35", units: 4.0, description: "Comprehensive study of key topics and concepts in Chicanx/Latinx Studies." },
    { code: "NAIS 11", name: "Native American and Indigenous Studies 11", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 12", name: "Introduction to Native American and Indigenous Studies", units: 4.0, description: "Introduction to Native American sovereignty, histories, cultures, and contemporary issues." },
    { code: "NAIS 13", name: "Native American and Indigenous Studies 13", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 14", name: "Native American and Indigenous Studies 14", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 15", name: "Native American and Indigenous Studies 15", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 16", name: "Native American and Indigenous Studies 16", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 31", name: "Native American and Indigenous Studies 31", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." },
    { code: "NAIS 32", name: "Native American and Indigenous Studies 32", units: 4.0, description: "Comprehensive study of key topics and concepts in Native American and Indigenous Studies." }
  ],
  "Film & Television (F/TV)": [
    { code: "F/TV 1", name: "Film and Television Studies 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 10", name: "Film and Television Studies 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 10H", name: "Film and Television Studies 10H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 1H", name: "Film and Television Studies 1H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2A", name: "Film and Television Studies 2A", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2AH", name: "Film and Television Studies 2AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2AW", name: "Film and Television Studies 2AW", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2AWH", name: "Film and Television Studies 2AWH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2B", name: "Film and Television Studies 2B", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2BH", name: "Film and Television Studies 2BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2BW", name: "Film and Television Studies 2BW", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2BWH", name: "Film and Television Studies 2BWH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2C", name: "Film and Television Studies 2C", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2CH", name: "Film and Television Studies 2CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2CW", name: "Film and Television Studies 2CW", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 2CWH", name: "Film and Television Studies 2CWH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." },
    { code: "F/TV 3A", name: "Film and Television Studies 3A", units: 4.0, description: "Comprehensive study of key topics and concepts in Film and Television Studies." }
  ],
  "French (FREN)": [
    { code: "FREN 1", name: "Elementary French (First Quarter)", units: 5.0, description: "Introduction to the French language, basic conversation, vocabulary, and French-speaking cultures." },
    { code: "FREN 3", name: "Intermediate FREN I", units: 5.0, description: "Comprehensive study of key topics and concepts in FREN." }
  ],
  "Geography (GEO)": [
    { code: "GEO 1", name: "Physical Geography", units: 4.0, description: "Study of Earth's physical systems, weather, climate, and landforms." },
    { code: "GEO 10", name: "GEO 10", units: 4.0, description: "Comprehensive study of key topics and concepts in GEO." },
    { code: "GEO 2", name: "Human Geography", units: 4.0, description: "Study of human patterns of settlement, culture, and economic activity." },
    { code: "GEO 4", name: "Intermediate GEO II", units: 4.0, description: "Comprehensive study of key topics and concepts in GEO." },
    { code: "GEO 5", name: "GEO 5", units: 4.0, description: "Comprehensive study of key topics and concepts in GEO." }
  ],
  "Geology (GEOL)": [
    { code: "GEOL 10", name: "Geology 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Geology." },
    { code: "GEOL 20", name: "Geology 20", units: 4.0, description: "Comprehensive study of key topics and concepts in Geology." }
  ],
  "German (GERM)": [
    { code: "GERM 3", name: "Intermediate German I", units: 5.0, description: "Comprehensive study of key topics and concepts in German." },
    { code: "GERM 4", name: "Intermediate German II", units: 5.0, description: "Comprehensive study of key topics and concepts in German." }
  ],
  "Hindi (HNDI)": [
    { code: "HNDI 3", name: "Intermediate Hindi I", units: 4.0, description: "Comprehensive study of key topics and concepts in Hindi." }
  ],
  "History (HIST)": [
    { code: "HIST 10", name: "History 10", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 10H", name: "History 10H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 16A", name: "History 16A", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 16B", name: "History 16B", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 17A", name: "History of the United States to 1877", units: 4.0, description: "Survey of US history from colonial times through Reconstruction." },
    { code: "HIST 17AH", name: "History 17AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 17B", name: "History of the United States from 1865 to 1914", units: 4.0, description: "Survey of US history from industrialization through Gilded Age." },
    { code: "HIST 17BH", name: "History 17BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 17C", name: "History of the United States from 1914 to the Present", units: 4.0, description: "Survey of modern US history through the Cold War and beyond." },
    { code: "HIST 17CH", name: "History 17CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 18A", name: "History 18A", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 18B", name: "History 18B", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 19A", name: "History 19A", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 19B", name: "History 19B", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 3A", name: "History of Western Civilization", units: 4.0, description: "History of the ancient world through the Middle Ages." },
    { code: "HIST 3AH", name: "History 3AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 3B", name: "History of Western Civilization", units: 4.0, description: "Western history from the Renaissance to the early modern period." },
    { code: "HIST 3BH", name: "History 3BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 3C", name: "History 3C", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 3CH", name: "History 3CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6A", name: "History 6A", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6AH", name: "History 6AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6B", name: "History 6B", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6BH", name: "History 6BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6C", name: "History 6C", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 6CH", name: "History 6CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 7A", name: "History 7A", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 7B", name: "History 7B", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 9", name: "History 9", units: 4.0, description: "Comprehensive study of key topics and concepts in History." },
    { code: "HIST 9H", name: "History 9H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in History." }
  ],
  "Humanities (HUMI)": [
    { code: "HUMA 10", name: "Humanities 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMA 10H", name: "Humanities 10H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 1", name: "Creative Minds", units: 4.0, description: "Exploration of human creativity across various art forms." },
    { code: "HUMI 10", name: "Humanities 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 13", name: "Humanities 13", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 15", name: "Humanities 15", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 16", name: "Humanities 16", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 18", name: "Humanities 18", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 18H", name: "Humanities 18H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 1H", name: "Humanities 1H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 2", name: "American Studies", units: 4.0, description: "Interdisciplinary study of American culture and values." },
    { code: "HUMI 20", name: "Humanities 20", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 5", name: "Humanities 5", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 6", name: "Humanities 6", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 7", name: "Humanities 7", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 9", name: "Humanities 9", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." },
    { code: "HUMI 9H", name: "Humanities 9H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Humanities." }
  ],
  "Intercultural Studies (ICS)": [
    { code: "ICS 17", name: "ICS 17", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 17H", name: "ICS 17H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 19", name: "ICS 19", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 25", name: "ICS 25", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 26", name: "ICS 26", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 27", name: "ICS 27", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 27H", name: "ICS 27H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 36", name: "ICS 36", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 37", name: "ICS 37", units: 4.0, description: "Comprehensive study of key topics and concepts in ICS." },
    { code: "ICS 51", name: "Introduction to Chicanx Studies", units: 4.0, description: "Introduction to the historical, socio-cultural, and political experiences of Chicanx/Latinx people in the US." },
    { code: "ICS 7", name: "Introduction to Intercultural Studies", units: 4.0, description: "Analysis of historical and contemporary relations among socio-cultural groups in the United States." },
    { code: "ICS 9", name: "Sociology of Racism", units: 4.0, description: "Sociological analysis of race, racism, prejudice, and systemic discrimination in institutions." }
  ],
  "International Studies (INTL)": [
    { code: "INTL 1", name: "International Studies 1", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 16", name: "International Studies 16", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 21", name: "International Studies 21", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 22", name: "International Studies Seminar", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 33", name: "International Studies 33", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 5", name: "International Studies 5", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." },
    { code: "INTL 8", name: "International Studies 8", units: 4.0, description: "Comprehensive study of key topics and concepts in International Studies." }
  ],
  "Italian (ITAL)": [
    { code: "ITAL 3", name: "Intermediate Italian I", units: 5.0, description: "Comprehensive study of key topics and concepts in Italian." }
  ],
  "Japanese (JAPN)": [
    { code: "JAPN 1", name: "Elementary Japanese (First Quarter)", units: 5.0, description: "Introduction to hiragana, katakana, basic kanji, vocabulary, and Japanese culture." },
    { code: "JAPN 3", name: "Intermediate JAPN I", units: 5.0, description: "Comprehensive study of key topics and concepts in JAPN." },
    { code: "JAPN 4", name: "Intermediate JAPN II", units: 5.0, description: "Comprehensive study of key topics and concepts in JAPN." },
    { code: "JAPN 5", name: "JAPN 5", units: 5.0, description: "Comprehensive study of key topics and concepts in JAPN." },
    { code: "JAPN 6", name: "JAPN 6", units: 5.0, description: "Comprehensive study of key topics and concepts in JAPN." }
  ],
  "Journalism (JOUR)": [
    { code: "JOUR 2", name: "Principles of Journalism", units: 4.0, description: "Comprehensive study of key topics and concepts in Journalism." }
  ],
  "Kinesiology (KNES)": [
    { code: "KNES 47", name: "Kinesiology 47", units: 4.0, description: "Comprehensive study of key topics and concepts in Kinesiology." }
  ],
  "Korean (KORE)": [
    { code: "KORE 3", name: "Intermediate Korean I", units: 5.0, description: "Comprehensive study of key topics and concepts in Korean." }
  ],
  "Linguistics (LING)": [
    { code: "LING 1", name: "Linguistics 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Linguistics." }
  ],
  "Literature (ELIT)": [
    { code: "ELIT 10", name: "English Literature 10", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 10H", name: "English Literature 10H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 11", name: "English Literature 11", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 12", name: "English Literature 12", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 17", name: "English Literature 17", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 17H", name: "English Literature 17H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 19", name: "English Literature 19", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 21", name: "English Literature 21", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 22", name: "English Literature Seminar", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 24", name: "English Literature 24", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 28", name: "English Literature 28", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 38", name: "English Literature 38", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 39", name: "English Literature 39", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 40", name: "English Literature 40", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 41", name: "English Literature 41", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 41H", name: "English Literature 41H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46A", name: "English Literature 46A", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46AH", name: "English Literature 46AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46B", name: "English Literature 46B", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46BH", name: "English Literature 46BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46C", name: "English Literature 46C", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 46CH", name: "English Literature 46CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 47A", name: "English Literature 47A", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 47B", name: "English Literature 47B", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48A", name: "English Literature 48A", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48AH", name: "English Literature 48AH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48B", name: "English Literature 48B", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48BH", name: "English Literature 48BH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48C", name: "English Literature 48C", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 48CH", name: "English Literature 48CH (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." },
    { code: "ELIT 8", name: "English Literature 8", units: 4.0, description: "Comprehensive study of key topics and concepts in English Literature." }
  ],
  "Mandarin (MAND)": [
    { code: "MAND 1", name: "Elementary Mandarin (First Quarter)", units: 5.0, description: "Introduction to the Mandarin language, pronunciation, basic grammar, and Chinese culture." },
    { code: "MAND 3", name: "Intermediate MAND I", units: 5.0, description: "Comprehensive study of key topics and concepts in MAND." },
    { code: "MAND 4", name: "Intermediate MAND II", units: 5.0, description: "Comprehensive study of key topics and concepts in MAND." },
    { code: "MAND 5", name: "MAND 5", units: 5.0, description: "Comprehensive study of key topics and concepts in MAND." },
    { code: "MAND 6", name: "MAND 6", units: 5.0, description: "Comprehensive study of key topics and concepts in MAND." }
  ],
  "Mathematics (MATH)": [
    { code: "MATH 10", name: "Introductory Statistics", units: 5.0, description: "Probability, hypothesis testing, correlation, and regression." },
    { code: "MATH 11", name: "MATH 11", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 11H", name: "MATH 11H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 12", name: "MATH 12", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 17", name: "MATH 17", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 1A", name: "Calculus I", units: 5.0, description: "Differential calculus of functions of a single variable." },
    { code: "MATH 1AH", name: "MATH 1AH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 1B", name: "Calculus II", units: 5.0, description: "Integral calculus, techniques, and applications of integration." },
    { code: "MATH 1BH", name: "MATH 1BH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 1C", name: "Calculus III", units: 5.0, description: "Infinite series, vectors, vector-valued functions, multivariable calculus." },
    { code: "MATH 1CH", name: "MATH 1CH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 1D", name: "Calculus IV", units: 5.0, description: "Vector calculus: Green's Theorem, Stokes' Theorem, Divergence Theorem." },
    { code: "MATH 1DH", name: "MATH 1DH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 22", name: "Discrete Mathematics", units: 4.0, description: "Set theory, logic, proof techniques, counting, and graphs." },
    { code: "MATH 22H", name: "MATH 22H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 23", name: "MATH 23", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 2A", name: "Differential Equations", units: 5.0, description: "Ordinary differential equations, linear and non-linear systems." },
    { code: "MATH 2AH", name: "MATH 2AH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 2B", name: "Linear Algebra", units: 5.0, description: "Vector spaces, matrices, determinants, eigenvalues, eigenvectors." },
    { code: "MATH 2BH", name: "MATH 2BH (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 31", name: "Precalculus I: Algebra", units: 5.0, description: "Preparation for calculus: polynomial, rational, exponential, and logarithmic functions." },
    { code: "MATH 31H", name: "MATH 31H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 32", name: "Precalculus II: Trigonometric Functions", units: 5.0, description: "Preparation for calculus: trigonometric functions, identities, and equations." },
    { code: "MATH 32H", name: "MATH 32H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "MATH 44", name: "MATH 44", units: 5.0, description: "Comprehensive study of key topics and concepts in MATH." },
    { code: "STAT C1000", name: "Introduction to Statistics", units: 5.0, description: "Statewide common course for introductory statistics and data analysis." },
    { code: "STAT C1000H", name: "Statistics C1000H (Honors)", units: 5.0, description: "Comprehensive study of key topics and concepts in Statistics." }
  ],
  "Meteorology (MET)": [
    { code: "MET 10", name: "Meteorology 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Meteorology." },
    { code: "MET 10L", name: "Meteorology Laboratory", units: 1.0, description: "Practical laboratory experiences in Meteorology to accompany lectures." },
    { code: "MET 12", name: "Meteorology 12", units: 4.0, description: "Comprehensive study of key topics and concepts in Meteorology." },
    { code: "MET 20L", name: "Meteorology Laboratory", units: 1.0, description: "Practical laboratory experiences in Meteorology to accompany lectures." }
  ],
  "Music (MUSI)": [
    { code: "MUSI 1A", name: "Music Appreciation", units: 4.0, description: "Introduction to listening to Western classical music." },
    { code: "MUSI 1B", name: "Intermediate MUSI", units: 4.0, description: "Comprehensive study of key topics and concepts in MUSI." },
    { code: "MUSI 1C", name: "MUSI 1C", units: 4.0, description: "Comprehensive study of key topics and concepts in MUSI." },
    { code: "MUSI 1D", name: "MUSI 1D", units: 4.0, description: "Comprehensive study of key topics and concepts in MUSI." },
    { code: "MUSI 8", name: "History of Rock and Rap Music", units: 4.0, description: "Development and influence of rock and rap music genres." }
  ],
  "Other (C)": [
    { code: "C D 10G", name: "C D", units: 4.0, description: "Comprehensive study of key topics and concepts in C." },
    { code: "C D 10H", name: "C D", units: 4.0, description: "Comprehensive study of key topics and concepts in C." },
    { code: "C D 12", name: "C D", units: 4.0, description: "Comprehensive study of key topics and concepts in C." }
  ],
  "Other (E)": [
    { code: "E S 1", name: "E S", units: 4.0, description: "Comprehensive study of key topics and concepts in E." },
    { code: "E S 3", name: "E S", units: 4.0, description: "Comprehensive study of key topics and concepts in E." },
    { code: "E S 4", name: "E S", units: 4.0, description: "Comprehensive study of key topics and concepts in E." }
  ],
  "Persian (PERS)": [
    { code: "PERS 3", name: "Intermediate Persian I", units: 5.0, description: "Comprehensive study of key topics and concepts in Persian." }
  ],
  "Philosophy (PHIL)": [
    { code: "PHIL 1", name: "Introduction to Philosophy", units: 4.0, description: "Survey of major topics in metaphysics, epistemology, and ethics." },
    { code: "PHIL 11", name: "Philosophy 11", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 2", name: "Social and Political Philosophy", units: 4.0, description: "Introduction to issues in social justice, authority, and rights." },
    { code: "PHIL 20A", name: "Philosophy 20A", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 20B", name: "Philosophy 20B", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 20C", name: "Philosophy 20C", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 24", name: "Philosophy 24", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 3", name: "Critical Thinking and Informal Logic", units: 4.0, description: "Development of logical reasoning and argument evaluation." },
    { code: "PHIL 30", name: "Philosophy 30", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 4", name: "Critical Thinking and Writing", units: 4.0, description: "Integrating critical thinking skills with composition." },
    { code: "PHIL 49", name: "Philosophy 49", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 8", name: "Philosophy 8", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." },
    { code: "PHIL 8H", name: "Philosophy 8H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Philosophy." }
  ],
  "Photography (PHTG)": [
    { code: "PHTG 21", name: "Photography 21", units: 4.0, description: "Comprehensive study of key topics and concepts in Photography." },
    { code: "PHTG 7", name: "Photography 7", units: 4.0, description: "Comprehensive study of key topics and concepts in Photography." }
  ],
  "Physics (PHYS)": [
    { code: "PHYS 10", name: "PHYS 10", units: 5.0, description: "Comprehensive study of key topics and concepts in PHYS." },
    { code: "PHYS 2A", name: "General Physics: Mechanics", units: 5.0, description: "Algebra-based mechanics, forces, energy, and momentum." },
    { code: "PHYS 4A", name: "Physics for Scientists and Engineers: Mechanics", units: 6.0, description: "Calculus-based classical mechanics." },
    { code: "PHYS 4B", name: "Physics for Scientists and Engineers: Electricity & Magnetism", units: 6.0, description: "Calculus-based electrostatics, circuits, and magnetism." },
    { code: "PHYS 4C", name: "Physics for Scientists and Engineers: Waves, Fluids, and Optics", units: 6.0, description: "Calculus-based study of wave motion, fluids, heat, and light." },
    { code: "PHYS 4D", name: "Physics for Scientists and Engineers: Modern Physics", units: 6.0, description: "Introduction to relativity, quantum theory, and atomic structures." }
  ],
  "Political Science (POLI)": [
    { code: "POLI 1", name: "American Government and Politics", units: 4.0, description: "Structure, dynamics, and processes of US government." },
    { code: "POLI 15", name: "POLI 15", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 16", name: "POLI 16", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 17", name: "POLI 17", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 17H", name: "POLI 17H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 2", name: "Comparative Politics", units: 4.0, description: "Comparison of political systems and institutions around the world." },
    { code: "POLI 20", name: "POLI 20", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 3", name: "Intermediate POLI I", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLI 5", name: "POLI 5", units: 4.0, description: "Comprehensive study of key topics and concepts in POLI." },
    { code: "POLS C1000", name: "Introduction to American Government", units: 5.0, description: "Statewide common course for American government structure, processes, and political behavior." },
    { code: "POLS C1000H", name: "Political Science C1000H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Political Science." }
  ],
  "Psychology (PSYC)": [
    { code: "PSYC 1", name: "General Psychology", units: 4.0, description: "Introduction to biological, cognitive, social, and clinical psychology." },
    { code: "PSYC 10G", name: "PSYC 10G", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 10H", name: "PSYC 10H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 12", name: "PSYC 12", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 14", name: "PSYC 14", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 15", name: "PSYC 15", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 2", name: "Research Methods in Psychology", units: 4.0, description: "Scientific methods and design in psychological research." },
    { code: "PSYC 24", name: "PSYC 24", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 3", name: "Intermediate PSYC I", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 4", name: "Abnormal Psychology", units: 4.0, description: "Study of psychological disorders and therapeutic treatments." },
    { code: "PSYC 5", name: "PSYC 5", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 8", name: "PSYC 8", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC 9", name: "PSYC 9", units: 4.0, description: "Comprehensive study of key topics and concepts in PSYC." },
    { code: "PSYC C1000", name: "General Psychology", units: 4.0, description: "Statewide common course for introduction to scientific psychology." }
  ],
  "Reading (READ)": [
    { code: "READ 10", name: "Reading Studies 10", units: 4.0, description: "Comprehensive study of key topics and concepts in Reading Studies." }
  ],
  "Russian (RUSS)": [
    { code: "RUSS 3", name: "Intermediate Russian I", units: 5.0, description: "Comprehensive study of key topics and concepts in Russian." }
  ],
  "Sign Language (SIGN)": [
    { code: "SIGN 3", name: "Intermediate Sign Language I", units: 4.0, description: "Comprehensive study of key topics and concepts in Sign Language." }
  ],
  "Sociology (SOC)": [
    { code: "SOC 1", name: "Introduction to Sociology", units: 4.0, description: "Introduction to social structures, groups, and social processes." },
    { code: "SOC 14", name: "SOC 14", units: 4.0, description: "Comprehensive study of key topics and concepts in SOC." },
    { code: "SOC 15", name: "Discussion on Social Problems", units: 4.0, description: "Analysis of major contemporary social problems in the US." },
    { code: "SOC 20", name: "SOC 20", units: 4.0, description: "Comprehensive study of key topics and concepts in SOC." },
    { code: "SOC 28", name: "SOC 28", units: 4.0, description: "Comprehensive study of key topics and concepts in SOC." },
    { code: "SOC 29", name: "SOC 29", units: 4.0, description: "Comprehensive study of key topics and concepts in SOC." },
    { code: "SOC 35", name: "SOC 35", units: 4.0, description: "Comprehensive study of key topics and concepts in SOC." },
    { code: "SOC 5", name: "Sociology of Gender", units: 4.0, description: "Examination of gender roles, socialization, and inequality." }
  ],
  "Spanish (SPAN)": [
    { code: "SPAN 1", name: "Elementary Spanish (First Quarter)", units: 5.0, description: "Introduction to the Spanish language, vocabulary, grammar, and Hispanic culture." },
    { code: "SPAN 3", name: "Intermediate SPAN I", units: 5.0, description: "Comprehensive study of key topics and concepts in SPAN." },
    { code: "SPAN 4", name: "Intermediate SPAN II", units: 5.0, description: "Comprehensive study of key topics and concepts in SPAN." },
    { code: "SPAN 5", name: "SPAN 5", units: 5.0, description: "Comprehensive study of key topics and concepts in SPAN." },
    { code: "SPAN 6", name: "SPAN 6", units: 5.0, description: "Comprehensive study of key topics and concepts in SPAN." }
  ],
  "Theater Arts (THEA)": [
    { code: "THEA 1", name: "Theater Arts 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Theater Arts." }
  ],
  "Vietnamese (VIET)": [
    { code: "VIET 3", name: "Intermediate Vietnamese I", units: 5.0, description: "Comprehensive study of key topics and concepts in Vietnamese." },
    { code: "VIET 4", name: "Intermediate Vietnamese II", units: 5.0, description: "Comprehensive study of key topics and concepts in Vietnamese." },
    { code: "VIET 5", name: "Vietnamese 5", units: 5.0, description: "Comprehensive study of key topics and concepts in Vietnamese." },
    { code: "VIET 6", name: "Vietnamese 6", units: 5.0, description: "Comprehensive study of key topics and concepts in Vietnamese." }
  ],
  "Women's Studies (WMST)": [
    { code: "WMST 1", name: "Women's Studies 1", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 12", name: "Women's Studies 12", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 21", name: "Women's Studies 21", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 22", name: "Women's Studies Seminar", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 24", name: "Women's Studies 24", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 25", name: "Women's Studies 25", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 26", name: "Women's Studies 26", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 27", name: "Women's Studies 27", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 28", name: "Women's Studies 28", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 29", name: "Women's Studies 29", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 31", name: "Women's Studies 31", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 3C", name: "Women's Studies 3C", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 49", name: "Women's Studies 49", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 8", name: "Women's Studies 8", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 9", name: "Women's Studies 9", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." },
    { code: "WMST 9H", name: "Women's Studies 9H (Honors)", units: 4.0, description: "Comprehensive study of key topics and concepts in Women's Studies." }
  ]
};
