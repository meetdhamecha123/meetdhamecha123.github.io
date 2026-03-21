import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "14", label: "Projects" },
  { value: "500K+", label: "Records/Week" },
  { value: "80%", label: "Cost Saved" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-up">
              <p className="font-mono text-sm tracking-widest uppercase text-primary">
                Python Full-Stack & AI/LLM Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                Meet<br />Dhamecha
              </h1>
              <p className="text-muted-foreground max-w-lg text-lg leading-relaxed mt-6">
                Building scalable APIs, intelligent automation pipelines, and production-grade LLM-powered applications. Specializing in RAG systems, multi-agent frameworks, and AI engineering.
              </p>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <a href="mailto:meetdhamecha82@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> meetdhamecha82@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Surat, India
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> +91 8401447120
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="https://github.com/meetdhamecha123" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium active:scale-[0.97]">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/meet-dhamecha-616021236" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium active:scale-[0.97]">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 text-sm font-medium active:scale-[0.97]">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 pt-4 border-t border-border opacity-0 animate-fade-up" style={{ animationDelay: "450ms" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary font-mono tabular-nums">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl overflow-hidden glow ring-1 ring-border">
                <img src={profileImg} alt="Meet Dhamecha" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-72 h-72 rounded-2xl border border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
