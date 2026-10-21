"use client";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#f5f0e6]"
    >
      {/* 1st: Whole Background Asset (as requested) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/hero_art.jpg"
          alt="Coral botanical floral artwork over deep blue and warm ivory background"
          className="w-full h-full object-cover object-right sm:object-center"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center min-h-[75vh]">
        
        {/* Left Editorial Block */}
        <div className="max-w-3xl flex flex-col items-start">
          
          {/* Vertical Accent Line & Kicker */}
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <span className="w-[2px] h-6 bg-[#1d4872]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#1d4872] font-bold">
              ENGINEERING INTELLIGENCE FOR IMPACT
            </span>
          </div>

          {/* 2nd: 3-Tier Repeating Headline with Subhrajeet Ganguly (as requested) */}
          <div className="flex flex-col leading-[0.92] tracking-tighter mb-8 select-none">
            <span className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-black uppercase text-[#1d4872]">
              SUBHRAJEET GANGULY
            </span>
            <span className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-black uppercase text-outline-blue my-1">
              SUBHRAJEET GANGULY
            </span>
            <span className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-black uppercase text-[#1d4872]">
              SUBHRAJEET GANGULY
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#1d4872] font-normal leading-relaxed max-w-lg mb-9 bg-[#f5f0e6]/75 sm:bg-transparent p-2 sm:p-0 rounded-lg">
            I architect deep learning architectures, real-time neural audio forensics, and production RAG platforms that solve real problems.
          </p>

          {/* Bottom Action: Circular Arrow Button & Text */}
          <div className="flex items-center space-x-4">
            <a
              href="#projects"
              aria-label="Explore Projects"
              className="group w-12 h-12 rounded-full border border-[#1d4872]/40 hover:border-[#f97d58] hover:bg-[#f97d58] bg-[#f5f0e6]/80 flex items-center justify-center transition-colors duration-150"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-[#1d4872] group-hover:stroke-white stroke-[2.2] transition-colors"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#projects"
              className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#1d4872] hover:text-[#f97d58] transition-colors bg-[#f5f0e6]/80 sm:bg-transparent px-2 sm:px-0 py-1"
            >
              EXPLORE WORK
            </a>
          </div>

        </div>

        {/* Right Overlay Accents from Template (Integrated on the full background) */}
        <div className="absolute top-1/2 right-4 lg:right-12 -translate-y-1/2 hidden md:flex items-center space-x-3 pointer-events-none select-none">
          <span className="w-[2px] h-10 bg-white/60" />
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-white font-bold max-w-[110px] leading-tight drop-shadow-sm">
            APPLIED DEEP LEARNING
          </span>
        </div>

        {/* Bottom Right Counter & Slider Pill from Template */}
        <div className="absolute bottom-4 right-4 sm:right-10 flex items-center space-x-3 font-sans text-xs tracking-widest text-[#1d4872] font-bold bg-[#f5f0e6] px-4 py-2 rounded-full border border-[#1d4872]/20 shadow-sm pointer-events-none select-none">
          <span>01 / 06</span>
          <span className="w-8 h-[2px] bg-[#f97d58]" />
        </div>

      </div>
    </section>
  );
}
