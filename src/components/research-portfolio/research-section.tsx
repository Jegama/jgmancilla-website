import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResearchSectionProps = {
  id: string;
  title: string;
  content: string[];
};

export function ResearchSection({ id, title, content }: ResearchSectionProps) {
  return (
    <Card id={id} className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  );
}
