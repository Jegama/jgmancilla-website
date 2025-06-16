import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ExperienceItemProps = {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
};

export function ExperienceItem({ title, company, dates, responsibilities }: ExperienceItemProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          <strong>{company}</strong> | {dates}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-foreground/90">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
