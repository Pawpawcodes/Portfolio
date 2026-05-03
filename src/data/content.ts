export const contentData = {
  about: {
    name: "Satakshi Roy",
    tagline: "Computer Science Student | AI Automation Developer",
    typingText: [
      "Building AI systems",
      "Full-stack apps",
      "Automation workflows",
    ],
    contact: {
      email: "satakshiroy101@gmail.com",
      phone: "+91 7578913115",
      github: "https://github.com/Pawpawcodes",
      linkedin: "https://linkedin.com/in/satakshiroy",
    },
    intro: "I'm a fourth-year B.Tech student in Computer Science and Engineering at KIIT, building at the intersection of AI Automation, LLM Engineering, and full-stack software development. My focus is creating end-to-end automation systems and AI-powered pipelines that are production-grade, scalable, and impact-driven.\n\nThrough projects like Reddit Scraper (94% time reduction), Creator Outreach Automation (85% efficiency gain), and AI UGC Content Engine (95% latency improvement), I've gained hands-on expertise in orchestrating complex workflows, designing LLM pipelines, and building systems that solve real-world problems at scale.\n\nI'm actively seeking SDE internship opportunities where I can contribute to high-impact engineering teams and ship production-ready software. Passionate about AI Agents, LLM Pipelines, Workflow Automation, Full-Stack Development, and Cloud Infrastructure.",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      category: "Frameworks & Tools",
      items: ["GitHub", "VS Code", "MySQL", "Google Cloud", "Power BI", "n8n", "React", "AWS"],
    },
    {
      category: "Data & Infrastructure",
      items: ["REST APIs", "Workflow Automation", "Data Pipelines", "Cloud Deployment", "Docker"],
    },
    {
      category: "Core Concepts",
      items: ["DSA", "OS", "DBMS", "OOP", "Algorithm Optimization", "Complexity Analysis", "AI Automation", "LLM Workflows"],
    },
  ],
  education: [
    {
      institution: "Kalinga Institute of Industrial Technology",
      period: "2023 — 2027",
      degree: "B.Tech in Computer Science and Engineering",
    },
    {
      institution: "Maharishi Vidya Mandir",
      period: "2020 — 2022",
      degree: "Higher Secondary Education (83.4%)",
    },
    {
      institution: "Holy Cross H.S School",
      period: "2020",
      degree: "Secondary Education (90.5%)",
    },
  ],
  projects: [
    {
      id: "reddit-scraper",
      title: "Reddit Scraper → AI Video Generator",
      tech: ["Python", "Reddit API", "LLM APIs", "Arcads"],
      image: "/projects/Reddit.png",
      links: {
        github: "https://github.com/Pawpawcodes/automated-ad-creation",
      },
      problem: "Manual content sourcing for video creation is time-consuming and doesn't scale for high-volume content production.",
      solution: "Engineered an end-to-end asynchronous content pipeline ingesting 500+ Reddit posts/day with signal-based filtering (upvote ratio ≥85%, comment velocity thresholds). Architected a 4-stage ETL workflow — data ingestion → NLP filtering → LLM prompt chaining → AI video synthesis. Orchestrated LLM-based scriptwriting with dynamic prompt templating, generating platform-optimized scripts across 3 content formats.",
      impact: "Slashed content turnaround time from 3 hours to under 8 minutes (94% reduction) and eliminated 100% manual content sourcing.",
    },
    {
      id: "creator-outreach",
      title: "Creator Outreach Automation System",
      tech: ["JavaScript", "Google Apps Script", "Google Sheets", "Chrome Extension"],
      image: "/projects/extension.png",
      links: {
        github: "https://github.com/Pawpawcodes/creator-scout",
      },
      problem: "Creator research and outreach workflow is fragmented across multiple tools, causing duplicate records and slow CRM processing.",
      solution: "Architected a 3-tier full-stack system — Chrome Extension (Manifest V3) frontend → Apps Script REST backend → Sheets as live relational DB. Engineered a real-time bidirectional sync engine with Scout ID-based deduplication and conflict resolution logic. Automated end-to-end outreach workflow — capture → dedup → status tagging → follow-up trigger.",
      impact: "Reduced per-creator CRM processing time from 4 minutes to 18 seconds (85% reduction) while maintaining zero duplicate records across 200+ creators.",
    },
    {
      id: "ai-ugc-engine",
      title: "AI UGC Content Engine",
      tech: ["LLM APIs", "n8n", "Google Sheets"],
      image: "/projects/content engine.png",
      links: {
        github: "https://github.com/Pawpawcodes/Ai-UGC-Content-engine",
      },
      problem: "Generating diverse, brand-aligned UGC content briefs across multiple platforms is manual and inefficient.",
      solution: "Developed a scalable LLM orchestration system with a 4-layer prompt architecture (persona → platform → format → tone), generating 150+ structured UGC content briefs per session. Designed role-conditioned prompt templates improving output specificity by 3x. Delivered JSON-structured output pipelines directly ingestible by downstream tools.",
      impact: "Compressed creator ideation-to-execution latency from 48 hours to under 15 minutes (95% reduction) across 5+ brand verticals.",
    },
    {
      id: "nagarmitra",
      title: "NagarMitra – Civic Issue Tracker",
      tech: ["React Native", "Node.js", "AWS", "MongoDB"],
      image: "/projects/nagarmitra.png",
      links: {
        github: "https://github.com/Pawpawcodes/NagarMitra",
      },
      problem: "Citizens struggle to report civic issues efficiently, and municipal staff lack organized routing and tracking systems for complaint resolution.",
      solution: "Developed a full-stack geospatial civic platform with GPS-tagged issue submission, real-time status tracking, and ward-wise heatmap visualizations spanning 10+ civic complaint categories. Integrated Mitra AI — an LLM-powered classification microservice — to auto-categorize and route civic complaints with ~88% accuracy. Deployed multi-channel reporting interface (React Native app + Telegram bot) on AWS with horizontally scalable REST API architecture.",
      impact: "Reduced manual triage effort by 70% across 500+ reported issues. Awarded 3rd Place at Hack4Impact Track, SDIS 2026.",
    },
    {
      id: "pashumitra",
      title: "PashuMitra – AI Animal Welfare Platform",
      tech: ["React", "Node.js", "Python", "AWS", "NLP"],
      image: "/projects/Pashu.png",
      links: {
        github: "https://github.com/Pawpawcodes/PashuMitra-translator",
      },
      problem: "Rural livestock farmers lack accessible tools for health monitoring and disease detection due to language and technical barriers.",
      solution: "Engineered a multilingual AI platform supporting 26+ Indian languages, enabling livestock monitoring and accessibility for rural users with low technical literacy. Developed real-time disease detection and alert system integrated with an LLM-powered chatbot. Designed scalable backend workflows for health tracking and reporting with optimized API orchestration.",
      impact: "Achieved response latency under 3 seconds. Advanced to Smart India Hackathon 2025 semi-finals among 550+ teams.",
    },
    {
      id: "spendora",
      title: "Spendora – Personal Finance Tracker",
      tech: ["React", "MySQL", "Data Visualization"],
      image: "/projects/Spendora.png",
      links: {
        github: "https://github.com/Pawpawcodes/Spendora",
        live: "https://spendoraa.onrender.com/",
      },
      problem: "Users struggle to understand their spending patterns without manual categorization and analysis of transaction data.",
      solution: "Built a full-stack finance platform with rule-based expense classification across 8 categories, achieving ~99% accuracy on transaction data. Implemented interactive dashboards with trend analysis, anomaly detection, and budget insights. Optimized relational database queries using indexing and normalization.",
      impact: "Enabled users to derive financial insights in under 30 seconds with sub-100ms latency across 1,000+ transaction records.",
    },
    {
      id: "studifyy",
      title: "Studifyy – AI Productivity Platform",
      tech: ["React", "GenAI", "RAG", "APIs"],
      image: "/projects/STudify.png",
      links: {
        github: "https://github.com/Pawpawcodes/Studifyy",
      },
      problem: "Students lack adaptive, context-aware learning tools that consolidate tasks, goals, and deadlines in a unified platform.",
      solution: "Developed a modular productivity SaaS platform integrating tasks, goals, deadlines, and study workflows into a unified system architecture. Engineered a goal-tracking and analytics engine with real-time updates (<5 seconds) and adaptive scoring for productivity optimization. Designed a component-based React frontend achieving consistent sub-200ms UI response times.",
      impact: "Created an immersive learning platform with level-adaptive features and reduced latency. Earned recognition at Google x Kaggle GenAI App Award.",
    },
  ],
  experience: [
    {
      role: "Data Engineering with AWS",
      company: "AICTE Virtual Internship",
      period: "2025",
      details: "Completed hands-on training with AWS data engineering tools. Built scalable workflows for data pipelines using S3, Lambda, and Glue.",
    },
    {
      role: "Member (Data Analytics)",
      company: "USC.KIIT – UiPath Student Community",
      period: "2025",
      details: "Member of UiPath-powered student community endorsed by KIIT T&P Cell. Contributed to real-world data analytics projects using UiPath and Python.",
    },
    {
      role: "AI Automation Developer",
      company: "Industry Mentorship Projects",
      period: "Present",
      details: "Building AI automation systems including creator outreach workflows, LLM-powered content pipelines, and autonomous bots using n8n.",
    },
  ],
  achievements: [
    {
      title: "2nd Position, Smart India Hackathon (SIH) Internal",
      year: "2025",
      details: "Reached the semi-finals out of 550+ teams for PashuMitra.",
    },
    {
      title: "Special Team, Pandora's Paradox Hackathon",
      year: "2025",
      details: "Earned recognition under industry mentorship at KIIT E-Summit for Spendora.",
    },
    {
      title: "Top 30 Sprinter",
      year: "2025",
      details: "Ranked Top 30 out of 1000+ participants in the 45 Days CodeSprint by USC.KIIT.",
    },
    {
      title: "Google x Kaggle GenAI App Award",
      year: "2025",
      details: "Built and submitted Studifyy at the Artificial Intelligence Agents Intensive Workshop.",
    },
  ],
  resumes: [
    {
      id: "sde",
      title: "General SDE Resume",
      filename: "Satakshi Roy.pdf",
      description: "Comprehensive resume highlighting full-stack development, system design, algorithms, DSA expertise, and core computer science fundamentals. Best for traditional SDE/software engineering positions.",
      icon: "📄",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "automation",
      title: "AI Automation Resume",
      filename: "Satakshi_Roy_CV__automation.pdf",
      description: "Specialized resume focused on AI automation, LLM workflows, n8n orchestration, workflow automation systems, and AI-powered solutions. Perfect for automation engineer and AI specialist roles.",
      icon: "⚡",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "detailed",
      title: "Detailed Resume",
      filename: "Satakshi_Roy_CV__detailed.pdf",
      description: "Comprehensive detailed resume with in-depth project descriptions, technical metrics, achievements, hackathon wins, and comprehensive experience breakdown. Ideal for in-depth application processes.",
      icon: "📋",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ]
};
