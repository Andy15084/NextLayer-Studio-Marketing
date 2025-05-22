import Image from "next/image";
import FloatingCard from "@/components/FloatingCard";
import PaletteButton from "@/components/PaletteButton";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import ExpandableText from "@/components/ExpandableText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-4 sm:p-8 relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 pt-16 md:pt-24 pb-12 md:pb-20">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 pt-6 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
            <div>
              <div className="relative">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
                  NextLayer<br />Studio
                </h1>
                <div style={{ transform: 'rotate(-20deg)' }} className="absolute top-45 right-[20%] md:right-[4%] inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-mono text-2xl md:text-3xl mb-4 shadow-lg z-10">
                  marketing
                </div>
              </div>
              <div className="h-auto">
                <p className="font-mono text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-xs sm:max-w-xl text-black text-center md:text-left font-medium">
                  Profesionálny marketing, ktorý vám prinesie nových zákazníkov a zvýši predaje.
                </p>
              </div>
            </div>
            <Link href="/kontakt">
              <PaletteButton variant="secondary">Chcem kampaň</PaletteButton>
            </Link>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex items-center justify-center mt-4 md:-mt-8">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative w-64 md:w-80 h-[500px] md:h-[600px] rounded-[40px] border-[14px] border-black bg-black overflow-hidden shadow-2xl mx-auto">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                
                {/* Screen Content - Video */}
                <video 
                  className="w-full h-full object-cover rounded-[25px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/marketing-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-36">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">Čím sme výnimoční</h2>
          <div className="font-mono text-base sm:text-lg mb-10 md:mb-12 text-black">
            Nerobíme to povrchovo a len na oko, ale poriadne a kvalitne
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Side - Video */}
            <div className="w-full md:w-2/5">
              <div className="relative mx-auto md:mx-0" style={{ maxWidth: "320px" }}>
                {/* iPhone Frame */}
                <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] rounded-[40px] border-[14px] border-black bg-black overflow-hidden shadow-2xl mx-auto">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                  
                  {/* Screen Content - Video */}
                  <video 
                    className="w-full h-full object-cover rounded-[25px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/marketing-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Right Side - Cards */}
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Card 1 */}
                <FloatingCard className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col items-start transition-all duration-300 hover:scale-105 w-full min-h-[200px] md:min-h-[250px] hover:min-h-[250px] md:hover:min-h-[300px]">
                  <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">SEO optimalizácia</div>
                  <div className="font-mono text-xs md:text-sm mb-4 text-black w-full">
                    <ExpandableText 
                      text="Upravíme váš web, aby ho Google miloval – technicky, obsahovo aj link-buildingom. Cieľom je dostať vás na prvú stránku vyhľadávania a priviesť stabilnú, neplatenú návštevnosť, ktorá sa mení na zákazníkov."
                      maxLength={90}
                    />
                  </div>
                  <Link href="/sluzby/seo-content" className="mt-auto text-[#219EBC] hover:underline font-mono text-sm">Zistiť viac →</Link>
                </FloatingCard>
                
                {/* Card 2 */}
                <FloatingCard className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col items-start transition-all duration-300 hover:scale-105 w-full min-h-[200px] md:min-h-[250px] hover:min-h-[250px] md:hover:min-h-[300px]">
                  <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Správa sociálnych sietí</div>
                  <div className="font-mono text-xs md:text-sm mb-4 text-black w-full">
                    <ExpandableText 
                      text="Zoberieme si na starosť stratégiu, tvorbu kreatívnych príspevkov, videí aj community management pre Instagram, Facebook, LinkedIn, TikTok či YouTube. Vy získate konzistentný obsah, rastúci engagement a viac fanúšikov bez starostí."
                      maxLength={90}
                    />
                  </div>
                  <Link href="/sluzby/socialne-siete" className="mt-auto text-[#219EBC] hover:underline font-mono text-sm">Zistiť viac →</Link>
                </FloatingCard>
                
                {/* Card 3 */}
                <FloatingCard className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col items-start transition-all duration-300 hover:scale-105 w-full min-h-[200px] md:min-h-[250px] hover:min-h-[250px] md:hover:min-h-[300px]">
                  <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">PPC & výkonnostná reklama</div>
                  <div className="font-mono text-xs md:text-sm mb-4 text-black w-full">
                    <ExpandableText 
                      text="Navrhneme a spustíme výkonnostné kampane v Google Ads, Meta, TikTok alebo LinkedIn. Neustále testujeme a optimalizujeme, aby každé euro vložené do reklamy prinieslo maximálny počet konverzií a čo najlepšiu návratnosť investície (ROAS)."
                      maxLength={90}
                    />
                  </div>
                  <Link href="/sluzby/ppc-reklama" className="mt-auto text-[#219EBC] hover:underline font-mono text-sm">Zistiť viac →</Link>
                </FloatingCard>
                
                {/* Card 4 */}
                <FloatingCard className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col items-start transition-all duration-300 hover:scale-105 w-full min-h-[200px] md:min-h-[250px] hover:min-h-[250px] md:hover:min-h-[300px]">
                  <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Tvorba webov a landing pages</div>
                  <div className="font-mono text-xs md:text-sm mb-4 text-black w-full">
                    <ExpandableText 
                      text="Navrhneme rýchle, moderné a responzívne webstránky alebo kampaňové landing pages. Dôraz kladieme na čistý dizajn, bleskové načítanie a jasné výzvy k akcii, aby návštevníci premenili svoj záujem na reálny dopyt či nákup."
                      maxLength={90}
                    />
                  </div>
                  <Link href="/sluzby/tvorba-webov" className="mt-auto text-[#219EBC] hover:underline font-mono text-sm">Zistiť viac →</Link>
                </FloatingCard>
              </div>
              
              <div className="text-center mt-8 md:mt-12">
                <Link href="/sluzby" className="font-mono text-lg md:text-xl text-[#023047] hover:text-[#219EBC] transition-colors font-medium">
                  a omnoho viac...
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Identity Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-36 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#023047]">
            Digitalizácia vašej značky a vytvorenie digitálnej identity
          </h2>
          
          <p className="font-mono text-base md:text-lg mb-12 text-black max-w-4xl">
            Vaša značka potrebuje vizuál, ktorý si každý zapamätá – od loga až po posledný pixel na sociálnych sieťach. 
            Náš dizajnérsky tím vám dodá kompletnú vizuálnu identitu, vďaka ktorej budete všade pôsobiť jednotne, 
            profesionálne a nezameniteľne.
          </p>
          
          {/* Service 1 - Logo */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[300px]">
                <Image 
                  src="/marketing.png" 
                  alt="Logo a logomanuál" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0 order-1 md:order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#023047]">Logo & logomanuál</h3>
                </div>
                <p className="font-mono text-sm md:text-base text-black pl-14">
                  Navrhneme originálne logo a spracujeme brandbook s presnými pravidlami používania farieb, písma a kompozície.
                </p>
              </div>
            </div>
          </div>
          
          {/* Service 2 - Firemné tlačoviny */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 order-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#023047]">Firemné tlačoviny</h3>
                </div>
                <p className="font-mono text-sm md:text-base text-black pl-14">
                  Vizitky, hlavičkový papier, obálky, faktúry či podpis do e-mailu – všetko v jednom štýle, pripravené na tlač alebo digitálne použitie.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[300px]">
                <Image 
                  src="/moderne.png" 
                  alt="Firemné tlačoviny" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Service 3 - Grafika pre sociálne siete */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[300px]">
                <Image 
                  src="/ai.png" 
                  alt="Grafika pre sociálne siete" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0 order-1 md:order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#023047]">Grafika pre sociálne siete</h3>
                </div>
                <p className="font-mono text-sm md:text-base text-black pl-14">
                  Šablóny príspevkov, stories, reels titulky aj profilové grafiky, aby ste na Instagrame či LinkedIne pôsobili konzistentne a profesionálne.
                </p>
              </div>
            </div>
          </div>
          
          {/* Service 4 - Web & UI/UX dizajn */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 order-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#023047]">Web & UI/UX dizajn</h3>
                </div>
                <p className="font-mono text-sm md:text-base text-black pl-14">
                  Vytvoríme moderné rozhranie pre web, e-shop alebo mobilnú aplikáciu s dôrazom na používateľský zážitok, rýchlosť a konverzie.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[300px]">
                <Image 
                  src="/co-je-webova-aplikacia.png" 
                  alt="Web a UI/UX dizajn" 
                  width={300} 
                  height={300} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                  5
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-[#023047]">Obalový a produktový dizajn</h3>
              </div>
              <p className="font-mono text-sm text-black pl-14">
                Dizajn krabičiek, etikiet a promo materiálov, ktorý vystúpi z regálov aj e-shopových thumbnailov.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                  6
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-[#023047]">Prezentácie a infografiky</h3>
              </div>
              <p className="font-mono text-sm text-black pl-14">
                PowerPoint/Keynote šablóny, pitch decky a vizualizácie dát, ktoré zaujmú publikum a uľahčia pochopenie kľúčových čísel.
              </p>
            </div>
            
            {/* Service 7 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                  7
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-[#023047]">Animácie a motion grafika</h3>
              </div>
              <p className="font-mono text-sm text-black pl-14">
                Logo animácie, krátke brand videá či mikro-animácie pre web – pohyb, ktorý pritiahne oko a zvýrazní vašu osobnosť.
              </p>
            </div>
          </div>
          
          <p className="font-mono text-lg md:text-xl text-center italic text-[#023047] mb-12 max-w-4xl mx-auto">
            Od prvého náčrtu až po finálne súbory pripravené na tlač či online nasadenie držíme všetko pod jednou strechou. 
            Získate tak jednotný vzhľad, ktorý buduje dôveru a posúva vašu značku na vyšší level.
          </p>
          
          <div className="text-center">
            <Link href="/sluzby/digitalna-identita">
              <PaletteButton variant="secondary">Chcem digitálnu identitu</PaletteButton>
            </Link>
          </div>
        </section>

        {/* Prečo my Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-36 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#023047] text-center">
            Prečo my?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <p className="font-mono text-base md:text-lg text-black">
              Narodili sme sa s technológiami v rukách. Hry sme vymieňali za prvé weby a sociálne siete sme spoznávali skôr, než sa stali mainstreamom. Dnes z toho ťažia naši klienti – sme mladí digitálni domorodci, ktorí v online prostredí dýchajú prirodzene.
            </p>
            
            <p className="font-mono text-base md:text-lg text-black">
              Sme vyštudovaní marketéri a programátori súčasne. Rozumieme psychológii predaja aj kódu, ktorý to celé poháňa. Preto dokážeme spojiť kreatívnu marketingovú stratégiu s technickou dokonalosťou webu či aplikácie.
            </p>
            
            <p className="font-mono text-base md:text-lg text-black">
              Naša najsilnejšia stránka je marketing vo virtuálnom priestore. Klasické &quot;offline&quot; taktiky sa presúvajú z letákov a billboardov na obrazovky mobilov a notebookov – a my vieme, ako tento presun využiť vo váš prospech.
            </p>
            
            <p className="font-mono text-base md:text-lg text-black">
              Veríme, že každý biznis má právo byť viditeľný tam, kde ľudia skutočne hľadajú riešenia – online. Pomôžeme vám využiť najmodernejšie nástroje, aby si vás vybrali tí správni zákazníci.
            </p>
            
            <p className="font-mono text-base md:text-lg text-black">
              Postaráme sa o to, aby sa vaše stránky zobrazovali na popredných miestach vo vyhľadávaní a aby vaše značné úsilie nezostalo schované v digitálnom šume. S nami sa z klikov stanú konverzie a z návštevníkov lojálni klienti.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/o-nas">
              <PaletteButton variant="secondary">Spoznať nás bližšie</PaletteButton>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#023047]">Prečo my?</h2>
            <div className="font-mono text-base sm:text-lg text-[#023047]">Čím sa odlišujeme od ostatných</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {/* Feature 1 */}
            <AnimatedOnScroll animation="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/moderne.png" alt="Feature 1" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Výsledky na prvom mieste</div>
                <div className="font-mono text-base mb-2 text-black">Zameriavame sa na merateľné výsledky a návratnosť investície.</div>
              </div>
            </AnimatedOnScroll>
            {/* Feature 2 */}
            <AnimatedOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/ai.png" alt="Feature 2" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Moderné technológie</div>
                <div className="font-mono text-base mb-2 text-black">Využívame najnovšie nástroje a postupy v digitálnom marketingu.</div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-24 mb-20 md:mb-32">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#023047]">Kontakt</h2>
          <p className="font-mono text-base mb-16 text-black max-w-2xl">
            Začnime spolu budovať váš úspešný marketing!<br />
            Kontaktujte nás a dohodneme si nezáväznú konzultáciu.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Form */}
            <div>
              <form>
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">meno:</label>
                  <input 
                    type="text"
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">email:</label>
                  <input 
                    type="email" 
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">správa:</label>
                  <textarea 
                    rows={8}
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent resize-none"
                  />
                </div>

                <Link href="/kontakt">
                  <PaletteButton 
                    type="button"
                    variant="secondary" 
                    className="w-full"
                  >
                    Odoslať správu
                  </PaletteButton>
                </Link>
              </form>
            </div>
            
            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start space-y-8 pt-8">
              <a 
                href="https://example.com/instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              <a 
                href="tel:+421903652258"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3 5h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H8V9zm-3 0h2v2H5V9zm3 3h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h8v2H8v-2z"/>
                </svg>
                <span className="font-mono">0903 652 258</span>
              </a>
              
              <a 
                href="mailto:nextlayerstudio@gmail.com" 
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="font-mono">nextlayerstudio@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
