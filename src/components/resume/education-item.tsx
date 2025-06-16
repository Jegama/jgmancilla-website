import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type EducationItemProps = {
  university: string;
  degree: string;
  graduationYear: string;
};

export function EducationItem({ university, degree, graduationYear }: EducationItemProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">{university}</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          {degree} - Graduated {graduationYear}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
