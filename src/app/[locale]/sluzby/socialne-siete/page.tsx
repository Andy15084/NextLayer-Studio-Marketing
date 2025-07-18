'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Share2, 
  CheckCircle, 
  MessageCircle,
  Heart,
  Eye,
  Calendar,
  BarChart3,
  RefreshCw,
  FileSpreadsheet,
  Settings,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

export default function SocialneSietePage() {
  const t = useTranslations('socialMedia');
  const pathname = usePathname();
  
  // Extract locale from pathname
  const getLocaleFromPath = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'sk';
    const firstSegment = segments[0];
    if (['sk', 'en', 'de', 'cs'].includes(firstSegment)) {
      return firstSegment;
    }
    return 'sk';
  };

  const locale = getLocaleFromPath(pathname);

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Social Media Icons */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Floating Social Media Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <Instagram className="text-[#023047] opacity-20 w-12 h-12" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Facebook className="text-[#023047] opacity-20 w-10 h-10" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <Twitter className="text-[#023047] opacity-20 w-8 h-8" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <Youtube className="text-[#023047] opacity-20 w-12 h-12" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Linkedin className="text-[#023047] opacity-20 w-10 h-10" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Instagram className="text-[#023047] w-8 h-8" />
                <Facebook className="text-[#023047] w-8 h-8" />
                <Twitter className="text-[#023047] w-8 h-8" />
                <Youtube className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              {t('title')}
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              {t('subtitle')}
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                {t('description1')}
              </p>
              <p className="mb-4">
                {t('description2')}
              </p>
              <p>
                {t('description3')}
              </p>
            </div>
            <Link href={`/${locale}/kontakt`}>
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                {t('ctaButton')}
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Stats Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">4.8B</div>
            <div className="font-mono text-gray-700">{t('stats.activeUsers')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.socialNetworks')}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">2.5h</div>
            <div className="font-mono text-gray-700">{t('stats.averageTime')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.dailyOnSocial')}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">78%</div>
            <div className="font-mono text-gray-700">{t('stats.customers')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.buyAfterSocial')}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              {t('whyImportant.title')}
            </h2>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                {t('whyImportant.description1')}
              </p>
              <p>
                {t('whyImportant.description2')}
              </p>
              <p>
                {t('whyImportant.description3')}
              </p>
            </div>
          </div>
          
          {/* Right: Benefits with Icons */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">{t('benefits.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.brandBuilding.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('benefits.brandBuilding.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.directContact.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('benefits.directContact.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.increaseSales.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('benefits.increaseSales.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.feedback.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('benefits.feedback.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.community.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('benefits.community.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Timeline */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('howWeWork.title')}
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#219EBC] h-full hidden lg:block"></div>
          
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step1.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step1.description')}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step2.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step2.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step3.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step3.description')}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step4.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step4.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step5.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step5.description')}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('howWeWork.step6.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('howWeWork.step6.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agency vs DIY Section with Visual Comparison */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whyAgency.title')}
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-red-600 text-center">{t('whyAgency.diy.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.timeConsuming.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.timeConsuming.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.lackExperience.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.lackExperience.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.inconsistency.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.inconsistency.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.missingTools.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.missingTools.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-green-600 text-center">{t('whyAgency.withAgency.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.saveTime.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.saveTime.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.professionalApproach.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.professionalApproach.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.consistency.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.consistency.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.allTools.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.allTools.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Offer Section with Hover Effects */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whatWeOffer.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Share2 className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.socialMediaManagement.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.socialMediaManagement.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <MessageCircle className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.contentCreation.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.contentCreation.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Heart className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.communityManagement.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.communityManagement.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Eye className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.influencerMarketing.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.influencerMarketing.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Calendar className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.contentCalendar.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.contentCalendar.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <BarChart3 className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.performanceAnalysis.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.performanceAnalysis.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <RefreshCw className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.adCampaigns.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.adCampaigns.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Settings className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.accountSetup.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.accountSetup.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <FileSpreadsheet className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.reportsConsultations.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.reportsConsultations.description')}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-[#219EBC] to-[#8ECAE6] rounded-2xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">
              {t('finalCta.title')}
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              {t('finalCta.description1')}
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              {t('finalCta.description2')}
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              {t('finalCta.description3')}
            </div>
            <Link href={`/${locale}/kontakt`}>
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť sociálne siete
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 