"use client";

export function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-12 lg:px-20 border-t border-white/10 relative z-10 text-xs font-sans text-[#758092] flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        © 2026 Subhrajeet Ganguly. Built with Next.js and TypeScript.
      </div>
      <div>
        <a href="#home" className="hover:text-white transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  );
}
