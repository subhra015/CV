"use client";

import { achievementsData, educationData } from "@/data/portfolioData";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        
        {/* Left Column: Recognition */}
        <div className="lg:col-span-6">
          <div className="mb-10">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
              Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f8fafc]">
              Honors &amp; <span className="italic text-[#cbd5e1]">Leadership</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
          </div>

          <div className="space-y-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-xl bg-[#161820] border border-white/10"
              >
                <span className="font-sans text-xs tracking-wider uppercase text-[#ff2844] block mb-2 font-medium">
                  {item.badge}
                </span>
                <h3 className="font-serif text-xl font-normal text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs text-[#758092] px-2.5 py-1 rounded bg-white/[0.03] border border-white/10"
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
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
              Academics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f8fafc]">
              Academic <span className="italic text-[#cbd5e1]">Trajectory</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
          </div>

          <div className="relative pl-6 border-l border-white/15 space-y-9">
            {educationData.map((edu, idx) => (
              <div key={edu.id} className="relative">
                {/* Node */}
                <span
                  className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    idx === 0
                      ? "border-[#ff2844] bg-[#ff2844]"
                      : "border-white/30 bg-[#101217]"
                  }`}
                />
                <span className="font-sans text-xs text-[#ff2844] tracking-wider block mb-1 font-medium">
                  {edu.period} ({edu.status})
                </span>
                <h4 className="text-base font-medium text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-[#758092]">
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
