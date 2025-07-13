import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Search,
  Zap,
  Eye,
  Calendar,
  Users,
  RefreshCw,
  FileSpreadsheet,
  Settings,
  Globe,
  MousePointer,
  ArrowUpRight
} from 'lucide-react';

export default function PpcReklamaPage() {
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
              PPC reklama, ktorá prináša výsledky.
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              Platená reklama s presným cielením a merateľnými výsledkami.
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                PPC (Pay-Per-Click) reklama je rýchly spôsob, ako sa dostaneš k zákazníkom, ktorí práve hľadajú tvoju službu.
              </p>
              <p className="mb-4">
                V NextLayer Studio robíme kampane, ktoré sú &quot;smart&quot; – cielené, optimalizované a prinášajú ROI.
              </p>
              <p>
                Od Google Ads cez Facebook až po TikTok – všetko s dôrazom na konverzie, nie len na zobrazenia.
              </p>
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť PPC kampaň
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Performance Metrics Dashboard */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Prečo PPC funguje?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowUpRight className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">300%</div>
            <div className="font-mono text-gray-700">Priemerný ROAS</div>
            <div className="text-sm text-gray-500 mt-2">Návratnosť investície</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MousePointer className="text-blue-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">15min</div>
            <div className="font-mono text-gray-700">Čas spustenia</div>
            <div className="text-sm text-gray-500 mt-2">Od objednávky po zobrazenie</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="text-purple-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">95%</div>
            <div className="font-mono text-gray-700">Presnosť cielenia</div>
            <div className="text-sm text-gray-500 mt-2">Podľa demografie a záujmov</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-orange-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">€0.50</div>
            <div className="font-mono text-gray-700">Priemerný CPC</div>
            <div className="text-sm text-gray-500 mt-2">Cena za kliknutie</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              Čo je PPC reklama?
            </h3>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                PPC (Pay-Per-Click) znamená, že platíš len za kliknutie, nie za zobrazenie reklamy.
              </p>
              <p>
                Je to rýchly spôsob, ako sa dostaneš k zákazníkom, ktorí práve hľadajú tvoju službu alebo produkt.
              </p>
              <p>
                Výhoda je v tom, že máš plnú kontrolu nad rozpočtom, cielením a môžeš presne merať, koľko ti každý zákazník stojí.
              </p>
            </div>
          </div>
          
          {/* Right: Benefits with Progress Bars */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">Výhody PPC reklamy</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">Okamžitá viditeľnosť</h4>
                  <span className="text-sm text-green-600 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">Výsledky už za pár hodín</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">Presné cielenie</h4>
                  <span className="text-sm text-blue-600 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">Podľa demografie, záujmov, správania</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">Merateľné výsledky</h4>
                  <span className="text-sm text-purple-600 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">Každý cent sa dá spočítať</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-heading font-bold text-[#023047]">Flexibilita</h4>
                  <span className="text-sm text-orange-600 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <p className="font-mono text-sm text-gray-700 mt-1">Môžeš meniť kampaň kedykoľvek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Funnel Visualization */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Ako pracujeme na PPC kampani
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Analýza a plánovanie</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Zistíme tvoje ciele, rozpočet a cieľovú skupinu.
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Výber kľúčových slov</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vyberieme slová, ktoré používajú tvoji potenciálni zákazníci.
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Tvorba reklám</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme texty a vizuály, ktoré konvertujú.
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Nastavenie kampane</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Technicky pripravíme všetko v reklamných účtoch.
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Spustenie a optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Sledujeme výkonnosť a neustále vylepšujeme.
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Reporting a analýza</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Pravidelne ti poskytujeme prehľadné reporty s výsledkami a odporúčaniami.
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
          Čo všetko vieme zabezpečiť?
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
              <Globe className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Facebook & Instagram Ads</h3>
            <p className="font-mono text-gray-700 text-sm">
              Všetky formáty reklám
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white w-8 h-8" />
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
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Remarketing</h3>
            <p className="font-mono text-gray-700 text-sm">
              Znovuzískanie návštevníkov
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
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Optimalizácia výkonu</h3>
            <p className="font-mono text-gray-700 text-sm">
              CPC, CTR, ROAS
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Maximálny ROI</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">A/B testovanie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Reklám a landing pages
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Vylepšenie konverzií</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Správa účtov</h3>
            <p className="font-mono text-gray-700 text-sm">
              Denná kontrola a údržba
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Kontinuálna optimalizácia</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
              Pretože robíme PPC kampane, ktoré sú postavené na dátach, nie na pocitoch. Každé rozhodnutie má svoj dôvod a každá zmena sa meria.
            </p>
            <p>
              Máme skúsenosti s rôznymi odvetviami a vieme, čo funguje pre tvoj typ biznisu. Neexperimentujeme na tvojich peniazoch.
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
              PPC reklama, ktorá sa vypláca.
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Nechaj si vytvoriť kampaň, ktorá bude cielená, optimalizovaná a bude ti prinášať zákazníkov.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              S nami budeš vedieť presne, koľko ti každý zákazník stojí a aký máš ROI.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Od prvého nastavenia až po pravidelný monitoring.
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť PPC kampaň
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 