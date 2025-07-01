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

export type MLProjectSectionProps = {
  id: string;
  title: string;
  shortDescription: string;
  details: {
    introduction: string;
    tools?: { name: string; points: string[] }[];
    goal?: string[];
    solutions?: (string | { name: string; points: string[] })[];
    findings?: string[];
    takeaways?: (string | { name: string; points: string[] })[];
    achievements?: { name: string; points: string[] }[];
    challenges?: { name: string; points: string[] }[];
    impact?: string[];
    collaboration?: string;
    conclusion?: string;
  };
};

export function MLProjectSection({ id, title, shortDescription, details }: MLProjectSectionProps) {
  const typedDetails = details as any;

  return (
    <Card id={id} className="mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
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
                <h3 className="font-semibold text-lg text-primary mb-1">Introduction</h3>
                <MarkdownRenderer content={typedDetails.introduction} />
              </section>
              {typedDetails.tools && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Tools</h3>
                  <div className="space-y-2">
                    {typedDetails.tools.map((tool: any, index: number) => (
                      <div key={index}>
                        <h4 className="font-semibold text-md text-primary/90">{tool.name}</h4>
                        <ul className="list-disc list-inside space-y-1 text-base text-foreground/90">
                          {tool.points.map((point: string, pIndex: number) => (
                            <li key={pIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {typedDetails.goal && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Goal</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                    {typedDetails.goal.map((item: string, index: number) => (
                      <li key={index}><MarkdownRenderer content={item} /></li>
                    ))}
                  </ul>
                </section>
              )}
              {typedDetails.solutions && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Solutions</h3>
                  {typeof typedDetails.solutions[0] === 'string' ? (
                    <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                      {(typedDetails.solutions as string[]).map((solution, index) => (
                        <li key={index}><MarkdownRenderer content={solution} /></li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2">
                      {(typedDetails.solutions as { name: string; points: string[] }[]).map((solution, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-md text-primary/90">{solution.name}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                            {solution.points.map((point, pIndex) => (
                              <li key={pIndex}><MarkdownRenderer content={point} /></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}
              {typedDetails.achievements && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Achievements</h3>
                  <div className="space-y-2">
                    {typedDetails.achievements.map((achievement: any, index: number) => (
                      <div key={index}>
                        <h4 className="font-semibold text-md text-primary/90">{achievement.name}</h4>
                        <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                          {achievement.points.map((point: string, pIndex: number) => (
                            <li key={pIndex}><MarkdownRenderer content={point} /></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {typedDetails.challenges && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Challenges</h3>
                  <div className="space-y-2">
                    {typedDetails.challenges.map((challenge: any, index: number) => (
                      <div key={index}>
                        <h4 className="font-semibold text-md text-primary/90">{challenge.name}</h4>
                        <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                          {challenge.points.map((point: string, pIndex: number) => (
                            <li key={pIndex}><MarkdownRenderer content={point} /></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {typedDetails.impact && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Impact</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                    {typedDetails.impact.map((item: string, index: number) => (
                      <li key={index}><MarkdownRenderer content={item} /></li>
                    ))}
                  </ul>
                </section>
              )}
              {typedDetails.findings && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Findings</h3>
                  <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                    {typedDetails.findings.map((finding: string, index: number) => (
                      <li key={index}><MarkdownRenderer content={finding} /></li>
                    ))}
                  </ul>
                </section>
              )}
              {typedDetails.takeaways && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Takeaways</h3>
                  {typeof typedDetails.takeaways[0] === 'string' ? (
                    <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                      {(typedDetails.takeaways as string[]).map((takeaway, index) => (
                        <li key={index}><MarkdownRenderer content={takeaway} /></li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2">
                      {(typedDetails.takeaways as { name: string; points: string[] }[]).map((takeaway, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-md text-primary/90">{takeaway.name}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-base text-foreground/90">
                            {takeaway.points.map((point, pIndex) => (
                              <li key={pIndex}><MarkdownRenderer content={point} /></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}
              {typedDetails.collaboration && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Collaboration</h3>
                  <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-line">{typedDetails.collaboration}</p>
                </section>
              )}
              {typedDetails.conclusion && (
                <section>
                  <hr /><br />
                  <h3 className="font-semibold text-lg text-primary mb-1">Conclusion</h3>
                  <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-line">{typedDetails.conclusion}</p>
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
