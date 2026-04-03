import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, BookOpen, ArrowRight, Sparkles, Hash, ChevronRight } from "lucide-react";

// ─── Structured page index data (the "document store" for vectorless RAG) ───
const indexData = [
  {
    section: "About",
    anchor: "#about",
    icon: "👤",
    entries: [
      { title: "Professional Summary", keywords: ["python", "backend", "ai", "llm", "developer", "rest api", "fastapi", "django", "langchain", "rag", "cag", "mcp", "docker", "kubernetes", "aws"], text: "Results-driven Python Backend & AI Systems Developer with 2+ years experience building scalable REST APIs, LLM-powered apps, RAG/CAG systems, and multi-agent frameworks." },
      { title: "Core Strength: Deep LLM Internals", keywords: ["llm", "tokenization", "context window", "attention", "prompt engineering", "model"], text: "Tokenization, context windows, attention mechanisms & advanced prompt engineering for open-source and proprietary models." },
      { title: "Core Strength: MCP Architecture", keywords: ["mcp", "model context protocol", "fastmcp", "tool", "agent", "service"], text: "Model Context Protocol server architecture — tool design & AI agent-to-service integration using FastMCP framework." },
      { title: "Core Strength: Vector Search Systems", keywords: ["vector", "embedding", "retrieval", "chunk", "re-ranking", "rag", "search", "hnsw", "semantic"], text: "Embedding model selection, hybrid retrieval strategies, chunk sizing & re-ranking for production RAG systems." },
      { title: "Core Strength: Production AI Safety", keywords: ["safety", "rate limiting", "prompt injection", "sql injection", "security", "api key"], text: "Rate limiting, prompt injection prevention, SQL injection protection & secure API key management." },
      { title: "Core Strength: Full DevOps Lifecycle", keywords: ["devops", "docker", "ci/cd", "aws", "iam", "pipeline", "deployment"], text: "Multi-service Docker, CI/CD pipelines, AWS IAM & security configuration for containerized deployments." },
    ],
  },
  {
    section: "Experience",
    anchor: "#experience",
    icon: "💼",
    entries: [
      { title: "Backend Developer — TeamOpine Solutions (Jan 2025 – Present)", keywords: ["teamopine", "backend", "fastapi", "langchain", "langgraph", "rag", "cag", "mcp", "celery", "redis", "docker", "gemini", "claude", "current"], text: "FastAPI microservices, multi-document RAG system, RAG+CAG chatbot platform, MCP servers, LangGraph multi-agent framework, Gemini Vision integration." },
      { title: "FastAPI Microservices & JWT Security", keywords: ["fastapi", "jwt", "authentication", "pydantic", "celery", "redis", "background", "microservice", "60%"], text: "High-performance FastAPI microservices with JWT security, Celery+Redis background tasks — reducing response times by 60%." },
      { title: "Multi-Document RAG System", keywords: ["rag", "pdf", "docx", "xlsx", "csv", "image", "vector search", "qdrant", "chromadb", "hybrid", "dense", "sparse"], text: "Multi-document RAG supporting PDF, DOCX, XLSX, CSV, images with hybrid vector search (dense + sparse) using Qdrant and ChromaDB." },
      { title: "RAG + CAG Chatbot Platform", keywords: ["rag", "cag", "chatbot", "websocket", "redis", "pub/sub", "caching", "semantic", "100ms", "5ms", "real-time"], text: "Production-grade RAG+CAG chatbot with WebSocket, Redis pub/sub, dual-layer semantic caching achieving sub-100ms retrieval." },
      { title: "MCP Servers (FastMCP)", keywords: ["mcp", "fastmcp", "gemini", "claude", "multi-llm", "openrouter", "huggingface", "tool calling"], text: "MCP servers with FastMCP integrating Gemini 2.5-Flash and Claude API with multi-LLM AI agent frameworks." },
      { title: "LangGraph Multi-Agent Framework", keywords: ["langgraph", "langchain", "multi-agent", "whatsapp", "telegram", "ollama", "80%", "cost"], text: "Graph-based multi-agent automation using LangGraph connected to WhatsApp/Telegram bots — 80% LLM API cost reduction." },
      { title: "Gemini Vision Food Analyzer", keywords: ["gemini", "vision", "food", "nutrition", "android", "1000", "800ms", "power bi"], text: "Gemini 2.0 Flash Vision for AI food nutrition backend serving 1,000+ daily requests at sub-800ms response time." },
      { title: "Software Engineer — Zerobit Infotech (Jul–Dec 2024)", keywords: ["zerobit", "django", "drf", "selenium", "beautifulsoup", "scraping", "nginx", "n8n", "pandas"], text: "Django/DRF apps, advanced web scraping pipelines (12+ US portals, 95%+ uptime), n8n automation, Ubuntu server deployment." },
    ],
  },
  {
    section: "Skills",
    anchor: "#skills",
    icon: "⚡",
    entries: [
      { title: "Languages & Backend", keywords: ["python", "fastapi", "django", "drf", "flask", "pydantic", "sqlalchemy", "rest api"], text: "Python, FastAPI, Django, DRF, Flask, Pydantic, SQLAlchemy, REST API" },
      { title: "AI / LLM Engineering", keywords: ["langchain", "langgraph", "mcp", "fastmcp", "rag", "cag", "ai agents", "tool calling", "prompt engineering", "huggingface", "ollama", "tiktoken"], text: "LangChain, LangGraph, MCP/FastMCP, RAG/CAG, AI Agents, Tool Calling, Prompt Engineering, HuggingFace, Ollama" },
      { title: "RAG & Vector Databases", keywords: ["rag", "cag", "qdrant", "chromadb", "pgvector", "embeddings", "semantic search", "hnsw", "vector"], text: "RAG Pipelines, CAG, Qdrant, ChromaDB, PGVector, Embeddings, Semantic Search, HNSW" },
      { title: "LLM Providers", keywords: ["gemini", "claude", "llama", "mistral", "deepseek", "openrouter", "anthropic"], text: "Gemini 2.0/2.5, Anthropic Claude, Llama 3, Mistral, DeepSeek-V3.2, OpenRouter" },
      { title: "Data Science & ML", keywords: ["pandas", "numpy", "scikit-learn", "matplotlib", "seaborn", "plotly", "eda", "machine learning"], text: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly, SHAP" },
      { title: "Databases", keywords: ["postgresql", "mysql", "sqlite", "redis", "database"], text: "PostgreSQL, MySQL, SQLite, Redis" },
      { title: "DevOps & Cloud", keywords: ["docker", "kubernetes", "aws", "ec2", "s3", "rds", "github actions", "gitlab ci", "nginx", "gunicorn"], text: "Docker, Kubernetes, AWS EC2/S3/RDS, GitHub Actions, GitLab CI, Nginx, Gunicorn" },
      { title: "Scraping & Automation", keywords: ["selenium", "beautifulsoup", "xpath", "n8n", "headless", "scraping"], text: "Selenium, BeautifulSoup, XPath/CSS, n8n, Headless Chrome" },
      { title: "BI & Tools", keywords: ["power bi", "dax", "chart.js", "d3.js", "celery", "websocket", "postman", "pytest", "git"], text: "Power BI, DAX, Chart.js, D3.js, Celery, WebSocket, Postman, Pytest, Git" },
    ],
  },
  {
    section: "Projects",
    anchor: "#projects",
    icon: "📂",
    entries: [
      { title: "01 — MCP RAG + CAG Chatbot Platform", keywords: ["rag", "cag", "chatbot", "mcp", "fastapi", "langchain", "qdrant", "redis", "celery", "websocket", "docker", "gemini", "claude", "semantic caching"], text: "Production RAG+CAG chatbot with WebSocket, 5-microservice Docker Compose, dual-layer semantic caching (5–10ms hits), MCP server with Gemini+Claude." },
      { title: "02 — Database Insight Assistant", keywords: ["database", "analytics", "django", "drf", "qdrant", "redis", "celery", "chart.js", "d3.js", "sql agent", "dashboard", "power bi", "dax", "glassmorphism", "gemini", "groq", "huggingface", "openrouter", "failover", "multi-agent", "docker", "nlp", "nl-to-sql", "vector search", "sentence transformers", "natural language", "sqlite", "postgresql", "mysql", "mssql", "lru cache", "100x speedup", "flower", "statistical analysis", "correlation", "anomaly detection", "kpi", "rag", "30k loc", "60 endpoints", "77 views", "dbia", "widget", "drag and drop"], text: "Enterprise-grade local-first AI database analytics platform. Django REST API 60+ endpoints, 77 view classes, 30K+ LOC, 5-service Docker Compose (Django, Redis, Qdrant, Celery, Flower). 4-agent orchestration (SQL, Analyst, Reporter, Monitor) with automatic LLM failover across Gemini, Groq, HuggingFace, OpenRouter. Power BI-like dashboard engine with 40+ DAX-like measures (YoY, MoM, YTD, running totals, percentiles), AI single-prompt dashboard generation, drag-and-drop widget builder, portable .dbia export. Glassmorphism frontend with Chart.js 4.x, D3.js force-directed schema graphs. Redis 256MB LRU cache delivering 100x speedup. Supports SQLite, PostgreSQL, MySQL, MSSQL with NL-to-SQL, statistical analysis, data quality monitoring, and semantic vector search." },
      { title: "03 — AI Agents with MCP Framework", keywords: ["mcp", "fastmcp", "langchain", "openrouter", "gemini", "huggingface", "deepseek", "agent", "database", "nl-to-sql"], text: "Multi-module AI agent framework with FastMCP server, DatabaseAIAgent with multi-database NL-to-SQL, streaming responses." },
      { title: "04 — Document Intelligence System", keywords: ["document", "rag", "pdf", "docx", "xlsx", "image", "langchain", "qdrant", "chromadb", "pgvector", "ollama", "ocr", "tesseract", "multi-tenant"], text: "Multi-format document intelligence — upload and converse with PDF, DOCX, XLSX, images via RAG pipeline with multi-tenant isolation." },
      { title: "05 — Database Communicator RAG", keywords: ["rag", "nl-to-sql", "natural language", "sql", "gemini", "chromadb", "chroma", "semantic", "caching", "cosine similarity", "embeddings", "sentence transformers", "mysql", "sqlalchemy", "pandas", "csv export", "schema", "vector store", "schema extraction", "5ms", "0.88 threshold", "cache hit", "cost optimisation", "python", "rag pipeline", "llm", "query caching", "15 functions", "database schema"], text: "Production-ready RAG pipeline converting plain-English questions into optimized SQL with natural-language answer synthesis. Multi-stage: schema vector store (Chroma DB + Sentence Transformers) → Gemini SQL generation → result execution → NL answer. Semantic query cache with 0.88 cosine similarity threshold delivering ~5ms cache hits. Dynamic schema extraction across complex joins, auto CSV export for large result sets, 15+ core functions, 5 major RAG stages, 100% Python. Cost-optimised: repeated/similar queries skip LLM generation entirely." },
      { title: "06 — Multi-Agent AI Automation", keywords: ["langgraph", "langchain", "multi-agent", "ollama", "whatsapp", "telegram", "chart", "80%", "cost"], text: "Graph-based multi-agent framework with WhatsApp/Telegram bots. Users send commands, receive chart images directly in chat." },
      { title: "07 — AI Food Nutrition Analyzer", keywords: ["food", "nutrition", "gemini", "vision", "fastapi", "aws", "android", "image"], text: "Backend for Android app — food image analysis via Gemini Vision AI returning per-dish nutrition breakdowns." },
      { title: "08 — ML Prediction & Analytics", keywords: ["machine learning", "scikit-learn", "shap", "churn", "prediction", "eda", "fastapi"], text: "End-to-end ML workflows: EDA, feature engineering, hyperparameter tuning, SHAP interpretability for churn prediction." },
      { title: "09 — Power BI Dashboards", keywords: ["power bi", "dax", "attendance", "inventory", "dashboard", "postgresql", "direct query"], text: "College attendance tracking & inventory management dashboards with drill-through views and DAX-calculated KPIs." },
      { title: "10 — Secure Microservice API", keywords: ["fastapi", "celery", "redis", "jwt", "oauth2", "pytest", "gitlab ci", "85%", "coverage"], text: "Production FastAPI microservice with OAuth2+JWT, refresh token rotation, 85%+ test coverage, dual-database support." },
      { title: "11 — Full-Stack E-Commerce", keywords: ["django", "e-commerce", "gst", "invoice", "excel", "openpyxl", "nginx", "4.3x", "speedup"], text: "Production e-commerce with GST invoicing, profit tracking, automated Excel reports. 4.3× API speedup." },
      { title: "12 — Multi-Site Scraping & Automation", keywords: ["selenium", "scraping", "500k", "beautifulsoup", "n8n", "proxy", "stealth", "anti-detection"], text: "Automated scraping targeting 12+ US portals. 500K+ records/week with anti-detection strategies and n8n orchestration." },
      { title: "13 — Amazon Scraper ETL Pipeline", keywords: ["amazon", "selenium", "etl", "mysql", "pandas", "csv", "jupyter"], text: "End-to-end Amazon.in laptop scraper with multi-page pagination and complete ETL pipeline to MySQL." },
      { title: "14 — Pandas Data Visualization & EDA", keywords: ["pandas", "numpy", "matplotlib", "seaborn", "eda", "visualization", "statistics", "jupyter"], text: "Comprehensive EDA workflow with multi-dimensional visualizations and statistical analysis." },
    ],
  },
  {
    section: "Education",
    anchor: "#education",
    icon: "🎓",
    entries: [
      { title: "B.Sc. Information Technology (2020–2024)", keywords: ["bsc", "it", "information technology", "university", "degree", "bachelor", "surat", "veer narmad", "education"], text: "Bachelor of Science in IT — J.P. Dawer Institute, Veer Narmad South Gujarat University, Surat. 2020–2024." },
    ],
  },
  {
    section: "Contact",
    anchor: "#contact",
    icon: "📬",
    entries: [
      { title: "Contact Information", keywords: ["email", "phone", "surat", "linkedin", "github", "contact", "hire"], text: "meetdhamecha82@gmail.com · +91 8401447120 · Surat, Gujarat, India · GitHub · LinkedIn" },
    ],
  },
];

// ─── Vectorless RAG: keyword-based retrieval with scoring ───
function searchIndex(query: string) {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results: Array<{
    section: string;
    anchor: string;
    sectionIcon: string;
    title: string;
    text: string;
    score: number;
    matchedTerms: string[];
  }> = [];

  for (const section of indexData) {
    for (const entry of section.entries) {
      let score = 0;
      const matchedTerms: string[] = [];

      for (const term of terms) {
        // Check keywords (high weight)
        const keywordMatch = entry.keywords.some((k) => k.includes(term));
        if (keywordMatch) {
          score += 3;
          matchedTerms.push(term);
        }
        // Check title (medium weight)
        if (entry.title.toLowerCase().includes(term)) {
          score += 2;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        }
        // Check description text (low weight)
        if (entry.text.toLowerCase().includes(term)) {
          score += 1;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        }
      }

      if (score > 0) {
        // Boost score by coverage ratio (what % of query terms matched)
        const coverage = matchedTerms.length / terms.length;
        score = score * (0.5 + 0.5 * coverage);

        results.push({
          section: section.section,
          anchor: section.anchor,
          sectionIcon: section.icon,
          title: entry.title,
          text: entry.text,
          score,
          matchedTerms,
        });
      }
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 12); // Top 12 results
}

// Highlight matched terms in text
function highlightText(text: string, terms: string[]) {
  if (!terms.length) return text;
  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

// ─── Suggested queries for empty state ───
const suggestions = [
  "RAG chatbot",
  "FastAPI microservices",
  "LangChain agents",
  "Docker deployment",
  "web scraping",
  "Power BI",
  "machine learning",
  "MCP server",
];

const PageIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showToc, setShowToc] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchIndex(query), [query]);

  // Keyboard shortcut: Ctrl+K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleNavigate = (anchor: string) => {
    setIsOpen(false);
    setQuery("");
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-md border border-border hover:border-primary/50 shadow-2xl shadow-black/30 transition-all duration-300 hover:shadow-primary/10 group"
        title="Page Index — Vectorless RAG Search (Ctrl+K)"
      >
        <div className="p-1.5 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <BookOpen className="w-4 h-4" />
        </div>
        <div className="hidden sm:block text-left">
          <div className="text-xs font-semibold text-foreground leading-tight">Page Index</div>
          <div className="text-[10px] text-muted-foreground font-mono">Ctrl+K · RAG Search</div>
        </div>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]" onClick={() => { setIsOpen(false); setQuery(""); }}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-2xl mx-4 bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-scale-fade"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="p-1.5 rounded-lg bg-primary/15">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-foreground">Page Index — Vectorless RAG</div>
                <div className="text-[10px] text-muted-foreground font-mono">Keyword-based retrieval over structured portfolio data · No vectors needed</div>
              </div>
              <button onClick={() => { setIsOpen(false); setQuery(""); }} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Search input */}
            <div className="relative p-3 border-b border-border">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search portfolio... (e.g. 'RAG chatbot', 'FastAPI', 'Docker')"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowToc(false); }}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              {query && (
                <button onClick={() => { setQuery(""); setShowToc(true); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Toggle: TOC / Search */}
            <div className="flex items-center gap-1 px-4 pt-3">
              <button
                onClick={() => { setShowToc(true); setQuery(""); }}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${showToc && !query ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Hash className="w-3 h-3 inline mr-1" />Table of Contents
              </button>
              <button
                onClick={() => { setShowToc(false); inputRef.current?.focus(); }}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${!showToc || query ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Search className="w-3 h-3 inline mr-1" />Search
              </button>
            </div>

            {/* Results / TOC area */}
            <div className="max-h-[50vh] overflow-y-auto p-4 space-y-2 scrollbar-thin">
              
              {/* Table of Contents mode */}
              {(showToc && !query) && (
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground mb-3">Navigate through all sections of this portfolio:</p>
                  {indexData.map((section) => (
                    <div key={section.section}>
                      <button
                        onClick={() => handleNavigate(section.anchor)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/70 transition-all group text-left"
                      >
                        <span className="text-lg">{section.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{section.section}</div>
                          <div className="text-[11px] text-muted-foreground">{section.entries.length} indexed {section.entries.length === 1 ? "entry" : "entries"}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border">
                    <p className="text-[10px] text-muted-foreground font-mono">Total: {indexData.reduce((a, s) => a + s.entries.length, 0)} indexed entries across {indexData.length} sections</p>
                  </div>
                </div>
              )}

              {/* Search mode — no query yet */}
              {(!showToc && !query) && (
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">Try searching for a topic:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setQuery(s); }}
                        className="px-3 py-1.5 rounded-lg bg-secondary/60 border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-[10px] text-muted-foreground font-mono">
                      📖 How it works: Keyword-based retrieval over {indexData.reduce((a, s) => a + s.entries.length, 0)} indexed portfolio entries.
                      Each entry has weighted keywords, title matches (2×), keyword matches (3×), and text matches (1×).
                      Results are ranked by composite score with query coverage boost. No embedding vectors needed.
                    </p>
                  </div>
                </div>
              )}

              {/* Search results */}
              {query && results.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground mb-2">
                    Found <span className="text-primary font-semibold">{results.length}</span> results for "<span className="text-foreground">{query}</span>"
                  </p>
                  {results.map((r, i) => (
                    <button
                      key={`${r.section}-${r.title}-${i}`}
                      onClick={() => handleNavigate(r.anchor)}
                      className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/70 transition-all group text-left"
                    >
                      <span className="text-sm mt-0.5">{r.sectionIcon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono text-primary/60 uppercase tracking-wider">{r.section}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary/70">score: {r.score.toFixed(1)}</span>
                        </div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{r.title}</div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">{highlightText(r.text, r.matchedTerms)}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              )}

              {/* No results */}
              {query && results.length === 0 && (
                <div className="text-center py-8">
                  <Search className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">No results for "<span className="text-foreground">{query}</span>"</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Try different keywords like "RAG", "FastAPI", "Docker", or "MCP"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-border bg-secondary/30 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
              <span>⌨ ESC to close · ↵ Enter to navigate</span>
              <span>Vectorless RAG — Keyword Retrieval Engine</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageIndex;
