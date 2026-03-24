import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages & Backend",
    // Light: vivid blue pill   Dark: blue glow pill
    badgeCls: "bg-blue-100 border-blue-300 text-blue-800 font-semibold dark:bg-blue-500/25 dark:border-blue-400/50 dark:text-blue-200 dark:font-semibold",
    skills: ["Python", "FastAPI", "Django", "DRF", "Flask", "Pydantic", "SQLAlchemy", "REST API"],
  },
  {
    title: "AI / LLM Engineering",
    badgeCls: "bg-amber-100 border-amber-300 text-amber-800 font-semibold dark:bg-amber-500/25 dark:border-amber-400/50 dark:text-amber-200 dark:font-semibold",
    skills: ["LangChain", "LangGraph", "MCP / FastMCP", "RAG / CAG", "AI Agents", "Tool Calling", "Prompt Engineering", "HuggingFace", "Ollama", "Tiktoken"],
  },
  {
    title: "RAG & Vector Databases",
    badgeCls: "bg-amber-100 border-amber-300 text-amber-800 font-semibold dark:bg-amber-500/25 dark:border-amber-400/50 dark:text-amber-200 dark:font-semibold",
    skills: ["RAG Pipelines", "CAG", "PageIndex", "Vectorless RAG", "BM25", "Qdrant", "ChromaDB", "PGVector", "Embeddings", "Semantic Search", "HNSW", "Source Attribution"],
  },
  {
    title: "LLM Providers",
    badgeCls: "bg-amber-100 border-amber-300 text-amber-800 font-semibold dark:bg-amber-500/25 dark:border-amber-400/50 dark:text-amber-200 dark:font-semibold",
    skills: ["Gemini 2.0/2.5", "Anthropic Claude", "Llama 3", "Mistral", "DeepSeek-V3.2", "OpenRouter"],
  },
  {
    title: "Data Science & ML",
    badgeCls: "bg-emerald-100 border-emerald-300 text-emerald-800 font-semibold dark:bg-emerald-500/25 dark:border-emerald-400/50 dark:text-emerald-200 dark:font-semibold",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Plotly", "SHAP", "EDA"],
  },
  {
    title: "Scraping & Automation",
    badgeCls: "bg-blue-100 border-blue-300 text-blue-800 font-semibold dark:bg-blue-500/25 dark:border-blue-400/50 dark:text-blue-200 dark:font-semibold",
    skills: ["Selenium", "BeautifulSoup", "XPath/CSS", "n8n", "Headless Chrome"],
  },
  {
    title: "Databases",
    badgeCls: "bg-blue-100 border-blue-300 text-blue-800 font-semibold dark:bg-blue-500/25 dark:border-blue-400/50 dark:text-blue-200 dark:font-semibold",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Alembic"],
  },
  {
    title: "DevOps & Cloud",
    badgeCls: "bg-purple-100 border-purple-300 text-purple-800 font-semibold dark:bg-purple-500/25 dark:border-purple-400/50 dark:text-purple-200 dark:font-semibold",
    skills: ["Docker", "Kubernetes", "AWS EC2/S3/RDS", "GitHub Actions", "GitLab CI", "Nginx", "Gunicorn"],
  },
  {
    title: "BI, Tools & Practices",
    badgeCls: "bg-emerald-100 border-emerald-300 text-emerald-800 font-semibold dark:bg-emerald-500/25 dark:border-emerald-400/50 dark:text-emerald-200 dark:font-semibold",
    skills: ["Power BI", "DAX", "Chart.js", "D3.js", "Git", "Celery", "WebSocket", "Postman", "Pytest"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`flex items-center gap-3 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Code2 className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div key={group.title}
              className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 1) * 60}ms` }}>
              {/* Group heading */}
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-3 font-bold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={skill}
                    className={`
                      px-3 py-1.5 text-xs rounded-md border
                      transition-all duration-200 cursor-default
                      hover:scale-105 hover:shadow-sm
                      ${group.badgeCls}
                      ${isVisible ? "animate-scale-fade" : "opacity-0"}
                    `}
                    style={{ animationDelay: `${(i + 1) * 60 + idx * 30}ms` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
