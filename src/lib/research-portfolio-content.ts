export const researchPortfolioContent = {
  headline: "Research Portfolio",
  intro: 'From early psychophysiological driver studies to large‑scale ML‑assisted survey analytics and org‑level research operations, this portfolio highlights a **quantitative + mixed‑methods UX research practice** focused on **scalable insight pipelines, methodological rigor, and adoption-aware process design**. Each project is framed with the STAR model to surface decision context, execution leverage, and measurable impact.',
  projects: [
    {
      id: "quant-uxr-scale",
      title: "Quant UX Research at Scale",
      shortDescription:
        "Led a longitudinal study tracking ML model performance pre/post-launch; built a 6-step GenAI classifier pipeline (Self-consistency, LLM-as-a-judge) that reduced analysis time ~73% and was adopted by the wider research team.",
      details: {
        situation: "To inform critical roadmap decisions for a 500M+ MAU product, we needed to track how an ML model improved over time, both before and after its official launch. This required a longitudinal survey and deep log analysis of the current version versus post-launch changes, but manual coding of open-ended feedback was too slow.",
        task: "Develop a scalable, rigorous pipeline to analyze open-ended feedback and behavioral logs; create tooling that could be adopted by other researchers to support their own survey analysis.",
        actions: [
          {
            name: "Advanced GenAI Classifier Pipeline",
            points: [
              "**Step 1: Embedding & Clustering**: Converted responses to vectors and clustered them using traditional ML to identify core themes.",
              "**Step 2: Council of Agents (Self-consistency)**: Sampled multiple agent candidates to evaluate responses, selecting the most consistent answer to improve reasoning.",
              "**Step 3: Self-reflection (LLM-as-a-judge)**: Used a critique model to select and prune low-quality outputs.",
              "**Step 4: Self-refine (Verifier-driven)**: Applied verifier-driven revisions to check intermediate reasoning and re-rank/rewrite for reliability.",
              "**Step 5: Human-in-the-loop (HITL)**: Integrated a review stage where I (and other experts) suggested changes in natural language until satisfied.",
              "**Step 6: Few-shot Curation**: Ran 20 random answers to test, corrected them, and used these curated responses as few-shot examples for the final prompt."
            ]
          },
          {
            name: "Tooling & Democratization",
            points: [
              "Built a reusable Python toolchain for survey analysis and database querying that became a go-to resource for other researchers.",
              "Enabled the team to self-serve advanced analytics, democratizing access to rigorous statistical validation (regressions, ANOVA)."
            ]
          },
          {
            name: "Longitudinal Log Analysis",
            points: [
              "Merged survey data with behavioral logs to track the model's trajectory from pre-launch beta to post-launch maturity.",
              "Analyzed the 'current version' performance against subsequent iterations to ground roadmap decisions in empirical reality."
            ]
          }
        ],
        results: [
          "Cycle time reduced from ~30h manual coding to <8h automated + review (~73% reduction).",
          "Doubled survey analysis throughput without adding headcount.",
          "The custom tooling was adopted by multiple researchers, streamlining analysis across the team.",
          "Longitudinal insights directly influenced the launch strategy and post-launch prioritization for a 500M+ MAU product." 
        ],
        technologies: [
          "Python",
          "Embeddings & Clustering",
          "Self-consistency (Council of Agents)",
          "LLM-as-a-judge (Self-reflection)",
          "Verifier-driven Revisions",
          "Human-in-the-loop",
          "Few-shot Learning",
          "Longitudinal Log Analysis"
        ],
        metrics: [
          "Analysis time: ~30h → <8h",
          "Throughput: 2× surveys processed",
          "Adoption: Tooling used by wider research team",
          "Scale: 500M+ MAU product context"
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
