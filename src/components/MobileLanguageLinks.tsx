'use client';

import { useTranslations } from 'next-intl';
import type { LocaleCode } from '@/types/i18n.types';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileLanguageLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = useTranslations();

  // Extract locale from pathname - handle root path as Slovak
  const getLocaleFromPath = (path: string): LocaleCode => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'sk'; // Root path is Slovak
    const firstSegment = segments[0];
    if (['sk', 'en', 'de', 'cs'].includes(firstSegment)) {
      return firstSegment as LocaleCode;
    }
    return 'sk'; // Default to Slovak
  };

  const locale = getLocaleFromPath(pathname);

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

  const handleLanguageSelect = (langCode: string) => {
    setIsOpen(false);
    const url = getLanguageUrl(langCode);
    // Force page refresh to ensure translations update properly
    window.location.href = url;
  };

  // Create the correct URL for each language
  const getLanguageUrl = (langCode: string) => {
    // For all languages, preserve the current path but change locale
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return `/${langCode}`;
    }
    // If first segment is a locale, replace it
    if (['sk', 'en', 'de', 'cs'].includes(segments[0])) {
      segments[0] = langCode;
      return `/${segments.join('/')}`;
    } else {
      // If no locale in path, add it
      return `/${langCode}${pathname}`;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center w-full justify-between"
      >
        <span>Jazyk / Language</span>
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
        <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 divide-y divide-gray-200">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={getLanguageUrl(language.code)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  locale === language.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                } font-heading`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <span className="font-bold mr-2">{language.name}</span>
                {language.fullName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 