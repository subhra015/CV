"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Editorial Header (No vibe-coded tags) */}
        <div className="mb-14">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#ff2844] block mb-2 font-medium">
            About
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#f8fafc]">
            Architecting <span className="italic text-[#cbd5e1]">End-to-End Systems</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#ff2844] mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Frame (Clean, no brackets, no emojis) */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#161820]">
              <img
                src="/Image.jpeg"
                alt="Subhrajeet Ganguly"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
              <div className="absolute bottom-0 inset-x-0 py-2.5 px-4 bg-[#101217]/95 border-t border-white/10 font-sans text-xs tracking-wider text-center text-[#e2e8f0]">
                Subhrajeet Ganguly: AI / ML
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (No em dashes, no gradients) */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#f8fafc] leading-relaxed mb-6">
              I focus on <span className="italic text-[#ff2844]">completion</span>: taking models from raw data and custom loss functions to hardened APIs and responsive interfaces.
            </p>

            <div className="space-y-4 text-[#94a3b8] text-base leading-relaxed mb-8">
              <p>
                I am a Computer Science undergraduate at <strong className="text-white font-medium">Symbiosis Institute of Technology, Nagpur</strong>. My work centers on deep learning architectures, uncertainty calibration, real-time audio analysis, and multi-agent systems where verification is enforced deterministically.
              </p>
              <p>
                Notable deployed systems include <strong className="text-white font-medium">StreamGuard</strong> (real-time deepfake audio forensics with calibrated MC-Dropout confidence), <strong className="text-white font-medium">DocMind</strong> (hybrid Reciprocal Rank Fusion document intelligence with LLM reranking), and <strong className="text-white font-medium">Promo Planner Agent</strong> (an orchestrated multi-agent planning engine with zero-trust Python verification gates).
              </p>
              <p>
                Beyond pure modeling, I won <strong className="text-white font-medium">1st place in the college entrepreneurship competition</strong> during my first semester, designing a viable startup concept and pitching to industry judges. I also directed on-ground logistics for <strong className="text-white font-medium">ICSIT '25</strong>, coordinating guest hospitality and event operations.
              </p>
            </div>

            {/* Metrics Matrix (No emojis, no gradients) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#161820] border border-white/10 border-l-2 border-l-[#ff2844]">
                <span className="font-sans text-xs tracking-wider uppercase text-[#758092] block mb-1">
                  Primary Focus
                </span>
                <span className="text-sm font-medium text-white">
                  Deep Learning, RAG, Audio Forensics
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#161820] border border-white/10 border-l-2 border-l-[#ff2844]">
                <span className="font-sans text-xs tracking-wider uppercase text-[#758092] block mb-1">
                  Institution
                </span>
                <span className="text-sm font-medium text-white">
                  SIT Nagpur (B.Tech CSE '28)
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#161820] border border-white/10 border-l-2 border-l-[#ff2844]">
                <span className="font-sans text-xs tracking-wider uppercase text-[#758092] block mb-1">
                  Competition
                </span>
                <span className="text-sm font-medium text-white">
                  1st Place: Entrepreneurship Pitch
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#161820] border border-white/10 border-l-2 border-l-[#ff2844]">
                <span className="font-sans text-xs tracking-wider uppercase text-[#758092] block mb-1">
                  Status
                </span>
                <span className="text-sm font-medium text-white">
                  Open for Internships and Full-Time Roles
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "ONNX Runtime", "FastAPI", "pgvector", "Multi-Agent Systems", "Next.js", "Scikit-learn", "Linux RH124"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs text-[#94a3b8] px-3.5 py-1.5 rounded-full border border-white/10 bg-transparent"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
