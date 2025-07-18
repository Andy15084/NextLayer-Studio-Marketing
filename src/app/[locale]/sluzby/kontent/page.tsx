'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  PenTool, 
  Target, 
  BookOpen,
  Zap,
  FileText,
  Image,
  Video,
  Mic,
  Play,
  Type,
  Music,
  Palette,
  Sparkles,
  Eye,
  ArrowUpRight,
  Film,
  Megaphone,
  Layers,
  Camera,
  ClipboardList
} from 'lucide-react';

export default function ContentPage() {
  const t = useTranslations('content');
  
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Creative Elements */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Creative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Play className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Image className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Type className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Music className="text-orange-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <PenTool className="text-[#023047] w-8 h-8" />
                <Video className="text-[#023047] w-8 h-8" />
                <Palette className="text-[#023047] w-8 h-8" />
                <Sparkles className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              {t('hero.title')}
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              {t('hero.subtitle')}
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                {t('hero.description1')}
              </p>
              <p className="mb-4">
                {t('hero.description2')}
              </p>
              <p>
                {t('hero.description3')}
              </p>
            </div>
            <Link href="../../kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                {t('hero.ctaButton')}
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Content Creation Stats */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('stats.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-blue-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">{t('stats.stat1.percentage')}</div>
            <div className="font-mono text-gray-700">{t('stats.stat1.label')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.stat1.description')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">{t('stats.stat2.percentage')}</div>
            <div className="font-mono text-gray-700">{t('stats.stat2.label')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.stat2.description')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-purple-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">{t('stats.stat3.percentage')}</div>
            <div className="font-mono text-gray-700">{t('stats.stat3.label')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.stat3.description')}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowUpRight className="text-orange-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">{t('stats.stat4.percentage')}</div>
            <div className="font-mono text-gray-700">{t('stats.stat4.label')}</div>
            <div className="text-sm text-gray-500 mt-2">{t('stats.stat4.description')}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              {t('stats.qualityContent.title')}
            </h3>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                {t('stats.qualityContent.description1')}
              </p>
              <p>
                {t('stats.qualityContent.description2')}
              </p>
              <p>
                {t('stats.qualityContent.description3')}
              </p>
            </div>
          </div>
          
          {/* Right: Content Types */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">{t('stats.contentTypes.title')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">V</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('stats.contentTypes.video.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('stats.contentTypes.video.description')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('stats.contentTypes.text.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('stats.contentTypes.text.description')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">G</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('stats.contentTypes.graphics.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('stats.contentTypes.graphics.description')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">{t('stats.contentTypes.audio.title')}</h4>
                  <p className="font-mono text-sm text-gray-700">{t('stats.contentTypes.audio.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Creative Process */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('process.title')}
        </h2>
        
        <div className="relative">
          {/* Creative Process Flow */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#219EBC] to-[#7dffee] h-full"></div>
          
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step1.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step1.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Target className="w-4 h-4" />
                    <span>{t('process.step1.tag')}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step2.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step2.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Sparkles className="w-4 h-4" />
                    <span>{t('process.step2.tag')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step3.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step3.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Film className="w-4 h-4" />
                    <span>{t('process.step3.tag')}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step4.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step4.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4" />
                    <span>{t('process.step4.tag')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step5.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step5.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Megaphone className="w-4 h-4" />
                    <span>{t('process.step5.tag')}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">{t('process.step6.title')}</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    {t('process.step6.description')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>{t('process.step6.tag')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Content We Create Section with Multimedia Cards */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          {t('services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.videoContent.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.videoContent.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.videoContent.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Image className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.graphicDesign.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.graphicDesign.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.graphicDesign.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Type className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.textContent.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.textContent.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.textContent.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mic className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.audioContent.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.audioContent.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.audioContent.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layers className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.interactiveContent.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.interactiveContent.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.interactiveContent.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Camera className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.photography.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.photography.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.photography.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.educationalContent.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.educationalContent.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.educationalContent.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ClipboardList className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.contentCalendar.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.contentCalendar.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.contentCalendar.benefit')}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">{t('services.reports.title')}</h3>
            <p className="font-mono text-gray-700 text-sm">
              {t('services.reports.description')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>{t('services.reports.benefit')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-[#023047]">
            {t('whyChooseUs.title')}
          </h2>
          
          <div className="font-mono text-lg space-y-6 text-gray-800 max-w-4xl mx-auto">
            <p>
              {t('whyChooseUs.description1')}
            </p>
            <p>
              {t('whyChooseUs.description2')}
            </p>
            <p>
              {t('whyChooseUs.description3')}
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
            <Link href="../../kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                {t('finalCta.ctaButton')}
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 