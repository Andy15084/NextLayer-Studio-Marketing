'use client';

import { useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { LocaleCode } from '@/types/i18n.types';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale() as LocaleCode;
  const t = useTranslations();

  // Language definitions
  const languages = [
    { code: 'sk', name: 'SK', fullName: t('languages.slovak') },
    { code: 'de', name: 'DE', fullName: t('languages.german') },
    { code: 'cs', name: 'CS', fullName: t('languages.czech') },
    { code: 'en', name: 'EN', fullName: t('languages.english') },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsOpen(false), 200);
  };

  const switchLanguage = (code: string) => {
    // Don't do anything if we're already on this language
    if (code === locale) return;
    
    setIsOpen(false);
    
    // Log for debugging
    console.log(`Switching language from ${locale} to ${code}`);
    
    // Navigate to the new URL with the selected language
    const newPath = code === 'sk' ? '/' : `/${code}`;
    console.log(`Navigating to: ${newPath}`);
    
    // Use direct navigation instead of Next.js router for more reliable language switch
    window.location.href = newPath;
  };

  return (
    <div className="relative">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
      >
        {languages.find(lang => lang.code === locale)?.name || 'SK'}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1 divide-y divide-gray-200" role="menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`block w-full text-left px-4 py-2 text-sm ${
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