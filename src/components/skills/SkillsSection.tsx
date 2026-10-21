"use client";

import { useState } from "react";
import { skillsData } from "@/data/portfolioData";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header */}
        <div className="mb-12">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
            Skills
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f8fafc]">
            Technical Stack <span className="italic text-[#cbd5e1]">&amp; Tooling</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/10">
          {skillsData.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(idx)}
              className={`font-sans text-xs tracking-wider uppercase px-4 py-2 rounded transition-colors duration-150 ${
                activeTab === idx
                  ? "bg-[#ff2844] text-white font-medium"
                  : "bg-transparent text-[#94a3b8] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Progress Grid (Solid flat color fills, no gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skillsData[activeTab].items.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-sans text-xs text-[#cbd5e1]">
                <span>{skill.name}</span>
                <span className="text-[#ff2844] font-medium">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#ff2844] transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
