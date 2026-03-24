import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-12 md:py-20 px-4 sm:px-6 md:px-12" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`flex items-center gap-3 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>

        <div className={`rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.12)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary/80 to-card p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-border/50">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-start sm:items-center gap-2 sm:gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-snug">Bachelor of Science in Information Technology</span>
              </h3>
            </div>
            <span className="px-2.5 py-1 sm:px-3 rounded-md bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-mono font-semibold whitespace-nowrap self-start flex items-center gap-1.5 transition-colors hover:bg-primary/20">
              <Calendar className="w-3 h-3" /> 2020 – 2024
            </span>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-5 md:p-6 bg-card/50">
            <div className="flex items-start gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <MapPin className="w-4 h-4 text-foreground/50 mt-0.5 sm:mt-1 shrink-0" />
              <div>
                <p className="text-sm sm:text-base text-foreground/85 font-medium leading-snug">J.P. Dawer Institute of Information Science & Technology</p>
                <p className="text-[11px] sm:text-xs text-foreground/60 mt-1">Veer Narmad South Gujarat University, Surat</p>
              </div>
            </div>

            {/* GPA bar */}
            <div className="mt-2 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex justify-between text-[11px] sm:text-xs mb-2">
                <span className="text-foreground/65 font-medium">Academic Performance</span>
                <span className="text-primary font-mono font-semibold">Strong</span>
              </div>
              <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-amber-400 transition-all duration-1000" style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
