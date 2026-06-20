"use client";

import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto w-full">
      <header className="pb-6 border-b border-slate-200/80 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t('profileTitle')}</h1>
        <p className="mt-2 text-sm text-slate-500">{t('profileSubtitle')}</p>
      </header>
      <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm text-center">
        <p className="text-slate-600 font-medium">{t('underConstruction')}</p>
      </div>
    </div>
  );
}
