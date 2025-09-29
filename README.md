# Jesús Mancilla – Personal CV & AI Portfolio

This website is the personal CV and interactive AI portfolio of **Jesús Mancilla** – Research Scientist and AI Solutions Architect. It is a site designed to showcase my professional experience, machine learning projects, research, and publications. The site features an AI-powered chat assistant trained exclusively on my work and is intended solely as a digital portfolio and résumé.

Live site: https://www.jgmancilla.com/

## 🚀 Features

- **AI Chat Assistant**: Ask questions about my experience, skills, research, and publications. The AI is trained on curated content from my career.
- **Resume**: Detailed work history, technical skills, and education.
- **ML Portfolio**: In-depth descriptions of machine learning and AI projects, with modal dialogs for project details.
- **Research Portfolio**: Summaries of research projects, methodologies, and outcomes.
- **Research Papers**: List of academic publications and contributions.

## 🏆 Representative Work

This site highlights a selection of my most significant projects and research, including:

- **ML Portfolio**: Bridging user experience research and machine learning, my portfolio features user-centric models and solutions. Notable projects include:
  - **Calvinist Parrot**: An advanced AI chatbot for exploring Reformed theology and biblical texts, featuring a multi-agent, multi-container architecture and a novel library indexing algorithm for the Christian Classics Ethereal Library (CCEL).
  - **Modular Survey Analysis System**: A dynamic, modular system for survey data analysis, including a patent-pending autonomous clustering algorithm for open-ended responses, context-aware logic, and a logic parser for complex survey dependencies.
  - **Customer Support Bot**: An autonomous agent leveraging embeddings and LLMs to improve customer self-service and support efficiency, with comprehensive article indexing and AI-powered response generation.

- **Research Portfolio**: Showcasing research leadership and innovation across multiple domains:
  - **Design Research**: Developed and validated real-world driver stress elicitation techniques using mixed-methods and psychophysiological instrumentation, resulting in a replicable, high-impact methodology for stress research.
  - **User Research**: Benchmarked and improved hardware usability for millions of users through statistical analysis, behavioral logs, and collaborative research, leading to new device metrics and actionable insights.
  - **Research Ops**: Standardized research processes and centralized knowledge sharing, increasing team visibility and impact across organizations through knowledge management systems and progressive tool rollouts.

For more details, see the dedicated sections and project descriptions on the site.

## 🧭 Content sources (single source of truth)

Structured content is defined in TypeScript and drives both the UI and the AI assistant grounding:

- `src/lib/resume-content.ts` — Resume profile, experience, skills, education
- `src/lib/ml-portfolio-content.ts` — ML projects
- `src/lib/research-portfolio-content.ts` — Research projects
- `src/lib/research-papers-content.ts` — Publications list
- `src/lib/about-me-content.ts` — About section copy

