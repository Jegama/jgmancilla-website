export const researchPortfolioContent = {
  headline: "Research Portfolio",
  intro: 'From early psychophysiological driver studies to large‑scale ML‑assisted survey analytics and org‑level research operations, this portfolio highlights a **quantitative + mixed‑methods UX research practice** focused on **scalable insight pipelines, methodological rigor, and adoption-aware process design**. Each project is framed with the STAR model to surface decision context, execution leverage, and measurable impact.',
  projects: [
    {
      id: "quant-uxr-scale",
      title: "Quant UX Research at Scale",
      shortDescription:
        "Reduced open‑ended survey analysis time ~30h → <8h and doubled throughput by deploying a hybrid ML + human‑in‑loop classifier and integrated behavioral log triangulation.",
      details: {
        situation: "Open‑ended survey analysis (multi-project, bi‑weekly cadence) was a bottleneck for product decisions—manual coding cycles (~30h) slowed insight delivery for a 500M+ MAU product.",
        task: "Accelerate qualitative signal extraction while preserving nuance and statistical rigor; establish a scalable, governable pipeline that stakeholders trust.",
        actions: [
          {
            name: "Architecture & Automation",
            points: [
              "Engineered a hybrid classifier combining clustering analysis, few‑shot prompts, and multi‑agent chain‑of‑reasoning to categorize open‑ended responses.",
              "Implemented Python toolchain (regressions, ANOVA, T‑tests) to standardize post‑classification quantitative validation." 
            ]
          },
          {
            name: "Human‑in‑Loop Quality",
            points: [
              "Embedded SME acceptance tests and feedback loops to iteratively refine label taxonomies and guard against semantic drift.",
              "Merged editor log behavioral data with survey outputs to triangulate emergent patterns and surface actionable discrepancies." 
            ]
          },
          {
            name: "Scalability & Adoption",
            points: [
              "Modularized pipeline components (prompt templates, clustering params, evaluation scripts) enabling reuse across adjacent studies.",
              "Documented workflows + onboarding guide, enabling fellow researchers to self‑serve advanced analysis routines." 
            ]
          }
        ],
        results: [
          "Cycle time reduced from ~30h manual coding to <8h automated + review.",
          "Doubled survey analysis throughput without adding headcount.",
          "Sustained insight quality via embedded statistical validation + SME acceptance criteria.",
          "Unlocked faster iteration on a 500M+ MAU product by shortening feedback loops." 
        ],
        technologies: [
          "Python",
          "Clustering Analysis",
          "Few‑Shot Learning",
          "Multi‑Agent Reasoning",
          "Human‑in‑Loop Feedback",
          "Statistical Testing (ANOVA / T‑tests / Regressions)",
          "Behavioral Log Integration",
          "Survey Analytics Pipeline"
        ],
        metrics: [
          "Analysis time: ~30h → <8h (~73% reduction)",
            "Throughput: 2× surveys processed per cycle",
          "Product scale: 500M+ MAU context",
          "Bi‑weekly longitudinal cadence maintained"
        ]
      }
    },
    {
      id: "design-research",
      title: "Design Research",
      shortDescription:
        "Real‑world driver stress elicitation: replicated 90% stress induction & 89% event correlation via mixed-methods instrumentation.",
      details: {
        situation: "Need to reliably elicit and measure driver stress in naturalistic on‑road conditions to study behavioral and physiological responses.",
        task: "Design a safe, repeatable stress elicitation protocol and instrumentation stack; validate detection algorithm and participant experience.",
        actions: [
          {
            name: "Protocol & Instrumentation",
            points: [
              "Combined scripted (battery warnings) and unscripted road stressors (pedestrians, construction) to broaden ecological validity.",
              "Implemented experimental low‑battery display producing escalating visual & auditory prompts mid‑drive." 
            ]
          },
            {
            name: "Data & Validation",
            points: [
              "Captured psychophysiological signals + participant self‑reports to triangulate stress windows.",
              "Released an open API for the stress window detection algorithm to enable reproducibility." 
            ]
          },
          {
            name: "Collaboration",
            points: [
              "Maintained continuous cross‑disciplinary communication ensuring safety, experimental rigor, and participant comfort." 
            ]
          }
        ],
        results: [
          "90% of participants experienced measurable stress response.",
          "89% of detected stress windows aligned with observed road events, supporting construct validity.",
          "Established a reusable, field‑tested methodology enabling future comparative driver studies." 
        ],
        technologies: [
          "Wearable Sensors",
          "Custom In‑Vehicle Displays",
          "Self‑Report Surveys",
          "Data Analysis Algorithms"
        ],
        metrics: [
          "Stress replication rate: 90%",
          "Event correlation accuracy: 89%" 
        ]
      }
    },
    {
      id: "user-research",
      title: "User Research",
      shortDescription:
        "Framework + longitudinal HW usability evaluation driving remote redesign & metric expansion across millions of devices.",
      details: {
        situation: "Multiple hardware remote control variants in market with unclear comparative usability and evolving feature sets across 70M+ active devices.",
        task: "Establish statistically robust benchmarking framework; validate device & country‑level behavioral metrics to guide redesign decisions.",
        actions: [
          {
            name: "Framework & Data Pipeline",
            points: [
              "Co‑developed baselines with senior researcher; iteratively refined tasks via repeated usability studies.",
              "Integrated behavioral log aggregation with scripted lab findings for holistic usage modelling." 
            ]
          },
          {
            name: "Metric Evolution",
            points: [
              "Added country‑specific and feature‑exclusive metrics as new remote capabilities emerged.",
              "Developed comparative dashboards enabling rapid cross‑device evaluation." 
            ]
          },
          {
            name: "Stakeholder Alignment",
            points: [
              "Collaborated with designers & PMs to prioritize metrics tied to decision inflection points.",
              "Scripted statistical analyses for repeatability and reduced turnaround across the two‑year span." 
            ]
          }
        ],
        results: [
          "Informed launch of new remote (Fall '22) with validated interaction improvements.",
          "Expanded metric suite increased diagnostic granularity for regional & feature differentiation.",
          "Documentation + scripted analysis preserved continuity across intermittent project phases." 
        ],
        technologies: [
          "Usability Testing (field/lab/remote)",
          "Behavioral Log Analysis",
          "Surveys & Interviews",
          "Statistical Analysis Scripts",
          "Dashboards"
        ],
        metrics: [
          "Scope: 70M+ device usage signals integrated",
          "Multi‑year longitudinal framework (≈2 years)"
        ]
      }
    },
    {
      id: "research-ops",
      title: "Research Ops",
      shortDescription:
        "Progressive rollout of standardized repository & reporting boosted visibility and self‑serve insights org‑wide.",
      details: {
        situation: "High‑value research outputs under‑leveraged due to dispersed documents, inconsistent reporting, and limited cross‑team visibility.",
        task: "Centralize knowledge, standardize documentation, and drive adoption without imposing disruptive process overhead.",
        actions: [
          {
            name: "Platform & Standardization",
            points: [
              "Introduced structured templates and consolidated prior scattered reports into a searchable repository.",
              "Instituted visualization layer surfacing project status for leadership triage." 
            ]
          },
          {
            name: "Adoption Strategy",
            points: [
              "Pilot with immediate team positioned as low‑risk trial; iteratively showcased early wins to expand uptake.",
              "Enabled self‑serve discovery reducing ad‑hoc request load on researchers." 
            ]
          }
        ],
        results: [
          "Repository evolved into self‑serve knowledge base increasing reuse & reducing redundant inquiry.",
          "Improved cross‑team collaboration and leadership visibility into portfolio health.",
          "Lower friction onboarding to process changes via phased rollout approach." 
        ],
        technologies: [
          "Knowledge Management Systems",
          "Visualization Tools",
          "Research Templates",
          "Documentation Platforms"
        ],
        metrics: [
          "Adoption: Successful expansion from pilot to org‑wide usage (qualitative milestone)",
          "Process: Reduced manual status update cycles (anecdotal leadership feedback)" 
        ]
      }
    }
  ]
};

export const getResearchPortfolioTextForAI = (): string => {
  let text = `Research Portfolio Projects (STAR):\n\n`;
  researchPortfolioContent.projects.forEach(proj => {
    const d: any = proj.details;
    text += `Project: ${proj.title}\nShort Description: ${proj.shortDescription}\n`;
    text += `Situation: ${d.situation}\nTask: ${d.task}\n`;
    if (d.actions) {
      if (typeof d.actions[0] === 'string') {
        text += `Actions: ${(d.actions as string[]).join('; ')}\n`;
      } else {
        text += `Actions: ${(d.actions as { name: string; points: string[] }[]).map(a => `${a.name}: ${a.points.join(', ')}`).join(' | ')}\n`;
      }
    }
    if (d.results) text += `Results: ${d.results.join('; ')}\n`;
    if (d.technologies) text += `Technologies: ${d.technologies.join(', ')}\n`;
    if (d.metrics) text += `Metrics: ${d.metrics.join('; ')}\n`;
    text += `\n`;
  });
  return text;
};
