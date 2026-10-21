"use client";

import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#1d4872]/20 rounded-2xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1d4872]/15 bg-[#f5f0e6]">
          <h3 className="font-sans text-xs tracking-wider uppercase text-[#1d4872] font-bold">
            Curriculum Vitae: Subhrajeet Ganguly
          </h3>
          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-1.5 text-xs font-sans uppercase tracking-wider text-white font-bold bg-[#1d4872] hover:bg-[#f97d58] rounded-full transition-colors"
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="text-[#5c7083] hover:text-[#1d4872] text-xs font-sans px-2 py-1 uppercase tracking-wider font-semibold"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-[#ede6d8] min-h-[500px]">
          <iframe
            src="/resume.pdf"
            className="w-full h-full min-h-[600px] border-none rounded-xl"
            title="Subhrajeet Ganguly Resume"
          />
        </div>
      </div>
    </div>
  );
}
