export const contentData = {
  about: {
    name: "Satakshi Roy",
    tagline: "SDE | AI Automation Systems | Full-Stack Developer",
    typingText: [
      "Building scalable systems",
      "Shipping production-grade code",
      "Automating at scale",
      "Crafting impactful solutions",
    ],
    contact: {
      email: "satakshiroy101@gmail.com",
      phone: "+91 7578913115",
      github: "https://github.com/Pawpawcodes",
      linkedin: "https://linkedin.com/in/satakshiroy",
    },
    intro: "Final-year B.Tech CSE student at KIIT (2027) with hands-on experience building production-grade systems at Soshals. Shipped 3+ systems reducing manual effort by 80%. Strong in system design, API development, and LLM orchestration. Recognized at national hackathons (SIH 2025 semi-finals, Hack4Impact 3rd Place). Seeking SDE internship/FTE roles to build high-impact, scalable software.",
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS", "C"],
    },
    {
      category: "Frontend",
      items: ["React", "React Native", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & Infrastructure",
      items: ["Node.js", "REST APIs", "AWS (S3, Lambda, Glue)", "Google Apps Script", "n8n", "ETL Pipelines"],
    },
    {
      category: "AI & Systems",
      items: ["LLM APIs", "Prompt Engineering", "RAG", "Workflow Automation", "System Design", "DSA"],
    },
  ],
  education: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      period: "2023 — 2027",
      degree: "B.Tech Computer Science & Engineering",
    },
    {
      institution: "Maharishi Vidya Mandir",
      period: "2020 — 2022",
      degree: "Higher Secondary (83.4%)",
    },
    {
      institution: "Holy Cross H.S School",
      period: "2020",
      degree: "Secondary (90.5%)",
    },
  ],
  projects: [
    {
      id: "reddit-ai-video",
      title: "Reddit Scraper → AI Video Generator",
      description: "End-to-end content pipeline: Reddit ingestion → NLP filtering → LLM scriptwriting → AI video synthesis",
      tech: ["Python", "Reddit API", "LLM APIs", "Arcads"],
      links: {
        github: "https://github.com/Pawpawcodes/automated-ad-creation",
      },
      metrics: [
        "500+ Reddit posts/day ingestion",
        "94% turnaround reduction (3h → 8min)",
        "4-stage ETL pipeline",
        "100% manual sourcing eliminated",
      ],
    },
    {
      id: "creator-outreach",
      title: "Creator Outreach Automation System",
      description: "Full-stack: Chrome Extension → Google Apps Script backend → Sheets database with real-time sync",
      tech: ["JavaScript", "Google Apps Script", "Google Sheets", "Chrome Extension"],
      links: {
        github: "https://github.com/Pawpawcodes/creator-scout",
      },
      metrics: [
        "One-click capture (<2 seconds)",
        "Scout ID deduplication engine",
        "85% CRM time reduction (4min → 18sec)",
        "200+ creators managed, zero duplicates",
      ],
    },
    {
      id: "ai-ugc-engine",
      title: "AI UGC Content Engine",
      description: "LLM orchestration system with 4-layer prompt architecture for structured content generation",
      tech: ["LLM APIs", "n8n", "Google Sheets"],
      links: {
        github: "https://github.com/Pawpawcodes/Ai-UGC-Content-engine",
      },
      metrics: [
        "150+ content briefs/session",
        "5+ brand verticals",
        "3x output specificity improvement",
        "95% latency reduction (48h → 15min)",
      ],
    },
    {
      id: "nagarmitra",
      title: "NagarMitra – Civic Issue Tracker",
      description: "Full-stack geospatial platform: GPS-tagged issue submission → AI classification → ward-wise dashboards",
      tech: ["React Native", "Node.js", "AWS", "LLM APIs"],
      links: {
        github: "https://github.com/Pawpawcodes/NagarMitra",
      },
      metrics: [
        "3rd Place Hack4Impact Track (SDIS 2026)",
        "88% AI classification accuracy",
        "70% manual triage reduction",
        "500+ civic complaints processed",
      ],
    },
    {
      id: "pashumitra",
      title: "PashuMitra – AI Animal Welfare Platform",
      description: "Multilingual AI platform: livestock monitoring + LLM chatbot + real-time disease detection",
      tech: ["React", "Node.js", "Python", "AWS", "NLP"],
      links: {
        github: "https://github.com/Pawpawcodes/PashuMitra-translator",
        live: "https://pashumitraa.netlify.app/",
      },
      metrics: [
        "SIH 2025 semi-finals (550+ teams)",
        "26+ Indian languages supported",
        "<3s response latency",
        "Rural accessibility focus",
      ],
    },
    {
      id: "spendora",
      title: "Spendora – Personal Finance Tracker",
      description: "Full-stack platform: expense classification → trend analysis → budget insights",
      tech: ["React", "MySQL", "Data Visualization"],
      links: {
        github: "https://github.com/Pawpawcodes/Spendora",
        live: "https://spendoraa.onrender.com/",
      },
      metrics: [
        "E-Summit Special Recognition",
        "~99% classification accuracy",
        "8 expense categories",
        "Sub-100ms query latency",
      ],
    },
    {
      id: "studifyy",
      title: "Studifyy – AI Productivity Platform",
      description: "Modular SaaS: tasks + goals + deadlines + LLM-powered study engine with RAG",
      tech: ["React", "GenAI", "RAG", "LLM APIs"],
      links: {
        github: "https://github.com/Pawpawcodes/Studifyy",
      },
      metrics: [
        "Google × Kaggle GenAI certification",
        "<5s real-time updates",
        "Component-based architecture",
        "Adaptive learning engine",
      ],
    },
  ],
  experience: [
    {
      role: "SDE Intern",
      company: "Soshals",
      period: "2026",
      details: "Engineered scalable automation infrastructure using LLM APIs, n8n, and Google Apps Script. Shipped 3+ production systems reducing manual effort by 80%. Built Chrome Extension for real-time data capture with centralized tracking.",
    },
    {
      role: "Active Member (Data Analytics & Automation)",
      company: "USC.KIIT – UiPath Student Community",
      period: "2025 — Present",
      details: "Contributed to real-world automation and data analytics projects. Developed UiPath workflows and Python integrations for data extraction and reporting.",
    },
    {
      role: "AICTE Virtual Intern",
      company: "Data Engineering with AWS",
      period: "2025",
      details: "Intensive hands-on training in AWS data engineering. Built ETL pipelines using S3, Lambda, Glue for scalable data processing.",
    },
  ],
  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2025 – Semi-finals",
      year: "2025",
      details: "Advanced from 550+ teams for PashuMitra. 2nd position in internal round with national-level jury evaluation.",
      link: "https://pashumitraa.netlify.app/",
    },
    {
      title: "Hack4Impact Track, SDIS 2026 – 3rd Place",
      year: "2026",
      details: "NagarMitra: Full-stack civic platform with AI-powered classification and geospatial dashboards.",
      link: "https://github.com/Pawpawcodes/NagarMitra",
    },
    {
      title: "Google × Kaggle GenAI Agents Program",
      year: "2025",
      details: "Completed intensive program, earned certification. Built Studifyy multi-agent learning platform.",
      link: "https://www.kaggle.com/certification/badges/satakshiroy/105",
    },
    {
      title: "E-Summit 2025 – Special Team Recognition",
      year: "2025",
      details: "Pandora's Paradox Hackathon: Spendora finance platform with AI analytics.",
      link: "https://spendoraa.onrender.com/",
    },
    {
      title: "CodeSprint 2025 – Top 30",
      year: "2025",
      details: "Ranked Top 30 among 1,000+ participants in 45 Days CodeSprint (USC.KIIT & UiPath).",
    },
  ],
  certifications: [
    {
      title: "Google Cloud – Generative AI Learning Path",
      issuer: "Google Cloud / Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/QNUZ4LVOM8LB",
    },
    {
      title: "AWS Data Engineering & Solutions Architecture",
      issuer: "AWS / Forage",
      link: "https://www.credly.com/badges/a0a90c2a-5e83-4978-bb11-34a827225d72/linked_in_profile",
    },
    {
      title: "UiPath Agentic Automation & CodeSprint",
      issuer: "UiPath",
      link: "https://drive.google.com/file/d/1IgLyZC0lQaXmvXgtbqMXmr37ZOQ78NEL/view",
    },
    {
      title: "Google × Kaggle GenAI Agents",
      issuer: "Kaggle",
      link: "https://www.kaggle.com/certification/badges/satakshiroy/105",
    },
  ]
};
