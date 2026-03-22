import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import WhatIBringSection from "@/components/portfolio/WhatIBringSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <WhatIBringSection />
      <ContactSection />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-1">© {new Date().getFullYear()} Meet Dhamecha. Built with passion & React.</p>
          <p className="text-muted-foreground/50">Python Full-Stack & AI/LLM Engineer — Surat, India</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
