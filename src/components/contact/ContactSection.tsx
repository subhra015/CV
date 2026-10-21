"use client";

import { siteConfig } from "@/data/portfolioData";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        <div className="rounded-2xl p-10 sm:p-14 lg:p-16 bg-[#161820] border border-white/10 text-center">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-3 font-medium">
            Contact
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
            Let's build something <span className="italic text-[#ff2844]">meaningful</span> together.
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] font-light max-w-xl mx-auto mb-9 leading-relaxed">
            Whether you are exploring machine learning architectures, seeking an engineer for an internship or role, or discussing applied deep learning, my inbox is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-7 py-3 text-xs font-sans uppercase tracking-wider text-white bg-[#ff2844] hover:bg-[#ff4760] rounded-full transition-colors"
            >
              Email Me
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-sans uppercase tracking-wider text-[#cbd5e1] hover:text-white border border-white/20 hover:border-white/40 rounded-full bg-transparent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-sans uppercase tracking-wider text-[#cbd5e1] hover:text-white border border-white/20 hover:border-white/40 rounded-full bg-transparent transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={onOpenResume}
              className="px-6 py-3 text-xs font-sans uppercase tracking-wider text-[#cbd5e1] hover:text-white border border-white/20 hover:border-white/40 rounded-full bg-transparent transition-colors"
            >
              Resume (PDF)
            </button>
          </div>

          <p className="font-sans text-xs text-[#758092]">
            Location: Nagpur, India (IST) | Open to remote and on-site opportunities
          </p>
        </div>

      </div>
    </section>
  );
}
