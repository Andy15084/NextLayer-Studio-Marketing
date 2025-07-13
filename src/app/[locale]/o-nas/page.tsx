'use client';

import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
  const t = useTranslations('aboutUs');

  return (
    <main className="p-4 sm:p-8 relative z-10">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          {t('title')}
        </h1>
        <div className="font-mono text-xl sm:text-2xl mb-10 max-w-4xl text-[#023047]">
          <p>{t('subtitle')}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="space-y-16 md:space-y-24">
          {/* Section 1 */}
          <AnimatedOnScroll animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
                  {t('section1.title')}
                </h2>
                <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
                  {t('section1.content')}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="aspect-square bg-gradient-to-br from-[#219EBC] to-[#023047] rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Section 2 */}
          <AnimatedOnScroll animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="aspect-square bg-gradient-to-br from-[#FFB703] to-[#FB8500] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
                  {t('section2.title')}
                </h2>
                <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
                  {t('section2.content')}
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Section 3 */}
          <AnimatedOnScroll animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
                  {t('section3.title')}
                </h2>
                <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
                  {t('section3.content')}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="aspect-square bg-gradient-to-br from-[#8ECAE6] to-[#219EBC] rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Section 4 */}
          <AnimatedOnScroll animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="aspect-square bg-gradient-to-br from-[#FB8500] to-[#FFB703] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
                  {t('section4.title')}
                </h2>
                <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
                  {t('section4.content')}
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Section 5 */}
          <AnimatedOnScroll animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
                {t('section5.title')}
              </h2>
              <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
                {t('section5.content')}
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </main>
  );
} 