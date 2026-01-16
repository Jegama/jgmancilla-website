export const mlPortfolioContent = {
  headline: "ML Portfolio",
  intro: 'From a foundation in **quant UX and HCI**, I now focus on **applied ML/NLP**—designing evaluation-driven LLM systems that move from research question to **production impact**. Representative work includes the **Modular Survey Analysis System** (context-aware logic and **autonomous clustering** for open-ended responses), the **Research Librarian** (AI-powered indexing for research discovery), a **Customer Support Bot** (agentic retrieval over a support knowledge base using embeddings + generative responses), and **AI Knowledge Assistant 4.0** (LangGraph-based multi-agent "Council-of-Three," single-pipeline **RAG** over \~900 books; **\~40% latency reduction** and **\~⅓ fewer hallucinations**). Each project emphasizes **clear problem framing**, **replicable evaluation**, and **maintainable architectures**.',
  projects: [
    {
      id: "research-librarian",
      title: "Research Librarian Project",
      shortDescription:
        "The Research Librarian project is a groundbreaking initiative to develop an **AI-powered index** for UX and CI research. By leveraging advanced AI techniques, it enhances internal accessibility and search capabilities, providing rapid, accurate, and insightful access to research data. The system features innovative algorithms for library indexing and categorization, **autonomous query execution** with multiple specialized engines, and a robust **multi-container architecture** for performance optimization. This dynamic tool transforms how research data is accessed and explored, enabling deeper insights and a streamlined user experience. It represents a significant step forward in research data management and accessibility.",
      dataAiHint: "library books",
      details: {
        introduction:
          "The Research Librarian project was a groundbreaking initiative to develop an AI-powered index for UX and CI research. By leveraging advanced AI techniques similar to the AI Knowledge Assistant project, the aim was to enhance internal accessibility and search capabilities. This tool was envisioned as a dynamic solution to deepen users' understanding and interactions with the company's research data.",
        goal: [
          "Create an **AI-driven indexing system** that provides rapid, accurate, and insightful access to UX and CI research data.",
          "Continuously refine the AI's comprehension and search capabilities to allow deeper exploration of research data for internal users."
        ],
        solutions: [
          {
            name: "Library Indexing and Categorization",
            points: ["Developed an innovative algorithm to analyze research, establish multiple categories, and set up numerous query engines, transforming accessibility and searchability."]
          },
          {
            name: "Autonomous Query Execution",
            points: ["The system autonomously determines the most appropriate query engine to answer user searches, significantly improving efficiency and precision."]
          },
          {
            name: "Multi-Container and Multi-Build Architecture",
            points: ["Each Docker container was designated a distinct query engine, facilitating efficient management of extensive research data and optimizing performance."]
          }
        ],
        findings: [
          "**Enhanced Data Retrieval:** Integrating multiple query engines markedly improved the speed and accuracy of data retrieval.",
          "**Improved Depth of Search:** Specialized query engines enabled more profound and informed results to users' inquiries.",
          "**Optimized User Experience:** The autonomous system and advanced indexing algorithm led to quicker, more pinpointed answers and a streamlined user experience."
        ],
        takeaways: [
          {
            name: "Algorithm Development",
            points: ["Conceived a unique algorithm for indexing and categorizing vast research data, structuring it into accessible and searchable categories."]
          },
          {
            name: "Autonomous Query Execution",
            points: ["Crafted an autonomous system capable of pinpointing the right query engine for more accurate and contextually relevant search results."]
          },
          {
            name: "Performance Optimization",
            points: ["Embraced a robust multi-container and multi-build strategy, leading to faster search durations, minimized resource consumption, and a streamlined user experience."]
          }
        ]
      }
    },
    {
      id: "modular-survey-analysis",
      title: "Modular Survey Analysis System",
      shortDescription:
        "This comprehensive system served as the central dashboard for a weekly sentiment survey, automating the reporting pipeline to cut generation time from ~4h to <5m. It featured **context-aware logic** to parse question interdependencies and an engine for **automated statistical summaries**, delivering significance testing and trend analysis alongside the raw data. The **open-ended classifier** I built for this project—using early NLP and clustering—proved to be a critical proof-of-concept, serving as the **prototype and precursor** to the advanced GenAI system I later developed at Meta. By handling dynamic question sets and ad-hoc inquiries, it bridged the gap between rapid tactical needs and long-term longitudinal tracking.",
      dataAiHint: "charts graph",
      details: {
        introduction:
          "I conceptualized, designed, and developed this system to automate the analysis of our weekly sentiment survey. It served as the central dashboard for the team, ingesting questions submitted by other researchers and outputting a comprehensive weekly report. This project also laid the technical foundation for the more advanced classifier I would later build at Meta.",
        goal: [
          "Automate the weekly reporting cadence, reducing manual compilation time from hours to minutes.",
          "Create a flexible system that could handle dynamic question sets submitted by different researchers each week."
        ],
        achievements: [
          {
            name: "Weekly Sentiment Dashboard",
            points: ["Built the primary dashboard used by the team to track sentiment trends, automatically generating the weekly report distributed to leadership."]
          },
          {
            name: "Automated Statistical Summaries",
            points: ["The system automatically calculated key statistics (significance testing, trend analysis) alongside the NLP categorization, providing a complete quantitative picture."]
          },
          {
            name: "Context-aware Logic",
            points: ["Incorporated advanced survey logic parsing to discern question interdependencies, ensuring accurate and in-depth data interpretation."]
          },
          {
            name: "Open-Ended Classifier (Prototype)",
            points: ["Developed the initial version of my open-ended classifier using NLP and clustering; this served as the proof-of-concept for the advanced GenAI system I later scaled at Meta."]
          },
          {
            name: "Log Analysis for Usability",
            points: ["Separately, I led the log analysis to support usability testing on hardware remotes, processing behavioral data from 70M+ devices to validate design changes."]
          }
        ],
        challenges: [
          {
            name: "Dynamic Question Sets",
            points: ["The system had to adapt to varying questions each week without breaking the longitudinal tracking of core metrics."]
          },
          {
            name: "Prototype Limitations",
            points: ["Early NLP models required significant manual tuning, which taught me the importance of the 'Human-in-the-loop' workflows I later perfected."]
          }
        ],
        impact: [
          "Reduced weekly report generation time from **~4 hours to <5 minutes**.",
          "Enabled the research team to include ad-hoc questions without delaying the standard reporting cadence.",
          "Provided the architectural blueprint for my future work on large-scale open-ended classification."
        ],
        collaboration: "Worked closely with the Director of UX Research and the Market Research team to ensure the dashboard met the needs of both rapid tactical decisions and long-term tracking.",
        conclusion: "The Modular Survey Analysis System was a pivotal project that not only solved an immediate business need—automating a time-consuming weekly report—but also served as the incubator for the ML/NLP techniques I would later refine and scale at Meta."
      }
    },
    {
      id: "ai-knowledge-assistant",
      title: "AI Knowledge Assistant",
      shortDescription:
        "This project is a production-grade **Autonomous Agent** utilizing **LangGraph** for non-linear reasoning. It features a **Postgres-backed Semantic Memory** system and a custom **LLM Evaluation Dashboard** that benchmarks model performance against a rigorous 500+ question dataset. The system also employs an **Automated Entity Evaluator** to crawl and grade organization websites against compliance schemas. By moving from rigid pipelines to adaptive agents and implementing 'LLM-as-a-judge' metrics, the platform achieves high-fidelity domain adherence and effectively automates thousands of hours of manual review.",
      dataAiHint: "parrot bird",
      details: {
        introduction:
          "Mission: Demonstrate how Large Language Models can serve as rigorous domain experts. Now in Version 5.0, the platform has evolved from linear QA pipelines to a flexible **LangGraph Agent**. This autonomous system dynamically selects tools—retrieval APIs, vector search, or web browsing—to answer complex domain-specific inquiries. To ensure reliability, the system is backed by a custom **Evaluation Dashboard** that continuously measures performance gaps between top-tier models (OpenAI, Google, xAI) using an 'LLM-as-a-judge' framework.",
        tools: [
          {
            name: "Autonomous Agent (LangGraph)",
            points: [
              "Replaced linear chains with a graph-based agent that loops, self-corrects, and routes queries to specialized tools (Vector Stores, External APIs, Search).",
              "Utilizes GPT-5-mini with advanced prompt engineering to ensure high-fidelity adherence to source material."
            ]
          },
          {
            name: "LLM Evaluation Dashboard",
            points: [
              "Built a Next.js analytics suite to visualize model performance across 3 key vectors: Adherence to Compliance Standards, Tone/Sensitivity, and Reasoning Quality.",
              "Runs automated regression tests on 500+ challenging domain questions to detect model drift or bias."
            ]
          },
          {
            name: "Parallelized Entity Classification",
            points: [
              "A sophisticated pipeline that crawls target websites (via Tavily) and triggers 6 parallel Gemini 2.5 Flash calls.",
              "Evaluates entities against strict Zod schemas for 'Core Criteria', 'Secondary Attributes', and 'Red Flags'.",
              "Classifies results into detailed status categories based on automated consensus, achieving >90% alignment with human expert labels."
            ]
          },
          {
            name: "Long-Term Memory",
            points: [
              "Implemented a Postgres-backed semantic memory store that persists user context and preference graphs across sessions."
            ]
          }
        ],
        goal: [
          "Provide **hallucination-resistant, sourced answers** to complex domain questions.",
          "**Quantify trustworthiness** through rigorous, automated benchmarking.",
          "**Automate the auditing** of thousands of real-world entities against strict definition criteria."
        ],
        solutions: [
          {
            name: "Linear Pipeline → Autonomous Graph",
            points: [
              "Moved from a fixed chain to a recursive LangGraph agent, allowing the AI to 'plan' its retrieval strategy dynamically."
            ]
          },
          {
            name: "Hierarchical Compliance Framework",
            points: [
              "Defined a rigid 3-tier evaluation framework (Core, Secondary, Tertiary rules) to programmatically score model outputs for nuance and accuracy using 'LLM-as-a-judge'."
            ]
          },
          {
            name: "Parallelized Compliance Auditing",
            points: [
              "Solved the bottleneck of manual vetting by building an LLM ensemble that reads entire websites and extracts structured compliance data in seconds."
            ]
          },
          {
            name: "Semantic Persistence",
            points: [
              "Added a memory layer (`langgraph-checkpoint-postgres`) so the agent maintains context of user's historical inquiries and preferences."
            ]
          },
          {
            name: "Multi-Persona Architecture",
            points: [
              "Retained a prompt-injection layer that allows users to toggle 'expert personas' (representing different schools of thought) on the fly."
            ]
          }
        ],
        findings: [
          "**Differentiation via Nuance:** While all models scored high (>4.9/5.0) on core domain knowledge and tone, complex scenarios requiring **nuanced alignment on sensitive, multi-perspective topics** proved to be the decisive differentiator, with GPT-5 Mini (4.79) narrowly edging out Grok 4.1 Fast (4.73).",
          "**Impact of Instruction Tuning:** Custom domain-specific system prompts improved baseline performance for Gemini 2.5 Flash by ~12%, effectively closing the gap with the top performers.",
          "**Classification Accuracy:** The Entity Evaluator's multi-model consensus correctly identified criteria misalignments in >90% of test cases compared to manual review."
        ],
        takeaways: [
          {
            name: "Evaluation is Feature #1",
            points: [
              "Building the Evaluation Dashboard *first* allowed for aggressive prompt iteration without fear of regression."
            ]
          },
          {
            name: "Agents > Chains",
            points: [
              "Rigid chains break when the user goes off-script; looping agents adapt and recover."
            ]
          },
          {
            name: "Memory Changes UX",
            points: [
              "Long-term memory transforms the product from a transactional 'search engine' into a contextual 'assistant'."
            ]
          }
        ]
      }
    },
    {
      id: "customer-support-bot",
      title: "Customer Support Bot",
      shortDescription:
        "To enhance customer support, I developed an **autonomous agent** using **cutting-edge AI**. This agent provides prompt, concise responses to user queries, reducing call center workload and improving self-service. Powered by technologies like **embeddings** and **OpenAI**, the system indexes all support articles from a customer support site, such as Roku's, creating a comprehensive **library catalog**. It uses embeddings to find the most relevant content and an advanced AI model to generate responses. This approach significantly improves the efficiency and accuracy of our customer support, delivering **faster and more accurate solutions** to users, transforming the customer service experience.",
      dataAiHint: "headset support",
      details: {
        introduction:
          "My goal was to improve customer support by introducing an **autonomous agent** capable of handling user inquiries. I aimed to create a **'Solution Spotlight'** feature that offered users clear and concise responses to their queries. This approach would reduce the workload on the call center, improve self-service, and ultimately increase customer satisfaction. This AI agent is powered by advanced ML technology, including **embeddings** and **LLMs**, and is supported by an all-encompassing index of all the articles available on a Customer Support site. This innovative approach ensures that users receive prompt, accurate, and relevant responses to their inquiries without human intervention.",
        goal: [
          "Develop an autonomous agent that can provide a **'solution spotlight'**—a curated 'best answer'—to user queries.",
          "Improve customer self-service and reduce the number of calls to the call center."
        ],
        solutions: [
          "Developed an autonomous agent using **LangChain**.",
          "Indexed all Customer Support site articles and created a comprehensive library catalog (over 322 articles indexed).",
          "Employed **embeddings** to search for the most relevant content—transforming user questions into numerical representations and matching them to articles.",
          "Used an advanced **OpenAI** model to generate human-like responses based on the most relevant article."
        ],
        findings: [
          "The autonomous agent successfully provided relevant and accurate responses to user queries, improving customer self-service.",
          "The **'Solution Spotlight'** feature was well-received by users, resulting in a noticeable reduction in calls to the call center."
        ],
        takeaways: [
          "Employing advanced AI technologies can significantly enhance customer support.",
          "Autonomous agents are effective in dealing with customer inquiries.",
          "A comprehensive indexing system and the use of embeddings are crucial for surfacing the most relevant information.",
          "This project demonstrated how AI can improve the customer experience and streamline support services."
        ]
      }
    }
  ]
};

