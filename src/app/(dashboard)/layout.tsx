"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import { 
  Calendar, 
  ClipboardList, 
  User, 
  Menu, 
  X,
  GraduationCap,
  Globe
} from 'lucide-react';

interface SidebarItem {
  nameKey: 'myEdPlan' | 'requirements' | 'myPage' | 'igetcList';
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200/50 shrink-0">
      <button
        onClick={() => setLanguage('ja')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer ${
          language === 'ja' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        JP
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer ${
          language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        EN
      </button>
    </div>
  );
}

function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems: SidebarItem[] = [
    { nameKey: 'myEdPlan', path: '/edplan', icon: Calendar },
    { nameKey: 'requirements', path: '/requirements', icon: ClipboardList },
    { nameKey: 'myPage', path: '/profile', icon: User },
    { nameKey: 'igetcList', path: '/igetc', icon: GraduationCap },
  ];

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Top Navigation Bar */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200/80 sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <span className="font-extrabold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Transfumer
          </span>
        </div>
        
        {/* Mobile controls: switcher + menu toggle */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <button
            onClick={toggleMobileSidebar}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div 
          onClick={toggleMobileSidebar} 
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-slate-200/80 transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header (Desktop only) */}
        <div className="hidden md:flex items-center space-x-3 px-6 py-6 border-b border-slate-100">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
            <GraduationCap className="h-5.5 w-5.5" />
          </div>
          <span className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Transfumer
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.nameKey}
                href={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center space-x-3 py-3 rounded-r-xl transition-all duration-150 group font-semibold text-sm
                  ${isActive 
                    ? 'bg-slate-100 text-slate-900 border-l-4 border-l-blue-600 pl-3 -ml-4 shadow-sm' 
                    : 'text-slate-650 hover:text-slate-900 hover:bg-slate-50/70 pl-4'
                  }
                `}
              >
                <IconComponent className={`
                  h-5 w-5 transition-colors duration-150
                  ${isActive ? 'text-blue-650' : 'text-slate-400 group-hover:text-slate-600'}
                `} />
                <span>{t(item.nameKey)}</span>
              </Link>
            );
          })}
        </nav>

        {/* Info / Version Footer */}
        <div className="p-4 border-t border-slate-100 text-center text-xs text-slate-400">
          Transfumer v1.0.0
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto z-10">
        {/* Desktop Top Header Bar */}
        <div className="hidden md:flex items-center justify-end px-8 py-4 bg-white border-b border-slate-100 sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-slate-400" />
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </LanguageProvider>
  );
}
