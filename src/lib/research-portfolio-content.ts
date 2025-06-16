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

export const getResearchPortfolioTextForAI = (): string => {
  let text = `Research Portfolio:\n\n`;
  researchPortfolioContent.sections.forEach(sec => {
    text += `Section: ${sec.title}\n${sec.content.join('\n')}\n\n`;
  });
  return text;
};
