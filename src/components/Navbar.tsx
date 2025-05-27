'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sluzbyItems = [
  { name: 'Správa sociálnych sietí', href: '/sluzby/socialne-siete' },
  { name: 'PPC & výkonnostná reklama', href: '/sluzby/ppc-reklama' },
  { name: 'SEO & Content marketing', href: '/sluzby/seo-content' },
  { name: 'Web & Landing pages', href: '/sluzby/web-landing' },
  { name: 'Analytika a reporting', href: '/sluzby/analytika' },
  { name: 'Výroba kontentu', href: '/sluzby/kontent' },
  { name: 'Torba reklamných kampaní', href: '/sluzby/kampane' },
];

const languages = [
  { code: 'sk', name: 'SK', fullName: 'Slovenský' },
  { code: 'de', name: 'DE', fullName: 'Deutsch' },
  { code: 'cs', name: 'CS', fullName: 'Čeština' },
  { code: 'en', name: 'EN', fullName: 'English' },
];

export default function Navbar() {
  const [isSluzbyOpen, setIsSluzbyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('sk');
  const sluzbyTimeout = useRef<NodeJS.Timeout | null>(null);
  const languageTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll handler for auto-hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSluzbyEnter = () => {
    if (sluzbyTimeout.current) clearTimeout(sluzbyTimeout.current);
    setIsSluzbyOpen(true);
  };
  
  const handleSluzbyLeave = () => {
    sluzbyTimeout.current = setTimeout(() => setIsSluzbyOpen(false), 200);
  };

  const handleLanguageEnter = () => {
    if (languageTimeout.current) clearTimeout(languageTimeout.current);
    setIsLanguageOpen(true);
  };

  const handleLanguageLeave = () => {
    languageTimeout.current = setTimeout(() => setIsLanguageOpen(false), 200);
  };

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setIsLanguageOpen(false);
    // Here you would typically implement the actual language change logic
    // For example, using next-intl or similar internationalization library
  };

  return (
    <nav
      className={`w-[80%] mx-auto bg-white rounded-b-xl shadow-md fixed left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ minHeight: '56px', top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="relative w-40 h-10 cursor-pointer flex items-center">
                <Image
                  src="/logoblack.png"
                  alt="NextLayer Studio Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="https://next-layer-studio-wbapp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#219EBC] text-white border-2 border-[#219EBC] hover:bg-[#0353a4] hover:border-[#0353a4] font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 inline-flex items-center"
              >
                Web riešenia
              </a>

              {/* Služby Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={handleSluzbyEnter}
                  onMouseLeave={handleSluzbyLeave}
                  className="bg-[#FF9800] text-white border-2 border-[#FF9800] hover:bg-[#FFB300] hover:border-[#FFB300] font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 inline-flex items-center"
                >
                  Služby
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${isSluzbyOpen ? 'rotate-180' : ''}`}
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
                {isSluzbyOpen && (
                  <div
                    onMouseEnter={handleSluzbyEnter}
                    onMouseLeave={handleSluzbyLeave}
                    className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1 divide-y divide-gray-200" role="menu">
                      {sluzbyItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-heading"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/o-nas"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                O nás
              </Link>

              <Link
                href="/ako-postupujeme"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Ako postupujeme
              </Link>

              <Link
                href="/kontakt"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Kontakt
              </Link>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onMouseEnter={handleLanguageEnter}
                  onMouseLeave={handleLanguageLeave}
                  className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  {languages.find(lang => lang.code === currentLanguage)?.name || 'SK'}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isLanguageOpen ? 'rotate-180' : ''
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
                {isLanguageOpen && (
                  <div
                    onMouseEnter={handleLanguageEnter}
                    onMouseLeave={handleLanguageLeave}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1 divide-y divide-gray-200" role="menu">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            currentLanguage === language.code
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
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="https://next-layer-studio-wbapp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#219EBC] text-white font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 block"
          >
            Web riešenia
          </a>

          {/* Mobile Služby Dropdown */}
          <div className="relative">
            <button
              className="bg-[#FF9800] hover:bg-[#FFB300] text-white font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 inline-flex items-center w-full justify-between"
              onClick={() => setIsSluzbyOpen(!isSluzbyOpen)}
            >
              Služby
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${isSluzbyOpen ? 'rotate-180' : ''}`}
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
            {isSluzbyOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {sluzbyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/o-nas"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            O nás
          </Link>

          <Link
            href="/ako-postupujeme"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Ako postupujeme
          </Link>

          <Link
            href="/kontakt"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Kontakt
          </Link>

          {/* Mobile Language Selector - Always visible */}
          <div className="flex items-center md:hidden">
            <div className="relative mr-2">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="font-heading text-gray-700 hover:text-gray-900 px-2 py-1 rounded-md text-sm font-medium inline-flex items-center"
              >
                {languages.find(lang => lang.code === currentLanguage)?.name || 'SK'}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isLanguageOpen ? 'rotate-180' : ''
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
              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1 divide-y divide-gray-200" role="menu">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentLanguage === language.code
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
          </div>
        </div>
      </div>
    </nav>
  );
} 