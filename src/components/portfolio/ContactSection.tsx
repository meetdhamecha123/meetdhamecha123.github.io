import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold tracking-tight">Let's Build Something</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Open to backend engineering, AI/LLM engineering, and full-stack Python roles. Let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:meetdhamecha82@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all active:scale-[0.97]">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://github.com/meetdhamecha123" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-border transition-all active:scale-[0.97]">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/meet-dhamecha-616021236" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-border transition-all active:scale-[0.97]">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className={`flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +91 8401447120</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
