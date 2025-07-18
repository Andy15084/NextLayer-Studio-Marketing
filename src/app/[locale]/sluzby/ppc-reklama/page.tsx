'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  MousePointer, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users,
  DollarSign,
  Zap,
  Search,
  Eye,
  ArrowUpRight,
  Settings,
  RefreshCw,
  Globe,
  FileSpreadsheet
} from 'lucide-react';

export default function PPCAdvertisingPage() {
  const t = useTranslations('ppcAdvertising');
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
      {/* 1. Hero Section with Performance Metrics */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Performance Indicators */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <ArrowUpRight className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <TrendingUp className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <MousePointer className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <DollarSign className="text-green-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Target className="text-[#023047] w-8 h-8" />
                <TrendingUp className="text-[#023047] w-8 h-8" />
                <DollarSign className="text-[#023047] w-8 h-8" />
                <BarChart3 className="text-[#023047] w-8 h-8" />
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

      {/* 2. Performance Metrics Dashboard */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whyPpcWorks.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowUpRight className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">300%</div>
            <div className="font-mono text-gray-700">{t('stats.averageRoas')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.roiReturn')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MousePointer className="text-blue-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">15min</div>
            <div className="font-mono text-gray-700">{t('stats.launchTime')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.fromOrderToDisplay')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="text-purple-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">95%</div>
            <div className="font-mono text-gray-700">{t('stats.targetingAccuracy')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.byDemographics')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-orange-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">€0.50</div>
            <div className="font-mono text-gray-700">{t('stats.averageCpc')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.costPerClick')}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              {t('whatIsPpc.title')}
            </h3>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                {t('whatIsPpc.description1')}
              </p>
              <p>
                {t('whatIsPpc.description2')}
              </p>
              <p>
                {t('whatIsPpc.description3')}
              </p>
            </div>
          </div>
          
          {/* Right: Benefits with Progress Bars */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">{t('benefits.title')}</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.immediateVisibility.title')}</h4>
                  <span className="text-sm text-green-600 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">{t('benefits.immediateVisibility.description')}</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.preciseTargeting.title')}</h4>
                  <span className="text-sm text-blue-600 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">{t('benefits.preciseTargeting.description')}</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.measurableResults.title')}</h4>
                  <span className="text-sm text-purple-600 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">{t('benefits.measurableResults.description')}</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">{t('benefits.flexibility.title')}</h4>
                  <span className="text-sm text-orange-600 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">{t('benefits.flexibility.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Funnel Visualization */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('howWeWork.title')}
        </h2>
        
        <div className="relative">
          {/* Funnel Visualization */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#219EBC] to-[#7dffee] h-full"></div>
          
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>Cieľová skupina</span>
                  </div>
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Search className="w-4 h-4" />
                    <span>Kľúčové slová</span>
                  </div>
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4" />
                    <span>Kreatíva</span>
                  </div>
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Settings className="w-4 h-4" />
                    <span>Technické nastavenie</span>
                  </div>
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <RefreshCw className="w-4 h-4" />
                    <span>Optimalizácia</span>
                  </div>
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
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analýza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Offer Section with Performance Cards */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whatWeOffer.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.googleAds.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.googleAds.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vysoká konverzia</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.facebookAds.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.facebookAds.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Široké cielenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.tiktokAds.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.tiktokAds.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Viral potenciál</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.linkedinAds.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.linkedinAds.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Profesionálne cielenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.remarketing.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.remarketing.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Nízke CPA</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.landingPages.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.landingPages.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vysoká konverzia</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.analytics.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.analytics.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Presné dáta</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <RefreshCw className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.optimization.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.optimization.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Lepšie výsledky</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.reporting.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.reporting.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Transparentnosť</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-[#023047]">
            {t('whyAgency.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-red-600 text-center">{t('whyAgency.diy.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.complexity.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.complexity.description')}</p>
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
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.wastedBudget.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.wastedBudget.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.diy.timeConsuming.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.diy.timeConsuming.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-green-600 text-center">{t('whyAgency.withAgency.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✅</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.expertise.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.expertise.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✅</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.optimization.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.optimization.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✅</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.saveTime.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.saveTime.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✅</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">{t('whyAgency.withAgency.results.title')}</h4>
                    <p className="font-mono text-sm text-gray-700">{t('whyAgency.withAgency.results.description')}</p>
                  </div>
                </div>
              </div>
            </div>
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
                {t('ctaButton')}
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 