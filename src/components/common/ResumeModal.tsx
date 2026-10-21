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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161820] border border-white/10 rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#101217]">
          <h3 className="font-sans text-xs tracking-wider uppercase text-white font-medium">
            Curriculum Vitae: Subhrajeet Ganguly
          </h3>
          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-1.5 text-xs font-sans uppercase tracking-wider text-white bg-[#ff2844] hover:bg-[#ff4760] rounded-full transition-colors"
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xs font-sans px-2 py-1"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-[#0a0b0e] min-h-[500px]">
          <iframe
            src="/resume.pdf"
            className="w-full h-full min-h-[600px] border-none rounded-lg"
            title="Subhrajeet Ganguly Resume"
          />
        </div>
      </div>
    </div>
  );
}
