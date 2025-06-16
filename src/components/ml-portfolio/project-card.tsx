'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription as ShadCnCardDescription } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  dataAiHint?: string;
  details: {
    introduction: string;
    features: string[];
    technologies: string[];
    outcome: string;
  };
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint || 'technology project'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-headline text-primary mb-2">{project.title}</CardTitle>
        <ShadCnCardDescription className="text-sm text-muted-foreground mb-4">
          {project.shortDescription}
        </ShadCnCardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Learn More <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] bg-background text-foreground p-0 rounded-lg">
            <DialogHeader className="p-6 pb-4 border-b">
              <DialogTitle className="text-2xl font-headline text-primary">{project.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {project.shortDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Introduction</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">{project.details.introduction}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full shadow-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Outcome</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">{project.details.outcome}</p>
              </div>
            </div>
            <DialogFooter className="p-6 pt-4 border-t">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
