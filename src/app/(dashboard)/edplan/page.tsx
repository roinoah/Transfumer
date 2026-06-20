"use client";

import React, { useState, useEffect } from 'react';
import { mockRequirements, Course } from '../../../data/mockRequirements';
import { deAnzaCatalog } from '../../../data/deAnzaCatalog';
import { useLanguage } from '../../../context/LanguageContext';
import { Plus, Trash2, Calendar, LayoutGrid } from 'lucide-react';

// Chronological term weight parser
const parseTerm = (term: string) => {
  const [season, yearStr] = term.split(' ');
  const year = parseInt(yearStr, 10);
  const seasonOrder: Record<string, number> = {
    'Winter': 0,
    'Spring': 1,
    'Summer': 2,
    'Fall': 3
  };
  return year * 4 + (seasonOrder[season] ?? 0);
};

// Generates next available logical quarters not already in plans
const getNextAvailableTerms = (currentTerms: string[]) => {
  const terms: string[] = [];
  for (let year = 2026; year <= 2031; year++) {
    for (const season of ['Winter', 'Spring', 'Summer', 'Fall']) {
      const termName = `${season} ${year}`;
      if (!currentTerms.includes(termName)) {
        terms.push(termName);
      }
    }
  }
  return terms.sort((a, b) => parseTerm(a) - parseTerm(b));
};

