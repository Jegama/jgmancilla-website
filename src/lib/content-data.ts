export const personalDetails = {
  name: "Jesus Mancilla",
  title: "Machine Learning & NLP Specialist",
  copyrightYear: new Date().getFullYear(),
  linkedInUrl: "https://linkedin.com/in/placeholder-jesus-mancilla",
  githubUrl: "https://github.com/placeholder-jesus-mancilla",
  resumePdfUrl: "/placeholder-resume.pdf",
};

export const aboutMeContent = {
  headline: "About Me",
  paragraphs: [
    "Jesus Mancilla is a dedicated specialist in Machine Learning and Natural Language Processing. With a robust foundation in computer science and a passion for cutting-edge AI technologies, Jesus has consistently sought to push the boundaries of what's possible in the field. His work focuses on developing intelligent systems that can understand, interpret, and generate human language, as well as leveraging complex datasets to derive meaningful insights and predictions.",
    "Throughout his career, Jesus has contributed to various innovative projects, ranging from advanced research initiatives to practical applications in industry. His expertise spans across model development, data analysis, algorithm design, and the deployment of scalable AI solutions. He is proficient in a variety of programming languages and ML frameworks, always eager to learn and adapt to new tools and methodologies.",
    "Driven by a goal to advance technology and make a significant impact, Jesus aims to continue his journey as a Research Scientist. He is committed to exploring novel approaches in AI, contributing to the scientific community, and developing solutions that address real-world challenges. His ultimate ambition is to be at the forefront of technological evolution, creating systems that not inly innovate but also improve lives."
  ],
};

