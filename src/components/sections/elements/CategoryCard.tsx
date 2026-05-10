import type { SkillCategory } from "@/types";
import SkillRow from "./SkillRow";

export default function CategoryCard({
  category,
  index,
  animate,
}: {
  category: SkillCategory;
  index: number;
  animate: boolean;
}) {
  const Icon = category.icon;
  const isLarge = category.skills.length >= 5;

  return (
    <div
      className={`relative bg-surface rounded-3xl p-8 flex flex-col gap-6 transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon className="text-accent" />
        </div>
        <h3 className="text-text text-lg font-semibold tracking-wide">
          {category.title}
        </h3>
      </div>

      <div
        className={`grid gap-x-8 gap-y-6 ${isLarge ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
      >
        {category.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} animate={animate} />
        ))}
      </div>
    </div>
  );
}
