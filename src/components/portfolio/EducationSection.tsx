import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-16 md:py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-3 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>

        <div className={`rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.12)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-card p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Bachelor of Science in Information Technology
              </h3>
            </div>
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold whitespace-nowrap self-start flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> 2020 – 2024
            </span>
          </div>

          {/* Details */}
          <div className="p-5 bg-card">
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-secondary-foreground font-medium">J.P. Dawer Institute of Information Science & Technology</p>
                <p className="text-xs text-muted-foreground mt-0.5">Veer Narmad South Gujarat University, Surat</p>
              </div>
            </div>

            {/* GPA bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Academic Performance</span>
                <span className="text-primary font-mono font-semibold">Strong</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-amber-300 transition-all duration-1000" style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
