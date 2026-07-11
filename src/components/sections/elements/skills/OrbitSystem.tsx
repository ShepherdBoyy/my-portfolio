import type { Direction, Orbit } from "@/types";
import { useState } from "react";
import SatelliteIcon from "./SatelliteIcon";

export default function OrbitSystem({
  category,
  size,
  sunSize,
  innerRadius,
  outerRadius,
  innerIconSize,
  outerIconSize,
  innerDuration,
  outerDuration,
  isMobile,
  focused,
  dimmed,
  onToggleFocus
}: Orbit) {
  const Icon = category.icon;
  const mid = Math.ceil(category.skills.length / 2);
  const innerSkills = category.skills.slice(0, mid);
  const outerSkills = category.skills.slice(mid)

  const [pausedRing, setPausedRing] = useState<"inner" | "outer" | "single" | null>(null);
  const [sunHovered, setSunHovered] = useState(false);

  const ringList = isMobile
    ? [{
      key: "single" as const,
      skills: category.skills,
      radius: innerRadius,
      iconSize: innerIconSize,
      duration: innerDuration,
      direction: "cw" as Direction
    }]
    : [
      {
        key: "inner" as const,
        skills: innerSkills,
        radius: innerRadius,
        iconSize: innerIconSize,
        duration: innerDuration,
        direction: "cw" as Direction
      },
      {
        key: "outer" as const,
        skills: outerSkills,
        radius: outerRadius,
        iconSize: outerIconSize,
        duration: outerDuration,
        direction: "ccw" as Direction
      }
    ]

  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-500 ease-out
        ${dimmed ? "opacity-30 scale-95" : "opacity-100"}
        ${focused ? "scale-105 z-10" : ""}
      `}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute rounded-full pointer-events-none blur-3xl transition-opacity duration-500"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          background: "radial-gradient(circle, var(--accent, #6366f1) 0%, transparent 70%",
          opacity: focused || sunHovered ? 0.22 : 0.1
        }}
      />

      {ringList.map((r) => (
        <div
          key={`guide-${r.key}`}
          className="absolute rounded-full border border-dashed border-accent/10 pointer-events-none"
          style={{ width: r.radius * 2, height: r.radius * 2 }}
        />
      ))}

      {ringList.map((r) => (
        <div
          key={r.key}
          className={`absolute inset-0 pointer-events-none ${
            pausedRing === r.key ? "z-20" : "z-0"
          }`}
          style={{
            animationName: `orbit-${r.direction}`,
            animationDuration: `${r.duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationPlayState: pausedRing === r.key ? "paused" : "running"
          }}
        >
          {r.skills.map((skill, i) => (
            <SatelliteIcon
              key={skill.name}
              skill={skill}
              angle={(360 / r.skills.length) * i - 90}
              radius={r.radius}
              size={r.iconSize}
              duration={r.duration}
              direction={r.direction}
              paused={pausedRing === r.key}
              onEnter={() => setPausedRing(r.key)}
              onLeave={() => setPausedRing(null)}
            />
          ))}
        </div>
      ))}

      <button
        onClick={onToggleFocus}
        onMouseEnter={() => setSunHovered(true)}
        onMouseLeave={() => setSunHovered(false)}
        className="relative z-10 rounded-full bg-elevated/90 backdrop-blur-md flex flex-col items-center justify-center gap-1 px-2 transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_28px_-4px_rgba(0,0,0,0.55),0_0_40px_-4px_var(--tw-shadow-color)] hover:shadow-accent/50"
        style={{ width: sunSize, height: sunSize }}
      >
        <Icon size={isMobile ? 18 : 22} className="text-accent" />
        <span className="text-[8px] sm:text-[10px] font-bold tracking-wide text-text uppercase leading-tight text-center">
          {category.title}
        </span>
      </button>
    </div>
  )
}