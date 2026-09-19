export type ExperienceRole = {
  /** Title held during this stretch. */
  title: string;
  /** Date range for this specific title, e.g. "September 2026 - Present". */
  dates: string;
};

export type ExperienceJob = {
  /** Current (or most senior) title at this employer. Used when `roles` is absent. */
  title: string;
  company: string;
  /** Full tenure at the employer, across every role held. */
  dates: string;
  responsibilities: string[];
  /**
   * Role history, newest first. Present only when more than one title was held
   * at the same employer. When set, the UI renders LinkedIn-style nested roles
   * and `title`/`dates` are NOT shown as the card heading, so the card never
   * implies the current title was held for the whole tenure.
   */
  roles?: ExperienceRole[];
};

export const resumeContent = {
  downloadButtonLabel: "Download Resume",
  summary: {
    headline: "Profile",
    paragraphs: [
      "**Lead AI Developer** and applied scientist who owns production AI systems end to end. I build the engine, the evaluation harness and the release path: offline benchmark suites, automated regression tests, and human-in-the-loop scoring loops (including **LLM-as-judge** and verifier-driven refinement), applied to systems that make commercial decisions in production rather than to research tooling alone.",
      "At **AnyTickets** I own an autonomous pricing platform — comp modeling, demand curves, guardrails and the public APIs. In a controlled A/B against the manual pricing baseline on split inventory from the same event, it reached **higher sell-through (34.8% vs 30.2%)** and **price realization (42.8% vs 34.5%)** while **narrowing margin loss from −7.7% to −0.7%**, at comparable total revenue. I rebuilt the company\'s canonical event catalog (**~222.5k events ingested hourly**) and took automated venue seat-map ingestion from **~5% to ~95% coverage** with mirror accuracy from **1% to 94%**.",
      "Earlier track record of reliability and performance gains: **~33% hallucination reduction**, **p95 TTFT cut from 4.3s to <2s** (internal), reduced open-ended analysis from **~30h to under 8h**, and shrunk multipage document workflows from **~90m to under 5m**. Delivered measurable impact at **Meta, Roku, Walmart,** and **Argomai**. Known as a strong cross-functional partner who ships reusable tooling, clear documentation, and drives adoption."
    ]
  },
  experience: {
    headline: "Experience",
    jobs: [
      {
        title: "Lead AI Developer",
        company: "AnyTickets",
        dates: "March 2026 - Present",
        roles: [
          { title: "Lead AI Developer", dates: "September 2026 - Present" },
          { title: "Senior AI Developer", dates: "March 2026 - September 2026" },
        ],
        responsibilities: [
          "Own the backend engine, pricing algorithm and public APIs for an autonomous ticket-pricing platform; in a controlled A/B against the manual pricing baseline on split inventory from one event, the model reached 34.8% sell-through vs 30.2% and 42.8% price realization vs 34.5%, and narrowed net margin loss from −7.7% to −0.7% on comparable revenue.",
          "Shipped a suggested-price model with a fixed -13%/+15% band back-tested against 140,000 prior-season transactions covering 80-90% of sales, with guardrails (step-down cuts, hard and dynamic floors, spike detection) and a two-cron repricing architecture.",
          "Rebuilt the company's canonical event catalog from scratch over two months - dedup/matching engine, ELT sync job, admin monitoring UI and a read-only public API - ingesting ~222.5k events hourly and staging ~144k cross-marketplace event mappings.",
          "Built a polygon-geometry system automating venue seat-map ingestion (levels, verticals, horizontals, neighbours, mirrors), lifting automated coverage from ~5% to ~95% and mirror accuracy from 1% to 94%; hand-built the ~696-section golden set and the evaluation harness that scores the algorithm against it.",
          "Applied research methodology to production ML: found that ~80% of the model's comparable inputs were the company's own listings (circular pricing), that only 12-15% of available comparables sat where sales actually occurred, and that the assumed normal distribution was empirically wrong - each finding redirected the algorithm.",
          "Stood up QA and UAT environments from nothing in eight days on top of a full feature load; designed and published the weekly release train (QA to UAT to production) and hold sole production-release authority for the platform.",
          "Remediated pre-existing API security exposure where unsecured internal endpoints permitted production-database writes to anyone holding the URL, completing the pass before the first external consumers came online.",
          "Run weekly 1:1s with three engineers and own the hiring loop end to end (rubric design, scoring, executive brief, onboarding); set team policy including an 8-story-point ticket ceiling and a 5,000-line PR split rule.",
          "Established the team's agentic-engineering practice: a nested CLAUDE.md context architecture with CI-enforced file-size caps and a multi-model adversarial review loop (Claude authoring, Copilot/Cursor/Bugbot as independent critics), now taught to engineering teams outside the org.",
          "Designed the rollout safety model for autonomous pricing: a global kill switch requiring an explicit typed confirmation to arm, per-event defaults-off, and full attribution logging on every price and settings change."
        ],
      },
      {
        title: "Senior Applied Scientist",
        company: "Argomai",
        dates: "January 2025 - March 2026",
        responsibilities: [
          "Built and governed enterprise AI evaluation and deployment processes, defining review loops, monitoring expectations, and quality gates across client projects.",
          "Authored and open-sourced a multilingual QA evaluation pipeline (self-consistency → critique → refinement) with judge-centric scoring and deterministic audit checks.",
          "Designed reusable AI platform components (embeddings, prompt templates, orchestration SDK) and agent workflows to standardize evaluation and reuse across initiatives.",
          "Cut multipage doc classification from ~90m to under 5m via retrieval automation, and reduced PM reporting from 6h/wk to under 1h via structured aggregation.",
          "Owned enterprise architecture across AI initiatives: domain models, service boundaries, data governance, and NFRs for scalable customer-facing products.",
          "Deployed LLM‑powered survey analysis workflows cutting manual review time and error risk; standardized governance frameworks later submitted for peer‑review.",
          "Conducted generative and evaluative user interviews for a new GenAI platform (screeners, protocols, synthesis) to validate value proposition and inform roadmap.",
          "Translated research findings into metrics, roll-out plans, and decision checklists with executives to de-risk launches."
        ],
      },
      {
        title: "Senior Quantitative UX Researcher",
        company: "Meta",
        dates: "January 2024 - January 2025",
        responsibilities: [
          "Implemented evaluation pipeline patterns, including LLM-as-judge self-reflection and verifier-driven revisions, improving reliability of intermediate outputs for production research workflows.",
          "Designed human-in-the-loop (HITL) expert review to refine outputs in natural language and curate few-shot examples, reducing analysis time ~73% (~30h to under 8h).",
          "Engineered multi-agent sampling (self-consistency with chain-of-thought) to generate and score candidate outputs across tasks, enabling hill-climbing style iteration.",
          "Ran pre- and post-launch monitoring using bi-weekly surveys and SQL-based log analysis to track model quality changes and guide roadmap decisions at 500M+ MAU scale.",
          "Shipped a reusable Python analytics toolkit (regressions/ANOVA/T-tests) adopted widely by the research team to streamline their own statistical analyses.",
          "Merged editor logs with survey outputs to triangulate user sentiment and validate predictive behavior models.",
          "Co-managed a global research panel and vendor partnerships to recruit participants worldwide for surveys and usability testing.",
          "User impact: accelerated feedback loops significantly, turning open-ended insights into fast, data-backed roadmap prioritization."
        ],
      },
      {
        title: "Senior User Experience Researcher",
        company: "Roku Inc.",
        dates: "January 2021 - November 2023",
        roles: [
          { title: "Senior User Experience Researcher", dates: "July 2022 - November 2023" },
          { title: "User Experience Researcher", dates: "January 2021 - July 2022" },
        ],
        responsibilities: [
          "Built a modular survey analysis and reporting engine, cutting weekly report generation from ~4h to under 5m via automation and reusable logic.",
          "Created an open-ended classifier prototype (NLP, clustering) that later informed the scaled system deployed at Meta.",
          "Developed an AI-powered indexed research database enabling self-serve discovery and faster executive reporting across orgs.",
          "Led quant/qual device research; analyzed behavioral logs from 70M+ devices using SQL to support usability testing and remote design.",
          "Executed mixed-methods research on Customer Support sites and call center software, directly translating data into UX improvements.",
          "Mentored junior researchers in survey design/analysis; managed vendors, resource planning, and multi-team budget alignment.",
          "Ran remote unmoderated tests via UserTesting and conducted longitudinal diary studies via dscout to capture in-home device usage.",
          "Applied Optimal Workshop for first-click, card sorting, and tree testing to validate information architecture."
        ],
      },
      {
        title: "Senior User Experience Researcher",
        company: "Walmart Global Tech",
        dates: "August 2019 - November 2020",
        responsibilities: [
          "Owned product analytics for Sam's Club mobile app, defining KPIs and Tableau dashboards linking behavioral and business metrics to feature decisions.",
          "Standardized cross-team research operations using Jira and Confluence workflows to prioritize requests, track WIP, and improve delivery predictability.",
          "Integrated user interaction data (Medallia, SurveyMonkey) with app analytics to drive a robust, data-centric UX approach.",
          "Executed contextual, in-store research on the purchase-to-return journey to connect digital workflows with physical service outcomes.",
          "Ran in-store app usability testing with active shoppers, synthesizing findings with engagement metrics to guide iterative feature enhancements."
        ],
      },
      {
        title: "Data Scientist",
        company: "Scrapworks Inc.",
        dates: "September 2017 - August 2019",
        responsibilities: [
          "Delivered deep learning forecasting for commodities futures, reducing prediction error by 60% and improving trader decision support.",
          "Initiated an NLP-based merchandise classifier, building end-to-end data pipelines that supported a successful patent application.",
          "Constructed interactive dashboards spanning 20 years of sales data, identifying trends that supported 30% sales growth."
        ],
      },
      {
        title: "Senior User Experience Researcher",
        company: "Suggestic",
        dates: "December 2016 - September 2017",
        responsibilities: [
          "Led transition from conversational to graphical interface using data insights; improved engagement and functionality.",
          "Ran data-driven testing and analysis for new features to ensure optimal integration.",
          "Designed and developed advanced prototypes; leveraged analytics for rapid iterations.",
          "Applied Lean UX / design thinking loops (hypothesize → prototype → test) with PM, design, and engineering to iterate on nutrition coaching flows."
        ],
      },
      {
        title: "User Experience Researcher",
        company: "Stanford University",
        dates: "May 2016 - November 2016",
        responsibilities: [
          "Conducted ML research on stress detection with 150+ hours of car, biometric, and video data.",
          "Contributed to algorithms achieving ~90% accuracy in stress detection.",
          "Ran cross‑city field study of pedestrian‑AV interactions, deriving design implications for AV behavior and urban HCI.",
          "Published validated on-road stress elicitation protocol (89% elicitation rate, multi-modal evidence) informing ML datasets and safety-aware automotive UI design."
        ],
      },
      {
        title: "User Experience Researcher",
        company: "ITAM",
        dates: "August 2014 - May 2016",
        responsibilities: [
          "Built custom data visualizations; analyzed psychophysiological signals to identify patterns with ML.",
          "Crafted personalized UX solutions for wearable, mobile, and web platforms.",
          "Conducted usability testing across stages; improved interaction and satisfaction.",
          "Explored micro-interaction design on Google Glass as part of the Explorer Program; conducted usability testing and published findings in IEEE.",
          "Co-authored HCI study linking social influence and shopping emotions; demonstrated biometric correlates and implications for retail experience design."
        ],
      },
      {
        title: "Data Science Intern",
        company: "Stevens Institute of Technology",
        dates: "June 2015 - August 2015",
        responsibilities: [
          "Developed a visualization technique to classify 2M+ tweets into new depression-related categories using NLP/ML.",
          "Co-authored peer-reviewed study on negative sentiment classification in at-risk populations; combined human-in-the-loop labeling with ML to establish evaluation baselines for clinical signal detection."
        ],
      },
    ] as ExperienceJob[],
  },
  skills: {
    headline: "Skills",
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "R", "SQL", "JavaScript", "TypeScript"],
      },
      {
        name: "Machine Learning",
        skills: [
          "Machine learning",
          "Deep learning",
          "NLP",
          "LLMs",
          "RNNs",
          "Transformers",
          "Prompt engineering",
          "Retrieval-Augmented Generation (RAG)",
          "Embeddings",
          "Vector search",
          "Few-shot learning",
          "Chain-of-thought",
          "Multi-agent orchestration",
          "Model evaluation pipelines",
          "Observability and monitoring",
          "AI Safety & Alignment",
          "RLHF",
          "Explainability (XAI)",
          "Agentic engineering",
          "Spatial & geometry algorithms",
          "Demand modeling & decay curves",
          "Golden-set evaluation harnesses",
          "Production ML systems"
        ],
      },
      {
        name: "Data Analysis",
        skills: [
          "Statistical analysis",
          "Data visualization",
          "Predictive modeling",
          "Trend analysis",
          "Cluster Analysis",
          "Sentiment Analysis",
          "Text Mining",
          "Survey design and analysis",
          "Sampling",
          "Regression",
          "ANOVA",
          "T-tests",
          "A/B testing",
          "Longitudinal studies",
          "Experimental design",
          "Dashboarding",
          "Large-scale log analysis",
          "KPI definition",
          "KPI development",
          "Signal processing",
          "Wearables"
        ],
      },
      {
        name: "Databases & Data Engineering",
        skills: [
          "PostgreSQL",
          "MSSQL / T-SQL",
          "Stored procedures",
          "Vector Databases",
          "ELT pipelines",
          "Schema migration",
          "Automation pipelines",
          "Data processing",
          "Data integrity auditing",
          "Workflow optimization"
        ],
      },
      {
        name: "Cloud & Platform Engineering",
        skills: [
          "AWS (ECS, SQS, SNS, Lambda, RDS)",
          "Terraform",
          "Docker",
          "CI/CD (GitHub Actions)",
          "Keycloak / Auth0",
          "Datadog",
          "API design & documentation",
          "Release engineering",
          "QA / UAT environment setup",
          "Application security remediation"
        ],
      },
      {
        name: "Engineering Leadership",
        skills: [
          "Technical team leadership",
          "Hiring loop & rubric design",
          "1:1s and mentorship",
          "Code review standards",
          "Technical roadmapping",
          "Stakeholder & executive communication",
          "Agile delivery (Kanban, release trains)"
        ],
      },
      {
        name: "Research Methods (Quant, Qual, Mixed)",
        skills: [
          "Mixed methods",
          "User interviews",
          "Diary studies",
          "Ethnography",
          "Usability testing",
          "Thematic analysis",
          "Triangulation",
          "Insight synthesis",
          "Remote unmoderated testing",
          "First-click testing",
          "Card sorting",
          "Tree testing",
          "Survey programming",
          "Research Operations (ResearchOps)",
          "Human Factors",
          "Psychometrics",
          "Cognitive Load Measurement",
          "Accessibility (a11y) & Inclusive Design"
        ],
      },
      {
        name: "Product & Delivery Methods",
        skills: [
          "Agile (Kanban boards, sprints)",
          "Design thinking",
          "Lean UX",
          "Cross-functional collaboration"
        ],
      },
      {
        name: "Frameworks",
        skills: [
          "FastAPI",
          "LangChain",
          "LangGraph",
          "React",
          "Next.js",
          "TensorFlow",
          "PyTorch",
          "Scikit-learn"
        ],
      },
      {
        name: "Research Platforms & Tooling",
        skills: [
          "UserTesting",
          "Lookback",
          "Optimal Workshop (First-click, card sorting, tree testing)",
          "dscout",
          "Qualtrics",
          "SurveyMonkey",
          "Medallia",
          "Tableau",
          "Jupyter",
          "Git",
          "VS Code",
          "Google Analytics",
          "Jira",
          "Confluence",
          "Claude Code",
          "GitHub Copilot",
          "Cursor"
        ],
      },
      {
        name: "Design & Prototyping Tools",
        skills: [
          "Figma",
          "Sketch",
          "Balsamiq"
        ],
      },
      {
        name: "Languages",
        skills: ["English (Fluent)", "Spanish (Fluent)"],
      },
    ],
  },
  education: {
    headline: "Education",
    degrees: [
      {
        university: "Instituto Tecnológico Autónomo de México",
        degree: "M.S. in Computer Science (HCI/AI Focus)",
        graduationYear: "2016",
      },
      {
        university: "Universidad de Colima",
        degree: "B.A. in Psychology",
        graduationYear: "2013",
      },
    ],
  },
};

export const getResumeTextForAI = (): string => {
  let text = `Resume of Jesús Mancilla\n\n`;
  text += `EXPERIENCE:\n`;
  resumeContent.experience.jobs.forEach(job => {
    if (job.roles && job.roles.length > 0) {
      // Multiple titles at one employer: spell out each title's own date range so
      // the assistant never reports the current title as spanning the full tenure.
      text += `${job.company} (${job.dates})\n`;
      job.roles.forEach(role => text += `  ${role.title} (${role.dates})\n`);
    } else {
      text += `${job.title} at ${job.company} (${job.dates})\n`;
    }
    job.responsibilities.forEach(resp => text += `- ${resp}\n`);
    text += '\n';
  });
  text += `SKILLS:\n`;
  resumeContent.skills.categories.forEach(cat => {
    text += `${cat.name}: ${cat.skills.join(', ')}\n`;
  });
  text += '\n';
  text += `EDUCATION:\n`;
  resumeContent.education.degrees.forEach(deg => {
    text += `${deg.degree}, ${deg.university} (${deg.graduationYear})\n`;
  });
  return text;
};
