export interface IgetcSubArea {
  id: string;
  nameJa: string;
  nameEn: string;
  requirementJa: string;
  requirementEn: string;
  courses: string[]; // Course codes
}

export interface IgetcArea {
  id: string;
  nameJa: string;
  nameEn: string;
  subAreas: IgetcSubArea[];
}

export const igetcData: IgetcArea[] = [
  {
    id: "Area 1",
    nameJa: "エリア 1: 英語コミュニケーション",
    nameEn: "Area 1: English Communication",
    subAreas: [
      {
        id: "1A",
        nameJa: "1A: 英語論文作成",
        nameEn: "1A: English Composition",
        requirementJa: "1科目（5.0単位）必須",
        requirementEn: "1 course (5.0 quarter units) required",
        courses: ["ENGL C1000", "ENGL C1000H", "ESL 5"]
      },
      {
        id: "1B",
        nameJa: "1B: 批判的思考と論文作成",
        nameEn: "1B: Critical Thinking & Writing",
        requirementJa: "1科目（5.0単位）必須",
        requirementEn: "1 course (5.0 quarter units) required",
        courses: ["COMM 9", "COMM 9H", "ENGL C1001", "ENGL C1001H", "PHIL 3"]
      },
      {
        id: "1C",
        nameJa: "1C: 口頭コミュニケーション",
        nameEn: "1C: Oral Communication",
        requirementJa: "1科目（5.0単位）必須",
        requirementEn: "1 course (5.0 quarter units) required",
        courses: ["COMM 10", "COMM 10H", "COMM C1000", "COMM C1000H"]
      }
    ]
  },
  {
    id: "Area 2",
    nameJa: "エリア 2: 数学的概念・論理的思考",
    nameEn: "Area 2: Mathematical Concepts",
    subAreas: [
      {
        id: "2A",
        nameJa: "2A: 数学・統計学要件",
        nameEn: "2A: Mathematical Concepts & Quantitative Reasoning",
        requirementJa: "1科目（4.0-5.0単位）必須",
        requirementEn: "1 course (4.0-5.0 quarter units) required",
        courses: ["MATH 11", "MATH 11H", "MATH 12", "MATH 17", "MATH 1A", "MATH 1AH", "MATH 1B", "MATH 1BH", "MATH 1C", "MATH 1CH", "MATH 1D", "MATH 1DH", "MATH 22", "MATH 22H", "MATH 23", "MATH 2A", "MATH 2AH", "MATH 2B", "MATH 2BH", "MATH 31", "MATH 31H", "MATH 32", "MATH 32H", "MATH 44", "POLI 20", "PSYC 15", "SOC 15", "STAT C1000", "STAT C1000H"]
      }
    ]
  },
  {
    id: "Area 3",
    nameJa: "エリア 3: 芸術・人文学",
    nameEn: "Area 3: Arts & Humanities",
    subAreas: [
      {
        id: "3A",
        nameJa: "3A: 芸術 (Arts)",
        nameEn: "3A: Arts",
        requirementJa: "1科目（4.0単位）必須",
        requirementEn: "1 course (4.0 quarter units) required",
        courses: ["ARTS 1A", "ARTS 1B", "ARTS 2A", "ARTS 2B", "ARTS 2C", "ARTS 2D", "ARTS 2F", "ARTS 2G", "ARTS 2H", "ARTS 2J", "ARTS 3TC", "ARTS 3TE", "ASAM 40", "CETH 13", "CHLX 13", "DANC 38A", "E S 3", "F/TV 1", "F/TV 1H", "F/TV 2A", "F/TV 2AH", "F/TV 2AW", "F/TV 2AWH", "F/TV 2B", "F/TV 2BH", "F/TV 2BW", "F/TV 2BWH", "F/TV 2C", "F/TV 2CH", "F/TV 2CW", "F/TV 2CWH", "F/TV 3A", "HUMI 1", "HUMI 15", "HUMI 1H", "INTL 21", "INTL 22", "MUSI 1A", "MUSI 1B", "MUSI 1C", "MUSI 1D", "NAIS 13", "NAIS 32", "PHTG 21", "PHTG 7", "THEA 1", "WMST 3C"]
      },
      {
        id: "3B",
        nameJa: "3B: 人文学 (Humanities)",
        nameEn: "3B: Humanities",
        requirementJa: "1科目（4.0-5.0単位）必須",
        requirementEn: "1 course (4.0-5.0 quarter units) required",
        courses: ["AFAM 11", "AFAM 25", "ASAM 20", "ASAM 21", "ASAM 22", "ASAM 32", "ASAM 41", "CHLX 26", "CHLX 35", "ELIT 10", "ELIT 10H", "ELIT 11", "ELIT 12", "ELIT 17", "ELIT 17H", "ELIT 19", "ELIT 21", "ELIT 22", "ELIT 24", "ELIT 28", "ELIT 38", "ELIT 39", "ELIT 40", "ELIT 41", "ELIT 41H", "ELIT 46A", "ELIT 46AH", "ELIT 46B", "ELIT 46BH", "ELIT 46C", "ELIT 46CH", "ELIT 47A", "ELIT 47B", "ELIT 48A", "ELIT 48AH", "ELIT 48B", "ELIT 48BH", "ELIT 48C", "ELIT 48CH", "ELIT 8", "ESL 6", "EWRT 1C", "F/TV 2A", "F/TV 2AH", "F/TV 2AW", "F/TV 2AWH", "F/TV 2B", "F/TV 2BH", "F/TV 2BW", "F/TV 2BWH", "F/TV 2C", "F/TV 2CH", "F/TV 2CW", "F/TV 2CWH", "F/TV 3A", "FREN 3", "GERM 3", "GERM 4", "HIST 17A", "HIST 17AH", "HIST 17B", "HIST 17BH", "HIST 17C", "HIST 17CH", "HIST 3A", "HIST 3AH", "HIST 3B", "HIST 3BH", "HIST 3C", "HIST 3CH", "HIST 6A", "HIST 6AH", "HIST 6B", "HIST 6BH", "HIST 6C", "HIST 6CH", "HNDI 3", "HUMI 1", "HUMI 10", "HUMI 13", "HUMI 16", "HUMI 18", "HUMI 18H", "HUMI 1H", "HUMI 2", "HUMI 20", "HUMI 5", "HUMI 6", "HUMI 7", "HUMI 9", "HUMI 9H", "INTL 16", "ITAL 3", "JAPN 3", "JAPN 4", "JAPN 5", "JAPN 6", "KORE 3", "LING 1", "MAND 3", "MAND 4", "MAND 5", "MAND 6", "NAIS 14", "NAIS 15", "PERS 3", "PHIL 1", "PHIL 11", "PHIL 2", "PHIL 20A", "PHIL 20B", "PHIL 20C", "PHIL 24", "PHIL 30", "PHIL 49", "PHIL 8", "PHIL 8H", "READ 10", "RUSS 3", "SIGN 3", "SPAN 3", "SPAN 4", "SPAN 5", "SPAN 6", "VIET 3", "VIET 4", "VIET 5", "VIET 6", "WMST 21", "WMST 22", "WMST 25", "WMST 26", "WMST 27", "WMST 31", "WMST 49"]
      }
    ]
  },
  {
    id: "Area 4",
    nameJa: "エリア 4: 社会・行動科学",
    nameEn: "Area 4: Social & Behavioral Sciences",
    subAreas: [
      {
        id: "4",
        nameJa: "4: 社会科学要件",
        nameEn: "4: Social & Behavioral Sciences",
        requirementJa: "最低2つの異なる分野から合計2科目（8.0-10.0単位）",
        requirementEn: "2 courses (8.0-10.0 quarter units) required from at least 2 disciplines",
        courses: ["ADMJ 29", "AFAM 10", "AFAM 11", "AFAM 12A", "AFAM 12B", "AFAM 25", "ANTH 12", "ANTH 14", "ANTH 16", "ANTH 2", "ANTH 2H", "ANTH 3", "ANTH 4", "ANTH 5", "ANTH 6", "ANTH 8", "ARTS 2F", "ARTS 3TC", "ASAM 1", "ASAM 10", "ASAM 11", "ASAM 12", "ASAM 13", "ASAM 22", "ASAM 30", "C D 10G", "C D 10H", "C D 12", "CETH 10", "CETH 11", "CETH 13", "CETH 19", "CETH 29", "CETH 8", "CHLX 10", "CHLX 11", "CHLX 12", "CHLX 26", "COMM 7", "COMM 7H", "E S 1", "E S 3", "E S 4", "ECON 1", "ECON 1H", "ECON 2", "ECON 2H", "ECON 3", "ECON 3H", "ECON 4", "ECON 5", "F/TV 10", "F/TV 10H", "GEO 10", "GEO 4", "GEO 5", "HIST 10", "HIST 10H", "HIST 16A", "HIST 16B", "HIST 17A", "HIST 17AH", "HIST 17B", "HIST 17BH", "HIST 17C", "HIST 17CH", "HIST 18A", "HIST 18B", "HIST 19A", "HIST 19B", "HIST 3A", "HIST 3AH", "HIST 3B", "HIST 3BH", "HIST 3C", "HIST 3CH", "HIST 6A", "HIST 6AH", "HIST 6B", "HIST 6BH", "HIST 6C", "HIST 6CH", "HIST 7A", "HIST 7B", "HIST 9", "HIST 9H", "HUMA 10", "HUMA 10H", "ICS 17", "ICS 17H", "ICS 19", "ICS 25", "ICS 26", "ICS 27", "ICS 27H", "ICS 36", "ICS 37", "INTL 1", "INTL 33", "INTL 5", "INTL 8", "JOUR 2", "KNES 47", "NAIS 11", "NAIS 12", "NAIS 16", "NAIS 31", "POLI 15", "POLI 16", "POLI 17", "POLI 17H", "POLI 2", "POLI 3", "POLI 5", "POLS C1000", "POLS C1000H", "PSYC 10G", "PSYC 10H", "PSYC 12", "PSYC 14", "PSYC 2", "PSYC 24", "PSYC 3", "PSYC 4", "PSYC 5", "PSYC 8", "PSYC 9", "PSYC C1000", "SOC 1", "SOC 14", "SOC 20", "SOC 28", "SOC 29", "SOC 35", "SOC 5", "WMST 1", "WMST 12", "WMST 22", "WMST 24", "WMST 25", "WMST 26", "WMST 27", "WMST 28", "WMST 29", "WMST 31", "WMST 3C", "WMST 8", "WMST 9", "WMST 9H"]
      }
    ]
  },
  {
    id: "Area 5",
    nameJa: "エリア 5: 物理・生物科学",
    nameEn: "Area 5: Physical & Biological Sciences",
    subAreas: [
      {
        id: "5A",
        nameJa: "5A: 物理科学 (Physical Science)",
        nameEn: "5A: Physical Science",
        requirementJa: "物理と生物から各1科目。うち最低1科目は実験付きであること。",
        requirementEn: "1 course from Physical Science",
        courses: ["ASTR 10", "ASTR 4", "CHEM 10", "CHEM 1A", "CHEM 1AH", "CHEM 1B", "CHEM 1BH", "CHEM 1C", "CHEM 1CH", "CHEM 25", "CHEM 30A", "CHEM 30B", "GEO 1", "GEOL 10", "GEOL 20", "MET 10", "MET 12", "PHYS 10", "PHYS 2A", "PHYS 4A"]
      },
      {
        id: "5B",
        nameJa: "5B: 生物科学 (Biological Science)",
        nameEn: "5B: Biological Science",
        requirementJa: "物理と生物から各1科目。うち最低1科目は実験付きであること。",
        requirementEn: "1 course from Biological Science",
        courses: ["ANTH 1", "ANTH 1H", "ANTH 7", "BIOL 10", "BIOL 10H", "BIOL 11", "BIOL 13", "BIOL 15", "BIOL 26", "BIOL 40C", "BIOL 6A", "BIOL 6AH", "BIOL 6B", "BIOL 6C", "BIOL 6CH", "ESCI 1", "ESCI 19"]
      },
      {
        id: "5C",
        nameJa: "5C: 理科実験 (Laboratory Activity)",
        nameEn: "5C: Laboratory Activity",
        requirementJa: "Area 5Aまたは5Bに関連する実験科目の履修が必須（多くの5A/5B科目には実験が元々含まれています）。",
        requirementEn: "At least 1 laboratory course linked to Area 5A or 5B",
        courses: ["ANTH 1L", "ESCI 1L", "MET 10L", "MET 20L"]
      }
    ]
  },
  {
    id: "Area 6",
    nameJa: "エリア 6: エスニック・スタディーズ",
    nameEn: "Area 6: Ethnic Studies",
    subAreas: [
      {
        id: "6",
        nameJa: "6: エスニック・スタディーズ要件",
        nameEn: "6: Ethnic Studies",
        requirementJa: "1科目（4.0単位）必須。アフリカ系、アジア系、チカーノ、先住民族研究などの科目が対象です。",
        requirementEn: "1 course (4.0 quarter units) required",
        courses: ["ADMJ 29", "AFAM 10", "AFAM 11", "ASAM 11", "CETH 10", "CETH 29", "CHLX 10", "NAIS 12"]
      }
    ]
  }
];
