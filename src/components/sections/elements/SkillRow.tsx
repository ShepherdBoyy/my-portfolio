import type { Skill } from "@/types";

export default function SkillRow({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain gap-3" />
          <span className="text-text text-sm font-medium tracking-wide">{skill.name}</span>
        </div>

        <span className="text-accent text-sm font-semibold">{skill.percentage}%</span>
      </div>

      <div className="relative w-full h-[6px] bg-elevated rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${skill.percentage}%` : "0%" }}
        />
      </div>
    </div>
  )
}
