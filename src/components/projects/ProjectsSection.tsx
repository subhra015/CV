"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [starOpen, setStarOpen] = useState(false);

  return (
    <article className="bg-[#161820] border border-white/10 rounded-xl p-7 sm:p-8 flex flex-col transition-colors duration-200 hover:border-white/25">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="font-sans text-xs tracking-wider text-[#ff2844] font-medium">
          {project.index}
        </span>
        <div className="flex items-center space-x-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#94a3b8] hover:text-white border border-white/10 hover:border-[#ff2844] px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>Code</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#94a3b8] hover:text-white border border-white/10 hover:border-[#ff2844] px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      {/* Titles */}
      <h3 className="font-serif text-2xl font-normal text-[#f8fafc] mb-1">
        {project.title}
      </h3>
      <span className="font-sans text-xs tracking-wider uppercase text-[#758092] font-medium block mb-3.5">
        {project.subtitle}
      </span>
      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-1.5 mb-5 font-sans text-xs text-[#758092]">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#ff2844] mt-0.5">-</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Case Study Toggle */}
      <button
        onClick={() => setStarOpen(!starOpen)}
        className="text-left font-sans text-xs text-[#ff2844] hover:text-[#ff4760] transition-colors py-1 mb-3 flex items-center gap-1"
      >
        <span>{starOpen ? "Collapse Review" : "Full Case Study"}</span>
      </button>

      {/* STAR Details Panel */}
      {starOpen && (
        <div className="p-3.5 rounded bg-[#101217] border-l-2 border-[#ff2844] space-y-2 mb-4 font-sans text-xs text-[#94a3b8]">
          <p><strong className="text-white">Situation:</strong> {project.star.situation}</p>
          <p><strong className="text-white">Task:</strong> {project.star.task}</p>
          <p><strong className="text-white">Action:</strong> {project.star.action}</p>
          <p><strong className="text-white">Result:</strong> {project.star.result}</p>
        </div>
      )}

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-[11px] text-[#758092] px-2.5 py-1 rounded bg-white/[0.03] border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header */}
        <div className="mb-14">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
            Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f8fafc]">
            Featured <span className="italic text-[#cbd5e1]">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
