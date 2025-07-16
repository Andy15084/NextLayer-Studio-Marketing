import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Code,
  Zap,
  Eye,
  Users,
  RefreshCw,
  FileSpreadsheet,
  ArrowUpRight,
  Palette,
  Tablet,
  Cpu,
  Database
} from 'lucide-react';

export default function WebLandingPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Device Visualization */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Animated Device Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Monitor className="text-blue-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Smartphone className="text-green-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Tablet className="text-purple-500 w-6 h-6" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="bg-white rounded-full p-3 shadow-lg">
              <Code className="text-orange-500 w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Globe className="text-[#023047] w-8 h-8" />
                <Code className="text-[#023047] w-8 h-8" />
                <Palette className="text-[#023047] w-8 h-8" />
                <Zap className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              Weby & Landing pages, ktoré konvertujú.
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              Moderné, rýchle a konverzne optimalizované webstránky.
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                Webstránka je tvoja digitálna vizitka. Je to prvé, čo zákazníci uvidia a posúdia.
              </p>
              <p className="mb-4">
                V NextLayer Studio robíme weby, ktoré sú &quot;smart&quot; – rýchle, responzívne, konverzne optimalizované a technicky dokonalé.
              </p>
              <p>
                Od návrhu cez vývoj až po optimalizáciu – všetko s dôrazom na používateľský zážitok a konverzie.
              </p>
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť web projekt
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Web Development Stats */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Prečo moderný web funguje?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">2.5s</div>
            <div className="font-mono text-gray-700">Priemerný čas načítania</div>
            <div className="text-sm text-gray-500 mt-2">Pre úspešné weby</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">68%</div>
            <div className="font-mono text-gray-700">Mobilný traffic</div>
            <div className="text-sm text-gray-500 mt-2">Na moderných weboch</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-purple-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">3s</div>
            <div className="font-mono text-gray-700">Čas na rozhodnutie</div>
            <div className="text-sm text-gray-500 mt-2">Používateľa oďaľ</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowUpRight className="text-orange-600 w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-[#219EBC] mb-2">+200%</div>
            <div className="font-mono text-gray-700">Priemerný nárast konverzií</div>
            <div className="text-sm text-gray-500 mt-2">Po optimalizácii</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              Čo je moderný web?
            </h3>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                Moderný web je rýchly, responzívny a optimalizovaný pre všetky zariadenia.
              </p>
              <p>
                Je to web, ktorý sa načíta za menej ako 3 sekundy, vyzerá perfektne na mobile aj desktope a vedie zákazníkov k akcii.
              </p>
              <p>
                Je to web, ktorý je technicky dokonalý, bezpečný a prispôsobený pre vyhľadávače.
              </p>
            </div>
          </div>
          
          {/* Right: Technology Stack */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">Technológie, ktoré používame</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">R</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">React/Next.js</h4>
                  <p className="font-mono text-sm text-gray-700">Moderný frontend</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">TypeScript</h4>
                  <p className="font-mono text-sm text-gray-700">Typová bezpečnosť</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Tailwind CSS</h4>
                  <p className="font-mono text-sm text-gray-700">Rýchly vývoj</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">S</div>
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">SEO optimalizácia</h4>
                  <p className="font-mono text-sm text-gray-700">Viditeľnosť</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Development Process */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Ako pracujeme na webe
        </h2>
        
        <div className="relative">
          {/* Development Process Flow */}
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
                    Zistíme tvoje požiadavky a naplánujeme architektúru.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>User research</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Design a UX</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme wireframy a vizuálny dizajn.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Palette className="w-4 h-4" />
                    <span>UI/UX design</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Vývoj frontendu</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Programujeme responzívny a rýchly frontend.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Code className="w-4 h-4" />
                    <span>React/Next.js</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Backend a databáza</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme API a databázovú štruktúru.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Database className="w-4 h-4" />
                    <span>API & Database</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Testovanie a optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Testujeme na všetkých zariadeniach a optimalizujeme výkon.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4" />
                    <span>Performance</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Spustenie a podpora</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Nasadíme na server a poskytujeme technickú podporu.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Offer Section with Web Services */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Čo všetko vieme zabezpečiť?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Firemné weby</h3>
            <p className="font-mono text-gray-700 text-sm">
              Profesionálne webstránky
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Kompletné riešenie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Landing pages</h3>
            <p className="font-mono text-gray-700 text-sm">
              Konverzne optimalizované
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Maximálne konverzie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">E-commerce weby</h3>
            <p className="font-mono text-gray-700 text-sm">
              Online obchody
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Zvýšenie predajov</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Palette className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">UI/UX dizajn</h3>
            <p className="font-mono text-gray-700 text-sm">
              Používateľské rozhranie
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Intuitívne ovládanie</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Webové aplikácie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Komplexné systémy
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Automatizácia procesov</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">API integrácie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Spojenie s externými službami
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Automatizácia</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">SEO optimalizácia</h3>
            <p className="font-mono text-gray-700 text-sm">
              Pre vyhľadávače
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Lepšia viditeľnosť</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <RefreshCw className="text-white w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Údržba a podpora</h3>
            <p className="font-mono text-gray-700 text-sm">
              Kontinuálna podpora
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>Dlhodobá spolupráca</span>
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
              Pretože robíme weby, ktoré sú postavené na moderných technológiách a najlepších praktikách.
            </p>
            <p>
              Máme skúsenosti s rôznymi typmi projektov a vieme, čo funguje pre tvoj typ biznisu. Neexperimentujeme s tvojou online prítomnosťou.
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
              Weby & Landing pages, ktoré konvertujú.
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Nechaj si vytvoriť web, ktorý bude rýchly, responzívny a bude ti prinášať zákazníkov.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              S nami budeš mať web, ktorý sa načíta za sekundy, vyzerá perfektne na všetkých zariadeniach a vedie zákazníkov k akcii.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Od návrhu až po spustenie a dlhodobú podporu.
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť web projekt
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 