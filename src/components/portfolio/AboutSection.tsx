import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Brain, Plug, Search, Shield, Rocket, FileText } from "lucide-react";

const strengths = [
  {
    icon: Brain,
    title: "Deep LLM Internals",
    desc: "Tokenization, context windows, attention mechanisms & advanced prompt engineering for open-source and proprietary models.",
  },
  {
    icon: Plug,
    title: "MCP Architecture",
    desc: "Model Context Protocol server architecture — tool design & AI agent-to-service integration using FastMCP framework.",
  },
  {
    icon: Search,
    title: "Vector Search Systems",
    desc: "Embedding model selection, hybrid retrieval strategies, chunk sizing & re-ranking for production RAG systems. Page-level indexing (PageIndex) with metadata tracking.",
  },
  {
    icon: FileText,
    title: "PageIndex & Vectorless RAG",
    desc: "Page-level document indexing with page number tracking, section-aware chunking & source attribution. BM25 keyword-based fallback retrieval for deterministic, non-embedding search.",
  },
  {
    icon: Shield,
    title: "Production AI Safety",
    desc: "Rate limiting, prompt injection prevention, SQL injection protection & secure API key management.",
  },
  {
    icon: Rocket,
    title: "Full DevOps Lifecycle",
    desc: "Multi-service Docker, CI/CD pipelines, AWS IAM & security configuration for containerized deployments.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className={`flex items-center gap-3 mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        </div>

        {/* Summary box */}
        <div className={`p-6 rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border mb-10 relative overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-amber-300 to-transparent rounded-r" />
          <p className="text-secondary-foreground leading-relaxed pl-4">
            Results-driven <span className="text-foreground font-semibold">Python Backend & AI Systems Developer</span> with <span className="text-primary font-semibold">2+ years</span> of hands-on experience building scalable REST APIs, intelligent automation pipelines, and production-grade LLM-powered applications. Proficient in <span className="text-foreground font-medium">Django, FastAPI</span>, and full-stack data workflows using Pandas and NumPy. Expert in modern AI engineering with <span className="text-foreground font-medium">LangChain, LangGraph, Hugging Face Transformers, Ollama, and MCP (Model Context Protocol)</span>, with deep specialization in designing <span className="text-primary font-medium">Retrieval-Augmented Generation (RAG) and Cache-Augmented Generation (CAG) systems</span>, autonomous AI agent frameworks, and document intelligence platforms backed by Qdrant, ChromaDB, and PGVector. Proven ability to integrate multiple LLM providers (Gemini, Claude, OpenRouter, HuggingFace) with automatic failover and cost optimization. Comfortable shipping containerized microservices with <span className="text-foreground font-medium">Docker and Kubernetes</span>, building CI/CD pipelines, and deploying to <span className="text-foreground font-medium">AWS</span> infrastructure.
          </p>
        </div>

        {/* Core Strengths grid */}
        <div className={`flex items-center gap-3 mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Core Strengths</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <div key={s.title}
              className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_-10px_hsl(38_92%_55%/0.15)] hover-lift ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${250 + i * 80}ms` }}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
