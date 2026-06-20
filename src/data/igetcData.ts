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
        courses: ["EWRT 1A"]
      },
      {
        id: "1B",
        nameJa: "1B: 批判的思考と論文作成",
        nameEn: "1B: Critical Thinking & Writing",
        requirementJa: "1科目（5.0単位）必須",
        requirementEn: "1 course (5.0 quarter units) required",
        courses: ["EWRT 2", "PHIL 3", "PHIL 4"]
      },
      {
        id: "1C",
        nameJa: "1C: 口頭コミュニケーション (CSU編入のみ)",
        nameEn: "1C: Oral Communication (CSU Only)",
        requirementJa: "1科目（5.0単位）必須 (UCは不要)",
        requirementEn: "1 course (5.0 quarter units) required for CSU only",
        courses: ["COMM 1", "COMM 10"]
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
        courses: ["MATH 1A", "MATH 1B", "MATH 1C", "MATH 1D", "MATH 10", "MATH 22"]
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
        requirementJa: "芸術・人文学全体から合計3科目（うち芸術から最低1科目）",
        requirementEn: "At least 1 course from Arts",
        courses: ["ARTS 1A", "ARTS 1B", "ARTS 2A", "MUSI 1A", "MUSI 8"]
      },
      {
        id: "3B",
        nameJa: "3B: 人文学 (Humanities)",
        nameEn: "3B: Humanities",
        requirementJa: "芸術・人文学全体から合計3科目（うち人文学から最低1科目）",
        requirementEn: "At least 1 course from Humanities",
        courses: ["PHIL 1", "PHIL 2", "HIST 3A", "HIST 3B", "HIST 17A", "HIST 17B", "HIST 17C", "HUMI 1", "HUMI 2"]
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
        courses: ["ECON 1A", "ECON 1B", "POLI 1", "POLI 2", "PSYC 1", "PSYC 2", "PSYC 4", "SOC 1", "SOC 5", "SOC 15", "ANTH 2", "ANTH 3", "GEO 2"]
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
        courses: ["PHYS 2A", "PHYS 4A", "PHYS 4B", "PHYS 4C", "PHYS 4D", "CHEM 1A", "CHEM 1B", "CHEM 1C", "CHEM 25", "ASTR 4", "ASTR 10", "GEO 1"]
      },
      {
        id: "5B",
        nameJa: "5B: 生物科学 (Biological Science)",
        nameEn: "5B: Biological Science",
        requirementJa: "物理と生物から各1科目。うち最低1科目は実験付きであること。",
        requirementEn: "1 course from Biological Science",
        courses: ["BIOL 6A", "BIOL 6B", "BIOL 6C", "BIOL 10", "BIOL 40A", "BIOL 40B", "BIOL 40C", "ANTH 1"]
      },
      {
        id: "5C",
        nameJa: "5C: 理科実験 (Laboratory Activity)",
        nameEn: "5C: Laboratory Activity",
        requirementJa: "Area 5Aまたは5Bに関連する実験科目の履修が必須（多くの5A/5B科目には実験が元々含まれています）。",
        requirementEn: "At least 1 laboratory course linked to Area 5A or 5B",
        courses: ["ANTH 1L"]
      }
    ]
  }
];
