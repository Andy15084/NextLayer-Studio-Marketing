'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { LocaleCode } from '@/types/i18n.types';

export default function MobileLanguageLinks() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 divide-y divide-gray-200">
            {languages.map((language) => (
              <a
                key={language.code}
                href={`/${language.code}`}
                className={`block w-full text-left px-4 py-3 text-sm ${
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