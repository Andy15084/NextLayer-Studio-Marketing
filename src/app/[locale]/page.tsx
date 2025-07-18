'use client';

import { useTranslations } from 'next-intl';
import PaletteButton from "@/components/PaletteButton";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { usePathname } from 'next/navigation';
import { 
  Rocket, 
  Target, 
  TrendingUp, 
  Eye, 
  ArrowUpRight, 
  Star, 
  Award, 
  Users, 
  BarChart3, 
  Search,
  MessageSquare,
  MousePointer,
  Monitor,
  Activity
} from 'lucide-react';

export default function Home() {
  // Get translations
  const t = useTranslations('home');
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
    <main className="p-4 sm:p-8 relative z-10">
        {/* Professional Hero Section */}
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-20 lg:pt-28 pb-16 lg:pb-24 relative">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-20 left-10 animate-pulse">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg">
                <Rocket className="text-white w-4 h-4" />
              </div>
            </div>
            <div className="absolute top-40 right-20 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-2 shadow-lg">
                <Target className="text-white w-4 h-4" />
              </div>
            </div>
            <div className="absolute bottom-40 left-20 animate-pulse" style={{animationDelay: '2s'}}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg">
                <TrendingUp className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Left Side - Professional Content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8 relative z-10">
            <div className="text-left max-w-2xl mx-auto">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm font-medium text-blue-700">{t('expertBadge')}</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="font-heading text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 leading-tight text-[#023047]">
                NextLayer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Studio
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="font-mono text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                {t('subtitle')}
              </p>
              
              {/* Professional CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href={`/${locale}/kontakt`}>
                  <PaletteButton variant="secondary" className="group text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="flex items-center gap-3">
                      {t('campaignButton')}
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </PaletteButton>
            </Link>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Professional Device Showcase */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="relative group">
              {/* Professional iPhone Frame */}
              <div className="relative w-72 lg:w-80 h-[560px] lg:h-[600px] rounded-[40px] border-[14px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl mx-auto group-hover:scale-105 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg z-10"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-[25px] relative overflow-hidden">
                  {/* Mock App Interface with Auto-Scrolling Content */}
                  <div className="absolute inset-0 p-6 overflow-hidden">
                    <div className="animate-scroll-up space-y-4">
                      {/* First Screen - Analytics Dashboard */}
                      <div className="space-y-4 mb-6">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <BarChart3 className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.marketingAnalytics')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.realTimeData')}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">{t('analytics.conversions')}</span>
                              <span className="font-semibold text-green-600">+24%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <TrendingUp className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.roiTracking')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.performanceMetrics')}</div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">€2.4M</div>
                          <div className="text-xs text-green-600 font-semibold">+156% vs last month</div>
                        </div>
                      </div>
                      
                      {/* Second Screen - Social Media Stats */}
                      <div className="space-y-4 mb-6 opacity-80">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                              <MessageSquare className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.socialMedia')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.engagementRate')}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-gray-900">4.2%</div>
                            <div className="text-xs text-green-600 font-semibold">+18%</div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                              <Eye className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.reach')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.totalImpressions')}</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">2.4M</div>
                          <div className="text-xs text-blue-600 font-semibold">+32% this week</div>
                        </div>
                      </div>
                      
                      {/* Third Screen - Campaign Performance */}
                      <div className="space-y-4 mb-6 opacity-60">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Target className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{t('analytics.activeCampaigns')}</div>
                              <div className="text-xs opacity-80">{t('analytics.ppcSocial')}</div>
                            </div>
                          </div>
                          <div className="text-xs opacity-80">NextLayer Studio</div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <MousePointer className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.ctr')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.clickThroughRate')}</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">3.8%</div>
                          <div className="text-xs text-green-600 font-semibold">Industry avg: 2.1%</div>
                        </div>
                      </div>
                      
                      {/* Fourth Screen - Additional Metrics */}
                      <div className="space-y-4 mb-6 opacity-40">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Activity className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.trafficSources')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.organicVsPaid')}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">{t('analytics.organic')}</span>
                              <span className="font-semibold text-blue-600">65%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">{t('analytics.paid')}</span>
                              <span className="font-semibold text-green-600">35%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                              <Users className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.newUsers')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.thisMonth')}</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">12.5K</div>
                          <div className="text-xs text-green-600 font-semibold">+28% vs last month</div>
                        </div>
                      </div>
                      
                      {/* Duplicate content for seamless loop */}
                      <div className="space-y-4 mb-6">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <BarChart3 className="text-white w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-gray-900">{t('analytics.marketingAnalytics')}</div>
                              <div className="text-xs text-gray-500">{t('analytics.realTimeData')}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">{t('analytics.conversions')}</span>
                              <span className="font-semibold text-green-600">+24%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Scrolling Animation Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/50 rounded-[25px] pointer-events-none"></div>
                </div>
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Professional Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <Eye className="text-blue-500 w-4 h-4" />
                  <span className="font-mono text-sm font-semibold text-gray-900">2.4k</span>
                </div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500 w-4 h-4 fill-current" />
                  <span className="font-mono text-sm font-semibold text-gray-900">4.9</span>
                </div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Service Stats */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">450%</div>
              <div className="font-semibold text-gray-700 mb-2">{t('stats.averageGrowth')}</div>
              <div className="text-sm text-gray-500">{t('stats.forOurCampaigns')}</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="font-semibold text-gray-700 mb-2">{t('stats.campaignSuccess')}</div>
              <div className="text-sm text-gray-500">{t('stats.exceededGoals')}</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="font-semibold text-gray-700 mb-2">{t('stats.clientSatisfaction')}</div>
              <div className="text-sm text-gray-500">{t('stats.averageRating')}</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="font-semibold text-gray-700 mb-2">{t('stats.support')}</div>
              <div className="text-sm text-gray-500">{t('stats.alwaysHere')}</div>
            </div>
          </div>
        </section>

        {/* Professional Services Section */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-[#023047]">{t('services.title')}</h2>
            <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Side - Professional Device */}
            <div className="lg:w-2/5">
              <div className="relative mx-auto lg:mx-0" style={{ maxWidth: "360px" }}>
                <div className="relative w-80 h-[500px] rounded-[40px] border-[14px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl mx-auto group hover:scale-105 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg z-10"></div>
                  
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 rounded-[25px] relative overflow-hidden">
                    <div className="absolute inset-0 p-6">
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Search className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">{t('services.seoContent.title')}</div>
                          </div>
                          <div className="text-xs text-gray-500">{t('services.seoContent.subtitle')}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <MessageSquare className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">{t('services.socialMedia.title')}</div>
                          </div>
                          <div className="text-xs text-gray-500">{t('services.socialMedia.subtitle')}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <MousePointer className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">{t('services.ppcAdvertising.title')}</div>
                          </div>
                          <div className="text-xs text-gray-500">{t('services.ppcAdvertising.subtitle')}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                              <Monitor className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">{t('services.webLanding.title')}</div>
                          </div>
                          <div className="text-xs text-gray-500">{t('services.webLanding.subtitle')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Professional Service Cards */}
            <div className="lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SEO Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3">
                      <Search className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">{t('services.seoContent.title')}</h3>
                      <p className="text-sm text-gray-500">{t('services.seoContent.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.seoContent.description')}
                  </p>
                  <Link href={`/${locale}/sluzby/seo-content`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline">
                    {t('services.seoContent.learnMore')} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Social Media Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-3">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">{t('services.socialMedia.title')}</h3>
                      <p className="text-sm text-gray-500">{t('services.socialMedia.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.socialMedia.description')}
                  </p>
                  <Link href={`/${locale}/sluzby/socialne-siete`} className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm group-hover:underline">
                    {t('services.socialMedia.learnMore')} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* PPC Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3">
                      <MousePointer className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">{t('services.ppcAdvertising.title')}</h3>
                      <p className="text-sm text-gray-500">{t('services.ppcAdvertising.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.ppcAdvertising.description')}
                  </p>
                  <Link href={`/${locale}/sluzby/ppc-reklama`} className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">
                    {t('services.ppcAdvertising.learnMore')} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Web Development Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3">
                      <Monitor className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">{t('services.webLanding.title')}</h3>
                      <p className="text-sm text-gray-500">{t('services.webLanding.subtitle')}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.webLanding.description')}
                  </p>
                  <Link href={`/${locale}/sluzby/web-landing`} className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:underline">
                    {t('services.webLanding.learnMore')} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link href={`/${locale}/sluzby`} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold text-lg group">
                  {t('services.viewAllServices')}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Process Section */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-[#023047]">
              {t('process.title')}
            </h2>
            <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          
          <div className="relative">
            {/* Professional Process Flow */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {/* Step 1 & 2 */}
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                <div className="flex flex-col gap-8 lg:w-1/2">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">1</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">{t('process.step1.title')}</h3>
                        <p className="text-gray-600">{t('process.step1.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('process.step1.description')}
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-sm text-blue-700 font-semibold">{t('process.step1.output')}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">2</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">{t('process.step2.title')}</h3>
                        <p className="text-gray-600">{t('process.step2.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('process.step2.description')}
                    </p>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-700 font-semibold">{t('process.step2.output')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-md h-[500px] rounded-[40px] border-[14px] border-gray-800 bg-gray-800 overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-[25px] flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">{t('process.analysis')}</div>
                        <div className="text-sm opacity-80">{t('process.strategicPlanning')}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 & 4 */}
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                <div className="lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
                  <div className="relative w-full max-w-md h-[500px] rounded-[40px] border-[14px] border-gray-800 bg-gray-800 overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-[25px] flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">{t('process.implementation')}</div>
                        <div className="text-sm opacity-80">{t('process.campaignLaunch')}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8 lg:w-1/2 order-1 lg:order-2">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">3</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">{t('process.step3.title')}</h3>
                        <p className="text-gray-600">{t('process.step3.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('process.step3.description')}
                    </p>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-sm text-purple-700 font-semibold">{t('process.step3.output')}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">4</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">{t('process.step4.title')}</h3>
                        <p className="text-gray-600">{t('process.step4.subtitle')}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('process.step4.description')}
                    </p>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="text-sm text-orange-700 font-semibold">{t('process.step4.output')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Contact Section */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-[#023047]">
              {t('contact.title')}
            </h2>
            <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">{t('contact.formTitle')}</h3>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start space-y-8 pt-8">
              {/* Instagram */}
              <a 
                href="https://instagram.com/nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#023047]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-mono text-[#023047]">@nextlayerstudio</span>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#023047]">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-mono text-[#023047]">NextLayer-Studio</span>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/NextLayerStudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#023047]">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="font-mono text-[#023047]">@NextLayerStudio</span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#023047]">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-mono text-[#023047]">nextlayerstudio</span>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@nextlayerstudio?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#023047]">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
                <span className="font-mono text-[#023047]">nextlayerstudio</span>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCDmSNQgXGdOCoYMDj-yaaWw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#023047] fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="font-mono text-[#023047]">NextLayer Studio</span>
              </a>
              
              {/* Phone */}
              <a 
                href="tel:+421902238309"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="text-[#023047]">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-mono text-[#023047]">+421 902 238 309</span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:team@nextlayer.studio" 
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#023047] fill-current">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="font-mono text-[#023047]">team@nextlayer.studio</span>
              </a>
            </div>
          </div>
        </section>
      </main>
  );
} 