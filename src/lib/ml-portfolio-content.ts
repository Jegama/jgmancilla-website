export const mlPortfolioContent = {
  headline: "ML Portfolio",
  projects: [
    {
      id: "research-librarian",
      title: "Research Librarian Project",
      shortDescription: "AI-powered system for deep, rapid access to UX and CI research, leveraging advanced indexing and autonomous query engines.",
      dataAiHint: "library books",
      details: {
        introduction:
          "The Research Librarian project was a groundbreaking initiative to develop an AI-powered index for UX and CI research. By leveraging advanced AI techniques, the aim was to enhance internal accessibility and search capabilities, providing rapid, accurate, and insightful access to research data.",
        features: [
          "Innovative algorithm for library indexing and categorization (patent pending)",
          "Autonomous query execution with multiple specialized engines",
          "Multi-container and multi-build architecture for performance optimization",
          "Enhanced data retrieval and depth of search"
        ],
        technologies: [
          "LangChain",
          "Python",
          "OpenAI API",
          "Docker",
          "Streamlit"
        ],
        outcome:
          "The system led to substantial improvements in data retrieval speed and accuracy, improved depth of search, and an optimized user experience. The autonomous, multi-engine approach and novel indexing algorithm were key technical achievements."
      }
    },
    {
      id: "modular-survey-analysis",
      title: "Modular Survey Analysis System",
      shortDescription: "Dynamic, modular ML system for survey analysis, featuring context-aware logic and autonomous clustering for open-ended responses.",
      dataAiHint: "charts graph",
      details: {
        introduction:
          "The Modular Survey Analysis System is a dynamic, modular tool that automates comprehensive survey report generation. It leverages machine learning and NLP to analyze diverse survey data, offering flexibility, efficiency, and scalability.",
        features: [
          "Modular report generation adaptable to various survey structures",
          "Context-aware logic parser for complex survey dependencies",
          "Autonomous clustering algorithm for open-ended responses (patent pending)",
          "Rigorous data preprocessing for uniformity"
        ],
        technologies: [
          "Python",
          "Scikit-learn",
          "NLTK",
          "Pandas",
          "Flask"
        ],
        outcome:
          "The system reduced survey analysis time by 70% and resource usage by 50%. It enabled swift, reliable analysis and was developed in close collaboration with research stakeholders."
      }
    },
    {
      id: "customer-support-bot",
      title: "Customer Support Bot",
      shortDescription: "Autonomous AI agent delivering prompt, relevant support answers using embeddings and LLMs to enhance self-service.",
      dataAiHint: "headset support",
      details: {
        introduction:
          "The Customer Support Bot is an AI-powered autonomous agent developed to provide instant, 24/7 customer assistance. It features a 'Solution Spotlight' for curated answers, powered by advanced ML, embeddings, and LLMs, and is supported by a comprehensive index of support articles.",
        features: [
          "Comprehensive indexing and cataloging of support articles",
          "Embeddings-based semantic search for relevant content",
          "LLM-powered response generation for user queries",
          "Solution Spotlight feature for best-answer delivery"
        ],
        technologies: [
          "LangChain",
          "Python",
          "OpenAI API",
          "Node.js",
          "REST APIs"
        ],
        outcome:
          "The bot improved customer self-service, reduced call center load, and delivered prompt, accurate responses. The Solution Spotlight feature was well-received, and the project highlighted the value of advanced AI in customer support."
      }
    },
    {
      id: "calvinist-parrot",
      title: "Calvinist Parrot",
      shortDescription: "AI-driven chatbot for Reformed theology, featuring multi-engine architecture and advanced library indexing.",
      dataAiHint: "parrot bird",
      details: {
        introduction:
          "The Calvinist Parrot project is an ambitious AI-powered chatbot designed to facilitate deep engagement with Reformed theology and biblical texts. It evolved from a dual-agent system to a robust, multi-engine architecture with advanced library indexing.",
        features: [
          "Multiple OpenAI-powered query engines (11 distinct engines)",
          "Novel algorithm for library indexing and categorization",
          "Multi-container and multi-build Docker architecture for performance",
          "Access to 900+ indexed books in the Christian Classics Ethereal Library (CCEL)",
          "Chain-of-reasoning QA, study helper, devotionals, and sermon review tools"
        ],
        technologies: [
          "OpenAI API",
          "Python",
          "Docker",
          "Pinecone",
          "Streamlit"
        ],
        outcome:
          "The project reduced hallucinations, improved response depth, and enhanced user experience. Key takeaways include technical breakthroughs in algorithm development, autonomous query execution, and scalable architecture."
      }
    }
  ]
};

export const getMlPortfolioTextForAI = (): string => {
  let text = `ML Portfolio Projects:\n\n`;
  mlPortfolioContent.projects.forEach(proj => {
    text += `Project: ${proj.title}\nDescription: ${proj.shortDescription}\n`;
    text += `Details: ${proj.details.introduction}\nFeatures: ${proj.details.features.join(', ')}\nTechnologies: ${proj.details.technologies.join(', ')}\nOutcome: ${proj.details.outcome}\n\n`;
  });
  return text;
};
