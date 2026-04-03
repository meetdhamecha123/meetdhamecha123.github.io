import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FolderOpen, ChevronDown, ChevronUp } from "lucide-react";

const PREVIEW_LENGTH = 160; // characters shown before "Read more"

const projects = [
  {
    num: "01",
    title: "MCP RAG + CAG Chatbot Platform",
    stack: ["FastAPI", "LangChain", "Qdrant", "Redis", "Celery", "WebSocket", "Docker", "Gemini", "Claude"],
    desc: "Production-grade RAG + CAG chatbot with real-time WebSocket, 5-microservice Docker Compose, dual-layer semantic caching (5–10ms hits), MCP server integrating Gemini 2.5-Flash + Claude API. Implements PageIndex for page-level document indexing with vectorless BM25 fallback retrieval.",
  },
  {
    num: "02",
    title: "Database Insight Assistant",
    stack: ["Django DRF", "Qdrant", "Redis", "Celery", "Chart.js", "D3.js", "Docker", "Gemini", "Groq", "HuggingFace", "OpenRouter"],
    desc: "Enterprise-grade local-first AI database analytics platform. Django REST API with 60+ endpoints across 77 view classes, 30K+ LOC, 5-service Docker Compose (Django, Redis, Qdrant, Celery, Flower). 4-agent orchestration (SQL, Analyst, Reporter, Monitor) with automatic LLM failover across 4 providers. Power BI-like dashboard engine with 40+ DAX-like measures (YoY, MoM, YTD, running totals, percentiles), AI single-prompt dashboard generation, drag-and-drop widget builder, and portable .dbia export format. Glassmorphism frontend (HTML/JS/TailwindCSS) with Chart.js 4.x, D3.js force-directed schema graphs. Redis 256MB LRU cache delivering 100× speedup. Supports SQLite, PostgreSQL, MySQL, MSSQL with NL-to-SQL generation, statistical analysis (correlation, distribution, time-series), data quality monitoring, and vector semantic search via Qdrant + Sentence Transformers.",
  },
  {
    num: "03",
    title: "AI Agents with MCP Framework",
    stack: ["MCP", "FastMCP", "LangChain", "OpenRouter", "Gemini", "HuggingFace", "Rich CLI"],
    desc: "Multi-module AI agent framework demonstrating LLM vs Agent paradigm. FastMCP server with 4 tools, DatabaseAIAgent with multi-database NL-to-SQL, streaming responses.",
  },
  {
    num: "04",
    title: "Document Intelligence System",
    stack: ["LangChain", "Qdrant", "ChromaDB", "PGVector", "FastAPI", "Ollama", "Tesseract OCR"],
    desc: "Full document intelligence platform — upload PDF, DOCX, XLSX, images and converse with content via RAG pipeline. PageIndex-based page-level chunking with page number tracking, source attribution showing exact page references. Multi-tenant isolation with local LLM option.",
  },
  {
    num: "05",
    title: "Database Communicator RAG",
    stack: ["Gemini API", "ChromaDB", "Sentence Transformers", "SQLAlchemy", "MySQL", "Pandas", "Python"],
    desc: "Production-ready RAG pipeline converting plain-English questions into optimized SQL and returning answers in natural language. Multi-stage architecture: schema vector store (Chroma DB + Sentence Transformers) for context injection → Google Gemini SQL generation → result execution → NL answer synthesis. Semantic query cache with configurable similarity threshold (0.88 cosine) delivering ~5ms cache hits vs. full LLM round-trips, with statistics tracking and cache hit rate monitoring. Dynamic schema extraction populates vector store with table/column definitions enabling context-aware SQL across complex joins. Auto CSV export triggers on large result sets with query-aware file naming. 15+ core functions, 5 major RAG stages, 100% Python. Demonstrates cost-optimised LLM usage — repeated or similar queries skip generation entirely.",
  },
  {
    num: "06",
    title: "Multi-Agent AI Automation Platform",
    stack: ["LangGraph", "LangChain", "Ollama", "FastAPI", "WhatsApp API", "Telegram Bot", "PostgreSQL"],
    desc: "Graph-based multi-agent framework with 4 node agents connected to WhatsApp/Telegram bots. Users send commands and receive chart images directly in chat. 80% API cost reduction.",
  },
  {
    num: "07",
    title: "AI Food Nutrition Analyzer",
    stack: ["FastAPI", "Gemini 2.0 Flash Vision", "AWS EC2", "RDS", "Scikit-learn"],
    desc: "Backend for Android app — food image analysis via Gemini Vision AI returning per-dish nutrition breakdowns. 1,000+ daily requests at sub-800ms response time.",
  },
  {
    num: "08",
    title: "ML Prediction & Analytics",
    stack: ["Scikit-learn", "Pandas", "NumPy", "SHAP", "Matplotlib", "Seaborn", "FastAPI"],
    desc: "End-to-end ML workflows: EDA, feature engineering, hyperparameter tuning with GridSearchCV, k-fold cross-validation, and SHAP interpretability for churn prediction & demand forecasting.",
  },
  {
    num: "09",
    title: "Power BI Analytics Dashboards",
    stack: ["Power BI", "DAX", "Python", "PostgreSQL", "Pandas", "NumPy", "Direct Query"],
    desc: "College attendance tracking & inventory management dashboards with drill-through views, live PostgreSQL Direct Query, DAX-calculated KPIs, and automated email alerts.",
  },
  {
    num: "10",
    title: "Secure Microservice API",
    stack: ["FastAPI", "Celery", "Redis", "SQLAlchemy", "PostgreSQL", "Pytest", "GitLab CI"],
    desc: "Production FastAPI microservice with OAuth2 + JWT, refresh token rotation, Celery + Redis async tasks, 85%+ test coverage, and dual-database support with zero-downtime migrations.",
  },
  {
    num: "11",
    title: "Full-Stack E-Commerce with Finance",
    stack: ["Django", "PostgreSQL", "Pandas", "OpenPyXL", "Nginx", "Gunicorn", "Ubuntu"],
    desc: "Production e-commerce app with GST invoicing, profit tracking, automated Excel reports. Database optimization achieved 4.3× API speedup (820ms → 190ms).",
  },
  {
    num: "12",
    title: "Multi-Site Scraping & Automation",
    stack: ["Selenium", "BeautifulSoup", "Pandas", "n8n", "SQLite", "Proxy Rotation", "Stealth"],
    desc: "Automated scraping framework targeting 12+ US portals. 500K+ records/week with anti-detection strategies, 95%+ uptime, and n8n workflow orchestration.",
  },
  {
    num: "13",
    title: "Amazon Scraper — ETL Pipeline",
    stack: ["Selenium", "Pandas", "MySQL", "WebDriverWait", "Jupyter", "CSV"],
    desc: "End-to-end Amazon.in laptop scraper with multi-page pagination, stale element recovery, 64KB+ structured dataset extraction, and complete ETL to MySQL.",
  },
  {
    num: "14",
    title: "Pandas Data Visualization & EDA",
    stack: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Jupyter", "Statistical Analysis"],
    desc: "Comprehensive EDA workflow — groupby aggregations, pivot tables, multi-dimensional visualizations (heatmaps, pair plots, facet grids), and statistical analysis with actionable insights.",
  },
];

