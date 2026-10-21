"use client";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column (5.5 cols): Iconic 3-Tier Repeating Headline & Bio */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
          
          {/* Vertical Accent Line & Kicker matching template */}
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-[1.5px] h-6 bg-[#1d4872]" />
            <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
              ENGINEERING INTELLIGENCE FOR IMPACT
            </span>
          </div>

          {/* 3-Tier Repeating Bold & Outlined Typography (matching BLOOM template) */}
          <div className="flex flex-col leading-[0.92] tracking-tighter mb-8 select-none">
            <span className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-[#1d4872]">
              SYSTEMS
            </span>
            <span className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-outline-blue my-1">
              SYSTEMS
            </span>
            <span className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-[#1d4872]">
              SYSTEMS
            </span>
          </div>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg text-[#5c7083] font-normal leading-relaxed max-w-md mb-9">
            I architect deep learning architectures, real-time neural audio forensics, and production RAG platforms that solve real problems.
          </p>

          {/* Bottom Action: Circular Arrow Button & Text (matching template) */}
          <div className="flex items-center space-x-4">
            <a
              href="#projects"
              aria-label="Explore Projects"
              className="group w-12 h-12 rounded-full border border-[#1d4872]/30 hover:border-[#f97d58] hover:bg-[#f97d58] flex items-center justify-center transition-colors duration-150"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-[#1d4872] group-hover:stroke-white stroke-[2] transition-colors"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#projects"
              className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#1d4872] hover:text-[#f97d58] transition-colors"
            >
              EXPLORE WORK
            </a>
          </div>

        </div>

        {/* Right Column (6.5 cols): Art Direction matching template */}
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#1d4872]/15 bg-[#ede6d8] shadow-[0_15px_45px_rgba(29,72,114,0.12)]">
            
            {/* The Coral Botanical & Deep Blue Artwork */}
            <img
              src="/hero_art.jpg"
              alt="Coral botanical floral branch over deep editorial blue canvas block"
              className="w-full h-full object-cover object-center"
            />

            {/* Sub-label inside deep blue box on right (matching template) */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden sm:flex items-center space-x-2.5">
              <span className="w-[1.5px] h-8 bg-white/40" />
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/90 font-semibold max-w-[90px] leading-tight">
                APPLIED DEEP LEARNING
              </span>
            </div>

            {/* Bottom Right Counter & Slider (matching template 01 / 06) */}
            <div className="absolute bottom-5 right-7 flex items-center space-x-3 font-sans text-xs tracking-widest text-[#1d4872] font-semibold bg-[#f5f0e6]/90 px-3.5 py-1.5 rounded-full border border-[#1d4872]/15">
              <span>01 / 06</span>
              <span className="w-8 h-[2px] bg-[#f97d58]" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
