"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { ExperienceRole } from "@/lib/resume-content";

type ExperienceItemProps = {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
  /**
   * Role history, newest first. When two or more roles are present the card
   * switches to a LinkedIn-style layout: the employer becomes the heading and
   * each title carries its own date range. This keeps the card from implying
   * the current title was held for the entire tenure.
   */
  roles?: ExperienceRole[];
};

export function ExperienceItem({ title, company, dates, responsibilities, roles }: ExperienceItemProps) {
  const VISIBLE_RESPONSIBILITIES = 3;
  const hasExtraResponsibilities = responsibilities.length > VISIBLE_RESPONSIBILITIES;
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);
  const visibleResponsibilities = showAllResponsibilities
    ? responsibilities
    : responsibilities.slice(0, VISIBLE_RESPONSIBILITIES);
  const hiddenResponsibilitiesCount = responsibilities.length - visibleResponsibilities.length;

  const hasRoleHistory = Array.isArray(roles) && roles.length > 1;

  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <CardHeader>
        {hasRoleHistory ? (
          <>
            <CardTitle className="text-xl font-headline text-primary">{company}</CardTitle>
            <CardDescription className="text-muted-foreground">{dates}</CardDescription>
          </>
        ) : (
          <>
            <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
            <CardDescription className="text-md text-muted-foreground">
              <strong>{company}</strong> | {dates}
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent>
        {hasRoleHistory && (
          <ol
            aria-label={`Roles held at ${company}, most recent first`}
            className="mb-5 space-y-3 border-l border-border pl-5"
          >
            {roles!.map(role => (
              <li key={`${role.title}-${role.dates}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[23px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-card"
                />
                <p className="font-semibold text-primary leading-snug">{role.title}</p>
                <p className="text-sm text-muted-foreground">{role.dates}</p>
              </li>
            ))}
          </ol>
        )}
        <ul className="list-disc pl-5 space-y-1 text-foreground/90">
          {visibleResponsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
        {hasExtraResponsibilities && (
          <div className="mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAllResponsibilities(prev => !prev)}
              aria-expanded={showAllResponsibilities}
              className="h-auto gap-1 px-0 font-medium text-accent hover:bg-transparent hover:text-accent/80 hover:underline underline-offset-4"
            >
              {showAllResponsibilities
                ? "Show less"
                : `Show ${hiddenResponsibilitiesCount} more`}
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${showAllResponsibilities ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
