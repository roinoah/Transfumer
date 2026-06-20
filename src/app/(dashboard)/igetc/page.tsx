"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { igetcData, IgetcSubArea } from '../../../data/igetcData';
import { deAnzaCatalog, CatalogCourse } from '../../../data/deAnzaCatalog';
import { Course } from '../../../data/mockRequirements';
import { Search, CheckCircle2, Circle, AlertCircle, Layers } from 'lucide-react';

export default function IgetcPage() {
  const { t, language } = useLanguage();
  const [activeAreaId, setActiveAreaId] = useState<string>("Area 1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [plannedCourseCodes, setPlannedCourseCodes] = useState<string[]>([]);

  // Load planned courses from local storage
  useEffect(() => {
    const saved = localStorage.getItem('transfumer_plans');
    if (saved) {
      try {
        const plans = JSON.parse(saved) as Record<string, Course[]>;
        const codes = Object.values(plans).flatMap((termCourses: Course[]) => 
          termCourses.map((c: Course) => c.code.toUpperCase())
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPlannedCourseCodes(codes);
      } catch (e) {
        console.error('Failed to parse plans from localStorage', e);
      }
    }
  }, []);

  // Helper to check if a specific course code is planned
  const isCoursePlanned = (code: string) => {
    return plannedCourseCodes.includes(code.toUpperCase());
  };

  // Helper to check if a sub-area is satisfied
  const isSubAreaSatisfied = (subArea: IgetcSubArea) => {
    // 1C is for CSU only, so if we're evaluating UC it might be optional, 
    // but we can check if they have at least one course planned.
    return subArea.courses.some(code => isCoursePlanned(code));
  };

  // Helper to find course details in catalog
  const getCourseDetails = (code: string): CatalogCourse | null => {
    for (const courses of Object.values(deAnzaCatalog)) {
      const match = courses.find(c => c.code === code);
      if (match) return match;
    }
    return null;
  };

  // Calculate detailed progress stats
  const getProgressStats = () => {
    const totalSubAreas = 9;
    let satisfiedCount = 0;
    
    // Area 1
    if (isCoursePlanned("EWRT 1A")) satisfiedCount++; // 1A
    if (["EWRT 2", "PHIL 3", "PHIL 4"].some(c => isCoursePlanned(c))) satisfiedCount++; // 1B
    
    // Area 2
    if (["MATH 1A", "MATH 1B", "MATH 1C", "MATH 1D", "MATH 10", "MATH 22"].some(c => isCoursePlanned(c))) satisfiedCount++; // 2A
    
    // Area 3
    const has3A = ["ARTS 1A", "ARTS 1B", "ARTS 2A", "MUSI 1A", "MUSI 8"].some(c => isCoursePlanned(c));
    const has3B = ["PHIL 1", "PHIL 2", "HIST 3A", "HIST 3B", "HIST 17A", "HIST 17B", "HIST 17C", "HUMI 1", "HUMI 2"].some(c => isCoursePlanned(c));
    if (has3A) satisfiedCount++;
    if (has3B) satisfiedCount++;
    
    // Area 4
    const area4Count = ["ECON 1A", "ECON 1B", "POLI 1", "POLI 2", "PSYC 1", "PSYC 2", "PSYC 4", "SOC 1", "SOC 5", "SOC 15", "ANTH 2", "ANTH 3", "GEO 2"].filter(c => isCoursePlanned(c)).length;
    if (area4Count >= 2) satisfiedCount++;
    
    // Area 5
    if (["PHYS 2A", "PHYS 4A", "PHYS 4B", "PHYS 4C", "PHYS 4D", "CHEM 1A", "CHEM 1B", "CHEM 1C", "CHEM 25", "ASTR 4", "ASTR 10", "GEO 1"].some(c => isCoursePlanned(c))) satisfiedCount++; // 5A
    if (["BIOL 6A", "BIOL 6B", "BIOL 6C", "BIOL 10", "BIOL 40A", "BIOL 40B", "BIOL 40C", "ANTH 1"].some(c => isCoursePlanned(c))) satisfiedCount++; // 5B
    if (isCoursePlanned("ANTH 1L") || ["PHYS 4A", "PHYS 4B", "PHYS 4C", "PHYS 4D", "CHEM 1A", "CHEM 1B", "CHEM 1C", "BIOL 6A", "BIOL 6B", "BIOL 6C"].some(c => isCoursePlanned(c))) satisfiedCount++; // 5C (lab)

    const percentage = Math.min(Math.round((satisfiedCount / totalSubAreas) * 100), 100);
    return { satisfiedCount, totalSubAreas, percentage };
  };

  const { satisfiedCount, totalSubAreas, percentage } = getProgressStats();

  const activeArea = igetcData.find(a => a.id === activeAreaId) || igetcData[0];

  return (
    <div className="max-w-5xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="pb-6 border-b border-slate-200/80">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t('igetcList')}</h1>
        <p className="mt-2 text-sm text-slate-500">{t('igetcSubtitle')}</p>
      </header>

      {/* Progress Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-md shadow-blue-500/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-extrabold text-lg flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <span>{t('igetcProgress')}</span>
            </h2>
            <p className="text-xs text-blue-100 leading-relaxed max-w-sm">
              {language === 'ja'
                ? 'UCやCSU等の志望大学に必須な一般教養要件（IGETC）の取得計画の全体像です。'
                : 'Overall look of your general education requirements (IGETC) mapped for UC/CSU transfers.'}
            </p>
            <span className="inline-block text-[10px] bg-blue-500/35 border border-blue-400/20 px-2 py-0.5 rounded font-medium text-blue-200">
              {t('igetcNote')}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="relative h-24 w-24 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20">
              <span className="text-2xl font-black">{percentage}%</span>
            </div>
            <span className="mt-2.5 text-xs font-bold text-blue-100">
              {satisfiedCount} / {totalSubAreas} {language === 'ja' ? 'エリア完了' : 'Areas Completed'}
            </span>
          </div>
        </div>

        {/* Quick status list */}
        <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-800 text-sm">{t('igetcAreaProgress')}</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
            {igetcData.map((area) => {
              const isAreaSatisfied = area.subAreas.every(sub => {
                if (sub.id === "1C") return true; // Ignore CSU specific 1C in general UC list
                return isSubAreaSatisfied(sub);
              });

              return (
                <div key={area.id} className="flex items-center gap-2 py-0.5">
                  {isAreaSatisfied ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Circle className="h-4 w-4 text-slate-300 shrink-0" />
                  )}
                  <span className="font-semibold text-slate-600 truncate">
                    {language === 'ja' ? area.id.replace("Area", "エリア") : area.id}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabs & Search Area */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* IGETC Area Tabs */}
          <div className="flex border border-slate-200/60 bg-white p-1 rounded-xl shadow-sm overflow-x-auto gap-0.5 shrink-0">
            {igetcData.map((area) => (
              <button
                key={area.id}
                onClick={() => {
                  setActiveAreaId(area.id);
                  setSearchQuery("");
                }}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeAreaId === area.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {language === 'ja' ? area.id.replace("Area", "エリア ") : area.id}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400 font-semibold shadow-sm"
            />
          </div>
        </div>

        {/* Selected Area Content */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm">
            <h2 className="text-base font-extrabold text-slate-900 mb-1">
              {language === 'ja' ? activeArea.nameJa : activeArea.nameEn}
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              {language === 'ja' ? '一般教養要件を満たす科目のリストです。' : 'Core course selections to fulfill general education requirements.'}
            </p>
          </div>

          {activeArea.subAreas.map((subArea) => {
            const satisfied = isSubAreaSatisfied(subArea);
            
            // Filter courses based on search query
            const matchedCourses = subArea.courses
              .map(code => getCourseDetails(code))
              .filter((c): c is CatalogCourse => {
                if (!c) return false;
                if (!searchQuery) return true;
                const query = searchQuery.toLowerCase();
                return c.code.toLowerCase().includes(query) || c.name.toLowerCase().includes(query);
              });

            if (searchQuery && matchedCourses.length === 0) return null;

            return (
              <div key={subArea.id} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm space-y-4">
                {/* Subarea Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-3 gap-2">
                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-slate-800 text-sm">
                      {language === 'ja' ? subArea.nameJa : subArea.nameEn}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {t('igetcRequirement')}: {language === 'ja' ? subArea.requirementJa : subArea.requirementEn}
                    </p>
                  </div>
                  <span className={`self-start sm:self-auto text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1.5 border ${
                    satisfied
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-100'
                      : 'text-slate-500 bg-slate-50 border-slate-200'
                  }`}>
                    {satisfied ? (
                      <>
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{t('igetcCompleted')}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3" />
                        <span>{t('igetcRemaining')}</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedCourses.map((course) => {
                    const planned = isCoursePlanned(course.code);

                    return (
                      <div
                        key={course.code}
                        className={`border rounded-xl p-4 transition duration-200 shadow-sm flex flex-col justify-between min-h-[110px] ${
                          planned
                            ? 'bg-blue-50/20 border-blue-200 shadow-blue-500/5'
                            : 'bg-slate-50/50 hover:bg-white border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-slate-700 bg-white border border-slate-200/60 px-2 py-0.5 rounded shadow-sm">
                              {course.code}
                            </span>
                            {planned && (
                              <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                <span>{t('igetcPlanned')}</span>
                              </span>
                            )}
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-xs">
                            {course.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 leading-normal font-medium italic">
                            {course.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100/80 text-[10px] text-slate-500 font-bold uppercase tracking-wider flex justify-between">
                          <span>{course.units.toFixed(1)} {t('unitsLabel')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
