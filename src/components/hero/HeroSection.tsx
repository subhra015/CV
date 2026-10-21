"use client";

import { useEffect, useRef } from "react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Clean, flat animated signal red caustic reflections over water (no glow/shadow blur)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cw = (canvas.width = canvas.offsetWidth);
    let ch = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      cw = canvas.width = canvas.offsetWidth;
      ch = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    let t = 0;
    let animId: number;

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, cw, ch);

      const lines = 6;
      for (let i = 0; i < lines; i++) {
        const yBase = (ch / (lines + 1)) * (i + 1);
        ctx.beginPath();
        for (let x = 0; x <= cw; x += 10) {
          const w1 = Math.sin(x * 0.012 + t + i * 0.7) * 7;
          const w2 = Math.cos(x * 0.022 - t * 1.1 + i) * 4;
          const y = yBase + w1 + w2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(255, 40, 68, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Verbatim Typography from Reference */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
          
          {/* Tracking Kicker from Screenshot */}
          <div className="mb-6 font-sans text-xs tracking-[0.28em] uppercase text-[#758092] font-medium">
            IDEAS &nbsp;/&nbsp; DESIGN &nbsp;/&nbsp; IMPACT
          </div>

          {/* Headline matching screenshot */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#f8fafc] mb-6">
            Better experiences<br />
            for a{" "}
            <span className="text-[#ff2844] italic font-serif">
              brighter
            </span>
            <br />
            tomorrow.
          </h1>

          {/* Subtitle verbatim from reference */}
          <p className="text-base sm:text-lg text-[#94a3b8] font-light leading-relaxed max-w-md mb-8">
            We design digital experiences that feel good, work beautifully and make a real difference.
          </p>

          {/* CTA Row with Circular Arrow Button from Screenshot */}
          <div className="flex items-center space-x-4 flex-wrap gap-y-3">
            <a
              href="#projects"
              aria-label="Explore Projects"
              className="group relative w-12 h-12 rounded-full border border-white/20 bg-transparent hover:border-[#ff2844] flex items-center justify-center transition-colors duration-200"
            >
              <span className="absolute inset-0 bg-[#ff2844] rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 w-4 h-4 fill-none stroke-[#e2e8f0] group-hover:stroke-white stroke-[1.8] transition-colors"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#projects"
              className="px-6 py-3 text-xs font-sans uppercase tracking-wider text-white bg-[#ff2844] hover:bg-[#ff4760] rounded-full transition-colors duration-150"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-xs font-sans uppercase tracking-wider text-[#cbd5e1] hover:text-white border border-white/20 hover:border-white/40 rounded-full bg-transparent transition-colors duration-150"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Right Column: Architectural Arch Portal (Clean, no gradients, no vibe-coded tags) */}
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0b0e]">
            
            {/* Architectural Scene */}
            <img
              src="/hero_bg.jpg"
              alt="Architectural Arch Portal with Monolith Stone on Reflective Water"
              className="w-full h-full object-cover object-bottom"
            />

            {/* Flat Caustic Wave Lines */}
            <canvas
              ref={canvasRef}
              className="absolute left-0 right-0 bottom-0 h-1/2 w-full pointer-events-none mix-blend-screen opacity-60"
            />

            {/* Solid Signal Red Architectural Pillar */}
            <div className="absolute top-[10%] right-[5%] w-3.5 h-[55%] bg-[#ff2844] rounded-sm pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
