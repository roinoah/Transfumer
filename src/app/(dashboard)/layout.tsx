"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Calendar, 
  ClipboardList, 
  User, 
  Menu, 
  X,
  GraduationCap
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems: SidebarItem[] = [
    { name: 'My Ed Plan', path: '/edplan', icon: Calendar },
    { name: '要件確認', path: '/requirements', icon: ClipboardList },
    { name: 'マイページ', path: '/profile', icon: User },
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
        <button
          onClick={toggleMobileSidebar}
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }
                `}
              >
                <IconComponent className={`
                  h-5 w-5 transition-colors duration-150
                  ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}
                `} />
                <span>{item.name}</span>
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
        <div className="flex-1 p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
