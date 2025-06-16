import { mlPortfolioContent } from "@/lib/content-data";
import { ProjectCard } from "@/components/ml-portfolio/project-card";

export default function MLPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {mlPortfolioContent.headline}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {mlPortfolioContent.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
