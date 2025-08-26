import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutMeContent } from "@/lib/content-data";
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';

export function AboutMe() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-primary">
          {aboutMeContent.headline}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
        {aboutMeContent.paragraphs.map((paragraph, index) => (
          <MarkdownRenderer content={paragraph} key={index} />
        ))}
      </CardContent>
    </Card>
  );
}
