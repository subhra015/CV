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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-6 sm:px-12 lg:px-20 ${
          scrolled
            ? "py-4 bg-[#f5f0e6]/95 backdrop-blur-md border-b border-[#1d4872]/10 shadow-sm"
            : "py-7 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Monogram SG (as requested) */}
          <a
            href="#home"
            className="font-sans text-2xl sm:text-3xl font-black tracking-[0.2em] uppercase text-[#1d4872]"
          >
            SG
          </a>

          {/* Center: Navigation Links with Coral Orange Active Dot */}
          <nav className="hidden md:flex items-center space-x-9 font-sans text-xs tracking-[0.16em] uppercase">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center py-1 transition-colors duration-150 ${
                    isActive
                      ? "text-[#1d4872] font-bold"
                      : "text-[#5c7083] hover:text-[#1d4872]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97d58] mt-1" />
                  ) : (
                    <span className="w-1.5 h-1.5 mt-1" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Resume Action and 3-line Hamburger Menu */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center font-sans text-xs font-bold tracking-wider uppercase text-[#1d4872] border border-[#1d4872]/20 hover:border-[#f97d58] hover:bg-[#f97d58] hover:text-white px-4 py-2 rounded-full transition-colors duration-150"
            >
              Resume
            </button>

            {/* Hamburger Button (≡) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1 flex flex-col gap-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-6 h-[2px] bg-[#1d4872] transition-all duration-200 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[#1d4872] transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[#1d4872] transition-all duration-200 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[80vw] max-w-xs h-full bg-[#f5f0e6] border-l border-[#1d4872]/15 p-8 pt-24 flex flex-col gap-6 transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-sans tracking-[0.16em] uppercase text-[#1d4872] font-bold hover:text-[#f97d58] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-[#1d4872]/15">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-sans tracking-wider uppercase text-white bg-[#1d4872] hover:bg-[#f97d58] rounded-full font-bold transition-colors"
            >
              Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
