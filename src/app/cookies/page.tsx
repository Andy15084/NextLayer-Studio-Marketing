'use client';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold text-[#023047] mb-4">Politika súborov cookies</h1>
            <p className="font-mono text-lg text-gray-600">NextLayer Studio</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-gray-600 mb-8 pb-4 border-b">
              <strong>Vytvorené:</strong> 19. júla 2025
            </div>

            <h1 className="text-2xl font-heading font-bold text-[#023047] mb-6">
              Politika súborov cookies pre Nextlayer Studio
            </h1>

            <p className="text-gray-700 mb-6">
              Tento dokument (ďalej len &ldquo;Politika&rdquo;) podrobne vysvetľuje, ako spoločnosť Nextlayer Studio, s.r.o., IČO 00000000, so sídlom Príkladná 1, 811 09 Bratislava (ďalej len &ldquo;my&rdquo;, &ldquo;nás&rdquo; alebo &ldquo;naša spoločnosť&rdquo;) používa súbory cookies a obdobné technológie na svojej webovej lokalite <a href="https://nextlayer.studio" className="text-[#219EBC] hover:underline">https://nextlayer.studio</a> (ďalej len &ldquo;Webstránka&rdquo;) v súlade s nariadením (EÚ) 2016/679 (GDPR), smernicou 2002/58/ES (tzv. ePrivacy smernica) a zákonom č. 452/2021 Z. z. o elektronických komunikáciách v znení neskorších predpisov, ako aj zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              1. Čo sú súbory cookies?
            </h2>
            <p className="text-gray-700 mb-6">
              Súbory cookies sú malé textové súbory, ktoré sa ukladajú vo Vašom zariadení (počítač, smartfón, tablet) pri návšteve Webstránky. Obsahujú údaje, ktoré umožňujú identifikovať a zapamätať si Vaše preferencie, zariadenie alebo prehliadacie úkony.
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              2. Právny základ spracúvania
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Nevyhnutné cookies</strong> spracúvame na základe nášho oprávneného záujmu zabezpečiť technické fungovanie Webstránky.</li>
              <li><strong>Preferenčné, analytické, marketingové a ďalšie nevyhnutné cookies</strong> spracúvame výhradne na základe Vášho predchádzajúceho, slobodného, konkrétneho, informovaného a jednoznačného súhlasu (§ 109 ods. 8 zákona č. 452/2021 Z. z.; čl. 6 ods. 1 písm. a) GDPR).</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              3. Druhy cookies, ktoré používame
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Kategória</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Účel</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Životnosť</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Nevyhnutné</td>
                    <td className="border border-gray-300 px-4 py-2">Zabezpečenie základných funkcií Webstránky, napr. navigácie, overenia relácie, ochrany proti CSRF.</td>
                    <td className="border border-gray-300 px-4 py-2">relácia / 12 mesiacov</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Preferenčné</td>
                    <td className="border border-gray-300 px-4 py-2">Zapamätanie si používateľských volieb, napr. jazyk, región, zobrazenie košíka.</td>
                    <td className="border border-gray-300 px-4 py-2">6 mesiacov</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Analytické</td>
                    <td className="border border-gray-300 px-4 py-2">Meranie a analýza návštevnosti (napr. <strong>_ga</strong>, <strong>_gid</strong>, <strong>_gat</strong>), zlepšovanie výkonu a UX.</td>
                    <td className="border border-gray-300 px-4 py-2">1 – 24 mesiacov</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Marketingové</td>
                    <td className="border border-gray-300 px-4 py-2">Personalizovaná reklama, remarketing (napr. Google Ads, Meta Pixel).</td>
                    <td className="border border-gray-300 px-4 py-2">1 – 24 mesiacov</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Bezpečnostné</td>
                    <td className="border border-gray-300 px-4 py-2">Detekcia a prevencia podvodných aktivít, ochrana proti útokom.</td>
                    <td className="border border-gray-300 px-4 py-2">12 mesiacov</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Nezaradené</td>
                    <td className="border border-gray-300 px-4 py-2">Cookies, ktoré aktuálne analyzujeme a priradíme im účel po zistení.</td>
                    <td className="border border-gray-300 px-4 py-2">do priradenia</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              4. Konkrétne cookies tretích strán
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Poskytovateľ</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Názov cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Účel</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Politika ochrany súkromia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Google LLC (GA4)</td>
                    <td className="border border-gray-300 px-4 py-2">_ga, _gid, _gat</td>
                    <td className="border border-gray-300 px-4 py-2">Štatistická analýza návštevnosti</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/privacy" className="text-[#219EBC] hover:underline">https://policies.google.com/privacy</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Google LLC (Ads)</td>
                    <td className="border border-gray-300 px-4 py-2">_gcl_au</td>
                    <td className="border border-gray-300 px-4 py-2">Meranie konverzií</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://policies.google.com/technologies/ads" className="text-[#219EBC] hover:underline">https://policies.google.com/technologies/ads</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Meta Platforms</td>
                    <td className="border border-gray-300 px-4 py-2">_fbp</td>
                    <td className="border border-gray-300 px-4 py-2">Remarketing</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://www.facebook.com/privacy/explanation" className="text-[#219EBC] hover:underline">https://www.facebook.com/privacy/explanation</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Uvedený zoznam môže byť priebežne aktualizovaný podľa skutočne používaných technológií.
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              5. Správa súborov cookies a odvolanie súhlasu
            </h2>
            <p className="text-gray-700 mb-4">
              Pri prvej návšteve Webstránky sa Vám zobrazí <strong>banner na správu súhlasu</strong>, kde môžete:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
              <li>Povoliť všetky cookies,</li>
              <li>Odmietnuť všetky okrem nevyhnutných,</li>
              <li>Nastaviť preferencie podľa kategórií.</li>
            </ol>
            <p className="text-gray-700 mb-6">
              Svoj súhlas môžete kedykoľvek odvolať prostredníctvom ikony &ldquo;Nastavenia cookies&rdquo; umiestnenej v päte Webstránky alebo zmenou nastavení Vášho prehliadača. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania pred jeho odvolaním.
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              6. Prenos údajov do tretích krajín
            </h2>
            <p className="text-gray-700 mb-4">
              Niektorí poskytovatelia (napr. Google LLC, sídlo USA) môžu spracúvať údaje v tretích krajinách. Prenosy uskutočňujeme len na základe:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>rozhodnutia o primeranosti Európskej komisie, alebo</li>
              <li>štandardných zmluvných doložiek (SCC), prípadne</li>
              <li>iných vhodných záruk podľa čl. 46 GDPR.</li>
            </ul>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              7. Bezpečnosť spracúvania
            </h2>
            <p className="text-gray-700 mb-6">
              Implementujeme primerané technické a organizačné opatrenia vrátane šifrovania, pseudonymizácie a prísnej kontroly prístupu, aby sme chránili osobné údaje pred neoprávneným prístupom, zverejnením alebo zničením.
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              8. Vaše práva
            </h2>
            <p className="text-gray-700 mb-6">
              Máte právo na prístup k osobným údajom, ich opravu alebo vymazanie, obmedzenie spracúvania, námietku proti spracúvaniu, prenosnosť údajov a právo podať sťažnosť dozornému orgánu (Úrad na ochranu osobných údajov SR, Hraničná 4826/12, 820 07 Bratislava 27, <a href="http://www.dataprotection.gov.sk" className="text-[#219EBC] hover:underline">www.dataprotection.gov.sk</a>).
            </p>

            <h2 className="text-xl font-heading font-bold text-[#023047] mt-8 mb-4">
              9. Zmeny tejto Politiky
            </h2>
            <p className="text-gray-700 mb-6">
              Túto Politiku môžeme aktualizovať, ak to vyžadujú právne alebo technické zmeny. Ak ide o podstatné zmeny, poskytneme Vám zrozumiteľné oznámenie (napr. bannerom alebo e‑mailom). Dátum poslednej revízie sa zobrazí na začiatku dokumentu.
            </p>

            <hr className="my-8 border-gray-300" />

            <div className="text-center">
              <h3 className="text-lg font-heading font-bold text-[#023047] mb-4">Kontakt</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#219EBC]">
                <a href="mailto:team@nextlayer.studio" className="hover:underline">team@nextlayer.studio</a>
                <span className="hidden sm:inline">|</span>
                <span>+421 902 238 309</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 