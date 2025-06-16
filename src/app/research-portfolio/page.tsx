import { researchPortfolioContent } from "@/lib/research-portfolio-content";
import { ResearchProjectSection } from "@/components/research-portfolio/research-project-section";

export default function ResearchPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {researchPortfolioContent.headline}
      </h1>
      <div className="space-y-12">
        {researchPortfolioContent.projects.map((project) => (
          <ResearchProjectSection
            key={project.id}
            id={project.id}
            title={project.title}
            shortDescription={project.shortDescription}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
}
