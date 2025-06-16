export const researchPapersContent = {
  headline: "Published Papers",
  papers: [
    {
      title: "Language models in education: Generative AI to optimize teacher performance analysis",
      authors: ["Ramos-Rivera, R. E.", "Santana Mancilla, P. C.", "Garcia-Mancilla, J.", "Gaytán-Lugo, L. S."],
      publication: "InnovAcademica, 1(2), 74–85",
      year: "2025",
      url: "https://innovacademia.uanl.mx/index.php/revista/article/view/36",
    },
    {
      title: "Towards Improving Teacher Performance Assessment through Human-Centered AI-Powered Survey Analysis: An Approach Using Large Language Models (LLM)",
      authors: ["Ramos-Rivera, R. E.", "Garcia-Mancilla, J.", "Cárdenas-Villa, G. E.", "Santana-Mancilla, P. C."],
      publication: "Avances en Interacción Humano-Computadora, 9(1), 261-264",
      year: "2024",
      url: "https://revistaaihc.mx/index.php/aihc/article/view/181",
    },
    {
      title: "Eliciting Driver Stress Using Naturalistic Driving Scenarios on Real Roads",
      authors: ["Baltodano, Sonia", "Jesus Garcia-Mancilla", "Wendy Ju"],
      publication: "Proceedings of the 10th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, pp. 298-309. ACM",
      year: "2018",
      url: "https://dl.acm.org/authorize?N668220",
    },
    {
      title: "¡Vamos!: Observations of Pedestrian Interactions with Driverless Cars in Mexico",
      authors: ["Currano, Rebecca", "So Yeon Park", "Lawrence Domingo", "Jesus Garcia-Mancilla", "Pedro C. Santana-Mancilla", "Victor M. Gonzalez", "Wendy Ju"],
      publication: "Proceedings of the 10th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, pp. 210-220. ACM",
      year: "2018",
      url: "https://dl.acm.org/authorize?N668239",
    },
    {
      title: "Characterizing negative sentiments in at-risk populations via crowd computing: a computational social science approach",
      authors: ["J. Garcia-Mancilla", "J. E. Ramirez-Marquez", "C. Lipizzi", "G. T. Vesonder", "V. M. Gonzalez"],
      publication: "International Journal of Data Science and Analytics",
      year: "2018",
      url: "https://link.springer.com/article/10.1007/s41060-018-0135-9",
    },
    {
      title: "Social Influence and Emotional State While Shopping",
      authors: ["Garcia-Mancilla J.", "Martinez V.R.", "Gonzalez V.M.", "Fajardo A.F."],
      publication: "In: Nah FH., Tan CH. (eds) HCI in Business, Government, and Organizations: eCommerce and Innovation. HCIBGO 2016. Lecture Notes in Computer Science, vol 9751. Springer, Cham.",
      year: "2016",
      url: "https://link.springer.com/chapter/10.1007/978-3-319-39396-4_35",
    },
    {
      title: "Stress Quantification Using a Wearable Device for Daily Feedback to Improve Stress Management",
      authors: ["Garcia-Mancilla J.", "Gonzalez V.M."],
      publication: "In: Zheng X., Zeng D., Chen H., Leischow S. (eds) Smart Health. Lecture Notes in Computer Science, vol 9545. Springer, Cham.",
      year: "2016",
      url: "https://link.springer.com/chapter/10.1007/978-3-319-29175-8_19",
    },
    {
      title: "Using augmented reality in urban context: Georeferenced system for business localization using Google Glass",
      authors: ["L. Ferrer", "J. Garcia-Mancilla", "V. M. Gonzalez", "S. Bermudez", "P. Bleier", "C. Prieto"],
      publication: "2015 IEEE First International Smart Cities Conference (ISC2), Guadalajara, 2015, pp. 1-6. doi: 10.1109/ISC2.2015.7366157.",
      year: "2015",
      url: "https://ieeexplore.ieee.org/abstract/document/7366157",
    },
    {
      title: "Searching for Information: Comparing Text vs. Visual Search with Newspapers Websites",
      authors: ["González V.M.", "García J.", "Muro B."],
      publication: "In: Yamamoto S. (eds) Human Interface and the Management of Information. Information and Knowledge Design. HIMI 2015. Lecture Notes in Computer Science, vol 9172. Springer, Cham.",
      year: "2015",
      url: "https://link.springer.com/chapter/10.1007/978-3-319-20612-7_17",
    },
    {
      title: "Programas psicoeducativos para el autocontrol de la diabetes de corte cognitivo-conductual",
      authors: ["Montes R.", "Garcia-Mancilla J."],
      publication: "In G. Solano, A. Del Castillo, R. M. E. Guzman, M. Garcia, A. Romero (Ed.), Diabetes y Educacion, de la teoria a la practica (119-146). Ciudad de Mexico: Planeacion y Servicio Editorial S.A.",
      year: "2015",
      url: "",
    },
    {
      title: "Quality of Life (QoL) and self-efficacy on elderly with diabetes mellitus type 2: Study in the Mexican State of Colima",
      authors: ["Garcia-Mancilla J.", "Montes-Delgado R.", "Santana-Mancilla P."],
      publication: "Rendez-Vous 2012, Thunder Bay, Canada, Octubre 2012.",
      year: "2012",
      url: "",
    },
    {
      title: "Self-control techniques for the right management of diabetes mellitus type 2 (DM2) in adults",
      authors: ["Montes R.", "Garcia-Mancilla J.", "Oropeza-Tena R."],
      publication: "Rendez-Vous 2012, Thunder Bay, Canada, Octubre 2012.",
      year: "2012",
      url: "",
    },
    {
      title: "Análisis de contenidos sobre adultos mayores en las currículas de la Universidad de Colima",
      authors: ["Garcia-Mancilla, J.", "Rodriguez-Morrill, E. I.", "Velasco-Alcazar, C. C."],
      publication: "Universidad de Colima: Colima, México.",
      year: "2011",
      url: "",
    },
  ],
};

export const getResearchPapersTextForAI = (): string => {
  let text = `Published Research Papers:\n\n`;
  researchPapersContent.papers.forEach(paper => {
    text += `Title: ${paper.title}\nAuthors: ${paper.authors.join(', ')}\nPublication: ${paper.publication}, ${paper.year}\nLink: ${paper.url}\n\n`;
  });
  return text;
};
