"use client";

export function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-12 lg:px-20 border-t border-[#1d4872]/15 bg-[#f5f0e6] relative z-10 text-xs font-sans text-[#5c7083] flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="font-medium">
        © 2026 Subhrajeet Ganguly. Built with Next.js and TypeScript.
      </div>
      <div>
        <a href="#home" className="font-semibold text-[#1d4872] hover:text-[#f97d58] transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  );
}
