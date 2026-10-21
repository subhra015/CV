"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolioData";

interface NavigationProps {
  activeSection: string;
  onOpenResume: () => void;
}

export function Navigation({ activeSection, onOpenResume }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 lg:px-20 ${
          scrolled
            ? "py-4 bg-[#101217]/95 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Minimalist Navigation Links (matching reference) */}
          <nav className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-normal">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-150 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e2e8f0]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Center: Brand Monogram */}
          <a
            href="#home"
            className="font-serif text-2xl tracking-widest text-[#f8fafc] font-normal flex items-baseline gap-1"
          >
            <span>SG</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2844] inline-block" />
          </a>

          {/* Right: Resume CTA and Hamburger Menu */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center font-sans text-xs tracking-wider uppercase text-[#e2e8f0] border border-white/20 hover:border-[#ff2844] px-4 py-2 rounded-full bg-transparent hover:bg-[#ff2844] hover:text-white transition-colors duration-150"
            >
              Resume
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 flex flex-col gap-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-6 h-[1.5px] bg-white transition-all duration-200 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-white transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-white transition-all duration-200 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[80vw] max-w-xs h-full bg-[#101217] border-l border-white/10 p-8 pt-24 flex flex-col gap-6 transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-sans text-[#cbd5e1] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-sans tracking-wider uppercase text-white bg-[#ff2844] hover:bg-[#ff4760] rounded-full transition-colors"
            >
              Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
