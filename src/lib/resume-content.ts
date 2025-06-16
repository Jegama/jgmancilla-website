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