export default function EdPlanPage() {
  const { t, language } = useLanguage();

  // Setup default term plans structure
  const defaultPlans: Record<string, Course[]> = {
    'Fall 2026': [],
    'Winter 2027': [],
    'Spring 2027': [],
  };

  const [termPlans, setTermPlans] = useState<Record<string, Course[]>>(defaultPlans);
  const [isLoaded, setIsLoaded] = useState(false);

  // States for adding a new term
  const [isAddingTerm, setIsAddingTerm] = useState(false);
  const [newTermSelectValue, setNewTermSelectValue] = useState('');

  // Modal / Dropdown state for adding a course
  const [activeAddTerm, setActiveAddTerm] = useState<string | null>(null);
  const [addMethod, setAddMethod] = useState<'major' | 'catalog' | 'manual'>('major');
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<string>('0');
  
  // Catalog course form states
  const [selectedDept, setSelectedDept] = useState<string>(Object.keys(deAnzaCatalog)[0]);
  const [selectedCatalogCourseCode, setSelectedCatalogCourseCode] = useState<string>(
    deAnzaCatalog[Object.keys(deAnzaCatalog)[0]]?.[0]?.code || ''
  );
  const [catalogType, setCatalogType] = useState<'Required' | 'Recommended'>('Required');

  // Custom course form states
  const [customCode, setCustomCode] = useState('');
  const [customName, setCustomName] = useState('');
  const [customUnits, setCustomUnits] = useState('4.0');
  const [customType, setCustomType] = useState<'Required' | 'Recommended'>('Required');

  // Load plans from Local Storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('transfumer_plans');
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTermPlans(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved plans from localStorage', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save plans to Local Storage on update
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('transfumer_plans', JSON.stringify(termPlans));
    }
  }, [termPlans, isLoaded]);

  // Aggregate list of all mock courses for dropdown selection
  const availableMockCourses = mockRequirements[0].courses; // De Anza to UC Berkeley CS default list

  const handleAddCourse = (term: string) => {
    let newCourse: Course;

    if (addMethod === 'manual') {
      if (!customCode || !customName) {
        alert(t('inputError'));
        return;
      }
      newCourse = {
        code: customCode.toUpperCase(),
        name: customName,
        units: parseFloat(customUnits) || 4.0,
        type: customType,
        category: 'MajorPrep'
      };
    } else if (addMethod === 'catalog') {
      const deptCourses = deAnzaCatalog[selectedDept] || [];
      const catalogCourse = deptCourses.find(c => c.code === selectedCatalogCourseCode);
      if (!catalogCourse) {
        alert(language === 'ja' ? '有効なコースを選択してください。' : 'Please select a valid course.');
        return;
      }
      const isStemOrBusiness = /MATH|CIS|PHYS|CHEM|ECON|BUS|ACCT/i.test(selectedDept);
      newCourse = {
        code: catalogCourse.code,
        name: catalogCourse.name,
        units: catalogCourse.units,
        type: catalogType,
        category: isStemOrBusiness ? 'MajorPrep' : 'IGETC',
        description: catalogCourse.description
      };
    } else {
      // addMethod === 'major'
      const selectedIndex = parseInt(selectedCourseIndex, 10);
      const mockCourse = availableMockCourses[selectedIndex];
      if (!mockCourse) {
        alert(language === 'ja' ? '有効なコースを選択してください。' : 'Please select a valid course.');
        return;
      }
      newCourse = {
        ...mockCourse
      };
    }

    setTermPlans(prev => {
      // Avoid adding duplicate courses in the same term
      const alreadyExists = prev[term].some(c => c.code === newCourse.code);
      if (alreadyExists) {
        alert(`${newCourse.code} ${t('duplicateWarning')}`);
        return prev;
      }
      return {
        ...prev,
        [term]: [...prev[term], newCourse]
      };
    });

    // Reset inputs
    setCustomCode('');
    setCustomName('');
    setCustomUnits('4.0');
    setCustomType('Required');
    setSelectedCourseIndex('0');
    setActiveAddTerm(null);
  };

  const handleDeleteCourse = (term: string, code: string) => {
    setTermPlans(prev => ({
      ...prev,
      [term]: prev[term].filter(course => course.code !== code)
    }));
  };

  const handleAddTerm = (termName: string) => {
    if (!termName) return;
    setTermPlans(prev => {
      if (prev[termName]) return prev;
      return {
        ...prev,
        [termName]: []
      };
    });
    setIsAddingTerm(false);
  };

  const handleDeleteTerm = (termName: string) => {
    const hasCourses = termPlans[termName]?.length > 0;
    if (hasCourses) {
      const confirmDelete = window.confirm(t('deleteTermConfirm'));
      if (!confirmDelete) return;
    }
    setTermPlans(prev => {
      const copy = { ...prev };
      delete copy[termName];
      return copy;
    });
  };

  // Get next available terms to add
  const availableNextTerms = getNextAvailableTerms(Object.keys(termPlans));

  // Determine the default term selection value dynamically during render
  const selectedTermValue = availableNextTerms.includes(newTermSelectValue)
    ? newTermSelectValue
    : (availableNextTerms[0] || '');

  // Calculate stats
  const calculateTermUnits = (courses: Course[]) => {
    return courses.reduce((sum, c) => sum + c.units, 0);
  };

  const calculateTotalUnits = () => {
    return Object.values(termPlans).reduce((sum, termCourses) => sum + calculateTermUnits(termCourses), 0);
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Page Header */}
      <header className="pb-6 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t('edplanTitle')}</h1>
          <p className="mt-2 text-sm text-slate-500">
            {t('edplanSubtitle')}
          </p>
        </div>
        <div className="bg-white border border-slate-200/60 px-5 py-3 rounded-2xl shadow-sm text-center sm:text-right shrink-0">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">{t('registeredUnits')}</span>
          <span className="text-2xl font-black text-blue-600">
            {calculateTotalUnits().toFixed(1)} <span className="text-sm font-semibold text-slate-500">{t('unitsLabel')}</span>
          </span>
        </div>
      </header>

      {/* Timeline Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(termPlans)
          .sort((a, b) => parseTerm(a[0]) - parseTerm(b[0]))
          .map(([term, courses]) => {
            const termUnits = calculateTermUnits(courses);
            const isAdding = activeAddTerm === term;

            return (
              <div key={term} className="bg-white border border-slate-200/60 rounded-2xl shadow-sm flex flex-col min-h-[450px]">
                {/* Term Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-2xl">
                  <div>
                    <h2 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                      <Calendar className="h-4.5 w-4.5 text-blue-600" />
                      <span>{term}</span>
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-lg">
                      {t('termTotal')}: {termUnits.toFixed(1)} {t('unitsLabel')}
                    </span>
                    <button
                      onClick={() => handleDeleteTerm(term)}
                      className="p-1 text-slate-400 hover:text-red-500 hover:bg-slate-100/80 rounded transition-colors cursor-pointer"
                      title={t('deleteTermBtn')}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              {/* Course Cards Container */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[350px]">
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <div
                      key={course.code}
                      className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-xl p-4 transition-all duration-200 shadow-sm flex flex-col justify-between min-h-[90px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5 pr-6">
                          <span className="font-mono text-xs font-bold text-slate-700 bg-white border border-slate-200/60 px-2 py-0.5 rounded">
                            {course.code}
                          </span>
                          {course.type === 'Required' ? (
                            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded-full">
                              {t('required')}
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                              {t('recommended')}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm line-clamp-2">
                          {course.name}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100/50 text-[11px] text-slate-500 font-semibold">
                        <span>{course.units.toFixed(1)} {t('unitsLabel')}</span>
                      </div>
                      
                      {/* Delete Trigger */}
                      <button
                        onClick={() => handleDeleteCourse(term, course.code)}
                        className="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-slate-100 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                        aria-label="Delete course"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 border border-dashed border-slate-200 rounded-xl min-h-[180px]">
                    <LayoutGrid className="h-8 w-8 text-slate-300 mb-2" />
                    <p className="text-xs font-medium">{t('noCourses')}</p>
                  </div>
                )}
              </div>

              {/* Add Course UI Block */}
              <div className="p-4 border-t border-slate-100">
                {isAdding ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('addMethod')}</label>
                      <select
                        value={addMethod}
                        onChange={(e) => setAddMethod(e.target.value as 'major' | 'catalog' | 'manual')}
                        className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="major">📚 {t('majorReqMethod')}</option>
                        <option value="catalog">🏫 {t('deAnzaCatalogMethod')}</option>
                        <option value="manual">✍️ {t('customAdd')}</option>
                      </select>
                    </div>

                    {/* Conditional input fields depending on method */}
                    {addMethod === 'major' && (
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('selectCourseLabel')}</label>
                        <select
                          value={selectedCourseIndex}
                          onChange={(e) => setSelectedCourseIndex(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {availableMockCourses.map((c, idx) => (
                            <option key={c.code} value={idx}>
                              {c.code} - {c.name} ({c.units}U)
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {addMethod === 'catalog' && (
                      <div className="space-y-2.5">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('selectDepartment')}</label>
                          <select
                            value={selectedDept}
                            onChange={(e) => {
                              const dept = e.target.value;
                              setSelectedDept(dept);
                              const courses = deAnzaCatalog[dept] || [];
                              setSelectedCatalogCourseCode(courses[0]?.code || '');
                            }}
                            className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            {Object.keys(deAnzaCatalog).map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('selectCourseLabel')}</label>
                          <select
                            value={selectedCatalogCourseCode}
                            onChange={(e) => setSelectedCatalogCourseCode(e.target.value)}
                            className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            {(deAnzaCatalog[selectedDept] || []).map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.code} - {c.name} ({c.units}U)
                              </option>
                            ))}
                          </select>
                        </div>

                        {selectedCatalogCourseCode && (
                          <div className="bg-white border border-slate-200/60 p-2.5 rounded-lg text-[10px] text-slate-500 space-y-1 shadow-sm">
                            {(() => {
                              const course = (deAnzaCatalog[selectedDept] || []).find(c => c.code === selectedCatalogCourseCode);
                              if (!course) return null;
                              return (
                                <>
                                  <div className="font-bold text-slate-700 flex justify-between">
                                    <span>{course.code}</span>
                                    <span className="text-blue-600 font-extrabold">{course.units} Units</span>
                                  </div>
                                  <p className="italic leading-normal text-slate-400 font-normal">{course.description}</p>
                                </>
                              );
                            })()}
                          </div>
                        )}

                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('courseType')}</label>
                          <select
                            value={catalogType}
                            onChange={(e) => setCatalogType(e.target.value as 'Required' | 'Recommended')}
                            className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="Required">{t('required')}</option>
                            <option value="Recommended">{t('recommended')}</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {addMethod === 'manual' && (
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder={t('placeholderCode')}
                          value={customCode}
                          onChange={(e) => setCustomCode(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder={t('placeholderName')}
                          value={customName}
                          onChange={(e) => setCustomName(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="flex gap-2">
                          <select
                            value={customUnits}
                            onChange={(e) => setCustomUnits(e.target.value)}
                            className="w-1/2 text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none"
                          >
                            <option value="1.0">1.0 Unit</option>
                            <option value="2.0">2.0 Units</option>
                            <option value="3.0">3.0 Units</option>
                            <option value="4.0">4.0 Units</option>
                            <option value="4.5">4.5 Units</option>
                            <option value="5.0">5.0 Units</option>
                            <option value="6.0">6.0 Units</option>
                          </select>
                          <select
                            value={customType}
                            onChange={(e) => setCustomType(e.target.value as 'Required' | 'Recommended')}
                            className="w-1/2 text-xs bg-white border border-slate-200 p-2 rounded-lg text-slate-700 font-semibold focus:outline-none"
                          >
                            <option value="Required">{t('required')}</option>
                            <option value="Recommended">{t('recommended')}</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => handleAddCourse(term)}
                        className="w-1/2 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition cursor-pointer"
                      >
                        {t('addBtn')}
                      </button>
                      <button
                        onClick={() => setActiveAddTerm(null)}
                        className="w-1/2 text-xs bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 font-semibold py-2 rounded-lg transition cursor-pointer"
                      >
                        {t('cancelBtn')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveAddTerm(term)}
                    className="w-full py-2 border border-dashed border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                    <span>{t('addCourse')}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Add Term Card */}
        <div className="border border-dashed border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[450px] transition-all duration-200 shadow-sm bg-white/40">
          {!isAddingTerm ? (
            <button
              onClick={() => {
                if (availableNextTerms.length > 0) {
                  setNewTermSelectValue(availableNextTerms[0]);
                }
                setIsAddingTerm(true);
              }}
              className="group flex flex-col items-center justify-center cursor-pointer space-y-3 p-8 rounded-xl hover:bg-slate-50/80 transition-all duration-200 w-full h-full"
            >
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Plus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{t('addTermBtn')}</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px] leading-relaxed">
                  {language === 'ja' 
                    ? '新しいクォーターを追加して履修計画を拡大します。' 
                    : 'Add a new quarter to expand your education path.'}
                </p>
              </div>
            </button>
          ) : (
            <div className="w-full max-w-[240px] space-y-4 animate-fadeIn">
              <div className="text-center space-y-1">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto" />
                <h3 className="font-bold text-slate-800 text-sm">{t('selectTermLabel')}</h3>
              </div>
              
              <select
                value={selectedTermValue}
                onChange={(e) => setNewTermSelectValue(e.target.value)}
                className="w-full text-xs bg-white border border-slate-200 p-2.5 rounded-xl text-slate-700 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              >
                {availableNextTerms.slice(0, 12).map((termName) => (
                  <option key={termName} value={termName}>
                    {termName}
                  </option>
                ))}
              </select>

              <div className="flex gap-2 w-full pt-2">
                <button
                  onClick={() => {
                    handleAddTerm(selectedTermValue);
                  }}
                  className="w-1/2 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition shadow-sm cursor-pointer"
                >
                  {t('addBtn')}
                </button>
                <button
                  onClick={() => setIsAddingTerm(false)}
                  className="w-1/2 text-xs bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 font-semibold py-2 rounded-xl transition shadow-sm cursor-pointer"
                >
                  {t('cancelBtn')}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
