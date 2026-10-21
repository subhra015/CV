"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-20 relative z-10 border-t border-[#1d4872]/15 bg-[#f5f0e6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matching template style */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-[1.5px] h-5 bg-[#1d4872]" />
            <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#5c7083] font-semibold">
              ABOUT
            </span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1d4872]">
            Architecting <span className="text-[#f97d58]">End-to-End</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#1d4872]/20 bg-[#ede6d8] shadow-[0_10px_35px_rgba(29,72,114,0.08)]">
              <img
                src="/Image.jpeg"
                alt="Subhrajeet Ganguly"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 py-3 px-4 bg-[#f5f0e6]/95 border-t border-[#1d4872]/15 font-sans text-xs tracking-wider uppercase text-center font-bold text-[#1d4872]">
                Subhrajeet Ganguly: AI / ML
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="font-sans text-2xl sm:text-3xl font-bold text-[#1d4872] leading-snug mb-6">
              I focus on <span className="text-[#f97d58]">completion</span>: taking models from raw data and custom loss functions to hardened APIs and tactile interfaces.
            </p>

            <div className="space-y-4 text-[#5c7083] text-base leading-relaxed mb-8 font-normal">
              <p>
                I am a Computer Science undergraduate at <strong className="text-[#1d4872] font-semibold">Symbiosis Institute of Technology, Nagpur</strong>. My work centers on deep learning architectures, uncertainty calibration, real-time audio analysis, and multi-agent systems where verification is enforced deterministically.
              </p>
              <p>
                Notable deployed systems include <strong className="text-[#1d4872] font-semibold">StreamGuard</strong> (real-time deepfake audio forensics with calibrated MC-Dropout confidence), <strong className="text-[#1d4872] font-semibold">DocMind</strong> (hybrid Reciprocal Rank Fusion document intelligence with LLM reranking), and <strong className="text-[#1d4872] font-semibold">Promo Planner Agent</strong> (an orchestrated multi-agent planning engine with zero-trust Python verification gates).
              </p>
              <p>
                Beyond pure modeling, I won <strong className="text-[#1d4872] font-semibold">1st place in the college entrepreneurship competition</strong> during my first semester, designing a viable startup concept and pitching to industry judges. I also directed on-ground logistics for <strong className="text-[#1d4872] font-semibold">ICSIT '25</strong>, coordinating guest hospitality and event operations.
              </p>
            </div>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-[#1d4872]/15 border-l-4 border-l-[#f97d58] shadow-sm">
                <span className="font-sans text-[11px] tracking-wider uppercase text-[#5c7083] font-semibold block mb-1">
                  Primary Focus
                </span>
                <span className="text-sm font-bold text-[#1d4872]">
                  Deep Learning, RAG, Audio Forensics
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1d4872]/15 border-l-4 border-l-[#1d4872] shadow-sm">
                <span className="font-sans text-[11px] tracking-wider uppercase text-[#5c7083] font-semibold block mb-1">
                  Institution
                </span>
                <span className="text-sm font-bold text-[#1d4872]">
                  SIT Nagpur (B.Tech CSE '28)
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1d4872]/15 border-l-4 border-l-[#f97d58] shadow-sm">
                <span className="font-sans text-[11px] tracking-wider uppercase text-[#5c7083] font-semibold block mb-1">
                  Competition
                </span>
                <span className="text-sm font-bold text-[#1d4872]">
                  1st Place: Entrepreneurship Pitch
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1d4872]/15 border-l-4 border-l-[#1d4872] shadow-sm">
                <span className="font-sans text-[11px] tracking-wider uppercase text-[#5c7083] font-semibold block mb-1">
                  Status
                </span>
                <span className="text-sm font-bold text-[#1d4872]">
                  Open for Internships and Full-Time Roles
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "ONNX Runtime", "FastAPI", "pgvector", "Multi-Agent Systems", "Next.js", "Scikit-learn", "Linux RH124"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-medium text-[#1d4872] px-3.5 py-1.5 rounded-full border border-[#1d4872]/20 bg-white"
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
