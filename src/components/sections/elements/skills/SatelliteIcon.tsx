import type { SkillIcon } from "@/types";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

type SatelliteIconProps = SkillIcon & {
  entranceVariant: Variants
}

export default function SatelliteIcon({
  skill,
  angle,
  radius,
  size,
  duration,
  direction,
  paused,
  onEnter,
  onLeave,
  entranceVariant
}: SatelliteIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`absolute top-1/2 left-1/2 pointer-events-none ${hovered ? "z-30" : "z-0"}`}
      style={{
        width: size,
        height: size,
        marginTop: -size / 2,
        marginLeft: -size / 2,
        ["--base-angle" as string]: `${angle}deg`,
        animationName: `orbit-revolve-${direction}`,
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationPlayState: paused ? "paused" : "running",
        transform: `rotate(calc(var(--base-angle) + var(--a, 0deg))) translate(${radius}px) rotate(calc(-1 * (var(--base-angle) + var(--a, 0deg))))`
      } as React.CSSProperties}
    >
      <motion.div
        variants={entranceVariant}
        className="w-full h-full"
      >
        <div
          onMouseEnter={() => {
            setHovered(true);
            onEnter();
          }}
          onMouseLeave={() => {
            setHovered(false);
            onLeave();
          }}
          className={`relative w-full h-full rounded-2xl pointer-events-auto cursor-pointer bg-elevated/80 backdrop-blur-md
            flex items-center justify-center transition-all duration-300 ease-out ${
              hovered
                ? "scale-105 bg-accent/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_24px_-4px_rgba(0,0,0,0.5),0_0_28px_-2px_var(--tw-shadow-color)] shadow-accent/50"
                : "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_14px_-2px_rgba(0,0,0,0.45)]"
            }`}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-2/3 h-2/3 object-contain relative z-10 transition-transform duration-300"
          />

          <div
            className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 bg-linear-to-br from-white/6 to-transparent ${
              hovered ? "opacity-100" : "opacity-60"
            }`}
          />

          <div
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-text
            bg-elevated/90 backdrop-blur-md px-2.5 py-1 rounded-lg pointer-events-none z-50 transition-all duration-200 ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            {skill.name}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-elevated/90" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
