import { researchPapersContent } from "@/lib/content-data";
import { PaperCitation } from "@/components/research-papers/paper-citation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResearchPapersPage() {
  return (
    <div className="container-max section-padding">
      <h1 className="text-4xl font-headline text-primary mb-8 md:mb-12 text-center">
        {researchPapersContent.headline}
      </h1>
      <Card className="shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Bibliography</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 list-inside">
            {researchPapersContent.papers.map((paper, index) => (
              <PaperCitation
                key={index}
                index={index}
                title={paper.title}
                authors={paper.authors}
                publication={paper.publication}
                year={paper.year}
                url={paper.url}
              />
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
