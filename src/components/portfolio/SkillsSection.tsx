import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Languages & Backend",
    color: "bg-blue-500/20 border-blue-500/30 text-blue-300",
    skills: ["Python", "FastAPI", "Django", "DRF", "Flask", "Pydantic", "SQLAlchemy", "REST API"],
  },
  {
    title: "AI / LLM Engineering",
    color: "bg-amber-500/20 border-amber-500/30 text-amber-300",
    skills: ["LangChain", "LangGraph", "MCP / FastMCP", "RAG / CAG", "AI Agents", "Tool Calling", "Prompt Engineering", "HuggingFace", "Ollama", "Tiktoken"],
  },
  {
    title: "RAG & Vector Databases",
    color: "bg-amber-500/20 border-amber-500/30 text-amber-300",
    skills: ["RAG Pipelines", "CAG", "PageIndex", "Vectorless RAG", "BM25", "Qdrant", "ChromaDB", "PGVector", "Embeddings", "Semantic Search", "HNSW", "Source Attribution"],
  },
  {
    title: "LLM Providers",
    color: "bg-amber-500/20 border-amber-500/30 text-amber-300",
    skills: ["Gemini 2.0/2.5", "Anthropic Claude", "Llama 3", "Mistral", "DeepSeek-V3.2", "OpenRouter"],
  },
  {
    title: "Data Science & ML",
    color: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Plotly", "SHAP", "EDA"],
  },
  {
    title: "Scraping & Automation",
    color: "bg-blue-500/20 border-blue-500/30 text-blue-300",
    skills: ["Selenium", "BeautifulSoup", "XPath/CSS", "n8n", "Headless Chrome"],
  },
  {
    title: "Databases",
    color: "bg-blue-500/20 border-blue-500/30 text-blue-300",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Alembic"],
  },
  {
    title: "DevOps & Cloud",
    color: "bg-purple-500/20 border-purple-500/30 text-purple-300",
    skills: ["Docker", "Kubernetes", "AWS EC2/S3/RDS", "GitHub Actions", "GitLab CI", "Nginx", "Gunicorn"],
  },
  {
    title: "BI, Tools & Practices",
    color: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
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
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-3 font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={skill}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-200 cursor-default hover-lift hover:scale-105 ${group.color} ${isVisible ? "animate-scale-fade" : "opacity-0"}`}
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
