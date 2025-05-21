import Image from 'next/image';
import Link from 'next/link';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import PaletteButton from '@/components/PaletteButton';

export default function SocialneSietePage() {
  return (
    <main className="p-4 sm:p-8 relative z-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          Správa sociálnych sietí
        </h1>
        <div className="font-mono text-base sm:text-lg mb-10 max-w-3xl text-[#023047]">
          <p className="mb-4">
            Profesionálna správa sociálnych sietí, ktorá Vám prinesie nových zákazníkov a zvýši povedomie o Vašej značke.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <AnimatedOnScroll animation="fade-up">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">Prečo spravovať sociálne siete profesionálne?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start">
                <div className="bg-[#219EBC] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Konzistentná komunikácia</h3>
                  <p className="font-mono text-sm">
                    Pravidelné a konzistentné príspevky, ktoré budujú dôveru a povedomie o Vašej značke
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#219EBC] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Kvalitný obsah</h3>
                  <p className="font-mono text-sm">
                    Profesionálne spracovaný obsah, ktorý zaujme a pritiahne pozornosť Vašej cieľovej skupiny
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#219EBC] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Šetrenie času</h3>
                  <p className="font-mono text-sm">
                    Keď sa o sociálne siete stará profesionál, Vy sa môžete venovať svojmu podnikaniu
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#219EBC] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Merateľné výsledky</h3>
                  <p className="font-mono text-sm">
                    Pravidelný reporting a analýza výsledkov, ktorá umožňuje neustále zlepšovanie
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/kontakt">
                <PaletteButton variant="secondary">Nezáväzná konzultácia</PaletteButton>
              </Link>
            </div>
          </div>
        </AnimatedOnScroll>
        
        {/* Process Section */}
        <AnimatedOnScroll animation="fade-up" delay={200}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">Ako prebieha spolupráca?</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Úvodná konzultácia</h3>
                  <p className="font-mono text-sm">
                    Spoznáme Váš biznis, ciele a cieľovú skupinu. Identifikujeme vhodné sociálne siete
                    a navrhneme stratégiu komunikácie.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Príprava obsahovej stratégie</h3>
                  <p className="font-mono text-sm">
                    Vytvoríme obsahový kalendár s témami príspevkov, tonalitou komunikácie
                    a časovým harmonogramom.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Tvorba a publikácia obsahu</h3>
                  <p className="font-mono text-sm">
                    Pravidelne vytvárame a publikujeme obsah na dohodnutých sociálnych sieťach.
                    Komunikujeme s Vašimi sledovateľmi a odpovedáme na komentáre a správy.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-[#023047]">Monitoring a reporting</h3>
                  <p className="font-mono text-sm">
                    Pravidelne sledujeme výsledky, analyzujeme metriky a pripravujeme prehľadné
                    reporty s odporúčaniami na ďalšie zlepšovanie.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/kontakt">
                <PaletteButton variant="primary">Mám záujem</PaletteButton>
              </Link>
            </div>
          </div>
        </AnimatedOnScroll>
      </section>
    </main>
  );
} 