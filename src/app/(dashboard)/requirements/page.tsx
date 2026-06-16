"use client";

import React, { useState, useMemo } from 'react';
import { mockRequirements, Course } from '../../../data/mockRequirements';
import { BookOpen, Search, CheckCircle, Info, Filter, Sparkles } from 'lucide-react';

export default function RequirementsPage() {
  // Select state variables
  const [selectedCollege, setSelectedCollege] = useState('De Anza College');
  const [selectedUniv, setSelectedUniv] = useState('UC Berkeley');
  const [selectedMajor, setSelectedMajor] = useState('Computer Science');

  // Search and Tab Filter state variables
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'major' | 'igetc'>('all');

  // Find unique colleges, universities, and majors to build options dynamically
  const colleges = useMemo(() => Array.from(new Set(mockRequirements.map(r => r.fromCollege))), []);
  const universities = useMemo(() => Array.from(new Set(mockRequirements.map(r => r.toUniversity))), []);
  const majors = useMemo(() => Array.from(new Set(mockRequirements.map(r => r.major))), []);

  // Fetch courses based on selects
  const currentRequirement = useMemo(() => {
    return mockRequirements.find(
      r => r.fromCollege === selectedCollege &&
           r.toUniversity === selectedUniv &&
           r.major === selectedMajor
    );
  }, [selectedCollege, selectedUniv, selectedMajor]);

  // Filter courses by search and active tab
  const filteredCourses = useMemo(() => {
    if (!currentRequirement) return [];
    
    return currentRequirement.courses.filter(course => {
      const matchesSearch = 
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = 
        activeTab === 'all' ||
        (activeTab === 'major' && course.category === 'MajorPrep') ||
        (activeTab === 'igetc' && course.category === 'IGETC');
      
      return matchesSearch && matchesTab;
    });
  }, [currentRequirement, searchQuery, activeTab]);

  // Statistics calculations
  const stats = useMemo(() => {
    if (!currentRequirement) return { total: 0, required: 0, recommended: 0 };
    const courses = currentRequirement.courses;
    
    const required = courses.filter(c => c.type === 'Required').reduce((sum, c) => sum + c.units, 0);
    const recommended = courses.filter(c => c.type === 'Recommended').reduce((sum, c) => sum + c.units, 0);
    
    return {
      total: required + recommended,
      required,
      recommended
    };
  }, [currentRequirement]);

  return (
    <div className="max-w-5xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Page Header */}
      <header className="pb-6 border-b border-slate-200/80">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          要件確認 (Transfer Requirements)
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          志望大学および専攻に合致した、必要な一般教養科目(IGETC)と専攻要件(Major Prep)の単位をチェックできます。
        </p>
      </header>

      {/* Selections Panel */}
      <section className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">所属コミカレ</label>
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          >
            {colleges.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">志望大学</label>
          <select
            value={selectedUniv}
            onChange={(e) => setSelectedUniv(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          >
            {universities.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">目標専攻</label>
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          >
            {majors.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </section>

      {/* Main Requirement Area */}
      {currentRequirement ? (
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
                  すべて
                </button>
                <button
                  onClick={() => setActiveTab('major')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === 'major' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  専攻要件
                </button>
                <button
                  onClick={() => setActiveTab('igetc')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === 'igetc' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  一般教養 (IGETC)
                </button>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="科目コード、名前で検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Courses List */}
            <div className="space-y-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course: Course) => (
                  <div 
                    key={course.code}
                    className={`group border p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300/60 transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                      course.isOverlap 
                        ? 'bg-gradient-to-r from-indigo-50/40 to-blue-50/20 border-indigo-200/80 hover:border-indigo-300/80 shadow-indigo-50/10' 
                        : 'bg-white border-slate-200/60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono font-bold text-slate-800 bg-slate-100/80 px-2.5 py-1 rounded-lg text-xs tracking-wider">
                          {course.code}
                        </span>
                        
                        {/* Task 5 Required/Recommended visual badges */}
                        {course.type === 'Required' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/10">
                            必須 (Required)
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100/50">
                            推奨 (Recommended)
                          </span>
                        )}

                        {/* Task 8 Overlap visual badge */}
                        {course.isOverlap && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/10">
                            <Sparkles className="h-3 w-3" />
                            <span>重複要件 (Double Counted)</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base pt-1">
                        {course.name}
                      </h3>
                      {course.description && (
                        <p className="text-xs text-slate-400 line-clamp-1 group-hover:line-clamp-none transition-all duration-300 leading-relaxed">
                          {course.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-0 pt-3 sm:pt-0 border-slate-50">
                      <span className="text-sm font-semibold text-slate-500">
                        {course.units.toFixed(1)} Units
                      </span>
                      <div className="h-6 w-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white border border-slate-200/60 p-10 rounded-2xl shadow-sm text-center">
                  <p className="text-slate-500 text-sm font-medium">該当する科目がありません。</p>
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
                <span>単位サマリー</span>
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>必須科目合計</span>
                  <span className="font-semibold text-slate-800">{stats.required.toFixed(1)} Units</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>推奨科目合計</span>
                  <span className="font-semibold text-slate-800">{stats.recommended.toFixed(1)} Units</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-base font-bold text-slate-900">
                  <span>要件総単位数</span>
                  <span className="text-blue-600">{stats.total.toFixed(1)} Units</span>
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>必須の比率</span>
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
                <p className="font-semibold">凡例について</p>
                <p>・<span className="font-bold text-indigo-800">必須 (Required)</span>: 編入出願資格を得るために履修が必須の科目を表します。</p>
                <p>・<span className="font-bold text-sky-800">推奨 (Recommended)</span>: 必須ではありませんが、編入後の専攻学習や合格率向上のために推奨される科目です。</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200/60 p-12 rounded-2xl shadow-sm text-center">
          <p className="text-slate-500 text-sm font-medium">指定された条件の要件データがありません。</p>
        </div>
      )}
    </div>
  );
}
