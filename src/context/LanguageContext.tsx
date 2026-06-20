"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ja' | 'en';

export const translations = {
  ja: {
    // Layout
    myEdPlan: 'My Ed Plan',
    requirements: '要件確認',
    myPage: 'マイページ',
    langName: '日本語',
    
    // EdPlan
    edplanTitle: 'My Ed Plan',
    edplanSubtitle: '各クォーター/セメスターに受講クラスを配置して、編入までの履修プランを作成・管理します。',
    registeredUnits: '登録済み総単位数',
    unitsLabel: 'Units',
    addCourse: '授業を追加',
    addMethod: '追加方法',
    customAdd: '✍️ 手入力で追加',
    majorReqMethod: '志望専攻の推奨科目から選択',
    deAnzaCatalogMethod: 'De Anza College カタログから選択',
    selectDepartment: '分野 (Department) を選択',
    selectCourseLabel: '授業 (Course) を選択',
    courseType: '区分 (Type)',
    addBtn: '追加',
    cancelBtn: 'キャンセル',
    placeholderCode: '例: MATH 1A',
    placeholderName: '例: Calculus I',
    required: '必須',
    recommended: '推奨',
    noCourses: '授業が登録されていません。',
    duplicateWarning: 'は既にこの学期に登録されています。',
    inputError: '科目コードと科目名を入力してください。',
    termTotal: 'Total',
    addTermBtn: '学期/クォーターを追加',
    selectTermLabel: '追加するクォーターを選択',
    deleteTermBtn: 'クォーターを削除',
    deleteTermConfirm: 'このクォーターと登録されているすべての授業を削除してもよろしいですか？',
    igetcList: 'IGETC リスト',
    igetcSubtitle: '一般教養要件（IGETC）の取得状況と対象科目をチェックします。',
    igetcProgress: 'IGETC 達成度',
    igetcPlanned: '計画中',
    igetcCompleted: '完了',
    igetcRemaining: '未履修',
    igetcStatus: 'ステータス',
    igetcRequirement: '要件',
    igetcCourses: '対象科目',
    igetcAreaProgress: 'エリア達成状況',
    igetcNote: '※ 本計画上の登録授業（My Ed Plan）と連動して達成状況が更新されます。',
    
    // Requirements
    reqTitle: '要件確認 (Transfer Requirements)',
    reqSubtitle: '志望大学および専攻に合致した、必要な一般教養科目(IGETC)と専攻要件(Major Prep)の単位をチェックできます。',
    selectCollege: '所属コミカレ',
    selectUniv: '志望大学',
    selectMajor: '目標専攻',
    allTab: 'すべて',
    majorTab: '専攻要件',
    igetcTab: '一般教養 (IGETC)',
    searchPlaceholder: '科目コード、名前で検索...',
    noMatches: '該当する科目がありません。',
    summaryTitle: '単位サマリー',
    requiredTotal: '必須科目合計',
    recommendedTotal: '推奨科目合計',
    totalUnits: '要件総単位数',
    requiredRatio: '必須の比率',
    noData: '指定された条件の要件データがありません。',
    legendTitle: '凡例について',
    legendRequired: '編入出願資格を得るために履修が必須の科目を表します。',
    legendRecommended: '必須ではありませんが、編入後の専攻学習や合格率向上のために推奨される科目です。',
    doubleCounted: '重複要件 (Double Counted)',
    
    // Profile
    profileTitle: 'マイページ (My Page)',
    profileSubtitle: 'アカウント情報や設定を管理します。',
    underConstruction: 'この画面は現在準備中です。'
  },
  en: {
    // Layout
    myEdPlan: 'My Ed Plan',
    requirements: 'Requirements',
    myPage: 'My Page',
    langName: 'English',
    
    // EdPlan
    edplanTitle: 'My Ed Plan',
    edplanSubtitle: 'Plan and manage your transfer courses by placing classes into each quarter/semester.',
    registeredUnits: 'Registered Units',
    unitsLabel: 'Units',
    addCourse: 'Add Course',
    addMethod: 'Method',
    customAdd: '✍️ Add Custom Course',
    majorReqMethod: 'Select from Target Major Requirements',
    deAnzaCatalogMethod: 'Select from De Anza College Catalog',
    selectDepartment: 'Select Department',
    selectCourseLabel: 'Select Course',
    courseType: 'Type',
    addBtn: 'Add',
    cancelBtn: 'Cancel',
    placeholderCode: 'e.g. MATH 1A',
    placeholderName: 'e.g. Calculus I',
    required: 'Required',
    recommended: 'Recommended',
    noCourses: 'No courses registered yet.',
    duplicateWarning: 'is already registered in this term.',
    inputError: 'Please enter course code and course name.',
    termTotal: 'Total',
    addTermBtn: 'Add Term/Quarter',
    selectTermLabel: 'Select Quarter to Add',
    deleteTermBtn: 'Delete Quarter',
    deleteTermConfirm: 'Are you sure you want to delete this quarter and all its registered courses?',
    igetcList: 'IGETC List',
    igetcSubtitle: 'Track your general education requirements (IGETC) and check eligible courses.',
    igetcProgress: 'IGETC Progress',
    igetcPlanned: 'Planned',
    igetcCompleted: 'Completed',
    igetcRemaining: 'Not Started',
    igetcStatus: 'Status',
    igetcRequirement: 'Requirement',
    igetcCourses: 'Eligible Courses',
    igetcAreaProgress: 'Area Status',
    igetcNote: '* Progress is dynamically updated based on the courses added to your Ed Plan.',
    
    // Requirements
    reqTitle: 'Transfer Requirements',
    reqSubtitle: 'Check general education (IGETC) and major preparation requirements for your goal college.',
    selectCollege: 'Current College',
    selectUniv: 'Target University',
    selectMajor: 'Target Major',
    allTab: 'All',
    majorTab: 'Major Prep',
    igetcTab: 'GE (IGETC)',
    searchPlaceholder: 'Search by code or title...',
    noMatches: 'No matching courses found.',
    summaryTitle: 'Unit Summary',
    requiredTotal: 'Required Total',
    recommendedTotal: 'Recommended Total',
    totalUnits: 'Total Target Units',
    requiredRatio: 'Required Ratio',
    noData: 'No requirements found for the selected options.',
    legendTitle: 'About Legends',
    legendRequired: 'Courses required to be eligible for transfer.',
    legendRecommended: 'Recommended courses to prepare for upper-division classes and boost admissions chances.',
    doubleCounted: 'Double Counted',
    
    // Profile
    profileTitle: 'My Page',
    profileSubtitle: 'Manage your account details and preferences.',
    underConstruction: 'This page is currently under construction.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['ja']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ja');

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem('transfumer_language') as Language;
    if (saved === 'ja' || saved === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('transfumer_language', lang);
  };

  const t = (key: keyof typeof translations['ja']): string => {
    return translations[language][key] || translations['ja'][key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
