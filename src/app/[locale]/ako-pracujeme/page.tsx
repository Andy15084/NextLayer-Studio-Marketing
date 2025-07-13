'use client';

import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function HowWeWorkPage() {
  const t = useTranslations('howWeWork');
  // Track expanded state per card index (step number)
  const [expandedGoals, setExpandedGoals] = useState<{ [key: string]: boolean }>({});

  const toggleGoal = (cardId: string) => {
    setExpandedGoals(prev => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const isGoalExpanded = (cardId: string) => !!expandedGoals[cardId];

  const renderStepContent = (content: string, cardId: string) => {
    // Check if content contains "Cieľ:" or "Goal:" or similar
    const hasGoal = content.includes('Cieľ:') || content.includes('Goal:') || content.includes('Ziel:') || content.includes('Cíl:');
    
    if (!hasGoal) {
      return (
        <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
          {content}
        </div>
      );
    }

    // Split content by goal section
    const parts = content.split(/(Cieľ:|Goal:|Ziel:|Cíl:)/);
    
    if (parts.length < 3) {
      return (
        <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
          {content}
        </div>
      );
    }

    const beforeGoal = parts[0];
    const goalKeyword = parts[1];
    const goalContent = parts.slice(2).join('');

    // Only render collapsible if there is actual content after the keyword
    if (!goalContent.trim()) {
      return (
        <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
          {beforeGoal}
          {/* Don't render collapsible if no goal content */}
        </div>
      );
    }

    return (
      <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
        {beforeGoal && (
          <div className="mb-4">
            {beforeGoal}
          </div>
        )}
        <div className="border-l-4 border-[#219EBC] pl-4">
          <div 
            className="cursor-pointer hover:text-[#219EBC] transition-colors duration-200 font-semibold flex items-center"
            onClick={() => toggleGoal(cardId)}
          >
            <span>{goalKeyword}</span>
            <svg 
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${isGoalExpanded(cardId) ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isGoalExpanded(cardId) && (
            <div className="mt-2 pl-4 border-l-2 border-[#FFB703] opacity-80">
              {goalContent}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Prepare steps as an array for easier mapping and unique card IDs
  const steps = [
    { key: 'step1', title: t('step1.title'), content: t('step1.content'), badge: 'from-[#219EBC] to-[#023047]' },
    { key: 'step2', title: t('step2.title'), content: t('step2.content'), badge: 'from-[#FFB703] to-[#FB8500]' },
    { key: 'step3', title: t('step3.title'), content: t('step3.content'), badge: 'from-[#8ECAE6] to-[#219EBC]' },
    { key: 'step4', title: t('step4.title'), content: t('step4.content'), badge: 'from-[#FB8500] to-[#FFB703]' },
    { key: 'step5', title: t('step5.title'), content: t('step5.content'), badge: 'from-[#219EBC] to-[#023047]' },
    { key: 'step6', title: t('step6.title'), content: t('step6.content'), badge: 'from-[#8ECAE6] to-[#219EBC]' },
    { key: 'step7', title: t('step7.title'), content: t('step7.content'), badge: 'from-[#FB8500] to-[#FFB703]' },
    { key: 'step8', title: t('step8.title'), content: t('step8.content'), badge: 'from-[#219EBC] to-[#023047]' },
    { key: 'step9', title: t('step9.title'), content: t('step9.content'), badge: 'from-[#FFB703] to-[#FB8500]' },
    { key: 'step10', title: t('step10.title'), content: t('step10.content'), badge: 'from-[#219EBC] to-[#023047]' },
  ];

  // Example SVGs for each step (replace with your own images/icons as needed)
  const stepImages = [
    // Step 1
    <svg key="step1" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="#219EBC" strokeWidth="2" fill="#8ECAE6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" stroke="#023047" /></svg>,
    // Step 2
    <svg key="step2" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" fill="#FFB703" stroke="#FB8500" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" stroke="#023047" /></svg>,
    // Step 3
    <svg key="step3" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="12,2 22,22 2,22" fill="#219EBC" stroke="#023047" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" stroke="#FFB703" /></svg>,
    // Step 4
    <svg key="step4" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#FB8500" stroke="#FFB703" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" stroke="#023047" /></svg>,
    // Step 5
    <svg key="step5" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="6" width="12" height="12" rx="6" fill="#8ECAE6" stroke="#219EBC" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2 2" stroke="#FB8500" /></svg>,
    // Step 6
    <svg key="step6" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#FFB703" stroke="#FB8500" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-8 4 8" stroke="#023047" /></svg>,
    // Step 7
    <svg key="step7" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="12,2 22,22 2,22" fill="#219EBC" stroke="#023047" strokeWidth="2" /><circle cx="12" cy="16" r="2" fill="#FFB703" /></svg>,
    // Step 8
    <svg key="step8" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" fill="#8ECAE6" stroke="#219EBC" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="#FB8500" /></svg>,
    // Step 9
    <svg key="step9" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#FB8500" stroke="#FFB703" strokeWidth="2" /><rect x="8" y="10" width="8" height="4" fill="#219EBC" /></svg>,
    // Step 10
    <svg key="step10" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#8ECAE6" stroke="#219EBC" strokeWidth="2" /><polygon points="12,6 18,18 6,18" fill="#FB8500" /></svg>,
  ];

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
        <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
          {t('intro')}
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto mb-20 relative">
        {/* Process Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#219EBC] via-[#FFB703] to-[#FB8500] rounded-full hidden lg:block"></div>
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, idx) => (
            <AnimatedOnScroll animation="fade-up" key={step.key}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
                {/* Step card on the left */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.badge} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {idx + 1}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-[#023047] mt-4">
                    {step.title}
                  </h2>
                  {renderStepContent(step.content, `step-${idx}`)}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#219EBC] rounded-full shadow-lg"></div>
                </div>
                {/* Image on the right, except for steps 2, 3, 5, 8 */}
                {(idx !== 1 && idx !== 2 && idx !== 4 && idx !== 7) && (
                  <div className="flex items-center justify-center">
                    <div className="aspect-square bg-gradient-to-br from-[#219EBC] to-[#023047] rounded-xl flex items-center justify-center">
                      {stepImages[idx]}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Summary */}
      <AnimatedOnScroll animation="fade-up">
        <div className="text-center max-w-4xl mx-auto relative">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#023047]">
            {t('summary.title')}
          </h2>
          <div className="font-mono text-base sm:text-lg text-[#023047] leading-relaxed whitespace-pre-line">
            {t('summary.content')}
          </div>
        </div>
      </AnimatedOnScroll>
    </main>
  );
} 