// ─── Single project card ───────────────────────────────────────────────────
function ProjectCard({
  p,
  delay,
  isVisible,
}: {
  p: (typeof projects)[0];
  delay: number;
  isVisible: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = p.desc.length > PREVIEW_LENGTH;
  const preview = isLong ? p.desc.slice(0, PREVIEW_LENGTH).trimEnd() + "…" : p.desc;

  return (
    <div
      className={`group relative flex flex-col p-5 sm:p-6 rounded-xl bg-card border border-border
        hover:border-primary/40 transition-all duration-300
        hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.18)] hover-lift overflow-hidden
        ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* ── Ambient glow overlay on hover ── */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none transition-opacity duration-300" />

      {/* ── Project number watermark ── */}
      <span className="text-5xl font-bold text-border/50 absolute top-4 right-4 font-mono select-none group-hover:text-primary/35 transition-all duration-300 pointer-events-none leading-none">
        {p.num}
      </span>

      {/* ── Title ── */}
      <h3 className="text-base sm:text-lg font-bold mb-3 pr-12 group-hover:text-primary transition-colors duration-300 leading-snug">
        {p.title}
      </h3>

      {/* ── Stack pills ── */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.stack.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md
              bg-primary/10 text-primary border border-primary/20
              group-hover:bg-primary/15 group-hover:border-primary/35
              transition-all duration-200 cursor-default whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── Description with expand/collapse ── */}
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-sm text-foreground/75 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
          {isLong && !expanded ? preview : p.desc}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 self-start flex items-center gap-1 text-xs font-semibold text-primary/70
              hover:text-primary transition-colors duration-200 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className={`flex items-center gap-3 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <FolderOpen className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Key Projects</h2>
        </div>

        {/* Grid — single column on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.num}
              p={p}
              delay={(i + 1) * 80}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
