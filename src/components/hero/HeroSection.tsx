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
      {/* Right-aligned Botanical Artwork - matching Image 2 reference */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[52%] lg:w-[48%] pointer-events-none select-none overflow-hidden z-0 opacity-20 md:opacity-100">
        <img
          src="/hero_art.jpg"
          alt="Coral botanical floral artwork over deep blue and warm ivory background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center min-h-[75vh]">
        
        {/* Left Editorial Block (Layout matching Image 2 reference) */}
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
          
          {/* Top Kicker with Coral Dot (as in Image 2) */}
          <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f97d58]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#1d4872] font-bold">
              CLASS OF 2026 • SYMBIOSIS INSTITUTE OF TECHNOLOGY
            </span>
          </div>

          {/* Single Name Headline (NOT repeated thrice - single 2-line name matching Image 2) */}
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.2rem] font-black uppercase text-[#1d4872] leading-[0.92] tracking-tighter mb-5 select-none">
            <span className="block">SUBHRAJEET</span>
            <span className="block">GANGULY</span>
          </h1>

          {/* Sub-Kicker (as in Image 2: AI // SOFTWARE // SYSTEMS ENGINEERING) */}
          <div className="flex items-center space-x-2 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#f97d58] font-bold mb-6">
            <span className="inline-block w-2 h-2 bg-[#f97d58]" />
            <span>AI // SOFTWARE // SYSTEMS ENGINEERING</span>
          </div>

          {/* Bio Description Paragraph */}
          <p className="text-sm sm:text-base text-[#1d4872]/90 font-normal leading-relaxed max-w-lg mb-8">
            3rd Year Computer Science student building intelligent software, AI-powered systems, and experimental technology. Working across applied machine learning, neural audio forensics, and distributed architectures.
          </p>

          {/* Action Buttons (3 buttons matching Image 2: Primary, Resume, Github) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-[0.16em] uppercase font-bold text-white bg-[#f97d58] hover:bg-[#1d4872] px-6 py-3.5 rounded transition-colors duration-150 shadow-sm"
            >
              <span>EXPLORE WORK</span>
              <span className="text-sm">→</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-[0.16em] uppercase font-bold text-[#1d4872] border border-[#1d4872]/30 hover:border-[#1d4872] hover:bg-[#1d4872] hover:text-white px-5 py-3.5 rounded transition-colors duration-150 bg-[#f5f0e6]/70 backdrop-blur-sm"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-[2]" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <path d="M10 9H8" />
              </svg>
              <span>VIEW RESUME</span>
            </button>

            <a
              href="https://github.com/subhra015"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-sans text-xs tracking-[0.16em] uppercase font-bold text-[#1d4872] border border-[#1d4872]/30 hover:border-[#1d4872] hover:bg-[#1d4872] hover:text-white px-5 py-3.5 rounded transition-colors duration-150 bg-[#f5f0e6]/70 backdrop-blur-sm"
            >
              <span>GITHUB</span>
              <span className="text-sm">→</span>
            </a>
          </div>

        </div>

        {/* Right Overlay Accents from Template (Integrated on the right floral section) */}
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
