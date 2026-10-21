"use client";

import { useState } from "react";
import { certificationsData } from "@/data/portfolioData";
import { CertificationItem } from "@/types";

export function CredentialsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certs" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header */}
        <div className="mb-12">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
            Certifications
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f8fafc]">
            Verified <span className="italic text-[#cbd5e1]">Credentials</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
        </div>

        {/* Credentials Grid (No emojis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-xl bg-[#161820] border border-white/10 hover:border-white/20 transition-colors duration-150 cursor-pointer flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-lg border border-white/15 group-hover:border-[#ff2844] flex items-center justify-center text-[#94a3b8] group-hover:text-[#ff2844] transition-colors bg-white/[0.02]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.7]">
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-[#f8fafc] group-hover:text-white transition-colors mb-1 line-clamp-2">
                  {cert.title}
                </h4>
                <span className="font-sans text-xs tracking-wider uppercase text-[#758092] block">
                  {cert.issuer} / {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal (Clean, no emojis) */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-lg w-full bg-[#161820] border border-white/15 rounded-2xl p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="font-sans text-xs uppercase tracking-wider text-[#ff2844] font-medium">
                  {selectedCert.category}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white font-sans text-sm p-1"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="font-sans text-xs text-[#94a3b8] mb-6">
                Issuing Authority: <span className="text-white">{selectedCert.issuer}</span>
              </p>
              <div className="p-4 rounded bg-[#101217] border border-white/10 font-sans text-xs text-[#758092] mb-6 leading-relaxed">
                Verified institutional curriculum covering system administration, algorithmic design, and machine learning deployment standards.
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 font-sans text-xs uppercase tracking-wider text-white bg-[#ff2844] hover:bg-[#ff4760] rounded-full transition-colors"
              >
                Close Credential
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
