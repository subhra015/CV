"use client";

import { useState } from "react";
import { certificationsData } from "@/data/portfolioData";
import { CertificationItem } from "@/types";

export function CredentialsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certs" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-[#1d4872]/15 bg-[#f5f0e6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-[1.5px] h-5 bg-[#1d4872]" />
            <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
              CREDENTIALS
            </span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1d4872]">
            Verified <span className="text-[#f97d58]">Knowledge</span>
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-2xl bg-white border border-[#1d4872]/15 hover:border-[#f97d58] transition-colors duration-150 cursor-pointer flex items-center gap-4 shadow-sm group"
            >
              <div className="w-11 h-11 rounded-xl border border-[#1d4872]/20 group-hover:border-[#f97d58] group-hover:bg-[#f97d58]/10 flex items-center justify-center text-[#1d4872] group-hover:text-[#f97d58] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.8]">
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#1d4872] group-hover:text-[#f97d58] transition-colors mb-1 line-clamp-2">
                  {cert.title}
                </h4>
                <span className="font-sans text-xs tracking-wider uppercase text-[#5c7083] font-semibold block">
                  {cert.issuer} / {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-lg w-full bg-white border border-[#1d4872]/20 rounded-2xl p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="font-sans text-xs uppercase tracking-wider text-[#f97d58] font-bold">
                  {selectedCert.category}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-[#5c7083] hover:text-[#1d4872] font-sans text-xs font-semibold p-1 uppercase tracking-wider"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
              <h3 className="font-sans text-2xl font-bold text-[#1d4872] mb-2">
                {selectedCert.title}
              </h3>
              <p className="font-sans text-xs text-[#5c7083] mb-6 font-medium">
                Issuing Authority: <span className="text-[#1d4872] font-bold">{selectedCert.issuer}</span>
              </p>
              <div className="p-4 rounded-xl bg-[#f5f0e6] border border-[#1d4872]/15 font-sans text-xs text-[#5c7083] mb-6 leading-relaxed">
                Verified institutional curriculum covering system administration, algorithmic design, and machine learning deployment standards.
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 font-sans text-xs uppercase tracking-wider text-white font-bold bg-[#1d4872] hover:bg-[#f97d58] rounded-full transition-colors"
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
