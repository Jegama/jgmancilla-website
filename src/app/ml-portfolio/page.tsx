import { mlPortfolioContent } from "@/lib/content-data";
import { MLProjectSection } from "@/components/ml-portfolio/ml-project-section";
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';

export default function MLPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {mlPortfolioContent.headline}
      </h1>
      {mlPortfolioContent.intro && (
        <div className="mb-12">
          <div className="bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border w-full">
            <div className="p-8 space-y-4 text-foreground/90 leading-relaxed text-lg">
              <MarkdownRenderer content={mlPortfolioContent.intro} />
            </div>
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
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
