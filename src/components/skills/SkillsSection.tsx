"use client";

import { useState } from "react";
import { skillsData } from "@/data/portfolioData";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-[#1d4872]/15 bg-[#f5f0e6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-[1.5px] h-5 bg-[#1d4872]" />
            <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
              SKILLS
            </span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1d4872]">
            Technical <span className="text-[#f97d58]">Stack</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-[#1d4872]/15">
          {skillsData.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(idx)}
              className={`font-sans text-xs tracking-wider uppercase px-4 py-2.5 rounded-full transition-colors duration-150 ${
                activeTab === idx
                  ? "bg-[#1d4872] text-white font-bold"
                  : "bg-white text-[#5c7083] border border-[#1d4872]/15 hover:text-[#1d4872] hover:border-[#1d4872]/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
          {skillsData[activeTab].items.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-[#1d4872]/15 shadow-sm">
              <div className="flex justify-between items-center font-sans text-xs font-semibold text-[#1d4872]">
                <span>{skill.name}</span>
                <span className="text-[#f97d58] font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-[#ede6d8] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#f97d58] transition-all duration-500 ease-out"
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
