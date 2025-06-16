export const mlPortfolioContent = {
  headline: "ML Portfolio",
  projects: [
    {
      id: "research-librarian",
      title: "Research Librarian Project",
      shortDescription: "An AI-powered index for UX and CI research.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "library books",
      details: {
        introduction: "The Research Librarian Project is an innovative AI-driven system designed to revolutionize how UX (User Experience) and CI (Competitive Intelligence) research is indexed, accessed, and utilized. This tool leverages natural language processing and machine learning to create a dynamic, searchable knowledge base from diverse research materials.",
        features: [
          "Automated tagging and categorization of research documents.",
          "Semantic search capabilities allowing users to find relevant information using natural language queries.",
          "Trend identification and summarization from large volumes of research data.",
          "User-friendly interface for easy navigation and information retrieval."
        ],
        technologies: ["Python", "TensorFlow", "Elasticsearch", "React"],
        outcome: "This project resulted in a significant reduction in time spent searching for research insights and improved collaboration among research teams by providing a centralized, intelligent repository for all UX and CI knowledge."
      }
    },
    {
      id: "modular-survey-analysis",
      title: "Modular Survey Analysis System",
      shortDescription: "A machine learning-based report generator for survey analysis.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "charts graph",
      details: {
        introduction: "The Modular Survey Analysis System is a sophisticated tool that automates the generation of comprehensive reports from survey data. Utilizing machine learning algorithms, it processes raw survey responses to identify key themes, sentiments, and statistical patterns, presenting them in an easily digestible report format.",
        features: [
          "Automated cleaning and preprocessing of survey data.",
          "Sentiment analysis of open-ended responses.",
          "Topic modeling to identify key themes and subjects.",
          "Customizable report templates and visualizations."
        ],
        technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask"],
        outcome: "This system dramatically accelerated the survey analysis workflow, enabling organizations to quickly derive actionable insights from customer and employee feedback, and make data-driven decisions."
      }
    },
    {
      id: "customer-support-bot",
      title: "Customer Support Bot",
      shortDescription: "An autonomous agent designed to enhance customer support.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "headset support",
      details: {
        introduction: "The Customer Support Bot is an AI-powered autonomous agent developed to provide instant, 24/7 customer assistance. It's designed to understand customer queries, provide relevant information, resolve common issues, and escalate complex problems to human agents when necessary.",
        features: [
          "Natural Language Understanding (NLU) for interpreting customer intent.",
          "Integration with knowledge bases and CRM systems.",
          "Multi-turn conversation capabilities for complex interactions.",
          "Sentiment tracking to gauge customer satisfaction during interactions."
        ],
        technologies: ["Dialogflow", "Python", "Node.js", "REST APIs"],
        outcome: "The bot successfully handled over 60% of incoming customer queries, leading to improved customer satisfaction, reduced wait times, and significant operational cost savings for the support department."
      }
    },
    {
      id: "calvinist-parrot",
      title: "Calvinist Parrot",
      shortDescription: "An AI-driven chatbot for theological research.",
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "parrot bird",
      details: {
        introduction: "The Calvinist Parrot is a specialized AI chatbot designed to assist with theological research, particularly focusing on Calvinist theology. It can answer questions, provide summaries of theological texts, and engage in discussions on various doctrinal points, drawing from a curated knowledge base of theological works.",
        features: [
          "Access to a vast database of Calvinist theological texts and commentaries.",
          "Ability to answer complex theological questions with references.",
          "Contextual understanding of theological concepts and arguments.",
          "User-friendly interface for students, researchers, and theologians."
        ],
        technologies: ["GPT-3", "Python", "Pinecone", "Streamlit"],
        outcome: "This chatbot serves as a valuable tool for theological students and researchers, providing quick access to information and facilitating deeper understanding of complex theological topics within the Calvinist tradition."
      }
    },
  ],
};

export const getMlPortfolioTextForAI = (): string => {
  let text = `ML Portfolio Projects:\n\n`;
  mlPortfolioContent.projects.forEach(proj => {
    text += `Project: ${proj.title}\nDescription: ${proj.shortDescription}\n`;
    text += `Details: ${proj.details.introduction}\nFeatures: ${proj.details.features.join(', ')}\nTechnologies: ${proj.details.technologies.join(', ')}\nOutcome: ${proj.details.outcome}\n\n`;
  });
  return text;
};
