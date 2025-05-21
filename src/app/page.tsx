import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import TypewriterOnView from "@/components/TypewriterOnView";
import FloatingCard from "@/components/FloatingCard";
import PaletteButton from "@/components/PaletteButton";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
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
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
                New Website
              </h1>
              <div className="h-[60px] md:h-[80px]">
                <p className="font-mono text-sm sm:text-base mb-6 md:mb-8 max-w-xs sm:max-w-xl text-black text-center md:text-left">
                  <Typewriter text={"This is a new website with the same design as NextLayer Studio but with different content and purpose."} speed={10} />
                </p>
              </div>
            </div>
            <Link href="/contact">
              <PaletteButton variant="secondary">Get Started</PaletteButton>
            </Link>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex items-center justify-center mt-4 md:-mt-8">
            <Image
              src="/image-2.png"
              alt="Hero Illustration"
              width={320}
              height={320}
              className="w-48 sm:w-72 md:w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
              priority
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-36">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">Our Process</h2>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-black">
            <TypewriterOnView text="We follow a four-step process" speed={20} showCursor={false} animatedDots={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Step 1: Discovery</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Understanding your goals and requirements</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">1</div>
            </FloatingCard>
            {/* Card 2 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Step 2: Planning</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Creating a strategic roadmap for success</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">2</div>
            </FloatingCard>
            {/* Card 3 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Step 3: Execution</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Building and implementing your solution</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">3</div>
            </FloatingCard>
            {/* Card 4 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-[#023047]">Step 4: Support</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Ongoing maintenance and improvements</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">4</div>
            </FloatingCard>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#023047]">Our Features</h2>
            <div className="font-mono text-base sm:text-lg text-[#023047]">What makes us special?</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {/* Feature 1 */}
            <AnimatedOnScroll animation="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/moderne.png" alt="Feature 1" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Feature 1</div>
                <div className="font-mono text-base mb-2 text-black">Description of the first feature and how it benefits users.</div>
              </div>
            </AnimatedOnScroll>
            {/* Feature 2 */}
            <AnimatedOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/ai.png" alt="Feature 2" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Feature 2</div>
                <div className="font-mono text-base mb-2 text-black">Description of the second feature and how it benefits users.</div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-24 mb-20 md:mb-32">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#023047]">Contact Us</h2>
          <p className="font-mono text-base mb-16 text-black max-w-2xl">
            Get in touch with us today!<br />
            We&apos;re here to help with any questions you might have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Form */}
            <div>
              <form>
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">name:</label>
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
                  <label className="block font-mono mb-2 text-black">message:</label>
                  <textarea 
                    rows={8}
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent resize-none"
                  />
                </div>

                <Link href="/contact">
                  <PaletteButton 
                    type="button"
                    variant="secondary" 
                    className="w-full"
                  >
                    Send Message
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
                <span className="font-mono">newwebsite</span>
              </a>
              
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3 5h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H8V9zm-3 0h2v2H5V9zm3 3h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h8v2H8v-2z"/>
                </svg>
                <span className="font-mono">+1 (234) 567-890</span>
              </a>
              
              <a 
                href="mailto:info@newwebsite.com" 
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="font-mono">info@newwebsite.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
