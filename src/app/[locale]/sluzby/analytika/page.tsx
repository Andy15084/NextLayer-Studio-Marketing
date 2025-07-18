'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Users, 
  BarChart3, 
  DollarSign, 
  Target, 
  RefreshCw,
  FileSpreadsheet,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  MousePointer,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Filter,
  Database
} from 'lucide-react';

export default function AnalytikaPage() {
  const t = useTranslations('analytics');
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
      {/* 1. Hero Section with Data Visualization */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Data Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <BarChart className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <PieChart className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <LineChart className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Activity className="text-orange-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <BarChart3 className="text-[#023047] w-8 h-8" />
                <PieChart className="text-[#023047] w-8 h-8" />
                <LineChart className="text-[#023047] w-8 h-8" />
                <Activity className="text-[#023047] w-8 h-8" />
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

      {/* 2. Analytics Dashboard Mockup */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whyAnalyticsImportant.title')}
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">12,847</div>
              <div className="font-mono text-sm opacity-90">{t('stats.visitors')}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+23%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">2:45</div>
              <div className="font-mono text-sm opacity-90">{t('stats.averageTime')}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+15%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">3.2%</div>
              <div className="font-mono text-sm opacity-90">{t('stats.conversion')}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-red-300">
                <ArrowDownRight className="w-4 h-4" />
                <span className="text-sm">-2%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">€2,847</div>
              <div className="font-mono text-sm opacity-90">{t('stats.roi')}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+45%</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
                {t('whatIsAnalytics.title')}
              </h3>
              <div className="font-mono text-lg space-y-4 text-gray-800">
                <p>
                  {t('whatIsAnalytics.description1')}
                </p>
                <p>
                  {t('whatIsAnalytics.description2')}
                </p>
                <p>
                  {t('whatIsAnalytics.description3')}
                </p>
              </div>
            </div>
            
            {/* Right: Data Points */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">{t('keyMetrics.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-mono text-sm">{t('keyMetrics.traffic')}</span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-mono text-sm">{t('keyMetrics.engagement')}</span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="font-mono text-sm">{t('keyMetrics.conversions')}</span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-mono text-sm">{t('keyMetrics.roi')}</span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '93%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Analytics Process */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('howWeWork.title')}
        </h2>
        
        <div className="relative">
          {/* Analytics Process Flow */}
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
                    <Database className="w-4 h-4" />
                    <span>Tracking</span>
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
                    <Filter className="w-4 h-4" />
                    <span>Data collection</span>
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
                    <BarChart3 className="w-4 h-4" />
                    <span>Analysis</span>
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
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Reports</span>
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
                    <Zap className="w-4 h-4" />
                    <span>Optimization</span>
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
                    <RefreshCw className="w-4 h-4" />
                    <span>Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Offer Section with Analytics Tools */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('whatWeOffer.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.googleAnalytics.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.googleAnalytics.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Kompletná analýza</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.facebookInsights.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.facebookInsights.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Sociálne siete</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.googleAds.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.googleAds.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Reklamy</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.customReports.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.customReports.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vlastné metriky</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.conversionTracking.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.conversionTracking.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Meranie úspechu</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MousePointer className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.userBehavior.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.userBehavior.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>User journey</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.performanceOptimization.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.performanceOptimization.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Zlepšenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <RefreshCw className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('whatWeOffer.monthlyReports.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('whatWeOffer.monthlyReports.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Pravidelné reporty</span>
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
          
          <div className="font-mono text-lg space-y-6 text-gray-800 max-w-4xl mx-auto">
            <p>
              Pretože robíme analýzy, ktoré sú založené na dátach a poskytujú jasné poznatky, nie na rýchlych reportoch.
            </p>
            <p>
              Máme skúsenosti s rôznymi analytickými nástrojmi a vieme, čo funguje pre tvoj typ biznisu. Neexperimentujeme s tvojimi dátami.
            </p>
            <p>
              Transparentnosť je pre nás kľúčová – vždy vieš, čo robíme a aké výsledky prináša.
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
                {t('ctaButton')}
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 