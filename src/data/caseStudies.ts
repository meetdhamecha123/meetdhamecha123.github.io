// Detailed project write-ups shown as full cards at the top of the Projects section.
// Client work (Sattvam Soft) first, then personal projects.

export type Feature = {
  title: string;
  desc?: string;
  points?: string[];
};

export type StackRow = { layer?: string; items: string[] };

export type Result = { label: string; before?: string; after: string };

export type CaseStudy = {
  id: string;
  kind: "client" | "personal";
  title: string;
  tagline: string;
  meta?: string;
  status?: string;
  links?: { label: string; href: string }[];
  description: string;
  stack?: StackRow[];
  features: Feature[];
  responsibilities?: string[];
  results?: Result[];
  resultsNote?: string;
};

export const caseStudies: CaseStudy[] = [
  // ─── Client projects · Sattvam Soft ───────────────────────────────────────
  {
    id: "aivana",
    kind: "client",
    title: "Aivana AI Studio",
    tagline: "Multi-Model AI Developer Platform",
    meta: "May 2026 – Present",
    links: [{ label: "developers.aivana.ai", href: "https://developers.aivana.ai" }],
    description:
      "A developer platform for a multi-model AI API: one endpoint that routes each request across multiple LLMs and returns one combined answer, with standard and SSE streaming endpoints.",
    features: [
      {
        title: "API key management",
        desc: "Keys shown only once, live/test prefixes, masking, rename, instant revocation and per-key usage tracking.",
      },
      {
        title: "Prepaid token billing",
        desc: "Promotional tokens spent before paid credit, credit expiry, Stripe payments with auto-reload, and per-key daily/weekly/monthly spend limits.",
      },
      {
        title: "Workspace rate limiting",
        desc: "Requests/min, tokens/min and concurrency limits that return 429 with Retry-After, never charging for rejected or failed requests.",
      },
      {
        title: "Usage & Insights dashboard",
        desc: "P50/P95 latency, routing mix, per-key run history and a savings estimate against frontier-model pricing.",
      },
      {
        title: "Multimodal input & structured output",
        desc: "PDFs with page citations, DOCX, CSV and images, plus a web search switch, validated JSON Schema output and an Intelligence Trace.",
      },
      {
        title: "SDKs, CLI, docs & Playground",
        desc: "Python and Node.js SDKs, a CLI, a 20+ page docs site and an interactive Playground that exports code as cURL, Python or Node.js.",
      },
    ],
  },
  {
    id: "kathatoon",
    kind: "client",
    title: "KathaToon AI",
    tagline: "AI-Powered Kids' Story-to-Song Video Generation Platform",
    status: "In development",
    description:
      "An end-to-end AI content creation and publishing platform that transforms nursery rhymes, children's story ideas and user-selected story cards into original stories, song lyrics, AI-generated music, consistent character illustrations, animated video scenes and complete 3–5-minute YouTube videos. Each finished video is then analysed automatically to find its best moments and produce two engaging vertical clips for YouTube Shorts.",
    stack: [
      {
        items: [
          "Python",
          "FastAPI",
          "React.js",
          "Gemini Flash LLM",
          "Gemini Flash Image",
          "Gemini Omni Flash",
          "Suno API",
          "Google Cloud Storage",
          "PostgreSQL",
          "Redis",
          "Celery",
          "FFmpeg",
          "YouTube Data API v3",
          "Docker",
        ],
      },
    ],
    features: [
      {
        title: "AI story & lyrics generation",
        desc: "Gemini Flash LLM expands simple story ideas, such as “Machli Jal Ki Rani Hai,” into complete children's story songs, original lyrics, structured storyboards, scene descriptions and music-generation prompts — across languages, themes, age groups and storytelling styles.",
      },
      {
        title: "AI song generation",
        desc: "Suno API integration turns generated lyrics and musical style prompts into complete songs, with configurable genres, moods, vocal styles and language preferences.",
      },
      {
        title: "Character consistency & image generation",
        desc: "Gemini Flash Image creates reusable character reference images, detailed character descriptions, visual styles, backgrounds and scene illustrations while keeping character appearance and visual continuity consistent across the story.",
      },
      {
        title: "AI video scene generation",
        desc: "Gemini Omni Flash image-guided video generation converts structured story scenes and illustrations into individual video clips with dynamic prompts, consistent visual elements and scene-specific actions.",
      },
      {
        title: "Automated video composition",
        desc: "An FFmpeg rendering pipeline combines generated scenes, AI music, transitions, synchronised lyrics, subtitles and visual effects into complete 3–5-minute MP4 videos with configurable aspect ratios and output quality.",
      },
      {
        title: "Automated highlights & YouTube Shorts",
        desc: "An AI video-analysis pipeline identifies engaging moments, memorable lyrics, story highlights, emotional peaks and visually interesting scenes, selects the two strongest segments and generates two vertical 9:16 clips with intelligent cropping, reframing, captions and background-audio synchronisation.",
      },
      {
        title: "Google Cloud Storage asset management",
        desc: "Structured bucket and object-prefix conventions separate story data, prompts, character references, scene images, audio tracks, intermediate clips, final videos, thumbnails and Shorts — with project-level organisation, object metadata, access controls, signed URLs, lifecycle-based cleanup and database-backed asset references.",
      },
      {
        title: "YouTube upload, scheduling & rescheduling",
        desc: "YouTube Data API v3 with OAuth 2.0 uploads videos and Shorts, generates titles, descriptions, tags and thumbnails, configures privacy and manages publishing — including scheduled publishing at configurable dates and times, rescheduling of eligible private videos, upload progress tracking, retry handling and publishing-status sync.",
      },
      {
        title: "Asynchronous workflow orchestration",
        desc: "A distributed FastAPI + Celery + Redis + PostgreSQL pipeline coordinates story generation, song creation, scene rendering, video assembly, Shorts generation and YouTube uploads, with persisted workflow state, retries, failure recovery, resumable processing and task-level execution tracking.",
      },
      {
        title: "Real-time job & scene monitoring",
        desc: "A React dashboard shows overall progress plus per-scene status, song generation, rendering stages, Shorts generation, cloud-storage operations and YouTube publishing state. Statuses persist in PostgreSQL, so a page refresh restores the latest state without losing progress.",
      },
      {
        title: "Cloud infrastructure & security",
        desc: "Google Cloud service-account permissions, secure backend authentication, credentials kept out of frontend code, managed cloud-asset access, and structured logs, error details and processing metadata for production operations.",
      },
      {
        title: "Content quality & reliability",
        desc: "Age-appropriate content validation, visual consistency checks, generated-asset verification, configurable quality checks, processing logs and generation-cost tracking.",
      },
    ],
  },
  {
    id: "pixtura",
    kind: "client",
    title: "Pixtura",
    tagline: "AI-Powered Product Photography & Virtual Model Generation Platform",
    description:
      "An AI product-photography platform that transforms a single uploaded product image into professional e-commerce visuals — AI-generated model shoots, product-background compositions and multiple styling variations — through an intelligent, guided generation workflow.",
    stack: [
      {
        items: [
          "React.js",
          "Python",
          "MongoDB",
          "AWS Lambda",
          "Gemini Image Generation APIs",
          "Gemini 3.1 Flash Image",
          "Azure-hosted GPT Image Generation API",
        ],
      },
    ],
    features: [
      {
        title: "AI-powered product analysis",
        desc: "Automated image analysis identifies product characteristics, category, visual attributes and presentation requirements to drive personalised generation recommendations.",
      },
      {
        title: "Model & pose recommendations",
        desc: "A recommendation engine suggests suitable virtual models by gender, age group, appearance and product category, along with relevant poses and product-interaction scenarios.",
      },
      {
        title: "Background & style selection",
        desc: "Contextual recommendations for backgrounds, themes, lighting, environments and visual styles based on product attributes, for consistent commercial photography.",
      },
      {
        title: "Interactive recommendation cards",
        desc: "A guided React workflow with dynamically generated preview cards for recommended models, alternative poses, product positions and background styles, which users can review and customise before generation.",
      },
      {
        title: "Multi-model image generation",
        desc: "Gemini image models, including Gemini 3.1 Flash Image, plus an Azure-hosted GPT-based image API generate realistic product imagery, virtual model shoots and custom background compositions.",
      },
      {
        title: "Dynamic prompt engineering",
        desc: "Context-aware prompts built from product analysis, selected model attributes, poses, backgrounds, lighting and custom instructions, tailored to each product category and photography scenario.",
      },
      {
        title: "Multiple image variations",
        desc: "Variations across model poses, visual styles, backgrounds and presentation angles for e-commerce catalogues and marketing assets.",
      },
      {
        title: "Product background generation",
        desc: "A dedicated workflow removes or replaces product backgrounds and creates custom scenes that emphasise product visibility and presentation quality.",
      },
      {
        title: "Serverless backend",
        desc: "Python workflows on AWS Lambda run image analysis, recommendation and generation at scale; MongoDB persists user data, generation history, selected configurations and output metadata.",
      },
      {
        title: "Generation dashboard & asset management",
        desc: "A React dashboard to browse generated images, review history, download outputs, manage collections and open image-editing workflows.",
      },
      {
        title: "Bulk image generation",
        desc: "Create and manage many product-image variations at once, with generation-history tracking and output management.",
      },
      {
        title: "Custom image editing",
        desc: "Custom instructions and AI-powered modifications to refine generated product photos.",
      },
      {
        title: "Credit-based usage tracking",
        desc: "A credit-based generation workflow tracks usage and controls access to image generation.",
      },
      {
        title: "Guided multi-step UX",
        desc: "Product upload → generation mode → AI-recommended models → pose → background → final review → generate — removing manual prompt engineering from the product-photography workflow.",
      },
    ],
  },
  {
    id: "upscaling",
    kind: "client",
    title: "Cost-Optimized AI Video Upscaling Pipeline",
    tagline: "720p → 1080p with Real-ESRGAN",
    links: [{ label: "LinkedIn post", href: "https://lnkd.in/p/d7pNJNY3" }],
    description:
      "A two-stage video pipeline that generates AI videos at 720p to cut expensive generation costs, then upscales them to 1080p with Real-ESRGAN to sharpen perceived detail, edges and textures while preserving the original audio — targeting an estimated 40–60% reduction in video-generation cost versus generating at 1080p directly.",
    stack: [
      {
        items: ["Python", "OpenCV", "Real-ESRGAN (realesr-general-x4v3)", "PyTorch", "FFmpeg", "GPU-accelerated processing"],
      },
    ],
    features: [
      {
        title: "Deep-learning upscaling",
        desc: "Real-ESRGAN (realesr-general-x4v3) reconstructs image detail, improves edge sharpness and enhances textures in AI-generated frames beyond conventional interpolation.",
      },
      {
        title: "Memory-efficient streaming",
        desc: "Python + OpenCV streams frames straight into the enhancement step, avoiding intermediate PNG files and reducing disk I/O.",
      },
      {
        title: "FFmpeg pipe integration",
        desc: "Processed frames flow to FFmpeg over stdin/stdout pipes for efficient reconstruction and encoding, keeping the original audio track.",
      },
      {
        title: "GPU memory optimisation",
        desc: "FP16 half-precision inference where supported lowers GPU memory use and speeds up processing.",
      },
      {
        title: "Smart frame tiling",
        desc: "Configurable tiling keeps high-resolution frames within GPU memory limits, preventing out-of-memory errors without over-aggressive automatic tiling.",
      },
      {
        title: "End-to-end reconstruction",
        desc: "Frame extraction → AI enhancement → resizing → encoding → final output, with configurable quality and performance settings.",
      },
    ],
  },

  // ─── Personal projects ───────────────────────────────────────────────────
  {
    id: "synapse",
    kind: "personal",
    title: "Synapse",
    tagline: "Verified AI Data Workspace",
    meta: "Apr 2026 – Present",
    links: [{ label: "LinkedIn post", href: "https://lnkd.in/p/dRrSVznf" }],
    description:
      "Ask your databases and documents questions in plain English. AI tools that write SQL usually fail without warning — a JOIN double-counts rows and inflates revenue, or orders with no matching customer quietly drop out of a total. Synapse is built around catching those mistakes: it answers over your existing databases and files without a data warehouse, re-checks the headline number a second, independent way and says plainly when not to trust it, then builds charts and dashboards and delivers them to Slack, Gmail or Drive. A confirmation step sits in front of anything that sends, writes or deletes.",
    stack: [
      { layer: "Backend", items: ["Python", "FastAPI (async)", "SSE streaming", "WebSockets", "SQLAlchemy", "Alembic"] },
      { layer: "AI agents", items: ["LangGraph (think → act → observe)", "MCP-style tool layer", "Intent classification", "Per-question model routing"] },
      { layer: "LLM providers", items: ["Anthropic Claude", "Gemini", "Groq", "OpenRouter", "NVIDIA", "AWS Bedrock", "Key pool + circuit breakers + failover"] },
      { layer: "Data", items: ["DuckDB (SQLite + MySQL + CSV/Parquet in one query)", "sqlparse"] },
      { layer: "Retrieval", items: ["Qdrant hybrid (all-MiniLM-L6-v2 + BM25, RRF)", "Cross-encoder reranking", "BM25 page index"] },
      { layer: "Queue / cache", items: ["ARQ workers", "Redis"] },
      { layer: "Research", items: ["Tavily", "Exa", "Firecrawl"] },
      { layer: "Integrations", items: ["Google OAuth (Gmail, Drive, Docs, Sheets)", "Slack API"] },
      { layer: "Frontend", items: ["React 18", "TypeScript", "Vite", "MUI", "ECharts", "React Query", "Zustand"] },
      { layer: "Security", items: ["Fernet-encrypted credentials", "bcrypt + JWT login", "Rate limiting", "Audit log"] },
      { layer: "Deployment", items: ["Docker Compose", "AWS EC2 (backend)", "AWS Amplify (frontend)", "Cloudflare Tunnel"] },
    ],
    features: [
      {
        title: "NL2SQL across data sources",
        desc: "Combine SQLite, MySQL and CSV/Parquet in one statement through DuckDB. Schema linking shows the model real example values from each column; on large schemas a retrieval pass picks only the relevant tables.",
      },
      {
        title: "Trust layer",
        desc: "After answering, a second, independent set of checks runs:",
        points: [
          "Metric resolution — was the metric taken from the defined glossary or guessed from a column name?",
          "Cross-source reconciliation — the total is calculated a second way, and the answer is blocked if the two disagree.",
          "Fan-out & completeness — orphan or duplicate rows are reported with the row count and their effect on the total.",
          "Every answer is labelled Verified, Verified with caveats, or Don't trust this yet.",
        ],
      },
      {
        title: "Safe writes",
        desc: "INSERT, UPDATE, DELETE and DDL are classified by rules with sqlparse, not by the model. Destructive SQL pauses the agent and shows the exact SQL, risk level and estimated affected rows; high-risk operations require typing a keyword to confirm.",
      },
      {
        title: "Governed semantic layer",
        desc: "A business glossary plus certified metrics, so a term like “Net Revenue” is defined once and calculated the same way every time. Every query is written to an audit trail.",
      },
      {
        title: "Charts with a critic",
        desc: "The chart type is chosen from the shape of the data; a second critic stage rejects misleading visuals such as a pie chart of long-tailed data or an ID column charted as a measure.",
      },
      {
        title: "Dashboards",
        points: [
          "Every query result gets an automatic mini-dashboard.",
          "A whole-database overview makes the LLM plan the questions — each panel is a real, checked query.",
          "A 2D/3D Chart Studio for manual exploration.",
          "Pixel-perfect PDF export of what's on screen.",
        ],
      },
      {
        title: "AI agent with 47 actions",
        desc: "Connected to Gmail, Drive, Docs, Sheets and Slack, so one sentence runs a whole workflow: query → verify → chart → PDF → post to Slack. Anything that sends or changes something needs human approval, and before the agent can say “done”, a verifier confirms the API call actually happened.",
      },
      {
        title: "Document RAG",
        points: [
          "Upload PDF, DOCX, XLSX, PPTX, CSV, images and more — up to 100 MB each.",
          "Hybrid search with reranking and a different retrieval strategy for each type of question.",
          "Strict per-document isolation: only the documents you tick are searched.",
          "Citations jump to the source page; live ingestion progress over WebSocket.",
        ],
      },
      {
        title: "Deep research & scraping",
        desc: "Plan → parallel search (Tavily + Exa) → full-page read (Firecrawl) → critic loop → answer with citations. Scraped websites become spreadsheets that are automatically registered as queryable data sources.",
      },
      {
        title: "Production reliability",
        points: [
          "Background ingestion on a queue.",
          "Self-healing index: documents marked indexed but holding no vectors are re-ingested on startup.",
          "Encrypted credentials and per-key cooldowns.",
          "An evaluation harness that scores SQL by whether its results match, not by comparing text.",
        ],
      },
    ],
    responsibilities: [
      "Designed the architecture and built every layer: the FastAPI backend, the LangGraph agent, retrieval, integrations, the React frontend and deployment.",
      "Designed the trust layer and the confirmation gate for safe writes.",
      "Built the multi-provider LLM gateway with failover and per-question model routing.",
      "Profiled and fixed the main performance bottlenecks.",
      "Deployed on AWS (EC2 + Amplify) with Docker Compose; wrote 89 tests and an evaluation harness.",
    ],
    results: [
      { label: "Retrieval latency", before: "27.1 s", after: "3.7 s (7× faster)" },
      { label: "Time to first token", before: "29.0 s", after: "12.9 s" },
      { label: "Fully verified database answer", before: "~60 s", after: "~14 s" },
      { label: "Groundedness (claims backed by source)", before: "0.00", after: "0.92" },
    ],
    resultsNote:
      "The retrieval speedup came from reranking the merged results once instead of once per sub-query — the reranker had been running 5–11 times per question, and about 80% of that work was thrown away.",
  },
  {
    id: "switchboard",
    kind: "personal",
    title: "Switchboard AI",
    tagline: "Local Multi-Model LLM Gateway",
    meta: "Open source (MIT) · Sep 2026",
    links: [
      { label: "GitHub", href: "https://github.com/meetdhamecha/switchboard-ai" },
      { label: "LinkedIn post", href: "https://lnkd.in/p/db5sTUbC" },
    ],
    description:
      "A local, OpenAI-compatible API gateway that puts 17 LLMs (Claude, Gemini, GPT-OSS) behind one address. Every provider has its own API, format and failure modes, and teams tend to send every request — even a greeting — to the most expensive flagship model. Switchboard sits between the application and the models: clients send one standard OpenAI-format request, and Switchboard classifies the task, picks the model and how much “thinking” it gets, and switches to the next candidate if a model is rate-limited or down. Every response reports its tokens and cost. Under the hood it manages long-running CLI processes, converts each provider's output into one common event stream, and protects the local server against cross-site and DNS-rebinding attacks.",
    stack: [
      { layer: "Backend", items: ["Python", "FastAPI", "asyncio", "Server-Sent Events", "Pydantic", ".env config"] },
      { layer: "LLM providers", items: ["Claude Code CLI (12 Claude models)", "Antigravity CLI (Gemini 3.x, GPT-OSS 120B)", "Optional Anthropic API (pay per token)"] },
      { layer: "API compatibility", items: ["OpenAI-compatible /v1/chat/completions", "/v1/models"] },
      { layer: "Process management", items: ["Subprocess pool (JSON over stdin/stdout)", "Warm spare processes", "Concurrency queue", "Crash recovery"] },
      { layer: "Auth automation", items: ["Hidden-terminal driving with pyte for Google OAuth sign-in"] },
      { layer: "Frontend", items: ["Self-contained web chat UI (HTML/JS)", "Model picker", "Status page", "Cost details"] },
      { layer: "Deployment", items: ["Docker", "docker-compose", "AWS EC2 install script + systemd", "CloudFront keep-alive", "Linux · macOS · Windows"] },
    ],
    features: [
      {
        title: "One OpenAI-compatible API",
        points: [
          "29 model options covering 17 distinct LLMs: 12 Anthropic, 4 Google and 1 OpenAI.",
          "Existing OpenAI SDK code works by switching the base URL to localhost:8000/v1.",
        ],
      },
      {
        title: "Smart routing — three Auto modes",
        points: [
          "auto — classifies each request into one of 7 types (chat, writing, creative, code, reasoning, research, long), scores difficulty 1–5, picks the model and thinking level, and falls back through up to 3 candidates.",
          "auto-orchestrate — plans, splits the task into 2–5 parallel subtasks, has a model from a different family review the results, then writes the answer.",
          "auto-ensemble — independent answers from Claude, Gemini and GPT-OSS, merged into one.",
        ],
      },
      {
        title: "Warm processes for fast replies",
        points: [
          "One CLI process per conversation, so only new messages are sent.",
          "Spare processes pre-started and refreshed every 30 minutes; idle conversations closed after 15 minutes.",
          "Concurrency capped (6 Claude / 4 Gemini at once) with a queue for the rest.",
          "A crashed process is replaced and the conversation replayed, so nothing is lost.",
        ],
      },
      {
        title: "Streaming",
        points: [
          "SSE with one common event format: session, text, tool_use, tool_result, notice, result, done.",
          "A 25 ms pacing layer evens out bursty output so text flows smoothly.",
          "Keep-alive pings stop AWS CloudFront from cutting off long answers.",
        ],
      },
      {
        title: "Automatic failover",
        desc: "Rate limits (429) and “no capacity” errors (503) switch to the next model with no error shown to the user; errors after part of the answer has streamed show a warning instead.",
      },
      {
        title: "Agent mode for local files",
        desc: "Tasks run inside one approved folder with an allowlist of tools; shell commands are off by default. Each tool step streams live, and a task can be resumed later.",
      },
      {
        title: "Web UI",
        desc: "Chat, a model picker, account and quota status, cost details per response, and Google sign-in done entirely in the browser.",
      },
      {
        title: "Security",
        points: [
          "Listens on 127.0.0.1 only by default.",
          "Blocks requests from other origins and unknown host names (DNS-rebinding protection); optional Bearer API key.",
          "Agent file access limited to approved folders.",
          "Credentials stay in the official CLIs' own stores, never in Switchboard.",
        ],
      },
      {
        title: "Cross-platform",
        desc: "Automatically finds the CLIs (newest version wins) on Windows, macOS and Linux, with a first-run installer and one-command deploy to EC2.",
      },
    ],
    responsibilities: [
      "Designed and built the full system: the FastAPI server (29 routes), the provider layer and its common event format, the routing and orchestration engines, the process pool, the streaming pipeline, the web UI and deployment scripts.",
      "Built and ran the test harness that benchmarked all 29 model options.",
      "Wrote the documentation (a 57 KB README with architecture and workflow diagrams) and released the project as MIT open source.",
    ],
    results: [
      { label: "Models through one API", after: "29 options / 17 LLMs — 27 of 29 work on Claude Pro + Google AI Pro" },
      { label: "Test prompts answered correctly", after: "270 / 270" },
      { label: "Cost per request (Auto vs flagship-only)", before: "~$0.03", after: "~$0.004 (up to ~7× cheaper)" },
      { label: "Typical latency", after: "Claude ~2–5 s · Gemini ~10–30 s" },
      { label: "Failover", after: "Verified — requests continue when a model is unavailable" },
    ],
  },
];
