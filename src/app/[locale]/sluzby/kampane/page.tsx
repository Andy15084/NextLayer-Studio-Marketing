import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Target, 
  Palette, 
  Search, 
  BarChart3, 
  Globe, 
  Facebook, 
  Music, 
  Briefcase, 
  Mail, 
  Video,
  Settings,
  TrendingUp,
  TestTube,
  FileSpreadsheet,
  Rocket,
  ArrowUpRight,
  Activity,
  Layers
} from 'lucide-react';

export default function KampanePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Campaign Elements */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Campaign Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Rocket className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Target className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <TrendingUp className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Activity className="text-orange-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Rocket className="text-[#023047] w-8 h-8" />
                <Target className="text-[#023047] w-8 h-8" />
                <TrendingUp className="text-[#023047] w-8 h-8" />
                <Activity className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              Reklamné kampane, ktoré fungujú.
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              Komplexné riešenia pre maximálne výsledky.
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                Reklamná kampaň nie je len o zobrazení reklamy. Je o celkovej stratégii, ktorá spája všetky kanály a prináša výsledky.
              </p>
              <p className="mb-4">
                V NextLayer Studio robíme kampane, ktoré sú koordinované, optimalizované a merateľné. Od plánovania až po vyhodnocovanie.
              </p>
              <p>
                Od PPC cez sociálne siete až po display reklamy – všetko s dôrazom na ROI a konverzie.
              </p>
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť kampaň
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Campaign Performance Dashboard */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Prečo sú kampane dôležité?
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">€15,847</div>
              <div className="font-mono text-sm opacity-90">Celkový predaj</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+45%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">2,847</div>
              <div className="font-mono text-sm opacity-90">Kliknutí</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+23%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">4.2%</div>
              <div className="font-mono text-sm opacity-90">Konverzia</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+18%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
              <div className="text-3xl font-bold mb-2">€2.45</div>
              <div className="font-mono text-sm opacity-90">Priemerný CPC</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-red-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">-12%</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
                Čo je reklamná kampaň?
              </h3>
              <div className="font-mono text-lg space-y-4 text-gray-800">
                <p>
                  Reklamná kampaň je sústredená marketingová aktivita, ktorá má za cieľ niečo konkrétne: predať produkt, získať nových zákazníkov, spustiť novú službu.
                </p>
                <p>
                  Aby bola úspešná, musí byť dobre načasovaná, kreatívne spracovaná a strategicky vedená.
                </p>
                <p>
                  Je to komplexný systém, ktorý spája rôzne kanály a optimalizuje pre maximálne výsledky.
                </p>
              </div>
            </div>
            
            {/* Right: Campaign Components */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">Komponenty kampane</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">S</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Stratégia</h4>
                    <p className="font-mono text-sm text-gray-700">Plánovanie a ciele</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Obsah</h4>
                    <p className="font-mono text-sm text-gray-700">Kreatíva a copy</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">C</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Cielenie</h4>
                    <p className="font-mono text-sm text-gray-700">Audience targeting</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Optimalizácia</h4>
                    <p className="font-mono text-sm text-gray-700">Performance tuning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Campaign Process */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Ako pracujeme na kampani
        </h2>
        
        <div className="relative">
          {/* Campaign Process Flow */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#219EBC] to-[#7dffee] h-full"></div>
          
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Analýza a plánovanie</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Zistíme tvoje ciele a cieľovú skupinu.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Target className="w-4 h-4" />
                    <span>Audience research</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Stratégia a kanály</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vyberieme správne platformy a spôsoby.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Layers className="w-4 h-4" />
                    <span>Channel selection</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Kreatíva a obsah</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme všetky potrebné výstupy.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Palette className="w-4 h-4" />
                    <span>Creative production</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Technické nastavenie</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Pripravíme účty, tracking a rozpočty.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Settings className="w-4 h-4" />
                    <span>Technical setup</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Spustenie a optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Sledujeme výkonnosť a optimalizujeme.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Activity className="w-4 h-4" />
                    <span>Performance optimization</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Analýza a reporting</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vyhodnotíme výsledky a navrhujeme ďalšie kroky.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <BarChart3 className="w-4 h-4" />
                    <span>Results analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Campaign Channels Section with Multi-Channel Cards */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Kde robíme kampane?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Google Ads</h3>
            <p className="font-mono text-gray-700 text-sm">
              Vyhľadávanie, bannery, YouTube
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vysoká konverzia</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Facebook className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Facebook & Instagram</h3>
            <p className="font-mono text-gray-700 text-sm">
              Všetky formáty vrátane reels
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Široké cielenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Music className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">TikTok Ads</h3>
            <p className="font-mono text-gray-700 text-sm">
              Pre mladšiu cieľovku
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Viral potenciál</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">LinkedIn Ads</h3>
            <p className="font-mono text-gray-700 text-sm">
              Pre B2B segment
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Profesionálne cielenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Display reklamy</h3>
            <p className="font-mono text-gray-700 text-sm">
              Bannery na weboch
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Široká viditeľnosť</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Email marketing</h3>
            <p className="font-mono text-gray-700 text-sm">
              Newsletter kampane
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Nízke náklady</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Video kampane</h3>
            <p className="font-mono text-gray-700 text-sm">
              YouTube, TikTok, Instagram
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vysoká engagement</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TestTube className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">A/B testovanie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Optimalizácia kampán
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vylepšenie výkonnosti</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Pravidelné reporty a konzultácie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Mesačné vyhodnotenie s odporúčaniami
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
            Prečo to robiť s nami?
          </h2>
          
          <div className="font-mono text-lg space-y-6 text-gray-800 max-w-4xl mx-auto">
            <p>
              Pretože robíme kampane, ktoré sú založené na dátach a dlhodobých výsledkoch, nie na rýchlych trikoch.
            </p>
            <p>
              Máme skúsenosti s rôznymi odvetviami a vieme, čo funguje pre tvoj typ biznisu. Neexperimentujeme s tvojimi peniazmi.
            </p>
            <p>
              Transparentnosť je pre nás kľúčová – vždy vieš, kde tvoje peniaze idú a aké výsledky prinášajú.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-[#219EBC] to-[#8ECAE6] rounded-2xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">
              Reklamné kampane, ktoré fungujú.
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Nechaj si vytvoriť kampaň, ktorá bude koordinovaná, optimalizovaná a bude ti prinášať zákazníkov.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              S nami budeš mať kampaň, ktorá spája všetky kanály a optimalizuje pre maximálne výsledky.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Od plánovania až po vyhodnocovanie a návrh ďalších krokov.
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť kampaň
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 