export const getMlPortfolioTextForAI = (): string => {
  let text = `ML Portfolio Projects:\n\n`;
  mlPortfolioContent.projects.forEach(proj => {
    text += `Project: ${proj.title}\n`;
    text += `Description: ${proj.shortDescription}\n`;
    const details = proj.details as any;
    text += `Details: ${details.introduction}\n`;
    if (details.goal) {
      text += `Goal: ${details.goal.join(", ")}\n`;
    }
    if (details.solutions) {
      if (typeof details.solutions[0] === 'string') {
        text += `Solutions: ${details.solutions.join(", ")}\n`;
      } else {
        text += `Solutions: ${details.solutions.map((s: any) => `${s.name}: ${s.points.join(" ")}`).join(", ")}\n`;
      }
    }
    if (details.findings) {
      text += `Findings: ${details.findings.join(", ")}\n`;
    }
    if (details.takeaways) {
      if (typeof details.takeaways[0] === 'string') {
        text += `Takeaways: ${details.takeaways.join(", ")}\n`;
      } else {
        text += `Takeaways: ${details.takeaways.map((t: any) => `${t.name}: ${t.points.join(" ")}`).join(", ")}\n`;
      }
    }
    if (details.tools) {
      text += `Tools: ${details.tools.map((t: any) => `${t.name}: ${t.points.join(" ")}`).join(", ")}\n`;
    }
    if (details.achievements) {
      text += `Achievements: ${details.achievements.map((a: any) => `${a.name}: ${a.points.join(" ")}`).join(", ")}\n`;
    }
    if (details.challenges) {
      text += `Challenges: ${details.challenges.map((c: any) => `${c.name}: ${c.points.join(" ")}`).join(", ")}\n`;
    }
    if (details.impact) {
      text += `Impact: ${details.impact.join(", ")}\n`;
    }
    if (details.collaboration) {
      text += `Collaboration: ${details.collaboration}\n`;
    }
    if (details.conclusion) {
      text += `Conclusion: ${details.conclusion}\n`;
    }
    text += '\n';
  });
  return text;
};
