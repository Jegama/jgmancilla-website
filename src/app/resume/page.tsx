import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';
import { resumeContent, personalDetails } from "@/lib/content-data";
import { ExperienceItem } from "@/components/resume/experience-item";
import { SkillCategory } from "@/components/resume/skill-category";
import { EducationItem } from "@/components/resume/education-item";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="container-max section-padding">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
        <h1 className="text-4xl font-headline text-primary mb-4 md:mb-0">Resume</h1>
        <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href={personalDetails.resumePdfUrl} target="_blank" download>
            <Download className="mr-2 h-5 w-5" />
            {resumeContent.downloadButtonLabel}
          </Link>
        </Button>
      </div>

      {/* Profile Section */}
      {resumeContent.summary && (
        <section id="profile" className="mb-12">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary border-b pb-2">
                {resumeContent.summary.headline}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {resumeContent.summary.paragraphs.map((para, idx) => (
                <MarkdownRenderer content={para} key={idx} />
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Experience Section */}
      <section id="experience" className="mb-12">
        <h2 className="text-3xl font-headline text-primary mb-6 border-b pb-2">
          {resumeContent.experience.headline}
        </h2>
        {resumeContent.experience.jobs.map((job, index) => (
          <ExperienceItem key={index} {...job} />
        ))}
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-12">
         <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary border-b pb-2">
              {resumeContent.skills.headline}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resumeContent.skills.categories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-12">
        <h2 className="text-3xl font-headline text-primary mb-6 border-b pb-2">
          {resumeContent.education.headline}
        </h2>
        {resumeContent.education.degrees.map((degree, index) => (
          <EducationItem key={index} {...degree} />
        ))}
      </section>
    </div>
  );
}
