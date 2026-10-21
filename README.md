# Subhrajeet Ganguly - AI / ML Systems Engineer Portfolio

Production-grade personal portfolio and systems showcase for Subhrajeet Ganguly, Computer Science student (Class of 2026, Symbiosis Institute of Technology) specializing in applied machine learning, neural audio forensics, and distributed architectures.

## Live Demo & Repository
- **GitHub Repository**: https://github.com/subhra015/CV.git
- **Primary Domain**: https://subhrajeetganguly.vercel.app (or custom deployment)

## Design System & Aesthetic
Built with an editorial aesthetic inspired by modern minimalist art and tactile publication layouts:
- **Warm Ivory (`#f5f0e6`)**: Primary canvas background providing organic warmth and high visual contrast.
- **Deep Editorial Blue (`#1d4872`)**: Primary typographic and structural accent for clarity and authority.
- **Coral Orange (`#f97d58`)**: High-visibility signal accent for active states, indicators, and primary call-to-actions.
- **Strict Visual Discipline**: Zero gradients, zero emojis, zero em dashes. Clean, tactile, high-density information architecture.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack enabled)
- **Language**: TypeScript 5 (Strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Runtime**: Node.js 20+

## Key Architecture & Features

### 1. Hero Section
- High-resolution editorial artwork background featuring a deep blue canvas and blooming coral quince blossoms.
- Single bold typography stack: `SUBHRAJEET GANGULY`.
- Quick action buttons: `EXPLORE WORK`, `VIEW RESUME` (modal with direct PDF view), and `GITHUB`.
- Academic affiliation kicker: `CLASS OF 2026 • SYMBIOSIS INSTITUTE OF TECHNOLOGY`.

### 2. About & Leadership
- Dual-focus overview: Applied machine learning and end-to-end systems engineering.
- Highlighted achievements: 1st Place at the College Entrepreneurship Competition, Student Hospitality Coordinator for ICSIT '25.

### 3. Featured Engineering Projects
Detailed architecture breakdowns for:
- **StreamGuard**: Dual-branch streaming architecture (causal waveform CNN and multi-resolution mel-spectrogram) for real-time deepfake audio forensics with calibrated Bayesian confidence under 80ms latency.
- **DocMind**: Enterprise document question-answering platform combining sparse BM25 matching and pgvector dense embeddings with Reciprocal Rank Fusion (RRF).
- **Promo Planner Agent**: Multi-agent marketing campaign planning engine using deterministic Python validation gates and Pydantic schemas.
- **Deepfake Image & Frame Detector**: Fine-tuned ResNet-50 visual artifact classifier built with disciplined data pipelines.
- **Web Log Anomaly Detection**: Unsupervised security log analyzer using Isolation Forests and behavioral feature extraction.
- **HarvestIQ**: Microservice architecture connecting crop pricing, weather shock models, and pest vulnerability analysis.

### 4. Technical Stack Matrix
Segmented technical proficiency displays:
- Languages: Python (PyTorch, FastAPI, Concurrency), TypeScript / JavaScript, SQL (PostgreSQL / pgvector), C++, Bash, HTML5 / Semantic CSS.
- AI & ML Frameworks: PyTorch, ONNX Runtime, Hugging Face, LangChain, LlamaIndex, scikit-learn.
- Web & Backend: FastAPI, Next.js, Node.js, RESTful APIs, WebSockets.
- DevOps & Tools: Docker, Git, Linux (RH124), Supabase, Vercel.

### 5. Verified Credentials & Certifications
- Red Hat Certified System Administrator (RH124)
- Google Cloud Certified Cloud Digital Leader
- Supervised Machine Learning (Stanford / DeepLearning.AI)
- Advanced Learning Algorithms (DeepLearning.AI)
- Postman API Fundamentals Student Expert

### 6. Contact & Telemetry
- Direct contact access points via email and LinkedIn.
- In-browser interactive PDF resume modal with quick download option.

## Getting Started Locally

### Prerequisites
- Node.js 18.18.0 or later
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/subhra015/CV.git

# Navigate into the project folder
cd CV

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:3000` with your browser to see the live result.

### Production Build
```bash
npm run build
npm run start
```

## Project Structure
```
├── public/
│   ├── hero_art.jpg           # Curated editorial artwork asset
│   ├── resume.pdf             # Verified resume document
│   └── Image.jpeg             # Profile photograph
├── src/
│   ├── app/
│   │   ├── globals.css        # Color tokens and outline utilities
│   │   ├── layout.tsx         # Root layout with metadata and fonts
│   │   └── page.tsx           # Main single-page application entry
│   ├── components/
│   │   ├── about/             # AboutSection component
│   │   ├── achievements/      # AchievementsSection component
│   │   ├── common/            # Navigation, Footer, ResumeModal
│   │   ├── contact/           # ContactSection component
│   │   ├── credentials/       # CredentialsSection component
│   │   ├── hero/              # HeroSection component
│   │   ├── projects/          # ProjectsSection component
│   │   └── skills/            # SkillsSection component
│   ├── data/
│   │   └── portfolioData.ts   # Structured portfolio data and case studies
│   └── types/
│       └── index.ts           # TypeScript interfaces and types
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License
MIT License. Created by Subhrajeet Ganguly.
