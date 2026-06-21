"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { mockRequirements, Course } from '../../../data/mockRequirements';
import { useLanguage } from '../../../context/LanguageContext';
import { BookOpen, Search, CheckCircle, Info, Sparkles } from 'lucide-react';

export default function RequirementsPage() {
  const { t, language } = useLanguage();

  // Select state variables
  const [selectedCollege, setSelectedCollege] = useState('De Anza College');
  const [selectedUnivs, setSelectedUnivs] = useState<string[]>(['UC Berkeley']);
  const [selectedMajorsByUniv, setSelectedMajorsByUniv] = useState<Record<string, string[]>>({
    'UC Berkeley': ['Computer Science']
  });

  // Search and Tab Filter state variables
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'major' | 'igetc'>('all');

  // Find unique colleges
  const colleges = useMemo(() => Array.from(new Set(mockRequirements.map(r => r.fromCollege))), []);

  // Available universities for the current college
  const availableUniversities = useMemo(() => {
    const matchingReqs = mockRequirements.filter(r => r.fromCollege === selectedCollege);
    return Array.from(new Set(matchingReqs.map(r => r.toUniversity)));
  }, [selectedCollege]);

  // Get available majors for a specific university and selected college
  const getAvailableMajorsForUniv = (univ: string) => {
    const matchingReqs = mockRequirements.filter(
      r => r.fromCollege === selectedCollege && r.toUniversity === univ
    );
    return Array.from(new Set(matchingReqs.map(r => r.major)));
  };

  // Reset selections when college changes
  useEffect(() => {
    const matchingReqs = mockRequirements.filter(r => r.fromCollege === selectedCollege);
    const availableUnivs = Array.from(new Set(matchingReqs.map(r => r.toUniversity)));
    
    const firstUniv = availableUnivs[0];
    const firstUnivReqs = matchingReqs.filter(r => r.toUniversity === firstUniv);
    const firstUnivMajors = Array.from(new Set(firstUnivReqs.map(r => r.major)));
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedUnivs([firstUniv]);
    setSelectedMajorsByUniv({
      [firstUniv]: [firstUnivMajors[0]]
    });
  }, [selectedCollege]);

  const toggleUniv = (univ: string) => {
    setSelectedUnivs(prev => {
      if (prev.includes(univ)) {
        return prev.filter(u => u !== univ);
      } else {
        return [...prev, univ];
      }
    });
  };

  const toggleMajorForUniv = (univ: string, major: string) => {
    setSelectedMajorsByUniv(prev => {
      const currentList = prev[univ] || [];
      const newList = currentList.includes(major)
        ? currentList.filter(m => m !== major)
        : [...currentList, major];
      return {
        ...prev,
        [univ]: newList
      };
    });
  };

  interface CombinedCourse extends Course {
    sources: { university: string; major: string; type: 'Required' | 'Recommended' }[];
  }

  // Fetch combined courses based on selects
  const combinedRequirement = useMemo(() => {
    if (selectedUnivs.length === 0) {
      return null;
    }

    // Collect all selected (univ, major) pairs
    const activePairs: { university: string; major: string }[] = [];
    selectedUnivs.forEach(univ => {
      const selectedMajors = selectedMajorsByUniv[univ] || [];
      selectedMajors.forEach(major => {
        activePairs.push({ university: univ, major });
      });
    });

    if (activePairs.length === 0) {
      return null;
    }

    const matchingReqs = mockRequirements.filter(r => 
      r.fromCollege === selectedCollege &&
      activePairs.some(pair => pair.university === r.toUniversity && pair.major === r.major)
    );

    if (matchingReqs.length === 0) {
      return null;
    }

    // Map to store unique courses by code
    const courseMap = new Map<string, CombinedCourse>();

    matchingReqs.forEach(req => {
      req.courses.forEach(course => {
        const existing = courseMap.get(course.code);
        const sourceEntry = {
          university: req.toUniversity,
          major: req.major,
          type: course.type
        };

        if (existing) {
          existing.sources.push(sourceEntry);
          // If it is 'Required' in any of the requirements, it becomes 'Required' overall
          if (course.type === 'Required') {
            existing.type = 'Required';
          }
          if (course.isOverlap) {
            existing.isOverlap = true;
          }
          if (course.category === 'MajorPrep') {
            existing.category = 'MajorPrep';
          }
        } else {
          courseMap.set(course.code, {
            ...course,
            sources: [sourceEntry]
          });
        }
      });
    });

    const courses = Array.from(courseMap.values());

    return {
      fromCollege: selectedCollege,
      courses
    };
  }, [selectedCollege, selectedUnivs, selectedMajorsByUniv]);

  // Filter courses by search and active tab
  const filteredCourses = useMemo(() => {
    if (!combinedRequirement) return [];
    
    return combinedRequirement.courses.filter(course => {
      const matchesSearch = 
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = 
        activeTab === 'all' ||
        (activeTab === 'major' && course.category === 'MajorPrep') ||
        (activeTab === 'igetc' && course.category === 'IGETC');
      
      return matchesSearch && matchesTab;
    });
  }, [combinedRequirement, searchQuery, activeTab]);

  // Statistics calculations
  const stats = useMemo(() => {
    if (!combinedRequirement) return { total: 0, required: 0, recommended: 0 };
    const courses = combinedRequirement.courses;
    
    const required = courses.filter(c => c.type === 'Required').reduce((sum, c) => sum + c.units, 0);
    const recommended = courses.filter(c => c.type === 'Recommended').reduce((sum, c) => sum + c.units, 0);
    
    return {
      total: required + recommended,
      required,
      recommended
    };
  }, [combinedRequirement]);

  return (
    <div className="max-w-5xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Page Header */}
      <header className="pb-6 border-b border-slate-200/80">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('reqTitle')}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {t('reqSubtitle')}
        </p>
      </header>

      {/* Selections Panel */}
      <section className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-6">
        {/* College Selector */}
        <div className="max-w-xs">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            {t('selectCollege')}
          </label>
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition cursor-pointer"
          >
            {colleges.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* University Selector (Rakuten Travel style checkboxes) */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
            {t('selectUniv')}
          </label>
          <div className="flex flex-wrap gap-3">
            {availableUniversities.map((univ) => {
              const isChecked = selectedUnivs.includes(univ);
              return (
                <label
                  key={univ}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-bold cursor-pointer transition-all duration-200 select-none shadow-sm ${
                    isChecked
                      ? 'bg-blue-50/70 border-blue-500 text-blue-800 shadow-blue-500/5'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleUniv(univ)}
                    className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 border-slate-300 cursor-pointer"
                  />
                  <span>{univ}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Major Selector grouped by University */}
        {selectedUnivs.map((univ) => {
          const univMajors = getAvailableMajorsForUniv(univ);
          if (univMajors.length === 0) return null;
          
          const selectedForThisUniv = selectedMajorsByUniv[univ] || [];

          return (
            <div key={univ} className="space-y-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100/85">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {univ} - {t('selectMajor')}
              </label>
              <div className="flex flex-wrap gap-3">
                {univMajors.map((major) => {
                  const isChecked = selectedForThisUniv.includes(major);
                  return (
                    <label
                      key={major}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-bold cursor-pointer transition-all duration-200 select-none shadow-sm ${
                        isChecked
                          ? 'bg-indigo-50/70 border-indigo-500 text-indigo-800 shadow-indigo-500/5'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleMajorForUniv(univ, major)}
                        className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-slate-300 cursor-pointer"
                      />
                      <span>{major}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Requirement Area */}
      {combinedRequirement && combinedRequirement.courses.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* List Section (Left/Middle) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Tab Filters */}
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t('allTab')}
                </button>
                <button
                  onClick={() => setActiveTab('major')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === 'major' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t('majorTab')}
                </button>
                <button
                  onClick={() => setActiveTab('igetc')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === 'igetc' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t('igetcTab')}
                </button>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Courses List */}
            <div className="space-y-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course: CombinedCourse) => (
                  <div 
                    key={course.code}
                    className={`group border p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                      course.isOverlap 
                        ? 'bg-gradient-to-r from-indigo-50/40 to-blue-50/20 border-indigo-200/80 hover:border-indigo-300/80 shadow-indigo-50/10' 
                        : 'bg-white border-slate-200/60'
                    }`}
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono font-bold text-slate-800 bg-slate-100/80 px-2.5 py-1 rounded-lg text-xs tracking-wider">
                          {course.code}
                        </span>
                        
                        {/* Required/Recommended badges */}
                        {course.type === 'Required' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/10">
                            {t('required')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100/50">
                            {t('recommended')}
                          </span>
                        )}

                        {/* Overlap badge */}
                        {course.isOverlap && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/10">
                            <Sparkles className="h-3 w-3" />
                            <span>{t('doubleCounted')}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base pt-1">
                        {course.name}
                      </h3>
                      {/* Target requirements badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {course.sources?.map((src, sIdx) => {
                          const isBerkeley = src.university.includes('Berkeley');
                          return (
                            <span 
                              key={sIdx} 
                              className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded shadow-sm select-none ${
                                isBerkeley 
                                  ? 'bg-blue-50 text-blue-700 border border-blue-100/80' 
                                  : 'bg-amber-50/80 text-amber-800 border border-amber-200/80'
                              }`}
                            >
                              🏫 {src.university} ({src.major}) - {src.type === 'Required' ? t('required') : t('recommended')}
                            </span>
                          );
                        })}
                      </div>
                      {course.description && (
                        <p className="text-xs text-slate-400 pt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300 leading-relaxed">
                          {course.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-0 pt-3 sm:pt-0 border-slate-50 shrink-0">
                      <span className="text-sm font-semibold text-slate-500">
                        {course.units.toFixed(1)} {t('unitsLabel')}
                      </span>
                      <div className="h-6 w-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white border border-slate-200/60 p-10 rounded-2xl shadow-sm text-center">
                  <p className="text-slate-500 text-sm font-medium">{t('noMatches')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Stats & Summary Sidebar (Right Panel) */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>{t('summaryTitle')}</span>
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>{t('requiredTotal')}</span>
                  <span className="font-semibold text-slate-800">{stats.required.toFixed(1)} {t('unitsLabel')}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>{t('recommendedTotal')}</span>
                  <span className="font-semibold text-slate-800">{stats.recommended.toFixed(1)} {t('unitsLabel')}</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-base font-bold text-slate-900">
                  <span>{t('totalUnits')}</span>
                  <span className="text-blue-600">{stats.total.toFixed(1)} {t('unitsLabel')}</span>
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>{t('requiredRatio')}</span>
                  <span>{stats.total > 0 ? Math.round((stats.required / stats.total) * 100) : 0}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full" 
                    style={{ width: `${stats.total > 0 ? (stats.required / stats.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Hint Box */}
            <div className="bg-blue-50/50 border border-blue-100/50 p-5 rounded-2xl flex gap-3">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-700 leading-relaxed font-medium space-y-1">
                <p className="font-semibold">{t('legendTitle')}</p>
                <p>・<span className="font-bold text-indigo-800">{t('required')}</span>: {t('legendRequired')}</p>
                <p>・<span className="font-bold text-sky-800">{t('recommended')}</span>: {t('legendRecommended')}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200/60 p-12 rounded-2xl shadow-sm text-center max-w-xl mx-auto space-y-3">
          <Info className="h-8 w-8 text-slate-400 mx-auto" />
          <p className="text-slate-700 text-sm font-bold">
            {language === 'ja' ? '志望大学と目標専攻を選択してください。' : 'Please select target university and major.'}
          </p>
          <p className="text-slate-400 text-xs">
            {language === 'ja' ? '選択した条件に合致する要件データがありません。' : 'No requirements found for the selected options.'}
          </p>
        </div>
      )}
    </div>
  );
}
