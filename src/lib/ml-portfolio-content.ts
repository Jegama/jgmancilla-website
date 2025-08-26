export const mlPortfolioContent = {
  headline: "ML Portfolio",
  intro: 'From a foundation in **quant UX and HCI**, I now focus on **applied ML/NLP**—designing evaluation-driven LLM systems that move from research question to **production impact**. Representative work includes the **Modular Survey Analysis System** (context-aware logic and **autonomous clustering** for open-ended responses), the **Research Librarian** (AI-powered indexing for research discovery), a **Customer Support Bot** (agentic retrieval over a support knowledge base using embeddings + generative responses), and **Calvinist Parrot 4.0** (LangGraph-based multi-agent "Council-of-Three," single-pipeline **RAG** over \~900 books; **\~40% latency reduction** and **\~⅓ fewer hallucinations**). Each project emphasizes **clear problem framing**, **replicable evaluation**, and **maintainable architectures**.',
  projects: [
    {
      id: "research-librarian",
      title: "Research Librarian Project",
      shortDescription:
        "The Research Librarian project is a groundbreaking initiative to develop an **AI-powered index** for UX and CI research. By leveraging advanced AI techniques, it enhances internal accessibility and search capabilities, providing rapid, accurate, and insightful access to research data. The system features innovative algorithms for library indexing and categorization, **autonomous query execution** with multiple specialized engines, and a robust **multi-container architecture** for performance optimization. This dynamic tool transforms how research data is accessed and explored, enabling deeper insights and a streamlined user experience. It represents a significant step forward in research data management and accessibility.",
      dataAiHint: "library books",
      details: {
        introduction:
          "The Research Librarian project was a groundbreaking initiative to develop an AI-powered index for UX and CI research. By leveraging advanced AI techniques similar to the Calvinist Parrot project, the aim was to enhance internal accessibility and search capabilities. This tool was envisioned as a dynamic solution to deepen users' understanding and interactions with the company's research data.",
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
        "I developed the **Modular Survey Analysis System**, an evolution of the initial survey report generator. This system streamlines analysis by replacing a static, hard-coded approach with a dynamic, modular method for efficient question categorization. A key feature is the **integration of context-aware logic** to enhance data interpretation. I am particularly proud of the **autonomous clustering algorithm** for open-ended responses, which is currently in the patenting process. This algorithm provides a thoughtful solution to a common challenge in survey analysis, demonstrating a significant advancement in automated data processing and insight generation for diverse survey types.",
      dataAiHint: "charts graph",
      details: {
        introduction:
          "I conceptualized, designed, and developed an upgraded version of our report generator that harnesses machine learning to analyze a wide array of surveys autonomously. The **Modular Survey Analysis System** I created has profoundly transformed the survey data analysis process, offering unprecedented flexibility, efficiency, and scalability.",
        goal: [
          "Craft a solution for swift analysis of diverse surveys, enhancing output efficiency while minimizing resource consumption.",
          "Design a versatile system adaptable to a variety of survey structures, eliminating the need for manual interventions or hard-coding."
        ],
        achievements: [
          {
            name: "Modular Report Generation",
            points: ["Transitioned from a traditional hard-coded question set approach to a dynamic, modular system adept at categorizing questions."]
          },
          {
            name: "Context-aware Logic",
            points: ["Incorporated advanced survey logic parsing to discern question interdependencies, ensuring accurate and in-depth data interpretation."]
          },
          {
            name: "Autonomous Clustering Algorithm",
            points: ["Pioneered an innovative algorithm that autonomously sorts through open-ended responses, clusters them, assigns category names, and provides detailed descriptions of each category's content."]
          }
        ],
        challenges: [
          {
            name: "Data Diversity",
            points: ["Heterogeneous survey data required rigorous preprocessing methods to ensure uniformity."]
          },
          {
            name: "Complex Survey Logic",
            points: ["Designed a specialized logic parser to decipher intricate logic and dependencies, ensuring unerring analysis."]
          },
          {
            name: "Open-Ended Response Analysis",
            points: ["Developed a proprietary clustering algorithm to autonomously categorize and describe subjective responses."]
          }
        ],
        impact: [
          "Curtailed the time needed for survey analysis by **70%**.",
          "Resulted in a **50% savings** in resources dedicated to survey analysis tasks."
        ],
        collaboration: "Worked closely with the Director of UX Research, a Sr. Manager of Market Research, and several researchers. Their insights and feedback were invaluable in ensuring the system met diverse needs and expectations.",
        conclusion: "The Modular Survey Analysis System, with its robust integration of machine learning and NLP, has monumentally revamped our survey analysis methodology. Its success not only showcases the potential of leveraging technology but also underscores my pivotal role in its ideation, development, and triumphant execution."
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
    },
    {
      id: "calvinist-parrot",
      title: "Calvinist Parrot",
      shortDescription:
        "The Calvinist Parrot project, now in **version 4.0**, has been re-platformed to a production-grade Next.js/TypeScript stack with a LangChain-based multi-agent core. This evolution from a simple duet to a **‘Council-of-Three’ ensemble** uses a LangGraph state-machine for real-time streaming answers and offers seven switchable denominational ‘voices.’ These changes have reduced latency by ~40% and cut hallucinations by a third, enabling multilingual growth while keeping all features free. The new architecture features a **single RAG pipeline**, indexing a 900-book library nightly and using an autonomous agent for fetching relevant passages, resulting in a leaner, faster, and more theologically grounded system.",
      dataAiHint: "parrot bird",
      details: {
        introduction:
          "The Calvinist Parrot project continues its mission to merge centuries-old Reformed wisdom with cutting-edge AI. Version 4.0 moves from an early Streamlit proof-of-concept to a production-grade Next.js/TypeScript stack deployed at the edge, adds LangChain-based multi-agent orchestration, widens denominational coverage, and—true to your ministry credo—keeps every feature entirely free.",
        tools: [
          {
            name: "Main Chat (v 4.0 Parrot)",
            points: [
              "Streaming real-time conversation powered by a LangGraph state machine and GPT-4o.",
              "Seven “voices” you can toggle on the fly (Reformed Baptist default plus Presbyterian, Wesleyan, Lutheran, Anglican, Pentecostal/Charismatic, Non-Denominational Evangelical).",
              "Chat history and user prefs stored with Prisma/PostgreSQL for persistence and analytics."
            ]
          },
          {
            name: "Quick QA – “Council of Three”",
            points: [
              "Four-stage pipeline: (1) question categorisation, (2) parallel answers from three specialised agents, (3) Calvin-style review, (4) synthesis of the final response.",
              "Cuts hallucinations and flags off-topic queries."
            ]
          },
          {
            name: "LangGraph Orchestration",
            points: [
              "Autonomous agent graph refines long queries, chooses the right search tool (Bible, commentary, CCEL), and loops until no more tool calls are needed."
            ]
          },
          {
            name: "Public API End-points",
            points: [
              "'/api/parrot-qa' and '/api/parrot-chat' expose the QA pipeline and streaming chat for third-party apps."
            ]
          }
        ],
        goal: [
          "Provides **faithful, Reformed-grounded** answers to biblical questions.",
          "**Democratises access**—multilingual, device-agnostic, no paywall.",
          "Continually enhance the AI\'s comprehension and response capabilities to foster a more profound exploration of Scriptures for users."
        ],
        solutions: [
          {
            name: "3.x → 4.0 Migration",
            points: [
              "Re-platformed to **Next.js 14** with Vercel Edge Functions (~40 % lower median latency).",
              "Introduced Prisma/PlanetScale Postgres and secure auth."
            ]
          },
          {
            name: "Multi-Denomination Architecture",
            points: [
              "Inserts a denomination-specific prompt layer before every model call; falls back to Reformed Baptist for guests."
            ]
          },
          {
            name: "“Council of Three” Ensemble",
            points: [
              "Fine-tuned, mini, and reviewer models cooperate, then Calvin critiques and synthesises—reducing hallucinations by roughly one-third in internal blind tests."
            ]
          },
          {
            name: "LangGraph Workflow",
            points: [
              "Finite-state graph enforces at least one tool call, then conditionally loops until no further calls are required."
            ]
          },
          {
            name: "Observability & Telemetry",
            points: [
              "Every message, category, and answer stored; cron jobs surface suspect answers for human review and future RLHF."
            ]
          }
        ],
        findings: [
          "**Latency:** p95 time-to-first-token fell from 4.3 s (Streamlit) to < 2 s after edge deployment (internal logs).",
          "**Reduction in Hallucinations:** Multiple query engines significantly reduced inaccuracies, enhancing the reliability of responses.",
          "**Enhanced User Experience:** The autonomous agent and innovative indexing algorithm provided quicker, more precise answers, enriching user interactions."
        ],
        takeaways: [
          "**Prompt modularity scales**—a single code-path serves multiple traditions.",
          "**Multi-agent ensembles tame hallucinations** without losing depth.",
          "**Graph-based orchestration beats linear chains** once you add diverse tools.",
          "**Persistent telemetry fuels RLHF** and product analytics.",
          "**Edge streaming UX keeps users engaged,** which is crucial for theological study."
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
