"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ExperienceItemProps = {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
};

export function ExperienceItem({ title, company, dates, responsibilities }: ExperienceItemProps) {
  const VISIBLE_RESPONSIBILITIES = 3;
  const hasExtraResponsibilities = responsibilities.length > VISIBLE_RESPONSIBILITIES;
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);
  const visibleResponsibilities = showAllResponsibilities
    ? responsibilities
    : responsibilities.slice(0, VISIBLE_RESPONSIBILITIES);
  const hiddenResponsibilitiesCount = responsibilities.length - visibleResponsibilities.length;

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
          {visibleResponsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
        {hasExtraResponsibilities && (
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllResponsibilities(prev => !prev)}
            >
              {showAllResponsibilities
                ? "See less"
                : `See more${hiddenResponsibilitiesCount > 0 ? ` (+${hiddenResponsibilitiesCount})` : ""}`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
