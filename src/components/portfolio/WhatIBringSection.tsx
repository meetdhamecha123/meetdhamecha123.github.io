import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, Zap, BarChart3, Trophy } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI Engineering Depth",
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900/80 dark:to-blue-700/60",
    iconColor: "text-blue-600 dark:text-white/90",
    titleColor: "text-blue-800 dark:text-white",
    desc: "Deep understanding of LLM internals — tokenization, context windows, attention mechanisms, and RAG/CAG architecture design. Specialized in PageIndex-based document retrieval and vectorless RAG strategies. Proven ability to integrate Gemini, Claude, Ollama, and HuggingFace models into production systems with cost optimization (80% API spend reduction achieved).",
  },
  {
    icon: Zap,
    title: "Backend & System Design",
    gradient: "from-emerald-100 to-emerald-200 dark:from-emerald-900/80 dark:to-emerald-700/60",
    iconColor: "text-emerald-600 dark:text-white/90",
    titleColor: "text-emerald-800 dark:text-white",
    desc: "Comfortable architecting complex distributed systems — async microservices, Redis pub/sub, Celery task queues, WebSocket real-time comms. Strong focus on performance optimization: 4.3× API speedup via query optimization, 100× speedup via intelligent caching layers.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900/80 dark:to-purple-700/60",
    iconColor: "text-purple-600 dark:text-white/90",
    titleColor: "text-purple-800 dark:text-white",
    desc: "Full data pipeline ownership — collection (Selenium, 500K+ records/week), transformation (Pandas, ETL), storage (PostgreSQL, vector DBs), analysis (EDA, ML, SHAP), and visualization (Power BI, Plotly dashboards). Experienced replacing manual Excel workflows with automated pipelines.",
  },
];

const techColumns = [
  {
    title: "LLM Providers",
    items: ["Gemini 2.0/2.5 Flash", "Anthropic Claude", "Llama 3 (Ollama)", "Mistral (Ollama)", "DeepSeek-V3.2", "OpenRouter API", "HuggingFace Inf. API"],
  },
  {
    title: "AI Frameworks",
    items: ["LangChain", "LangGraph", "MCP / FastMCP", "HuggingFace Transformers", "Sentence Transformers", "Ollama", "Tiktoken"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI + Pydantic", "Django + DRF", "Flask", "SQLAlchemy", "Celery + Redis", "WebSocket", "OpenAPI/Swagger"],
  },
  {
    title: "Infra & Cloud",
    items: ["Docker + Compose", "Kubernetes", "AWS EC2 / S3 / RDS", "GitHub Actions", "GitLab CI", "Nginx + Gunicorn", "Ubuntu Server"],
  },
  {
    title: "RAG & Search",
    items: ["PageIndex (Page-Level)", "Vectorless RAG / BM25", "Hybrid Retrieval", "Qdrant / ChromaDB", "PGVector", "Source Attribution", "Page-Aware Chunking"],
  },
];

const WhatIBringSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className={`flex items-center gap-3 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Trophy className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">What I Bring</h2>
        </div>

        {/* Three feature cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {cards.map((c, i) => (
            <div key={c.title}
              className={`group rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.15)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${100 + i * 100}ms` }}>
              <div className={`bg-gradient-to-br ${c.gradient} p-5`}>
                <c.icon className={`w-7 h-7 mb-2 ${c.iconColor}`} />
                <h3 className={`font-bold text-sm ${c.titleColor}`}>{c.title}</h3>
              </div>
              <div className="p-5 bg-card">
                <p className="text-xs text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies at a glance */}
        <div className={`flex items-center gap-3 mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Technologies at a Glance</h3>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
          {techColumns.map((col) => (
            <div key={col.title} className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 font-mono">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="text-xs font-medium text-foreground/80 leading-relaxed hover:text-primary transition-colors cursor-default">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
