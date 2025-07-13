'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { LocaleCode } from '@/types/i18n.types';

export default function MobileLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as LocaleCode;
  const t = useTranslations();

  // Language definitions
  const languages = [
    { code: 'sk', name: 'SK', fullName: t('languages.slovak') },
    { code: 'de', name: 'DE', fullName: t('languages.german') },
    { code: 'cs', name: 'CS', fullName: t('languages.czech') },
    { code: 'en', name: 'EN', fullName: t('languages.english') },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const switchLanguage = (code: string) => {
    // Don't do anything if we're already on this language
    if (code === locale) return;
    
    setIsOpen(false);
    
    // Log for debugging
    console.log(`Mobile: Switching language from ${locale} to ${code}`);
    
    // Navigate to the new URL with the selected language
    const newPath = code === 'sk' ? '/' : `/${code}`;
    console.log(`Mobile: Navigating to: ${newPath}`);
    
    // Use direct navigation 
    window.location.href = newPath;
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="font-heading w-full text-left bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-sm font-medium inline-flex items-center justify-between"
      >
        <div>
          <span className="font-bold mr-2">{languages.find(lang => lang.code === locale)?.name || 'SK'}</span>
          {languages.find(lang => lang.code === locale)?.fullName}
        </div>
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1 divide-y divide-gray-200" role="menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`block w-full text-left px-4 py-3 text-sm ${
                  locale === language.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                } font-heading`}
                role="menuitem"
              >
                <span className="font-bold mr-2">{language.name}</span>
                {language.fullName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 