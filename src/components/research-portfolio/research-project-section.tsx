import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export type ResearchProjectSectionProps = {
  id: string;
  title: string;
  shortDescription: string;
  details: {
    introduction: string;
    features: string[];
    technologies: string[];
    outcome: string;
  };
};

export function ResearchProjectSection({ id, title, shortDescription, details }: ResearchProjectSectionProps) {
  return (
    <Card id={id} className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground/90 leading-relaxed">
        <p>{shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] bg-background text-foreground p-0 rounded-lg">
            <DialogHeader className="p-6 pb-4 border-b">
              <DialogTitle className="text-2xl font-headline text-primary">{title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {shortDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Introduction</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">{details.introduction}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                  {details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full shadow-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">Outcome</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">{details.outcome}</p>
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
