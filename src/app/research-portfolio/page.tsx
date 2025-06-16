import { researchPortfolioContent } from "@/lib/content-data";
import { ResearchSection } from "@/components/research-portfolio/research-section";

export default function ResearchPortfolioPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {researchPortfolioContent.headline}
      </h1>
      <div className="space-y-12">
        {researchPortfolioContent.sections.map((section) => (
          <ResearchSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}
