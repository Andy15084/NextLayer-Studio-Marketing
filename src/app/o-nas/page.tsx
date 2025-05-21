import TypewriterOnView from '@/components/TypewriterOnView';
import Image from 'next/image';
import FloatingCard from '@/components/FloatingCard';

export default function ONasPage() {
  return (
    <main className="p-4 sm:p-8 relative z-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          O nás
        </h1>
        <div className="font-mono text-base sm:text-lg mb-10 max-w-3xl text-[#023047]">
          <p className="mb-4">
            Sme tím profesionálov, ktorí sa špecializujú na digitálny marketing a online riešenia.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">Naša vízia</h2>
          <p className="font-mono text-base mb-8">
            Naším cieľom je pomáhať firmám rásť prostredníctvom kvalitného marketingu a digitálnych riešení na mieru.
            Veríme, že každá firma si zaslúži profesionálnu prezentáciu a efektívne marketingové stratégie.
          </p>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">Náš tím</h2>
          <p className="font-mono text-base mb-8">
            Náš tím tvoria skúsení marketéri, dizajnéri a vývojári, ktorí majú vášeň pre digitálny svet.
            Neustále sledujeme najnovšie trendy a implementujeme ich do našich riešení.
          </p>
        </div>
      </section>
    </main>
  );
} 