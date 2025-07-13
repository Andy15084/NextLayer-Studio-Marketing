import Link from 'next/link';
import PaletteButton from '@/components/PaletteButton';
import { 
  Share2, 
  CheckCircle, 
  MessageCircle,
  Heart,
  Eye,
  Calendar,
  BarChart3,
  RefreshCw,
  FileSpreadsheet,
  Settings,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

export default function SocialneSietePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Social Media Icons */}
      <section className="relative bg-[#7dffee] py-20 md:py-32 overflow-hidden">
        {/* Floating Social Media Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <Instagram className="text-[#023047] opacity-20 w-12 h-12" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Facebook className="text-[#023047] opacity-20 w-10 h-10" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
            <Twitter className="text-[#023047] opacity-20 w-8 h-8" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '2s'}}>
            <Youtube className="text-[#023047] opacity-20 w-12 h-12" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Linkedin className="text-[#023047] opacity-20 w-10 h-10" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <Instagram className="text-[#023047] w-8 h-8" />
                <Facebook className="text-[#023047] w-8 h-8" />
                <Twitter className="text-[#023047] w-8 h-8" />
                <Youtube className="text-[#023047] w-8 h-8" />
              </div>
              <div className="h-px bg-[#023047] flex-1 opacity-30"></div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#023047]">
              Sociálne siete, ktoré budujú značku.
            </h1>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl mb-8 text-[#023047] font-medium">
              Nie len príspevky. Stratégia, ktorá prináša výsledky.
            </p>
            <div className="font-mono text-lg md:text-xl mb-12 text-[#023047] max-w-4xl">
              <p className="mb-4">
                Sociálne siete sú miesto, kde sa tvoja značka stretáva s ľuďmi. Kde sa buduje dôvera, komunita a lojalita.
              </p>
              <p className="mb-4">
                V NextLayer Studio robíme sociálne siete, ktoré nie sú len o &quot;byť vidieť&quot; – sú o tom, aby si ľudí zaujal, zapojil a získal.
              </p>
              <p>
                Od stratégie cez obsah až po komunitu – všetko s dôrazom na autenticitu a výsledky.
              </p>
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť sociálne siete
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Stats Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">4.8B</div>
            <div className="font-mono text-gray-700">Aktívnych používateľov</div>
            <div className="text-sm text-gray-500 mt-2">sociálnych sietí</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">2.5h</div>
            <div className="font-mono text-gray-700">Priemerný čas</div>
            <div className="text-sm text-gray-500 mt-2">denne na sociálnych sieťach</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-[#219EBC] mb-2">78%</div>
            <div className="font-mono text-gray-700">Zákazníkov</div>
            <div className="text-sm text-gray-500 mt-2">kupuje po sociálnych sieťach</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">
              Prečo sú sociálne siete dôležité?
            </h2>
            <div className="font-mono text-lg space-y-4 text-gray-800">
              <p>
                Sociálne siete sú miesto, kde sa ľudia rozhodujú o značkách. Kde sa buduje dôvera, kde sa riešia otázky a kde sa vytvárajú vzťahy.
              </p>
              <p>
                Nie je to len o počte followerov. Je to o tom, ako sa tvoja značka správa online, ako komunikuje a ako buduje komunitu.
              </p>
              <p>
                Správne vedené sociálne siete ti pomôžu byť bližšie k zákazníkom, získať spätnú väzbu a budovať dlhodobé vzťahy.
              </p>
            </div>
          </div>
          
          {/* Right: Benefits with Icons */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6 text-[#023047] text-center">Benefity sociálnych sietí</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Budovanie značky</h4>
                  <p className="font-mono text-sm text-gray-700">Autentická komunikácia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Priamy kontakt</h4>
                  <p className="font-mono text-sm text-gray-700">S zákazníkmi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Zvýšenie predajov</h4>
                  <p className="font-mono text-sm text-gray-700">Cielené kampane</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Spätná väzba</h4>
                  <p className="font-mono text-sm text-gray-700">Od zákazníkov</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-[#023047]">Komunita</h4>
                  <p className="font-mono text-sm text-gray-700">Lojálnych zákazníkov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work Section with Timeline */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Ako pracujeme na sociálnych sieťach
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#219EBC] h-full hidden lg:block"></div>
          
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Analýza a stratégia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Zistíme tvoju cieľovku a naplánujeme obsahovú stratégiu.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Výber platformy</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vyberieme správne siete podľa tvojej cieľovky.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Tvorba obsahu</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Vytvoríme príspevky, príbehy, reels a ďalší obsah.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Publikovanie a monitoring</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Pravidelne publikujeme a sledujeme výkonnosť.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Komunita a interakcia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Reagujeme na komentáre a budujeme komunitu.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#219EBC] hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#219EBC] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                    <h3 className="font-heading text-xl font-bold text-[#023047]">Analýza a optimalizácia</h3>
                  </div>
                  <p className="font-mono text-gray-700">
                    Pravidelne vyhodnocujeme výsledky a optimalizujeme stratégiu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agency vs DIY Section with Visual Comparison */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Prečo to robiť s agentúrou?
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-red-600 text-center">DIY (Sám)</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Časovo náročné</h4>
                    <p className="font-mono text-sm text-gray-700">Každý deň hodiny práce</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Nedostatok skúseností</h4>
                    <p className="font-mono text-sm text-gray-700">Chyby a neefektívnosť</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Nekonzistentnosť</h4>
                    <p className="font-mono text-sm text-gray-700">Prerušovaná komunikácia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-500 text-xl">❌</div>
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Chýbajúce nástroje</h4>
                    <p className="font-mono text-sm text-gray-700">Drahé licencie a software</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="font-heading text-xl font-bold mb-6 text-green-600 text-center">S agentúrou</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Ušetríš čas</h4>
                    <p className="font-mono text-sm text-gray-700">Sústredíš sa na biznis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Profesionálny prístup</h4>
                    <p className="font-mono text-sm text-gray-700">Skúsenosti a know-how</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Konzistentnosť</h4>
                    <p className="font-mono text-sm text-gray-700">Pravidelná komunikácia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-[#023047]">Všetky nástroje</h4>
                    <p className="font-mono text-sm text-gray-700">Profesionálne vybavenie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Offer Section with Hover Effects */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-[#023047]">
          Čo všetko vieme zabezpečiť?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Share2 className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Správa sociálnych sietí</h3>
            <p className="font-mono text-gray-700 text-sm">
              Denná komunikácia
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <MessageCircle className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Tvorba obsahu</h3>
            <p className="font-mono text-gray-700 text-sm">
              Príspevky, príbehy, reels
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Heart className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Komunita management</h3>
            <p className="font-mono text-gray-700 text-sm">
              Reakcie na komentáre
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Eye className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Influencer marketing</h3>
            <p className="font-mono text-gray-700 text-sm">
              Spolupráca s influencerami
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Calendar className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Content kalendár</h3>
            <p className="font-mono text-gray-700 text-sm">
              Plánovanie obsahu
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <BarChart3 className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Analýza výkonnosti</h3>
            <p className="font-mono text-gray-700 text-sm">
              Reporty a metriky
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <RefreshCw className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Reklamné kampane</h3>
            <p className="font-mono text-gray-700 text-sm">
              Na sociálnych sieťach
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <Settings className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Nastavenie účtov</h3>
            <p className="font-mono text-gray-700 text-sm">
              Profesionálne profily
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="bg-[#7dffee] rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#219EBC] transition-colors">
              <FileSpreadsheet className="text-[#023047] w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3 text-[#023047]">Pravidelné reporty a konzultácie</h3>
            <p className="font-mono text-gray-700 text-sm">
              Mesačné vyhodnotenie s odporúčaniami
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-[#219EBC] to-[#8ECAE6] rounded-2xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">
              Sociálne siete, ktoré budujú značku.
            </h2>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Nechaj si vytvoriť sociálne siete, ktoré budú autentické, zaujímavé a budú ti prinášať reálne výsledky.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              Od stratégie až po dennú komunikáciu – všetko s dôrazom na tvoju značku a cieľovku.
            </div>
            <div className="font-mono text-lg md:text-xl mb-8 text-[#023047]">
              A ty? Ty sa môžeš sústrediť na svoj biznis.
            </div>
            <Link href="/sk/kontakt">
              <PaletteButton variant="secondary" className="text-lg px-8 py-4">
                Spustiť sociálne siete
              </PaletteButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 