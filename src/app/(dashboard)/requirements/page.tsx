"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { mockRequirements, Course, TransferRequirement } from '../../../data/mockRequirements';
import { deAnzaCatalog } from '../../../data/deAnzaCatalog';
import { useLanguage } from '../../../context/LanguageContext';
import { BookOpen, Search, CheckCircle, Info, Sparkles, Upload, X, FileText, Loader2 } from 'lucide-react';

export interface TargetCourse {
  code: string;
  name: string;
}

export interface CombinedCourse extends Course {
  sources: { university: string; major: string; type: 'Required' | 'Recommended' }[];
}

export type RenderOption =
  | { type: 'single'; course: CombinedCourse }
  | { type: 'andGroup'; targetCourse: TargetCourse; courses: CombinedCourse[] }
  | { type: 'placeholder'; code: string; name: string; description?: string; units: number };

export type RenderItem =
  | { type: 'single'; course: CombinedCourse; originalIndex: number }
  | { type: 'andGroup'; targetCourse: TargetCourse; courses: CombinedCourse[]; originalIndex: number }
  | { type: 'orGroup'; name: string; options: RenderOption[]; originalIndex: number };

export default function RequirementsPage() {
  const { t, language } = useLanguage();

  // Select state variables
  const [selectedCollege, setSelectedCollege] = useState('De Anza College');
  const [selectedUnivs, setSelectedUnivs] = useState<string[]>(['UC Berkeley']);
  const [selectedMajorsByUniv, setSelectedMajorsByUniv] = useState<Record<string, string[]>>({
    'UC Berkeley': ['Computer Science']
  });

  // Search state variable
  const [searchQuery, setSearchQuery] = useState('');

  // Selected option course codes for OR choice groups
  const [selectedOrCourses, setSelectedOrCourses] = useState<Record<string, string>>({});

  // Custom requirements list state loaded from localStorage
  const [customRequirementsList, setCustomRequirementsList] = useState<TransferRequirement[]>([]);

  // PDF uploading and parsing states
  const [isUploading, setIsUploading] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<{
    univ: string;
    major: string;
    courses: { code: string; name: string; units: number; type: 'Required' | 'Recommended'; description?: string; checked: boolean }[];
  } | null>(null);

  // Edit fields for confirmation modal
  const [editUniv, setEditUniv] = useState('');
  const [editMajor, setEditMajor] = useState('');

  // Load custom requirements list from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('transfumer_custom_requirements_list');
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCustomRequirementsList(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Combine static and custom requirements list
  const allRequirements = useMemo(() => {
    return [...customRequirementsList, ...mockRequirements];
  }, [customRequirementsList]);

  // Find unique colleges
  const colleges = useMemo(() => Array.from(new Set(allRequirements.map(r => r.fromCollege))), [allRequirements]);

  // Available universities for the current college
  const availableUniversities = useMemo(() => {
    const matchingReqs = allRequirements.filter(r => r.fromCollege === selectedCollege);
    return Array.from(new Set(matchingReqs.map(r => r.toUniversity)));
  }, [selectedCollege, allRequirements]);

  // Get available majors for a specific university and selected college
  const getAvailableMajorsForUniv = (univ: string) => {
    const matchingReqs = allRequirements.filter(
      r => r.fromCollege === selectedCollege && r.toUniversity === univ
    );
    return Array.from(new Set(matchingReqs.map(r => r.major)));
  };

  // Reset selections when college changes
  useEffect(() => {
    const matchingReqs = allRequirements.filter(r => r.fromCollege === selectedCollege);
    const availableUnivs = Array.from(new Set(matchingReqs.map(r => r.toUniversity)));
    
    const firstUniv = availableUnivs[0];
    if (firstUniv) {
      const firstUnivReqs = matchingReqs.filter(r => r.toUniversity === firstUniv);
      const firstUnivMajors = Array.from(new Set(firstUnivReqs.map(r => r.major)));
      
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedUnivs([firstUniv]);
      setSelectedMajorsByUniv({
        [firstUniv]: [firstUnivMajors[0] || '']
      });
    } else {
      setSelectedUnivs([]);
      setSelectedMajorsByUniv({});
    }
  }, [selectedCollege, allRequirements]);

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

    const matchingReqs = allRequirements.filter(r => 
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
        // Skip general education / IGETC / Cal-GETC courses
        if (course.category === 'IGETC') {
          return;
        }

        const key = course.orGroup ? `${course.code}-${course.satisfies?.code || ''}` : course.code;
        const existing = courseMap.get(key);
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
          courseMap.set(key, {
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
  }, [selectedCollege, selectedUnivs, selectedMajorsByUniv, allRequirements]);

  // Filter courses by search
  const filteredCourses = useMemo(() => {
    if (!combinedRequirement) return [];
    
    return combinedRequirement.courses.filter(course => {
      return (
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [combinedRequirement, searchQuery]);

  // Group and sort courses for rendering (handling OR and AND groups based on satisfies target courses)
  const renderedItems = useMemo(() => {
    const items: RenderItem[] = [];
    
    // 1. Group courses by orGroup
    const orGroupCoursesMap = new Map<string, CombinedCourse[]>();
    const nonOrGroupCourses: CombinedCourse[] = [];

    filteredCourses.forEach(course => {
      if (course.orGroup) {
        if (!orGroupCoursesMap.has(course.orGroup)) {
          orGroupCoursesMap.set(course.orGroup, []);
        }
        orGroupCoursesMap.get(course.orGroup)!.push(course);
      } else {
        nonOrGroupCourses.push(course);
      }
    });

    // 2. Process non-or-group courses (group by satisfies if multiple)
    const satisfiesMap = new Map<string, CombinedCourse[]>();
    const singles: CombinedCourse[] = [];

    nonOrGroupCourses.forEach(course => {
      if (course.satisfies) {
        const key = course.satisfies.code;
        if (!satisfiesMap.has(key)) {
          satisfiesMap.set(key, []);
        }
        satisfiesMap.get(key)!.push(course);
      } else {
        singles.push(course);
      }
    });

    // Add singles
    singles.forEach(course => {
      items.push({
        type: 'single',
        course,
        originalIndex: filteredCourses.indexOf(course)
      });
    });

    // Add satisfies groups
    satisfiesMap.forEach((courses) => {
      const targetCourse = courses[0].satisfies!;
      const minIndex = Math.min(...courses.map(c => filteredCourses.indexOf(c)));
      
      if (courses.length > 1) {
        items.push({
          type: 'andGroup',
          targetCourse,
          courses,
          originalIndex: minIndex
        });
      } else {
        items.push({
          type: 'single',
          course: courses[0],
          originalIndex: minIndex
        });
      }
    });

    // 3. Process orGroup courses
    orGroupCoursesMap.forEach((courses, groupName) => {
      const minIndex = Math.min(...courses.map(c => filteredCourses.indexOf(c)));
      const options: RenderOption[] = [];

      // Within the OR group, group by satisfies target
      const innerSatisfiesMap = new Map<string, CombinedCourse[]>();
      const innerSingles: CombinedCourse[] = [];

      courses.forEach(course => {
        if (course.code.startsWith('UCB-') || course.code.startsWith('PLACEHOLDER-')) {
          options.push({
            type: 'placeholder',
            code: course.code,
            name: course.name,
            description: course.description,
            units: course.units
          });
        } else if (course.satisfies) {
          const key = course.satisfies.code;
          if (!innerSatisfiesMap.has(key)) {
            innerSatisfiesMap.set(key, []);
          }
          innerSatisfiesMap.get(key)!.push(course);
        } else {
          innerSingles.push(course);
        }
      });

      // Add satisfies groups as options
      innerSatisfiesMap.forEach((subCourses) => {
        const targetCourse = subCourses[0].satisfies!;
        if (subCourses.length > 1) {
          options.push({
            type: 'andGroup',
            targetCourse,
            courses: subCourses
          });
        } else {
          options.push({
            type: 'single',
            course: subCourses[0]
          });
        }
      });

      // Add singles as options
      innerSingles.forEach(course => {
        options.push({
          type: 'single',
          course
        });
      });

      items.push({
        type: 'orGroup',
        name: groupName,
        options,
        originalIndex: minIndex
      });
    });

    // Helper to determine if a render item is Required
    const isItemRequired = (item: RenderItem) => {
      if (item.type === 'single') {
        return item.course.type === 'Required';
      }
      if (item.type === 'andGroup') {
        return item.courses.some(c => c.type === 'Required');
      }
      if (item.type === 'orGroup') {
        return item.options.some(opt => {
          if (opt.type === 'single') return opt.course.type === 'Required';
          if (opt.type === 'andGroup') return opt.courses.some(c => c.type === 'Required');
          return false;
        });
      }
      return false;
    };

    // 4. Sort items: Required first, then Recommended. Preserve original order within each category.
    items.sort((a, b) => {
      const reqA = isItemRequired(a);
      const reqB = isItemRequired(b);
      if (reqA && !reqB) return -1;
      if (!reqA && reqB) return 1;
      return a.originalIndex - b.originalIndex;
    });
    return items;
  }, [filteredCourses]);

  // Statistics calculations
  const stats = useMemo(() => {
    if (!combinedRequirement) return { total: 0, required: 0, recommended: 0 };
    const courses = combinedRequirement.courses;
    
    // For courses belonging to an orGroup, only count the ones belonging to the selected option
    const activeCourses = courses.filter(course => {
      if (!course.orGroup) return true;
      
      const groupItem = renderedItems.find(
        item => item.type === 'orGroup' && item.name === course.orGroup
      );
      if (!groupItem || groupItem.type !== 'orGroup') return true;

      const getOptionId = (option: RenderOption) => {
        if (option.type === 'single') return option.course.code;
        if (option.type === 'andGroup') return option.targetCourse.code;
        return option.code;
      };

      const selectedId = selectedOrCourses[course.orGroup] || (groupItem.options[0] ? getOptionId(groupItem.options[0]) : '');
      const selectedOption = groupItem.options.find(opt => getOptionId(opt) === selectedId);
      if (!selectedOption) return false;

      if (selectedOption.type === 'single') {
        return selectedOption.course.code === course.code;
      }
      if (selectedOption.type === 'andGroup') {
        return selectedOption.courses.some(c => c.code === course.code && c.satisfies?.code === course.satisfies?.code);
      }
      return false; // placeholder option has no courses active
    });
    
    const required = activeCourses.filter(c => c.type === 'Required').reduce((sum, c) => sum + c.units, 0);
    const recommended = activeCourses.filter(c => c.type === 'Recommended').reduce((sum, c) => sum + c.units, 0);
    
    return {
      total: required + recommended,
      required,
      recommended
    };
  }, [combinedRequirement, renderedItems, selectedOrCourses]);

  // Look up course in local catalog database
  const getCatalogCourse = (code: string) => {
    const normalizedCode = code.replace(/\s+/g, ' ').trim().toUpperCase();
    for (const dept of Object.keys(deAnzaCatalog)) {
      const match = deAnzaCatalog[dept].find(c => c.code.replace(/\s+/g, ' ').trim().toUpperCase() === normalizedCode);
      if (match) return match;
    }
    return null;
  };

  // Handle PDF upload and text parser API request
  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setParseError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (!result.isSuccessful) {
        throw new Error(result.message || t('parseFail'));
      }

      const rawText = result.text || '';

      // Regex matching community college course codes
      const regex = /\b[A-Z]{2,4}\s+\d+[A-Z]{0,2}\b/g;
      const matches = rawText.match(regex) || [];
      const uniqueCodes: string[] = Array.from(new Set<string>(matches.map((c: string) => c.replace(/\s+/g, ' ').trim().toUpperCase())));

      // Filter matches using catalog validation
      const detected = uniqueCodes
        .map((code: string) => getCatalogCourse(code))
        .filter((c): c is NonNullable<typeof c> => c !== null)
        .map(c => ({
          code: c.code,
          name: c.name,
          units: c.units,
          type: 'Required' as 'Required' | 'Recommended',
          description: c.description,
          checked: true
        }));

      // Guess university and major from text contents
      let guessedUniv = 'UC Berkeley';
      let guessedMajor = 'Computer Science';

      const ucMatch = rawText.match(/University of California,\s*([A-Za-z\s]+)/i);
      if (ucMatch && ucMatch[1]) {
        guessedUniv = `UC ${ucMatch[1].trim()}`;
      } else {
        const csuMatch = rawText.match(/California State University,\s*([A-Za-z\s]+)/i);
        if (csuMatch && csuMatch[1]) {
          guessedUniv = `CSU ${csuMatch[1].trim()}`;
        }
      }

      const majorMatch = rawText.match(/(?:Major|For):\s*([A-Za-z\s\(\),&\-]+)(?:\r?\n|$)/i);
      if (majorMatch && majorMatch[1]) {
        guessedMajor = majorMatch[1].trim().split('\n')[0].trim();
      }

      setEditUniv(guessedUniv);
      setEditMajor(guessedMajor);
      setParsedData({
        univ: guessedUniv,
        major: guessedMajor,
        courses: detected
      });
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setParseError(errorMessage || t('parseFail'));
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  // Save parsed custom requirements locally
  const handleSaveParsed = () => {
    if (!parsedData) return;

    const newReq = {
      fromCollege: selectedCollege,
      toUniversity: editUniv,
      major: editMajor,
      courses: parsedData.courses.filter(c => c.checked).map(c => ({
        code: c.code,
        name: c.name,
        units: c.units,
        type: c.type,
        category: 'MajorPrep' as 'IGETC' | 'MajorPrep',
        description: c.description
      }))
    };

    const updatedList = [
      ...customRequirementsList.filter(r => !(r.fromCollege === selectedCollege && r.toUniversity === editUniv && r.major === editMajor)),
      newReq
    ];

    setCustomRequirementsList(updatedList);
    localStorage.setItem('transfumer_custom_requirements_list', JSON.stringify(updatedList));

    // Reset modals
    setParsedData(null);

    // Auto-select the newly added custom requirements
    setSelectedUnivs(prev => Array.from(new Set([...prev, editUniv])));
    setSelectedMajorsByUniv(prev => ({
      ...prev,
      [editUniv]: Array.from(new Set([...(prev[editUniv] || []), editMajor]))
    }));
  };

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

        {/* PDF Upload Section */}
        <div className="border-t border-slate-100 pt-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            {t('pdfUploadTitle')}
          </label>
          <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-50 border border-dashed border-slate-200/80 p-5 rounded-2xl">
            <div className="flex-1 space-y-1 text-center md:text-left">
              <p className="text-xs font-bold text-slate-700">{t('pdfUploadTitle')}</p>
              <p className="text-[10px] text-slate-400 leading-normal max-w-lg">{t('pdfUploadDesc')}</p>
            </div>
            
            <div className="relative shrink-0">
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                disabled={isUploading}
                className="hidden"
                id="pdf-upload-input"
              />
              <label
                htmlFor="pdf-upload-input"
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold shadow-sm cursor-pointer transition-all ${
                  isUploading 
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>{t('parsingPdf')}</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-3.5 w-3.5 text-slate-500" />
                    <span>{t('selectFileBtn')}</span>
                  </>
                )}
              </label>
            </div>
          </div>
          {parseError && (
            <p className="text-[10px] font-semibold text-rose-500 mt-2 bg-rose-50 border border-rose-100/50 px-3 py-1.5 rounded-lg">
              ⚠️ {parseError}
            </p>
          )}
        </div>
      </section>

      {/* Custom PDF Active Reset Banner */}
      {customRequirementsList.length > 0 && (
        <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-amber-600 animate-pulse" />
            <div className="text-xs text-amber-800 font-semibold">
              <span>{t('customPdfActive')} ({customRequirementsList.length} custom plans loaded)</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (confirm(language === 'ja' ? 'すべてのカスタムPDF要件を削除してデフォルトに戻しますか？' : 'Are you sure you want to delete all custom PDF requirements and reset to defaults?')) {
                localStorage.removeItem('transfumer_custom_requirements_list');
                setCustomRequirementsList([]);
              }
            }}
            className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 transition shadow-sm cursor-pointer"
          >
            {t('clearCustomPdf')}
          </button>
        </div>
      )}

      {/* Main Requirement Area */}
      {combinedRequirement && combinedRequirement.courses.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* List Section (Left/Middle) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4">
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
              {renderedItems.length > 0 ? (
                renderedItems.map((item) => {
                  if (item.type === 'single') {
                    const course = item.course;
                    return (
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

                            {/* Satisfies badge */}
                            {course.satisfies && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                🎓 Satisfies: {course.satisfies.code}
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
                    );
                  } else if (item.type === 'andGroup') {
                    const targetCourse = item.targetCourse;
                    const courses = item.courses;
                    return (
                      <div 
                        key={targetCourse.code}
                        className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden"
                      >
                        {/* Target Course Header */}
                        <div className="bg-slate-50/80 border-b border-slate-100 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-mono text-[10px] font-bold">
                              UCB {targetCourse.code}
                            </span>
                            <span className="text-xs font-bold text-slate-700">
                              {targetCourse.name}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                            Satisfies Requirement
                          </span>
                        </div>

                        {/* List of De Anza courses connected by AND */}
                        <div className="p-4 space-y-3">
                          {courses.map((course, idx) => (
                            <div key={course.code} className="space-y-3">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="space-y-1.5 flex-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                                      {course.code}
                                    </span>
                                    {course.type === 'Required' ? (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                        {t('required')}
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-100/50">
                                        {t('recommended')}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="font-bold text-sm text-slate-900">{course.name}</h4>
                                  {course.description && (
                                    <p className="text-xs text-slate-400 leading-relaxed">{course.description}</p>
                                  )}
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                                  <span className="text-xs font-semibold text-slate-500">
                                    {course.units.toFixed(1)} {t('unitsLabel')}
                                  </span>
                                  <div className="h-5 w-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                                    <CheckCircle className="h-4.5 w-4.5" />
                                  </div>
                                </div>
                              </div>

                              {idx < courses.length - 1 && (
                                <div className="relative py-1 flex items-center justify-center">
                                  <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-100"></div>
                                  </div>
                                  <span className="relative px-2.5 py-0.5 text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full select-none shadow-sm uppercase tracking-wider">
                                    {t('andLabel')}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    // Group type: Render OR choice list of single, andGroup, or placeholders
                    const groupName = item.name;
                    const options = item.options;
                    
                    const getOptionId = (option: RenderOption) => {
                      if (option.type === 'single') return option.course.code;
                      if (option.type === 'andGroup') return option.targetCourse.code;
                      return option.code;
                    };

                    const selectedId = selectedOrCourses[groupName] || (options[0] ? getOptionId(options[0]) : '');

                    const isGroupRequired = options.some(opt => {
                      if (opt.type === 'single') return opt.course.type === 'Required';
                      if (opt.type === 'andGroup') return opt.courses.some(c => c.type === 'Required');
                      return false;
                    });

                    return (
                      <div 
                        key={groupName}
                        className="bg-gradient-to-br from-slate-50/80 to-indigo-50/10 border border-dashed border-indigo-200/80 p-6 rounded-2xl shadow-sm space-y-4"
                      >
                        {/* Group Header */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="p-1 bg-indigo-100 text-indigo-700 rounded-lg">
                              <Sparkles className="h-4 w-4 text-indigo-600" />
                            </span>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                              {t('completeOneOption')}
                            </span>
                            {isGroupRequired ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/10">
                                {t('required')}
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-100/50">
                                {t('recommended')}
                              </span>
                            )}
                          </div>
                          <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold text-indigo-600">
                            {groupName}
                          </span>
                        </div>

                        {/* List of sub-options */}
                        <div className="space-y-3">
                          {options.map((option, idx) => {
                            const optionId = getOptionId(option);
                            const isSelected = optionId === selectedId;

                            return (
                              <div key={optionId} className="space-y-3">
                                <div 
                                  onClick={() => setSelectedOrCourses(prev => ({ ...prev, [groupName]: optionId }))}
                                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 space-y-3 ${
                                    isSelected 
                                      ? 'bg-white border-indigo-500 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-500' 
                                      : 'bg-white/60 border-slate-200/70 opacity-60 hover:opacity-100 hover:border-slate-300'
                                  }`}
                                >
                                  {/* Radio indicator and Option Title */}
                                  <div className="flex items-start gap-3">
                                    <div className="pt-0.5 shrink-0">
                                      <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-all ${
                                        isSelected 
                                          ? 'border-indigo-600 bg-indigo-50' 
                                          : 'border-slate-300 bg-white'
                                      }`}>
                                        {isSelected && <div className="h-2 w-2 rounded-full bg-indigo-600" />}
                                      </div>
                                    </div>

                                    {/* Option Content Rendering based on type */}
                                    <div className="flex-1 space-y-2">
                                      {option.type === 'single' && (
                                        <div className="space-y-1">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[10px] tracking-wider">
                                              {option.course.code}
                                            </span>
                                            {option.course.type === 'Required' ? (
                                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                                {t('required')}
                                              </span>
                                            ) : (
                                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-100/50">
                                                {t('recommended')}
                                              </span>
                                            )}
                                            {option.course.satisfies && (
                                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                                🎓 Satisfies: {option.course.satisfies.code}
                                              </span>
                                            )}
                                          </div>
                                          <h4 className={`font-bold text-sm transition-colors ${
                                            isSelected ? 'text-indigo-900' : 'text-slate-700'
                                          }`}>
                                            {option.course.name}
                                          </h4>
                                          {option.course.description && (
                                            <p className="text-[11px] text-slate-400 leading-relaxed">
                                              {option.course.description}
                                            </p>
                                          )}
                                        </div>
                                      )}

                                      {option.type === 'andGroup' && (
                                        <div className="space-y-3">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-mono text-[9px] font-bold">
                                              Satisfies: {option.targetCourse.code}
                                            </span>
                                            <span className="text-xs font-bold text-slate-700">
                                              {option.targetCourse.name}
                                            </span>
                                          </div>

                                          {/* Nested De Anza courses */}
                                          <div className="space-y-2.5 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                                            {option.courses.map((subC, subIdx) => (
                                              <div key={subC.code} className="space-y-2.5">
                                                <div className="flex items-center justify-between gap-3 text-xs">
                                                  <div className="space-y-0.5">
                                                    <div className="flex items-center gap-1.5 flex-wrap">
                                                      <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded text-[9px]">
                                                        {subC.code}
                                                      </span>
                                                      <span className="font-semibold text-slate-600">{subC.name}</span>
                                                    </div>
                                                  </div>
                                                  <span className="text-[10px] text-slate-400 font-bold shrink-0">{subC.units.toFixed(1)}U</span>
                                                </div>

                                                {subIdx < option.courses.length - 1 && (
                                                  <div className="relative py-0.5 flex items-center justify-center">
                                                    <div className="absolute inset-0 flex items-center">
                                                      <div className="w-full border-t border-slate-200/50"></div>
                                                    </div>
                                                    <span className="relative px-2 py-0.2 text-[8px] font-bold text-blue-500 bg-blue-50 border border-blue-100 rounded-full select-none shadow-sm uppercase tracking-wider">
                                                      {t('andLabel')}
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {option.type === 'placeholder' && (
                                        <div className="space-y-1">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded text-[10px] tracking-wider">
                                              {option.code}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                                              🏫 {t('takeAtUniv')}
                                            </span>
                                          </div>
                                          <h4 className={`font-bold text-sm transition-colors ${
                                            isSelected ? 'text-indigo-900' : 'text-slate-700'
                                          }`}>
                                            {option.name}
                                          </h4>
                                          {option.description && (
                                            <p className="text-[11px] text-slate-400 leading-relaxed">
                                              {option.description}
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    
                                    {/* Option Right Info (Total Units for this option) */}
                                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                                      <span className="text-xs font-semibold text-slate-500">
                                        {option.type === 'single' ? option.course.units.toFixed(1) : option.type === 'andGroup' ? option.courses.reduce((sum, c) => sum + c.units, 0).toFixed(1) : option.units.toFixed(1)} {t('unitsLabel')}
                                      </span>
                                      <div className={`h-5 w-5 rounded-full flex items-center justify-center transition-colors ${
                                        isSelected ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-200'
                                      }`}>
                                        <CheckCircle className="h-4.5 w-4.5" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Divider OR */}
                                {idx < options.length - 1 && (
                                  <div className="relative py-1 flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center">
                                      <div className="w-full border-t border-slate-200/50"></div>
                                    </div>
                                    <span className="relative px-2.5 py-0.5 text-[9px] font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full select-none shadow-sm uppercase tracking-wider">
                                      {t('orLabel')}
                                    </span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })
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

            {/* Assist.org Verification Card */}
            <div className="bg-emerald-50/40 border border-emerald-100/60 p-5 rounded-2xl flex gap-3">
              <Sparkles className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-800 leading-relaxed font-medium space-y-1">
                <p className="font-bold text-emerald-950">{t('assistSourceTitle')}</p>
                <p className="text-slate-500">{t('assistSourceDesc')}</p>
                <div className="pt-1">
                  <a 
                    href="https://assist.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[10px] font-bold text-emerald-700 hover:text-emerald-950 hover:underline gap-0.5 bg-emerald-100/60 px-2 py-0.5 rounded transition-all"
                  >
                    Official ASSIST.org ↗
                  </a>
                </div>
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

      {/* Parsed Preview Modal */}
      {parsedData && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden animate-scaleIn">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-emerald-600" />
                <span>{t('confirmParsedTitle')}</span>
              </h3>
              <button 
                onClick={() => setParsedData(null)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {t('univNameLabel')}
                  </label>
                  <input
                    type="text"
                    value={editUniv}
                    onChange={(e) => setEditUniv(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {t('majorNameLabel')}
                  </label>
                  <input
                    type="text"
                    value={editMajor}
                    onChange={(e) => setEditMajor(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {t('detectedCourses')} ({parsedData.courses.length})
                </label>
                <div className="border border-slate-100 rounded-xl overflow-hidden divide-y divide-slate-100 max-h-[250px] overflow-y-auto">
                  {parsedData.courses.map((course, idx) => (
                    <div key={idx} className="p-2.5 flex items-center justify-between gap-3 text-xs bg-slate-50/30 hover:bg-slate-50/70 transition">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={course.checked}
                          onChange={(e) => {
                            const updated = [...parsedData.courses];
                            updated[idx].checked = e.target.checked;
                            setParsedData({ ...parsedData, courses: updated });
                          }}
                          className="rounded text-blue-600 focus:ring-blue-500 h-3.5 w-3.5 border-slate-300 cursor-pointer"
                        />
                        <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">{course.code}</span>
                        <span className="font-semibold text-slate-600 line-clamp-1">{course.name}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={course.type}
                          onChange={(e) => {
                            const updated = [...parsedData.courses];
                            updated[idx].type = e.target.value as 'Required' | 'Recommended';
                            setParsedData({ ...parsedData, courses: updated });
                          }}
                          className="px-1.5 py-0.5 border border-slate-200 bg-white rounded text-[10px] text-slate-600 font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Required">Required</option>
                          <option value="Recommended">Recommended</option>
                        </select>
                        <span className="text-[10px] font-semibold text-slate-400 min-w-[30px] text-right">{course.units}U</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 flex gap-2 justify-end bg-slate-50">
              <button
                onClick={() => setParsedData(null)}
                className="px-4 py-2 border border-slate-200 text-slate-500 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                {t('cancelBtn')}
              </button>
              <button
                onClick={handleSaveParsed}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                {t('saveParsedBtn')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
