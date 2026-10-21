"use client";

import { achievementsData, educationData } from "@/data/portfolioData";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-[#1d4872]/15 bg-[#f5f0e6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        
        {/* Left Column: Recognition */}
        <div className="lg:col-span-6">
          <div className="mb-10">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-[1.5px] h-5 bg-[#1d4872]" />
              <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
                RECOGNITION
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1d4872]">
              Honors &amp; <span className="text-[#f97d58]">Leadership</span>
            </h2>
          </div>

          <div className="space-y-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-white border border-[#1d4872]/15 shadow-sm"
              >
                <span className="font-sans text-xs tracking-wider uppercase text-[#f97d58] block mb-2 font-bold">
                  {item.badge}
                </span>
                <h3 className="font-sans text-xl font-bold text-[#1d4872] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5c7083] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs font-medium text-[#1d4872] px-2.5 py-1 rounded bg-[#f5f0e6] border border-[#1d4872]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Trajectory */}
        <div id="education" className="lg:col-span-6">
          <div className="mb-10">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-[1.5px] h-5 bg-[#1d4872]" />
              <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
                ACADEMICS
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1d4872]">
              Academic <span className="text-[#f97d58]">Trajectory</span>
            </h2>
          </div>

          <div className="relative pl-7 border-l-2 border-[#1d4872]/20 space-y-9">
            {educationData.map((edu, idx) => (
              <div key={edu.id} className="relative">
                {/* Node */}
                <span
                  className={`absolute -left-[36px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    idx === 0
                      ? "border-[#f97d58] bg-[#f97d58]"
                      : "border-[#1d4872]/40 bg-[#f5f0e6]"
                  }`}
                />
                <span className="font-sans text-xs text-[#f97d58] tracking-wider block mb-1 font-bold">
                  {edu.period} ({edu.status})
                </span>
                <h4 className="text-base font-bold text-[#1d4872] mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-[#5c7083]">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
