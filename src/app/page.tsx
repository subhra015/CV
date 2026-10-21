"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { Navigation } from "@/components/common/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CredentialsSection } from "@/components/credentials/CredentialsSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/common/Footer";
import { ResumeModal } from "@/components/common/ResumeModal";

export default function Home() {
  useLenis();

  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "certs",
      "achievements",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101217] text-[#f8fafc] relative">
      <Navigation
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CredentialsSection />
        <AchievementsSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
