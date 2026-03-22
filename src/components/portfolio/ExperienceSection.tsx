import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "TeamOpine Solutions",
    location: "Surat, Gujarat",
    period: "Jan 2025 – Present",
    stack: "Python · FastAPI · LangChain · LangGraph · RAG · CAG · MCP · Celery · Redis · PostgreSQL · Docker · Gemini API · Claude API · HuggingFace · Qdrant · ChromaDB",
    highlights: [
      "Developed high-performance FastAPI microservices with role-based authentication, JWT security, Pydantic validation, and Celery + Redis background task processing — reducing endpoint response times by over 60%.",
      "Designed and deployed a multi-document RAG system supporting PDF, DOCX, XLSX, CSV, and image inputs with hybrid vector search (dense + sparse) using Qdrant and ChromaDB. Implemented page-level indexing (PageIndex) — tracking page numbers, section headers, and document metadata per chunk for precise source attribution and page-aware retrieval.",
      "Architected a production-grade RAG + CAG chatbot platform with real-time WebSocket communication, Redis pub/sub, and dual-layer semantic caching achieving sub-100ms cached retrieval (5–10ms) and sub-500ms full pipeline latency. Built vectorless PageIndex fallback using keyword-based BM25 retrieval with page-level granularity for scenarios requiring deterministic, non-embedding retrieval.",
      "Built MCP (Model Context Protocol) servers using FastMCP framework integrating Gemini 2.5-Flash and Claude API with multi-LLM AI agent frameworks unifying OpenRouter, HuggingFace, Gemini, and Claude.",
      "Architected a graph-based multi-agent automation framework using LangGraph and LangChain connected to WhatsApp and Telegram bots — achieving 80% reduction in LLM API spend via local Ollama models.",
      "Integrated Gemini 2.0 Flash Vision for an AI food nutrition prediction backend serving 1,000+ daily requests at sub-800ms average response time; collaborated on Power BI dashboards.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zerobit Infotech",
    location: "Surat, Gujarat",
    period: "Jul 2024 – Dec 2024",
    stack: "Python · Django · Django REST Framework · Selenium · BeautifulSoup · PostgreSQL · MySQL · Ubuntu Server · Nginx · n8n · Pandas · Git",
    highlights: [
      "Built scalable Django and DRF web applications with JWT authentication, DTO-based handling, schema validation, and optimized PostgreSQL/MySQL integration for multi-tenant workflows.",
      "Designed and deployed advanced web scraping pipelines using Selenium with headless Chrome (anti-detection strategies, proxy rotation, CAPTCHA-handling) targeting 12+ US-based portals — maintaining 95%+ uptime.",
      "Automated data transformation and export workflows using Pandas and n8n for fully automated data collection and delivery without manual intervention.",
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
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
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
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">{exp.stack}</p>
              </div>
              {/* Highlights */}
              <div className="p-5 bg-card">
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-secondary-foreground leading-relaxed pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:text-xs before:top-[3px]">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