export const resumeContent = {
  downloadButtonLabel: "Download Resume",
  experience: {
    headline: "Experience",
    jobs: [
      {
        title: "Senior Machine Learning Engineer",
        company: "Tech Innovations Inc.",
        dates: "Jan 2022 - Present",
        responsibilities: [
          "Led the development of NLP models for sentiment analysis and text summarization, improving accuracy by 15%.",
          "Designed and implemented scalable machine learning pipelines for real-time data processing.",
          "Collaborated with cross-functional teams to integrate AI solutions into flagship products.",
          "Mentored junior engineers and contributed to best practices in model development and deployment."
        ],
      },
      {
        title: "Machine Learning Researcher",
        company: "AI Labs Co.",
        dates: "Jun 2019 - Dec 2021",
        responsibilities: [
          "Conducted research on novel deep learning architectures for natural language understanding.",
          "Published 3 papers in top-tier AI conferences and journals.",
          "Developed proof-of-concept models for new AI-driven product features.",
          "Contributed to the development of proprietary datasets for model training."
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "Future Solutions Ltd.",
        dates: "May 2018 - Aug 2018",
        responsibilities: [
          "Assisted in the development of a data analytics platform.",
          "Implemented data visualization tools for interpreting model outputs.",
          "Participated in code reviews and agile development processes.",
          "Gained experience with cloud computing platforms and big data technologies."
        ],
      },
    ],
  },
  skills: {
    headline: "Skills",
    categories: [
      {
        name: "Technical Skills",
        skills: [
          "Python", "Java", "C++", "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
          "SQL", "NoSQL", "Docker", "Kubernetes", "AWS", "GCP", "Azure",
          "Data Mining", "Statistical Analysis", "Algorithm Design", "Big Data"
        ],
      },
      {
        name: "Languages",
        skills: ["English (Native)", "Spanish (Fluent)"],
      },
    ],
  },
  education: {
    headline: "Education",
    degrees: [
      {
        university: "Stanford University",
        degree: "M.S. in Computer Science, Specialization in AI",
        graduationYear: "2019",
      },
      {
        university: "University of California, Berkeley",
        degree: "B.S. in Electrical Engineering and Computer Sciences",
        graduationYear: "2017",
      },
    ],
  },
};

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

export const researchPortfolioContent = {
  headline: "Research Portfolio",
  sections: [
    {
      id: "design-research",
      title: "Design Research",
      content: [
        "My design research focuses on bridging the gap between theoretical possibilities and practical, real-world applications. I emphasize iterative design processes, rapid prototyping, and rigorous testing in naturalistic settings to ensure that solutions are not only innovative but also user-centric and effective. This approach involves deeply understanding user needs and contexts to inform the design of intuitive and impactful technologies.",
        "A notable project in this area was a 'driver stress elicitation study.' This research aimed to identify physiological and behavioral indicators of driver stress using wearable sensors and in-vehicle data. The insights gathered were crucial for developing adaptive driver assistance systems that can proactively mitigate stress and enhance road safety. This involved qualitative methods like contextual inquiries and think-aloud protocols, combined with quantitative data analysis from sensor streams.",
        "The core philosophy of my design research is to create systems that seamlessly integrate into users' lives, enhancing their capabilities without adding cognitive burden. This requires a multidisciplinary approach, combining principles from human-computer interaction, cognitive psychology, and engineering to deliver holistic and well-validated solutions."
      ],
    },
    {
      id: "user-research",
      title: "User Research",
      content: [
        "Understanding user behavior is paramount in developing successful technologies. My user research endeavors are dedicated to uncovering the motivations, needs, and pain points of users through a variety of qualitative and quantitative methods. This includes ethnographic studies, usability testing, surveys, interviews, and data analytics to build comprehensive user personas and journey maps.",
        "I have significant experience working with diverse hardware, including wearable devices and remote controls. For instance, I conducted extensive user research for a new generation of smart home remote controls, focusing on ease of use, intuitiveness of new interaction paradigms (like gesture control), and integration with various home automation systems. This involved in-home observational studies and long-term diary studies to capture authentic user experiences.",
        "The findings from such research directly inform product strategy, design decisions, and feature prioritization. By championing the user's voice throughout the development lifecycle, I strive to ensure that technological advancements translate into meaningful improvements in user experience and satisfaction. This often involves translating complex user data into actionable design recommendations for engineering and product teams."
      ],
    },
    {
      id: "research-ops",
      title: "Research Ops",
      content: [
        "Effective Research Operations (ResearchOps) are crucial for scaling research activities and maximizing the impact of research teams. My approach to ResearchOps focuses on establishing standardized processes, tools, and governance to improve the efficiency, quality, and consistency of research efforts. This includes participant recruitment strategies, data management protocols, knowledge sharing platforms, and ethical review processes.",
        "I have worked on developing and implementing ResearchOps frameworks that streamline workflows, from initial research planning and participant recruitment to data analysis and insight dissemination. This involved creating templates for research plans and reports, establishing a centralized repository for research findings, and training team members on best practices and new research tools.",
        "By optimizing the operational aspects of research, teams can focus more on strategic research questions and generating high-quality insights. My goal in ResearchOps is to create a supportive and efficient research ecosystem that empowers researchers to do their best work and ensures that research findings are effectively integrated into the organization's decision-making processes."
      ],
    },
  ],
};

export const researchPapersContent = {
  headline: "Published Papers",
  papers: [
    {
      title: "Advancements in Neural Architectures for Low-Resource NLP",
      authors: ["Smith, J.", "Doe, A.", "**Mancilla, Jesus**", "Lee, B."],
      publication: "Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL)",
      year: "2023",
      url: "https://placeholder-link.com/paper1",
    },
    {
      title: "Interpretable Machine Learning for Healthcare Decision Support",
      authors: ["**Mancilla, Jesus**", "Chen, L.", "Williams, K."],
      publication: "Journal of Artificial Intelligence in Medicine (JAIM)",
      year: "2022",
      url: "https://placeholder-link.com/paper2",
    },
    {
      title: "A Novel Approach to Sentiment Analysis in Multilingual Contexts",
      authors: ["Davis, P.", "**Mancilla, Jesus**", "Martinez, R."],
      publication: "International Conference on Machine Learning (ICML)",
      year: "2022",
      url: "https://placeholder-link.com/paper3",
    },
    {
      title: "Ethical Considerations in Deploying Autonomous AI Systems",
      authors: ["Walker, S.", "Brown, T.", "**Mancilla, Jesus**"],
      publication: "AI and Ethics Journal",
      year: "2021",
      url: "https://placeholder-link.com/paper4",
    },
    {
      title: "Enhancing User Experience with Predictive Text Input",
      authors: ["**Mancilla, Jesus**", "Jones, M."],
      publication: "Conference on Human Factors in Computing Systems (CHI)",
      year: "2020",
      url: "https://placeholder-link.com/paper5",
    },
    {
      title: "Scalable Deep Learning for Time Series Forecasting",
      authors: ["Garcia, E.", "**Mancilla, Jesus**", "Kim, J."],
      publication: "Neural Information Processing Systems (NeurIPS)",
      year: "2020",
      url: "https://placeholder-link.com/paper6",
    },
     {
      title: "Robust Object Detection in Adverse Weather Conditions",
      authors: ["Wilson, Q.", "**Mancilla, Jesus**", "Patel, S."],
      publication: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      year: "2019",
      url: "https://placeholder-link.com/paper7",
    },
  ],
};

// Helper functions to format content for AI
export const getResumeTextForAI = (): string => {
  let text = `Resume of Jesus Mancilla\n\n`;
  text += `EXPERIENCE:\n`;
  resumeContent.experience.jobs.forEach(job => {
    text += `${job.title} at ${job.company} (${job.dates})\n`;
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

export const getMlPortfolioTextForAI = (): string => {
  let text = `ML Portfolio Projects:\n\n`;
  mlPortfolioContent.projects.forEach(proj => {
    text += `Project: ${proj.title}\nDescription: ${proj.shortDescription}\n`;
    text += `Details: ${proj.details.introduction}\nFeatures: ${proj.details.features.join(', ')}\nTechnologies: ${proj.details.technologies.join(', ')}\nOutcome: ${proj.details.outcome}\n\n`;
  });
  return text;
};

export const getResearchPortfolioTextForAI = (): string => {
  let text = `Research Portfolio:\n\n`;
  researchPortfolioContent.sections.forEach(sec => {
    text += `Section: ${sec.title}\n${sec.content.join('\n')}\n\n`;
  });
  return text;
};

export const getResearchPapersTextForAI = (): string => {
  let text = `Published Research Papers:\n\n`;
  researchPapersContent.papers.forEach(paper => {
    text += `Title: ${paper.title}\nAuthors: ${paper.authors.join(', ')}\nPublication: ${paper.publication}, ${paper.year}\nLink: ${paper.url}\n\n`;
  });
  return text;
};

export const aiWelcomeMessage = "Hello! I am an AI trained on Jesus Mancilla's work. Feel free to ask me anything about his projects, research, or skills.";
