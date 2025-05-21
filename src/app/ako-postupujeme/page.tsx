import AnimatedOnScroll from "@/components/AnimatedOnScroll";

export default function AkoPostupujemePage() {
  return (
    <main className="p-4 sm:p-8 relative z-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          Ako postupujeme
        </h1>
        <div className="font-mono text-base sm:text-lg mb-10 max-w-3xl text-[#023047]">
          <p className="mb-4">
            Naše riešenia sú postavené na overenom procese, ktorý zabezpečí najlepšie výsledky pre váš biznis.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 gap-8">
          <AnimatedOnScroll animation="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">1</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Konzultácia</h2>
              </div>
              <p className="font-mono text-base ml-14">
                Najprv sa stretneme, aby sme podrobne spoznali vaše podnikanie, ciele a výzvy. 
                Počúvame a analyzujeme vaše potreby, aby sme mohli navrhnúť najefektívnejšie riešenie.
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">2</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Stratégia</h2>
              </div>
              <p className="font-mono text-base ml-14">
                Na základe získaných informácií pripravíme detailnú stratégiu na mieru vášmu biznisu.
                Definujeme ciele, časový harmonogram, rozpočet a očakávané výsledky.
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">3</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Implementácia</h2>
              </div>
              <p className="font-mono text-base ml-14">
                Po schválení stratégie začíname s implementáciou. Vytvárame obsah, nastavujeme kampane,
                optimalizujeme webstránky a aplikujeme všetky dohodnuté postupy.
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">4</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Monitoring a optimalizácia</h2>
              </div>
              <p className="font-mono text-base ml-14">
                Priebežne sledujeme výsledky všetkých aktivít, analyzujeme dáta a optimalizujeme procesy
                pre dosiahnutie najlepších výsledkov. Pravidelne vás informujeme o pokroku.
              </p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-4">
                <div className="bg-[#219EBC] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">5</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Reporting a vyhodnotenie</h2>
              </div>
              <p className="font-mono text-base ml-14">
                Poskytujeme detailné reporty a vyhodnotenia dosiahnutých výsledkov. Diskutujeme o ďalších 
                krokoch a možnostiach, ako naďalej zlepšovať vaše výsledky.
              </p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </main>
  );
} 