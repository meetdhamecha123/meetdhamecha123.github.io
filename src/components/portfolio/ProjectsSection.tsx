import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "MCP RAG + CAG Chatbot Platform",
    stack: "FastAPI · LangChain · Qdrant · Redis · Celery · WebSocket · Docker · Gemini · Claude",
    desc: "Production-grade RAG + CAG chatbot with real-time WebSocket, 5-microservice Docker Compose, dual-layer semantic caching (5–10ms hits), and MCP server integrating Gemini 2.5-Flash + Claude API.",
  },
  {
    num: "02",
    title: "Database Insight Assistant",
    stack: "Django DRF · LangChain · Qdrant · Redis · Chart.js · D3.js · Docker · 4 LLM Providers",
    desc: "AI-powered database analytics — 60+ endpoints, 30K+ LOC, 4-agent orchestration (SQL, Analyst, Reporter, Monitor), glassmorphism frontend with D3.js force-directed graphs.",
  },
  {
    num: "03",
    title: "AI Agents with MCP Framework",
    stack: "MCP · FastMCP · LangChain · OpenRouter · Gemini · HuggingFace · Rich CLI",
    desc: "Multi-module AI agent framework demonstrating LLM vs Agent paradigm. FastMCP server with 4 tools, DatabaseAIAgent with multi-database NL-to-SQL, streaming responses.",
  },
  {
    num: "04",
    title: "Document Intelligence System",
    stack: "LangChain · Qdrant · ChromaDB · PGVector · FastAPI · Ollama · Tesseract OCR",
    desc: "Full document intelligence platform — upload PDF, DOCX, XLSX, images and converse with content via RAG pipeline. Multi-tenant isolation with local LLM option.",
  },
  {
    num: "05",
    title: "Database Communicator RAG",
    stack: "Gemini API · ChromaDB · Sentence Transformers · SQLAlchemy · MySQL · Pandas",
    desc: "RAG-based NL-to-SQL system converting plain-English questions into optimized SQL queries. Semantic similarity caching via ChromaDB (~5ms hits), dynamic schema population, and auto CSV export.",
  },
  {
    num: "06",
    title: "Multi-Agent AI Automation Platform",
    stack: "LangGraph · LangChain · Ollama · FastAPI · WhatsApp API · Telegram Bot · PostgreSQL",
    desc: "Graph-based multi-agent framework with 4 node agents connected to WhatsApp/Telegram bots. Users send commands and receive chart images directly in chat. 80% API cost reduction.",
  },
  {
    num: "07",
    title: "AI Food Nutrition Analyzer",
    stack: "FastAPI · Gemini 2.0 Flash Vision · AWS EC2 · RDS · Scikit-learn · XGBoost",
    desc: "Backend for Android app — food image analysis via Gemini Vision AI returning per-dish nutrition breakdowns. 1,000+ daily requests at sub-800ms response time.",
  },
  {
    num: "08",
    title: "ML Prediction & Analytics",
    stack: "Scikit-learn · XGBoost · Pandas · NumPy · SHAP · Matplotlib · Seaborn · FastAPI",
    desc: "End-to-end ML workflows: EDA, feature engineering, hyperparameter tuning with GridSearchCV, k-fold cross-validation, and SHAP interpretability for churn prediction & demand forecasting.",
  },
  {
    num: "09",
    title: "Power BI Analytics Dashboards",
    stack: "Power BI · DAX · Python · PostgreSQL · Pandas · NumPy · Direct Query",
    desc: "College attendance tracking & inventory management dashboards with drill-through views, live PostgreSQL Direct Query, DAX-calculated KPIs, and automated email alerts.",
  },
  {
    num: "10",
    title: "Secure Microservice API",
    stack: "FastAPI · Celery · Redis · SQLAlchemy · PostgreSQL · Alembic · Pytest · GitLab CI",
    desc: "Production FastAPI microservice with OAuth2 + JWT, refresh token rotation, Celery + Redis async tasks, 85%+ test coverage, and dual-database support with zero-downtime migrations.",
  },
  {
    num: "11",
    title: "Full-Stack E-Commerce with Finance",
    stack: "Django · PostgreSQL · Pandas · OpenPyXL · Nginx · Gunicorn · Ubuntu",
    desc: "Production e-commerce app with GST invoicing, profit tracking, automated Excel reports. Database optimization achieved 4.3× API speedup (820ms → 190ms).",
  },
  {
    num: "12",
    title: "Multi-Site Scraping & Automation",
    stack: "Selenium · BeautifulSoup · Pandas · n8n · SQLite · Proxy Rotation · Stealth",
    desc: "Automated scraping framework targeting 12+ US portals. 500K+ records/week with anti-detection strategies, 95%+ uptime, and n8n workflow orchestration.",
  },
  {
    num: "13",
    title: "Amazon Scraper — ETL Pipeline",
    stack: "Selenium · Pandas · MySQL · WebDriverWait · Jupyter · CSV",
    desc: "End-to-end Amazon.in laptop scraper with multi-page pagination, stale element recovery, 64KB+ structured dataset extraction, and complete ETL to MySQL.",
  },
  {
    num: "14",
    title: "Pandas Data Visualization & EDA",
    stack: "Pandas · NumPy · Matplotlib · Seaborn · SciPy · Jupyter · Statistical Analysis",
    desc: "Comprehensive EDA workflow — groupby aggregations, pivot tables, multi-dimensional visualizations (heatmaps, pair plots, facet grids), and statistical analysis with actionable insights.",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`flex items-center gap-3 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <FolderOpen className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Key Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.num}
              className={`group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38_92%_55%/0.15)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              <span className="text-5xl font-bold text-border/60 absolute top-4 right-5 font-mono select-none group-hover:text-primary/20 transition-colors">{p.num}</span>
              <h3 className="text-lg font-semibold mb-2 pr-12">{p.title}</h3>
              <p className="text-xs font-mono text-primary/80 mb-3 leading-relaxed">{p.stack}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
