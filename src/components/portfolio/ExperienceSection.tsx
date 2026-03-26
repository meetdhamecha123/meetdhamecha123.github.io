import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "TeamOpine Solutions",
    location: "Surat, Gujarat",
    period: "Jan 2025 – Present",
    stack: "Python · FastAPI · LangChain · LangGraph · RAG · CAG · MCP · Celery · Redis · PostgreSQL · Docker · Gemini API · Claude API · HuggingFace · Qdrant · ChromaDB · Selenium · Pandas",
    highlights: [
      "Developed high-performance FastAPI microservices with role-based authentication, JWT security, Pydantic validation, and Celery + Redis background task processing — reducing endpoint response times by over 60%.",
      "Designed and deployed a multi-document RAG system supporting PDF, DOCX, XLSX, CSV, and image inputs with hybrid vector search (dense + sparse) using Qdrant and ChromaDB. Implemented page-level indexing (PageIndex) — tracking page numbers, section headers, and document metadata per chunk for precise source attribution and page-aware retrieval.",
      "Architected a production-grade RAG + CAG chatbot platform with real-time WebSocket communication, Redis pub/sub, and dual-layer semantic caching achieving sub-100ms cached retrieval (5–10ms) and sub-500ms full pipeline latency. Built vectorless PageIndex fallback using keyword-based BM25 retrieval with page-level granularity for scenarios requiring deterministic, non-embedding retrieval.",
      "Built MCP (Model Context Protocol) servers using FastMCP framework integrating Gemini 2.5-Flash and Claude API with multi-LLM AI agent frameworks unifying OpenRouter, HuggingFace, Gemini, and Claude.",
      "Architected a graph-based multi-agent automation framework using LangGraph and LangChain connected to WhatsApp and Telegram bots — achieving 80% reduction in LLM API spend via local Ollama models.",
      "Integrated Gemini 2.0 Flash Vision for an AI food nutrition prediction backend serving 1,000+ daily requests at sub-800ms average response time; collaborated on Power BI dashboards.",
      "Designed and deployed advanced web scraping pipelines using Selenium with headless Chrome (anti-detection strategies, proxy rotation, CAPTCHA-handling) targeting 12+ data portals — maintaining 95%+ uptime.",
      "Automated data transformation and export workflows using Pandas with Celery-powered task queues for fully automated data collection and delivery pipelines without manual intervention.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zerobit Infotech",
    location: "Surat, Gujarat",
    period: "Jul 2024 – Dec 2024",
    stack: "Python · Django · Django REST Framework · FastAPI · Selenium · BeautifulSoup · PostgreSQL · MySQL · Ubuntu Server · Nginx · Git",
    highlights: [
      "Built scalable Django and DRF web applications with JWT authentication, DTO-based handling, schema validation, and optimized PostgreSQL/MySQL integration for multi-tenant workflows.",
      "Developed FastAPI-based REST APIs alongside Django projects — implementing async endpoints, Pydantic data validation, and modular service-layer architecture for clean, maintainable backends.",
      "Built targeted web scrapers using Selenium (headless Chrome) and BeautifulSoup to extract and clean structured data from multiple US-based portals, automating previously manual data gathering tasks.",
      "Deployed and managed production applications on Ubuntu servers with Nginx reverse proxy, Gunicorn WSGI, and PostgreSQL connection pooling.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-3 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Briefcase className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Experience & Education</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.company}
              className={`relative rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.12)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 120}ms` }}>
              {/* Header bar */}
              <div className="bg-gradient-to-r from-secondary to-card p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company} — {exp.location}</p>
                </div>
                <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold whitespace-nowrap self-start">{exp.period}</span>
              </div>
              {/* Stack */}
              <div className="px-5 py-2.5 bg-card/80 border-b border-border">
                <p className="text-xs text-foreground/75 font-mono font-semibold leading-relaxed">{exp.stack}</p>
              </div>
              {/* Highlights */}
              <div className="p-5 bg-card">
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-foreground/85 leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:text-xs before:top-[3px]">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education Header */}
          <div className={`flex items-center gap-3 mt-8 md:mt-14 mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${(experiences.length + 1) * 120}ms` }}>
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight">Education</h3>
          </div>

          <div className={`rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.12)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${(experiences.length + 2) * 120}ms` }}>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
