import { useTranslations } from 'next-intl';
import PaletteButton from "@/components/PaletteButton";
import Link from "next/link";
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
  CheckCircle, 
  Sparkles,
  Search,
  MessageSquare,
  MousePointer,
  Monitor,
  Activity
} from 'lucide-react';

export default function Home() {
  // Get translations
  const t = useTranslations('home');
  
  return (
    <>
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
                <span className="font-mono text-sm font-medium text-blue-700">Digitálny marketing expert</span>
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
            <Link href="/kontakt">
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
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>150+ klientov</span>
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
                              <div className="font-semibold text-sm text-gray-900">Marketing Analytics</div>
                              <div className="text-xs text-gray-500">Real-time data</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Conversions</span>
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
                              <div className="font-semibold text-sm text-gray-900">ROI Tracking</div>
                              <div className="text-xs text-gray-500">Performance metrics</div>
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
                              <div className="font-semibold text-sm text-gray-900">Social Media</div>
                              <div className="text-xs text-gray-500">Engagement rate</div>
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
                              <div className="font-semibold text-sm text-gray-900">Reach</div>
                              <div className="text-xs text-gray-500">Total impressions</div>
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
                              <div className="font-semibold text-sm">Active Campaigns</div>
                              <div className="text-xs opacity-80">PPC & Social</div>
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
                              <div className="font-semibold text-sm text-gray-900">CTR</div>
                              <div className="text-xs text-gray-500">Click-through rate</div>
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
                              <div className="font-semibold text-sm text-gray-900">Traffic Sources</div>
                              <div className="text-xs text-gray-500">Organic vs Paid</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Organic</span>
                              <span className="font-semibold text-blue-600">65%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Paid</span>
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
                              <div className="font-semibold text-sm text-gray-900">New Users</div>
                              <div className="text-xs text-gray-500">This month</div>
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
                              <div className="font-semibold text-sm text-gray-900">Marketing Analytics</div>
                              <div className="text-xs text-gray-500">Real-time data</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Conversions</span>
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
              <div className="font-semibold text-gray-700 mb-2">Priemerný rast</div>
              <div className="text-sm text-gray-500">Pre naše kampane</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="font-semibold text-gray-700 mb-2">Úspešnosť kampaní</div>
              <div className="text-sm text-gray-500">Presiahli ciele</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="font-semibold text-gray-700 mb-2">Spokojnosť klientov</div>
              <div className="text-sm text-gray-500">Priemerné hodnotenie</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="font-semibold text-gray-700 mb-2">Podpora</div>
              <div className="text-sm text-gray-500">Vždy sme tu pre vás</div>
            </div>
          </div>
        </section>

        {/* Professional Services Section */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-[#023047]">Naše služby</h2>
            <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
              Komplexné riešenia pre váš digitálny úspech
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
                            <div className="font-semibold text-sm text-gray-900">SEO & Content</div>
                          </div>
                          <div className="text-xs text-gray-500">Organic growth strategy</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <MessageSquare className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">Social Media</div>
                          </div>
                          <div className="text-xs text-gray-500">Community management</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <MousePointer className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">PPC Advertising</div>
                          </div>
                          <div className="text-xs text-gray-500">Performance marketing</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                              <Monitor className="text-white w-4 h-4" />
                            </div>
                            <div className="font-semibold text-sm text-gray-900">Web Development</div>
                          </div>
                          <div className="text-xs text-gray-500">Modern websites</div>
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
                      <h3 className="font-heading text-xl font-bold text-gray-900">SEO & Content</h3>
                      <p className="text-sm text-gray-500">Organic growth</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Optimalizujeme váš web pre vyhľadávače a vytvárame kvalitný obsah, ktorý priláka organickú návštevnosť.
                  </p>
                  <Link href="/sluzby/seo-content" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline">
                    Zistiť viac <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Social Media Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-3">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">Sociálne siete</h3>
                      <p className="text-sm text-gray-500">Community building</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Správame vaše sociálne siete, vytvárame engažujúci obsah a budujeme komunitu vašich fanúšikov.
                  </p>
                  <Link href="/sluzby/socialne-siete" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm group-hover:underline">
                    Zistiť viac <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* PPC Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3">
                      <MousePointer className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">PPC reklama</h3>
                      <p className="text-sm text-gray-500">Performance marketing</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Spúšťame a optimalizujeme výkonnostné kampane, ktoré prinášajú merateľné výsledky a vysokú návratnosť.
                  </p>
                  <Link href="/sluzby/ppc-reklama" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">
                    Zistiť viac <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Web Development Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3">
                      <Monitor className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">Weby & Landing pages</h3>
                      <p className="text-sm text-gray-500">Modern development</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Vytvárame rýchle, moderné a konverzné webstránky, ktoré presvedčia návštevníkov k akcii.
                  </p>
                  <Link href="/sluzby/web-landing" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:underline">
                    Zistiť viac <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/sluzby" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold text-lg group">
                  Pozrieť všetky služby
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
              Ako pracujeme
            </h2>
            <p className="font-mono text-xl text-gray-600 max-w-4xl mx-auto">
              Moderný marketing nemusí byť zložitý. U nás funguje všetko jednoducho, rýchlo a prehľadne.
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
                        <h3 className="font-heading text-2xl font-bold text-gray-900">Počúvame a analyzujeme</h3>
                        <p className="text-gray-600">Spoznáme váš biznis</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Najprv vás spoznáme – vašu značku, cieľovku, ciele a výzvy. Zanalyzujeme, kde ste a kam sa chcete dostať.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-sm text-blue-700 font-semibold">Výstup: Brief, cieľ kampane, analýza aktuálneho stavu</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">2</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">Navrhujeme stratégiu</h3>
                        <p className="text-gray-600">Vytvoríme plán</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Na základe analýzy pripravíme konkrétny plán. Navrhneme vhodné kanály, rozpočty a formáty komunikácie.
                    </p>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-700 font-semibold">Výstup: Marketingová stratégia, návrh obsahu, harmonogram</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-md h-[500px] rounded-[40px] border-[14px] border-gray-800 bg-gray-800 overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-lg z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-[25px] flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">Analýza</div>
                        <div className="text-sm opacity-80">Strategické plánovanie</div>
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
                        <div className="text-2xl font-bold mb-2">Implementácia</div>
                        <div className="text-sm opacity-80">Spustenie kampaní</div>
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
                        <h3 className="font-heading text-2xl font-bold text-gray-900">Implementujeme a spúšťame</h3>
                        <p className="text-gray-600">Spustíme kampane</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Všetko pripravíme a spustíme podľa plánu. Nastavíme účty, tracking a optimalizujeme kampane.
                    </p>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-sm text-purple-700 font-semibold">Výstup: Spustené kampane, aktívne kanály, tracking</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">4</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">Optimalizujeme a rastieme</h3>
                        <p className="text-gray-600">Neustály rast</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Neustále sledujeme výsledky a optimalizujeme. Pravidelne reportujeme a navrhujeme vylepšenia.
                    </p>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <p className="text-sm text-orange-700 font-semibold">Výstup: Pravidelné reporty, optimalizácie, rozšírenia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Contact Section */}
        <section className="max-w-7xl mx-auto mt-24 lg:mt-32">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Professional Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-10 left-10 animate-pulse">
                <div className="bg-white/30 rounded-full p-3">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="absolute bottom-10 right-10 animate-bounce">
                <div className="bg-white/30 rounded-full p-3">
                  <CheckCircle className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white">
                Začnime spolupracovať
              </h2>
              <p className="font-mono text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Máte otázky alebo chcete začať s marketingom? Kontaktujte nás a dohodneme si bezplatnú konzultáciu.
              </p>
              <p className="font-mono text-lg mb-10 text-blue-100">
                Spolu vytvoríme stratégiu, ktorá bude fungovať presne pre váš biznis.
              </p>
              <Link href="/kontakt">
                <PaletteButton variant="secondary" className="text-xl px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <span className="flex items-center gap-3">
                    Kontaktovať nás
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </PaletteButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 