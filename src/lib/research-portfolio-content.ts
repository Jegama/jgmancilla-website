export const researchPortfolioContent = {
  headline: "Research Portfolio",
  projects: [
    {
      id: "design-research",
      title: "Design Research",
      shortDescription:
        "Developed and validated real-world driver stress elicitation techniques using mixed-methods and psychophysiological instrumentation.",
      details: {
        introduction:
          "This project aimed to better understand drivers in real-world scenarios by creating a replicable, safe stress elicitation technique. Both scripted and unscripted in-vehicle stressors were used, and an algorithm identified stress windows validated by participant self-report.",
        features: [
          "Mixed-methodology: psychophysiological measurements and interviews",
          "Scripted and unscripted on-road stressor events (e.g., pedestrians, construction zones)",
          "Algorithm for stress window detection and open API release",
          "Experimental display with low battery warnings to induce stress",
          "Validated stress elicitation technique with high replication rate"
        ],
        technologies: [
          "Wearable Sensors",
          "Custom In-Vehicle Displays",
          "Self-Report Surveys",
          "Data Analysis Algorithms"
        ],
        outcome:
          "The technique was successfully replicated, with 90% of participants experiencing stress and 89% of stress events correlating with road events. The open communication and multidisciplinary collaboration were key to the project's success."
      }
    },
    {
      id: "user-research",
      title: "User Research",
      shortDescription:
        "Benchmarked and improved hardware usability for millions of users through statistical analysis, behavioral logs, and collaborative research.",
      details: {
        introduction:
          "This research focused on understanding user behavior with hardware products, especially remote controls and wearables, using a framework for usability testing and behavioral log analysis. The project evolved to include country-specific metrics and dashboards for actionable insights.",
        features: [
          "Framework for statistical analysis of usability and behavioral logs",
          "Longitudinal usability studies and aggregate usage analysis",
          "Development and validation of new device metrics",
          "Dashboard for country- and device-specific behavior comparison",
          "Collaboration with designers and PMs for actionable recommendations"
        ],
        technologies: [
          "Usability Testing (field, lab, remote)",
          "Behavioral Log Analysis",
          "Surveys & Interviews",
          "Statistical Analysis Scripts",
          "Dashboards"
        ],
        outcome:
          "Research led to the launch of new hardware, improved metrics, and data-driven product decisions. Well-documented research and automation of analysis were critical for delivering value to stakeholders."
      }
    },
    {
      id: "research-ops",
      title: "Research Ops",
      shortDescription:
        "Standardized research processes and centralized knowledge sharing to increase team visibility and impact across organizations.",
      details: {
        introduction:
          "Led research teams in academia and industry, focusing on communication and standardization. Implemented centralized tools for sharing findings, progressively rolled out to maximize adoption and collaboration.",
        features: [
          "Centralized repository for research findings",
          "Standardized reporting and documentation",
          "Progressive rollout of new tools and processes",
          "Visualization tools for leadership decision-making",
          "Cross-team collaboration and knowledge sharing"
        ],
        technologies: [
          "Knowledge Management Systems",
          "Visualization Tools",
          "Research Templates",
          "Documentation Platforms"
        ],
        outcome:
          "Created a self-serve knowledge base, improved research visibility, and empowered teams to make informed decisions. Overcame adoption hurdles through progressive rollout and demonstrated value."
      }
    }
  ]
};

export const getResearchPortfolioTextForAI = (): string => {
  let text = `Research Portfolio Projects:\n\n`;
  researchPortfolioContent.projects.forEach(proj => {
    text += `Project: ${proj.title}\nDescription: ${proj.shortDescription}\n`;
    text += `Details: ${proj.details.introduction}\nFeatures: ${proj.details.features.join(', ')}\nTechnologies: ${proj.details.technologies.join(', ')}\nOutcome: ${proj.details.outcome}\n\n`;
  });
  return text;
};
