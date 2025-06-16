import { mlPortfolioContent } from "@/lib/content-data";
import { MLProjectSection } from "@/components/ml-portfolio/ml-project-section";

export default function MLPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {mlPortfolioContent.headline}
      </h1>
      <div className="space-y-12">
        {mlPortfolioContent.projects.map((project) => (
          <MLProjectSection
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
