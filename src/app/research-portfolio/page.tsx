import { researchPortfolioContent } from "@/lib/research-portfolio-content";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { ResearchProjectSection } from "@/components/research-portfolio/research-project-section";

export default function ResearchPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {researchPortfolioContent.headline}
      </h1>
      {researchPortfolioContent.intro && (
        <div className="mb-12">
          <div className="bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border w-full">
            <div className="p-8 space-y-4 text-foreground/90 leading-relaxed text-lg">
              <MarkdownRenderer content={researchPortfolioContent.intro} />
            </div>
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
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
