import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";

export type ResearchProjectSectionDetails = {
  situation: string;
  task: string;
  actions?: (string | { name: string; points: string[] })[];
  results?: string[];
  technologies?: string[];
  metrics?: string[];
};

export type ResearchProjectSectionProps = {
  id: string;
  title: string;
  shortDescription: string;
  details: ResearchProjectSectionDetails;
};

export function ResearchProjectSection({ id, title, shortDescription, details }: ResearchProjectSectionProps) {
  const d = details as any;
  return (
  <Card id={id} className="mb-8 md:mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-foreground/90 leading-relaxed">
        <MarkdownRenderer content={shortDescription} />
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90vw] max-w-6xl bg-background text-foreground p-0 rounded-lg">
            <DialogHeader className="p-6 pb-4 border-b">
              <DialogTitle className="text-2xl font-headline text-primary">{title}</DialogTitle>
            </DialogHeader>
            <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
              <section>
                <h3 className="font-semibold text-lg text-primary mb-1">Situation</h3>
                <MarkdownRenderer content={d.situation} />
              </section>
              <section>
                <hr /><br />
                <h3 className="font-semibold text-lg text-primary mb-1">Task</h3>
                <MarkdownRenderer content={d.task} />
              </section>
              {d.actions && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Action{d.actions.length > 1 ? 's' : ''}</h3>
                  {typeof d.actions[0] === 'string' ? (
                    <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                      {(d.actions as string[]).map((a: string, i: number) => (
                        <li key={i}><MarkdownRenderer content={a} /></li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2">
                      {(d.actions as { name: string; points: string[] }[]).map((a: any, i: number) => (
                        <div key={i}>
                          <h4 className="font-semibold text-md text-primary/90">{a.name}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                            {a.points.map((p: string, pi: number) => (
                              <li key={pi}><MarkdownRenderer content={p} /></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}
              {d.results && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Result{d.results.length > 1 ? 's' : ''}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                    {d.results.map((r: string, i: number) => (
                      <li key={i}><MarkdownRenderer content={r} /></li>
                    ))}
                  </ul>
                </section>
              )}
              {d.technologies && d.technologies.length > 0 && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {d.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full shadow-sm">{tech}</span>
                    ))}
                  </div>
                </section>
              )}
              {d.metrics && d.metrics.length > 0 && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Key Metrics</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                    {d.metrics.map((m: string, i: number) => (
                      <li key={i}><MarkdownRenderer content={m} /></li>
                    ))}
                  </ul>
                </section>
              )}
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
