import { SiteConfig, ProjectItem, SkillCategory, CertificationItem, AchievementItem, EducationItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Subhrajeet Ganguly",
  title: "Subhrajeet Ganguly: AI / ML Systems Engineer",
  description: "Portfolio of Subhrajeet Ganguly, B.Tech CSE student specializing in Deep Learning, Production RAG, Multi-Agent Systems, and Applied ML.",
  location: "Nagpur, India (IST)",
  status: "Open to Internships and Full-Time Roles",
  email: "subhrajeet015@gmail.com",
  github: "https://github.com/subhra015",
  linkedin: "https://www.linkedin.com/in/subhrajeet-ganguly-423a57320",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "streamguard",
    index: "01",
    title: "StreamGuard",
    subtitle: "Real-Time Deepfake Audio Forensics",
    description: "Streaming inference pipeline categorizing live audio into Real, Uncertain, or Fake with calibrated Bayesian confidence under 80ms latency.",
    bullets: [
      "Dual-branch streaming architecture: causal waveform CNN and multi-resolution mel-spectrogram",
      "MC-Dropout uncertainty sampling over sliding frames with calibrated 3-state output",
      "Sub-80ms P95 CPU inference via ONNX runtime and FastAPI WebSockets",
      "Cross-dataset evaluation (ASVspoof 2019 to 2021 DF) with zero data leakage",
    ],
    tags: ["PyTorch", "FastAPI", "ONNX", "MC-Dropout", "Next.js"],
    links: {
      github: "https://github.com/subhra015",
      demo: "https://github.com/subhra015",
    },
    star: {
      situation: "Synthetic voice clones evade conventional offline detectors during live security calls.",
      task: "Design a real-time streaming audio classifier with calibrated uncertainty and interpretable metrics.",
      action: "Built dual-branch temporal encoders, gated fusion, ONNX CPU serving, and Grad-CAM spectrogram overlays.",
      result: "Quantified RTF < 0.15 on CPU with robust out-of-distribution detection.",
    },
  },
  {
    id: "docmind",
    index: "02",
    title: "DocMind",
    subtitle: "Production Hybrid RAG Platform",
    description: "Enterprise document question-answering engine fusing pgvector cosine distance and PostgreSQL full-text search with LLM reranking.",
    bullets: [
      "Reciprocal Rank Fusion (RRF) integrating sparse text matching and dense embeddings",
      "Gemini Flash cross-encoder reranking resolving buried context retrieval bottlenecks",
      "Semantic chunking (600-word sliding windows) with IVFFlat indexed vector spaces",
      "Multi-tenant document isolation with Supabase Row Level Security (RLS)",
    ],
    tags: ["Next.js 15", "Supabase", "pgvector", "TypeScript", "Gemini"],
    links: {
      github: "https://github.com/subhra015/DocMind",
      demo: "https://github.com/subhra015/DocMind",
    },
    star: {
      situation: "Standard semantic embeddings regularly fail on exact keywords, part numbers, and specialized acronyms.",
      task: "Implement an industrial-grade hybrid retrieval pipeline with verifiable attribution.",
      action: "Unified BM25 full-text indexing, vector similarity, and LLM judge evaluation suites.",
      result: "Attained higher precision@5 and eliminated hallucinated document citations.",
    },
  },
  {
    id: "promo-planner",
    index: "03",
    title: "Promo Planner Agent",
    subtitle: "Multi-Agent Planning System",
    description: "Supervisor multi-agent pipeline generating research-backed marketing campaigns where deterministic Python code acts as the verification gate.",
    bullets: [
      "Supervisor orchestrating parallel Research and Audience agents into Strategy and Critic stages",
      "Deterministic Python validation gate enforcing budget sums, timeline consistency, and real sources",
      "Live Tavily research integration ensuring zero hallucinated external citations",
      "Pydantic typed validation schema with error feedback loops",
    ],
    tags: ["Python", "GroqCloud", "Pydantic", "Tavily", "pytest"],
    links: {
      github: "https://github.com/subhra015",
      demo: "https://github.com/subhra015",
    },
    star: {
      situation: "Autonomous LLM agents fabricate budget figures and invent fictitious source links.",
      task: "Construct an orchestrated agent collective constrained by deterministic code logic.",
      action: "Implemented state graphs via GroqCloud Llama-3.3-70b, strict schema coercion, and offline test harnesses.",
      result: "100% mathematical validity in generated campaign strategies with complete offline mock test coverage.",
    },
  },
  {
    id: "deepfake-image",
    index: "04",
    title: "Deepfake Image & Frame Detector",
    subtitle: "Visual Artifact Classification",
    description: "Fine-tuned ResNet-50 visual artifact classifier built with disciplined data pipelines and zero train-serve transformation skew.",
    bullets: [
      "Fine-tuned convolutional backbone with custom regularization and label smoothing",
      "Optimized via AdamW and StepLR scheduling over stratified splits on GPU clusters",
      "Inference parity ensured with matched Albumentations normalization in Streamlit",
    ],
    tags: ["PyTorch", "ResNet-50", "Albumentations", "Streamlit"],
    links: {
      github: "https://github.com/subhra015",
      demo: "https://github.com/subhra015",
    },
    star: {
      situation: "High-resolution diffusion generation and face-swapping create subtle blending artifacts missed by standard classifiers.",
      task: "Train and deploy an end-to-end reproducible image integrity verification pipeline.",
      action: "Applied targeted spatial augmentations, fine-tuned deep residual blocks, and published interactive evaluation dashboards.",
      result: "Generalization across diverse synthetic generations with high classification confidence.",
    },
  },
  {
    id: "weblog-anomaly",
    index: "05",
    title: "Web Log Anomaly Detection",
    subtitle: "Unsupervised Behavioral Threat Hunting",
    description: "Security tool analyzing raw Apache access logs via behavioral windowing and IsolationForest scoring without labeled threat data.",
    bullets: [
      "Session aggregation utilizing 30-minute rolling inactivity windows",
      "Feature extraction measuring URI entropy, path diversity, burst velocity, and agent anomalies",
      "Analyst triage dashboard pinpointing anomalous session footprints and intrusion probes",
    ],
    tags: ["Scikit-learn", "IsolationForest", "Pandas", "Cybersecurity"],
    links: {
      github: "https://github.com/subhra015",
    },
    star: {
      situation: "Labeled intrusion telemetry is sparse and attacker signatures evolve faster than rules.",
      task: "Build an unsupervised anomaly hunter isolating malicious automated scans.",
      action: "Developed feature extractors over web server logs and tuned isolation forest contamination rates.",
      result: "Surfaced reconnaissance bots and credential-stuffing patterns from unstructured logs.",
    },
  },
  {
    id: "harvestiq",
    index: "06",
    title: "HarvestIQ",
    subtitle: "Agritech Decision Engine",
    description: "Decision-support system unifying four dedicated machine learning risk models behind a modular Flask-RESTX backend and clean interface.",
    bullets: [
      "Unified microservice serving crop pricing, weather shock, pest vulnerability, and spoilage risk",
      "JWT authenticated architecture backed by SQLAlchemy relational persistence",
      "Designed to support local agrarian economies in the Vidarbha region",
    ],
    tags: ["Flask-RESTX", "SQLAlchemy", "Scikit-learn", "JWT"],
    links: {
      github: "https://github.com/subhra015",
    },
    star: {
      situation: "Smallholder farmers battle fragmented information across volatile crop pricing and pest vectors.",
      task: "Unify multiple machine learning forecasters into an accessible decision support suite.",
      action: "Built standardized REST endpoints, serialized models into clean pipeline wrappers, and exposed real-time insights.",
      result: "Delivered multi-factor risk scores translating raw climate metrics into actionable advice.",
    },
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "Python (PyTorch, FastAPI, Concurrency)", level: 90 },
      { name: "TypeScript / JavaScript", level: 78 },
      { name: "SQL (PostgreSQL / pgvector)", level: 74 },
      { name: "C++ (Data Structures, Algorithms)", level: 68 },
      { name: "Bash Scripting & Automation", level: 72 },
      { name: "HTML5 / Semantic CSS", level: 80 },
    ],
  },
  {
    name: "AI & ML Frameworks",
    items: [
      { name: "PyTorch Deep Learning", level: 84 },
      { name: "RAG & Reciprocal Rank Fusion", level: 82 },
      { name: "ONNX Runtime & CPU Optimization", level: 74 },
      { name: "Uncertainty Quantification / MC-Dropout", level: 76 },
      { name: "Scikit-learn Anomaly Detection", level: 82 },
      { name: "ResNet-50 / Computer Vision", level: 78 },
    ],
  },
  {
    name: "Web & Backend",
    items: [
      { name: "FastAPI & WebSockets", level: 82 },
      { name: "Flask / Flask-RESTX", level: 82 },
      { name: "Next.js 15 & React", level: 72 },
      { name: "JWT Security & REST Architecture", level: 80 },
      { name: "Streamlit & Gradio", level: 85 },
      { name: "Supabase & Row Level Security", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    items: [
      { name: "Git & GitHub Collaboration", level: 88 },
      { name: "Red Hat Enterprise Linux (RH124)", level: 78 },
      { name: "pytest & Pydantic Validation", level: 80 },
      { name: "Docker Containerization", level: 65 },
      { name: "Kaggle & Cloud GPU Environments", level: 85 },
      { name: "Vercel Deployment", level: 75 },
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "rh124",
    title: "Red Hat System Administration I (RH124-RHA), v10",
    issuer: "Red Hat",
    category: "Enterprise Linux",
  },
  {
    id: "ad141",
    title: "Python Programming with Red Hat (AD141-RHA)",
    issuer: "Red Hat",
    category: "Core Python",
  },
  {
    id: "genai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud",
    category: "Foundation Models",
  },
  {
    id: "dsa-python",
    title: "Data Structures & Algorithms using Python",
    issuer: "DSA Specialist",
    category: "Algorithms",
  },
  {
    id: "data-analyst",
    title: "Data Analyst 101",
    issuer: "Data Analytics",
    category: "Exploratory Modeling",
  },
  {
    id: "aws-forage",
    title: "Amazon AWS: Cloud Architecture Simulation",
    issuer: "Amazon AWS",
    category: "Cloud Infrastructure",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Competition: 1st Place Winner",
    badge: "First Semester Winner",
    description: "Formulated, validated, and pitched an end-to-end commercial startup model in my first semester at SIT Nagpur. Authored the business architecture, operational roadmap, and MVP prototype, securing first place before a panel of corporate judges.",
    tags: ["Startup Strategy", "Product MVP", "Venture Pitching"],
  },
  {
    id: "icsit",
    title: "Logistics and Hospitality Team: ICSIT '25",
    badge: "College Tech Fest Operations",
    description: "Directed on-ground logistics for international delegates, symposium keynote speakers, and student attendees. Maintained coordination across event schedules, crisis response, and material dispatch.",
    tags: ["Operations", "Logistics Management", "Stakeholder Coordination"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "sit",
    institution: "Symbiosis Institute of Technology, Nagpur",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 - 2028",
    status: "In Progress",
  },
  {
    id: "xii",
    institution: "North Point Senior Secondary Boarding School, Dum Dum",
    degree: "Class XII (Science and Mathematics)",
    period: "2023",
    status: "Graduated",
  },
  {
    id: "x",
    institution: "Delhi Public School, North Kolkata",
    degree: "Class X (Secondary Education)",
    period: "2021",
    status: "Graduated",
  },
];
