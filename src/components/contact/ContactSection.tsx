"use client";

import { siteConfig } from "@/data/portfolioData";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-[#1d4872]/15 bg-[#f5f0e6]">
      <div className="max-w-5xl mx-auto">
        
        {/* Contact Block in Deep Editorial Blue */}
        <div className="rounded-3xl p-10 sm:p-14 lg:p-16 bg-[#1d4872] text-center text-white shadow-[0_20px_50px_rgba(29,72,114,0.18)]">
          <div className="inline-flex items-center space-x-2.5 mb-4 px-3 py-1 rounded-full bg-white/10 text-white font-sans text-xs tracking-[0.2em] uppercase font-semibold">
            <span>CONTACT</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-5 leading-tight">
            Let's build something <span className="text-[#f97d58]">meaningful</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#e8ecf4] font-light max-w-xl mx-auto mb-9 leading-relaxed">
            Whether you are exploring machine learning architectures, seeking an engineer for an internship or role, or discussing applied deep learning, my inbox is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-8 py-3 text-xs font-sans uppercase tracking-wider font-bold text-[#1d4872] bg-[#f97d58] hover:bg-[#ff9170] rounded-full transition-colors"
            >
              Email Me
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 text-xs font-sans uppercase tracking-wider font-semibold text-white border border-white/30 hover:border-white rounded-full bg-transparent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 text-xs font-sans uppercase tracking-wider font-semibold text-white border border-white/30 hover:border-white rounded-full bg-transparent transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={onOpenResume}
              className="px-7 py-3 text-xs font-sans uppercase tracking-wider font-semibold text-white border border-white/30 hover:border-white rounded-full bg-transparent transition-colors"
            >
              Resume (PDF)
            </button>
          </div>

          <p className="font-sans text-xs text-[#b0b8c8] tracking-wider uppercase">
            Location: Nagpur, India (IST) | Open to remote and on-site opportunities
          </p>
        </div>

      </div>
    </section>
  );
}
