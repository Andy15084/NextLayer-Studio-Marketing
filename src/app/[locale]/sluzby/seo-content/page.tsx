import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Search, 
  TrendingUp, 
  Globe,
  BarChart3,
  RefreshCw,
  FileSpreadsheet,
  Settings,
  Eye,
  ArrowUpRight,
  BookOpen,
  PenTool,
  Hash
} from 'lucide-react';

export default function SeoContentPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Search Engine Visualization */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Search Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Search className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <TrendingUp className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Hash className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <BookOpen className="text-orange-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Search className="text-[#023047] w-8 h-8" />
                <TrendingUp className="text-[#023047] w-8 h-8" />
                <BookOpen className="text-[#023047] w-8 h-8" />
                <PenTool className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              SEO & Content, ktoré sa vypláca.
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              Organické výsledky a kvalitný obsah, ktorý konvertuje.
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                SEO nie je len o kľúčových slovách. Je to o tom, ako sa tvoja stránka zobrazuje v Google a ako ju ľudia nachádzajú.
              </p>
              <p className="mb-4">
                V NextLayer Studio robíme SEO, ktoré je &quot;smart&quot; – založené na dátach, optimalizované pre používateľov a dlhodobo udržateľné.
              </p>
              <p>
                Od technického SEO cez obsah až po linkbuilding – všetko s dôrazom na organický rast a konverzie.
              </p>
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť SEO & Content
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEO Metrics Dashboard */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Prečo SEO funguje?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="text-blue-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">93%</div>
            <div className="font-mono text-gray-700">Online zážitkov</div>
            <div className="text-sm text-gray-500 mt-2">Začínajú s vyhľadávaním</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">75%</div>
            <div className="font-mono text-gray-700">Kliknutí</div>
            <div className="text-sm text-gray-500 mt-2">Ide na prvé 3 výsledky</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-purple-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">0€</div>
            <div className="font-mono text-gray-700">Cena za kliknutie</div>
            <div className="text-sm text-gray-500 mt-2">Organické výsledky</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowUpRight className="text-orange-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">24/7</div>
            <div className="font-mono text-gray-700">Dostupnosť</div>
            <div className="text-sm text-gray-500 mt-2">Výsledky fungujú stále</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              Čo je SEO & Content?
            </h3>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                SEO (Search Engine Optimization) je proces optimalizácie webstránky pre vyhľadávače ako Google.
              </p>
              <p>
                Cieľom je zlepšiť viditeľnosť stránky v organických (neplatených) výsledkoch vyhľadávania.
              </p>
              <p>
                Content marketing je o tvorbe hodnotného obsahu, ktorý priláka, zaujme a konvertuje tvoju cieľovú skupinu.
              </p>
            </div>
          </div>
          
          {/* Right: SEO Pillars */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">Pilíre SEO</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Technické SEO</h4>
                  <p className="font-mono text-sm text-gray-700">Rýchlosť, indexovanie, štruktúra</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">On-page SEO</h4>
                  <p className="font-mono text-sm text-gray-700">Kľúčové slová, meta tagy, obsah</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Off-page SEO</h4>
                  <p className="font-mono text-sm text-gray-700">Backlinky, autorita, dôveryhodnosť</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">U</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">User Experience</h4>
                  <p className="font-mono text-sm text-gray-700">Navigácia, mobilnosť, rýchlosť</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with SEO Process */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Ako pracujeme na SEO & Content
        </h2>
        
        <div className="relative">
          {/* SEO Process Flow */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#219EBC] to-[#7dffee] h-full"></div>
          
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Audit a analýza</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Preskúmame aktuálny stav a identifikujeme príležitosti.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Search className="w-4 h-4" />
                    <span>Technický audit</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Keyword research</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Nájdeme slová, ktoré používajú tvoji potenciálni zákazníci.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Hash className="w-4 h-4" />
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
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Technická optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Opravíme technické problémy a zlepšíme rýchlosť.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Settings className="w-4 h-4" />
                    <span>Technické SEO</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Tvorba obsahu</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme kvalitný obsah optimalizovaný pre SEO.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <PenTool className="w-4 h-4" />
                    <span>Content strategy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Linkbuilding</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Budujeme autoritu cez kvalitné backlinky.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>Off-page SEO</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Monitoring a optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Sledujeme výsledky a neustále vylepšujeme.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analýza a reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Offer Section with Content Types */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Čo všetko vieme zabezpečiť?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Technické SEO</h3>
            <p className="font-mono text-gray-700 text-sm">
              Rýchlosť, indexovanie, štruktúra
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Základ pre úspech</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Hash className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Keyword research</h3>
            <p className="font-mono text-gray-700 text-sm">
              Analýza kľúčových slov
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Presné cielenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <PenTool className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Content marketing</h3>
            <p className="font-mono text-gray-700 text-sm">
              Blog, články, prípadové štúdie
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Hodnotný obsah</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Linkbuilding</h3>
            <p className="font-mono text-gray-700 text-sm">
              Kvalitné backlinky
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Budovanie autority</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Local SEO</h3>
            <p className="font-mono text-gray-700 text-sm">
              Pre lokálne podniky
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Lokálna viditeľnosť</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">SEO analýza</h3>
            <p className="font-mono text-gray-700 text-sm">
              Monitoring a reporting
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Merateľné výsledky</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">E-commerce SEO</h3>
            <p className="font-mono text-gray-700 text-sm">
              Pre online obchody
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Zvýšenie predajov</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <RefreshCw className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Optimalizácia konverzií</h3>
            <p className="font-mono text-gray-700 text-sm">
              CRO a UX optimalizácia
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Viac zákazníkov</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
              Pretože robíme SEO, ktoré je založené na dátach a dlhodobých výsledkoch, nie na rýchlych trikoch.
            </p>
            <p>
              Máme skúsenosti s rôznymi odvetviami a vieme, čo funguje pre tvoj typ biznisu. Neexperimentujeme s tvojou viditeľnosťou.
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
              SEO & Content, ktoré sa vypláca.
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Nechaj si vytvoriť SEO stratégiu, ktorá bude dlhodobo udržateľná a bude ti prinášať organický traffic.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              S nami budeš vidieť, ako tvoja stránka stúpa v Google a ako sa zvyšuje počet zákazníkov.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Od technického auditu až po pravidelný monitoring a optimalizáciu.
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť SEO & Content
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 