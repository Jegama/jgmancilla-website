import { Badge } from "@/components/ui/badge";

type SkillCategoryProps = {
  name: string;
  skills: string[];
};

export function SkillCategory({ name, skills }: SkillCategoryProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm px-3 py-1 shadow-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