The AI chat serializes these sources when building a single composite prompt (no RAG at runtime).

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini](https://ai.google.dev/)

## 🤖 AI chat architecture (high level)

- Prompt assembly: `src/ai/flows/answer-questions-about-me.ts` (async generator, single-pass)
- Model client: `src/ai/google-genai.ts` (Gemini streaming)
- API route: `src/app/api/chat/route.ts` (streams `ReadableStream` to the client)
- Client UI: `src/components/home/ai-chat.tsx` (optimistic user message + incremental bot chunks)

Design choices:
- Single composite prompt per question (no retrieval layer yet). If content grows, add chunking/embeddings.
- Citations enforced in the prompt (deterministic per content area).

## 📄 Resumes

To export PDFs (optional, if LaTeX is installed):
- `public\cv-jgmancilla.pdf` — Hybrid master - Downloadable from the live site
- `public\JGMancilla - Applied Scientist.pdf` — Role-targeted Applied Scientist
- `public\JGMancilla - UX Research.pdf` — Role-targeted Quantitative UX Researcher

## 📄 Papers

- [Ramos-Rivera, R. E., Santana Mancilla, P. C., Garcia-Mancilla, J., \& Gaytán-Lugo, L. S. (2025). Language models in education: Generative AI to optimize teacher performance analysis. InnovAcademica, 1(2), 74–85.](https://innovacademia.uanl.mx/index.php/revista/article/view/36)
- [Ramos-Rivera, R. E., Garcia-Mancilla, J., Cárdenas-Villa, G. E., & Santana-Mancilla, P. C. (2024). Towards Improving Teacher Performance Assessment through Human-Centered AI-Powered Survey Analysis: An Approach Using Large Language Models (LLM). Avances en Interacción Humano-Computadora, 9(1), 261-264.](https://revistaaihc.mx/index.php/aihc/article/view/181)
- [Baltodano, Sonia, Jesus Garcia-Mancilla, and Wendy Ju. "Eliciting Driver Stress Using Naturalistic Driving Scenarios on Real Roads." In Proceedings of the 10th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, pp. 298-309. ACM, 2018.](https://dl.acm.org/authorize?N668220)
- [Currano, Rebecca, So Yeon Park, Lawrence Domingo, Jesus Garcia-Mancilla, Pedro C. Santana-Mancilla, Victor M. Gonzalez, and Wendy Ju. "¡Vamos!: Observations of Pedestrian Interactions with Driverless Cars in Mexico." In Proceedings of the 10th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, pp. 210-220. ACM, 2018.](https://dl.acm.org/authorize?N668239)
- [J. Garcia-Mancilla, J. E. Ramirez-Marquez, C. Lipizzi, G. T. Vesonder, and V. M. Gonzalez, “Characterizing negative sentiments in at-risk populations via crowd computing: a computational social science approach,” International Journal of Data Science and Analytics, Jun. 2018.](https://link.springer.com/article/10.1007/s41060-018-0135-9)
- [Garcia-Mancilla J., Martinez V.R., Gonzalez V.M., Fajardo A.F. (2016) Social Influence and Emotional State While Shopping. In: Nah FH., Tan CH. (eds) HCI in Business, Government, and Organizations: eCommerce and Innovation. HCIBGO 2016. Lecture Notes in Computer Science, vol 9751. Springer, Cham.](https://link.springer.com/chapter/10.1007/978-3-319-39396-4_35)
- [Garcia-Mancilla J., Gonzalez V.M. (2016) Stress Quantification Using a Wearable Device for Daily Feedback to Improve Stress Management. In: Zheng X., Zeng D., Chen H., Leischow S. (eds) Smart Health. Lecture Notes in Computer Science, vol 9545. Springer, Cham.](https://link.springer.com/chapter/10.1007/978-3-319-29175-8_19)
- [L. Ferrer, J. Garcia-Mancilla, V. M. Gonzalez, S. Bermudez, P. Bleier and C. Prieto, "Using augmented reality in urban context: Georeferenced system for business localization using Google Glass," 2015 IEEE First International Smart Cities Conference (ISC2), Guadalajara, 2015, pp. 1-6. doi: 10.1109/ISC2.2015.7366157.](https://ieeexplore.ieee.org/abstract/document/7366157)
- [González V.M., García J., Muro B. (2015) Searching for Information: Comparing Text vs. Visual Search with Newspapers Websites. In: Yamamoto S. (eds) Human Interface and the Management of Information. Information and Knowledge Design. HIMI 2015. Lecture Notes in Computer Science, vol 9172. Springer, Cham.](https://link.springer.com/chapter/10.1007/978-3-319-20612-7_17)
- Montes R., Garcia-Mancilla J. (2015), Programas psicoeducativos para el autocontrol de la diabetes de corte cognitivo-conductual In G. Solano, A. Del Castillo, R. M. E. Guzman, M. Garcia, A. Romero (Ed.), Diabetes y Educacion, de la teoria a la practica (119-146). Ciudad de Mexico: Planeacion y Servicio Editorial S.A.
- Garcia-Mancilla J., Montes-Delgado R., Santana-Mancilla P. Quality of Life (QoL) and self-efficacy on elderly with diabetes mellitus type 2: Study in the Mexican State of Colima. Rendez-Vous 2012, Thunder Bay, Canada, Octubre 2012.
- Montes R., Garcia-Mancilla J., Oropeza-Tena R. Self-control techniques for the right management of diabetes mellitus type 2 (DM2) in adults. Rendez-Vous 2012, Thunder Bay, Canada, Octubre 2012.
- Garcia-Mancilla, J., Rodriguez-Morrill, E. I. y Velasco-Alcazar, C. C. (2011). Análisis de contenidos sobre adultos mayores en las currículas de la Universidad de Colima. Universidad de Colima: Colima, México.