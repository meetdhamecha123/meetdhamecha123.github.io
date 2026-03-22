import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "14", label: "Production Projects" },
  { value: "2+", label: "Years Experience" },
  { value: "80%", label: "LLM Cost Saved" },
  { value: "100×", label: "Query Speedup" },
  { value: "30K+", label: "Lines of Code" },
];

const chips = [
  "RAG / CAG Systems",
  "PageIndex / Vectorless RAG",
  "AI Agents + MCP",
  "LangChain / LangGraph",
  "FastAPI / Django",
  "Qdrant / ChromaDB",
  "Docker / AWS",
  "Multi-LLM Integration",
  "WebSocket / Real-time",
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="animated-orb w-72 h-72 bg-primary/35 -top-16 -left-16" />
      <div className="animated-orb w-80 h-80 bg-amber-200/20 -bottom-24 -right-20" style={{ animationDelay: "2s" }} />
      <div className="animated-orb w-48 h-48 bg-blue-500/15 top-1/2 right-1/4" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className={`space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="font-mono text-sm tracking-widest uppercase text-primary">
                  Python Full-Stack & AI/LLM Engineer
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                Meet<br />Dhamecha
              </h1>
              <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed mt-4">
                Results-driven <span className="text-foreground font-medium">Python Backend & AI Systems Developer</span> building scalable REST APIs, intelligent automation pipelines, and production-grade LLM-powered applications. Specializing in <span className="text-primary font-medium">RAG systems</span>, <span className="text-primary font-medium">multi-agent frameworks</span>, and <span className="text-primary font-medium">MCP architecture</span>.
              </p>
            </div>

            {/* Key expertise chips */}
            <div className={`flex flex-wrap gap-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
              {chips.map((chip) => (
                <span key={chip} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-primary/10 border border-primary/25 text-primary/90">
                  {chip}
                </span>
              ))}
            </div>

            {/* Contact row */}
            <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
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
            <div className={`flex gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "250ms" }}>
              <a href="https://github.com/meetdhamecha123" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium active:scale-[0.97]">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/meet-dhamecha-616021236" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium active:scale-[0.97]">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 text-sm font-medium active:scale-[0.97] animate-pulse-glow">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className={`hidden md:block ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="relative animate-float-slow">
              <div className="w-72 h-72 rounded-2xl overflow-hidden glow ring-1 ring-primary/30">
                <img src={profileImg} alt="Meet Dhamecha" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-72 h-72 rounded-2xl border border-primary/20 -z-10" />
              {/* Experience badge */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-card border border-primary/30 shadow-xl shadow-black/20">
                <div className="text-primary font-mono text-lg font-bold">2+ Years</div>
                <div className="text-muted-foreground text-xs">Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-3 md:grid-cols-6 gap-4 mt-12 pt-8 border-t border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="text-center md:text-left group cursor-default" style={{ animationDelay: `${400 + i * 80}ms` }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono tabular-nums group-hover:scale-110 transition-transform duration-300 inline-block">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
