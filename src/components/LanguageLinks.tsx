'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { LocaleCode } from '@/types/i18n.types';
import { useState, useRef } from 'react';

export default function LanguageLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale() as LocaleCode;
  const t = useTranslations();

  // Language definitions
  const languages = [
    { code: 'sk', name: 'SK', fullName: t('languages.slovak') },
    { code: 'en', name: 'EN', fullName: t('languages.english') },
    { code: 'de', name: 'DE', fullName: t('languages.german') },
    { code: 'cs', name: 'CS', fullName: t('languages.czech') },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
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
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 divide-y divide-gray-200">
            {languages.map((language) => (
              <a
                key={language.code}
                href={`/${language.code}`}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  locale === language.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                } font-heading`}
              >
                <span className="font-bold mr-2">{language.name}</span>
                {language.fullName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 