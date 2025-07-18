'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Search, 
  MessageSquare, 
  MousePointer, 
  Monitor, 
  BarChart3, 
  PenTool, 
  Target, 
  Shield,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('services');
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

  const services = [
    {
      title: t('seoContent.title'),
      subtitle: t('seoContent.subtitle'),
      description: t('seoContent.description'),
      icon: Search,
      href: `/${locale}/sluzby/seo-content`,
      color: 'from-blue-500 to-purple-500',
      textColor: 'text-blue-600'
    },
    {
      title: t('socialMedia.title'),
      subtitle: t('socialMedia.subtitle'),
      description: t('socialMedia.description'),
      icon: MessageSquare,
      href: `/${locale}/sluzby/socialne-siete`,
      color: 'from-green-500 to-blue-500',
      textColor: 'text-green-600'
    },
    {
      title: t('ppcAdvertising.title'),
      subtitle: t('ppcAdvertising.subtitle'),
      description: t('ppcAdvertising.description'),
      icon: MousePointer,
      href: `/${locale}/sluzby/ppc-reklama`,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-600'
    },
    {
      title: t('webLanding.title'),
      subtitle: t('webLanding.subtitle'),
      description: t('webLanding.description'),
      icon: Monitor,
      href: `/${locale}/sluzby/web-landing`,
      color: 'from-orange-500 to-red-500',
      textColor: 'text-orange-600'
    },
    {
      title: t('analytics.title'),
      subtitle: t('analytics.subtitle'),
      description: t('analytics.description'),
      icon: BarChart3,
      href: `/${locale}/sluzby/analytika`,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-indigo-600'
    },
    {
      title: t('contentCreation.title'),
      subtitle: t('contentCreation.subtitle'),
      description: t('contentCreation.description'),
      icon: PenTool,
      href: `/${locale}/sluzby/kontent`,
      color: 'from-teal-500 to-green-500',
      textColor: 'text-teal-600'
    },
    {
      title: t('adCampaigns.title'),
      subtitle: t('adCampaigns.subtitle'),
      description: t('adCampaigns.description'),
      icon: Target,
      href: `/${locale}/sluzby/kampane`,
      color: 'from-red-500 to-pink-500',
      textColor: 'text-red-600'
    },
    {
      title: t('digitalFootprint.title'),
      subtitle: t('digitalFootprint.subtitle'),
      description: t('digitalFootprint.description'),
      icon: Shield,
      href: `/${locale}/sluzby/digitalna-stopa`,
      color: 'from-gray-500 to-slate-500',
      textColor: 'text-gray-600'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#023047]">
              {t('hero.title')}
            </h1>
            <p className="font-mono text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>{t('hero.stats.growth')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>{t('hero.stats.clients')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>{t('hero.stats.satisfaction')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${service.color} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white w-8 h-8" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-[#023047] mb-3">
                {service.title}
              </h3>
              
              <p className="font-mono text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className={`inline-flex items-center gap-2 ${service.textColor} font-semibold text-sm group-hover:underline`}>
                {t('learnMore')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="font-mono text-xl mb-8 text-blue-100">
            {t('cta.subtitle')}
          </p>
          <Link 
            href={`/${locale}/kontakt`}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
} 