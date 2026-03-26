import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, MapPin, Phone, MessageSquare, Download, Wifi } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div className="animated-orb w-64 h-64 bg-primary/20 top-1/4 -left-16" style={{ animationDelay: "3s" }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium mb-2">
            <MessageSquare className="w-3 h-3" /> Open to Opportunities
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Let's Build Something<br /><span className="text-gradient">Amazing Together</span></h2>
          <p className="text-foreground/70 text-lg max-w-lg mx-auto">
            Open to backend engineering, AI/LLM engineering, and full-stack Python roles — on-site or remote. Let's connect and create impactful solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:meetdhamecha82@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all active:scale-[0.97] animate-pulse-glow">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://github.com/meetdhamecha123" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-all active:scale-[0.97] hover-lift">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/meet-dhamecha-616021236" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-all active:scale-[0.97] hover-lift">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="/Meet_Dhamecha_Resume.pdf" download
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-all active:scale-[0.97] hover-lift">
              <Download className="w-4 h-4" /> Resume PDF
            </a>
          </div>

          <div className={`flex flex-wrap justify-center gap-6 pt-8 text-sm text-foreground/65 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (+91) 8401447120</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> meetdhamecha82@gmail.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Surat, Gujarat, India</span>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <Wifi className="w-3.5 h-3.5" /> Available for Remote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
