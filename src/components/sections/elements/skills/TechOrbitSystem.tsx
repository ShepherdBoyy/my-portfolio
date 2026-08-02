import { orbitRings } from "@/data/skills.data";
import type { TechOrbitProps } from "@/types";
import { useState } from "react";
import SatelliteIcon from "./SatelliteIcon";
import { motion } from "framer-motion";
import { ringVariant, satelliteGroupVariant, satelliteVariant, sunVariant } from "@/utils/animations.utils";

export default function TechOrbitSystem({
  size,
  sunSize,
  rings,
}: TechOrbitProps) {
  const [pausedRing, setPausedRing] = useState<number | null>(null);
  const [sunHovered, setSunHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute rounded-full pointer-events-none blur-3xl transition-opacity duration-500"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          background: "radial-gradient(circle, var(--accent, #6366f1) 0%, transparent 70%)",
          opacity: sunHovered ? 0.25 : 0.12
        }}
      />

      {rings.map((r, i) => (
        <motion.div
          key={`guide-${i}`}
          className="absolute rounded-full border border-dashed border-accent/10 pointer-events-none"
          style={{ width: r.radius * 2, height: r.radius * 2 }}
          variants={ringVariant}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      ))}

      {rings.map((r, i) => (
        <motion.div
          key={`ring-${i}`}
          variants={satelliteGroupVariant}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {orbitRings[i]?.map((skill, j) => (
            <SatelliteIcon
              key={skill.name}
              skill={skill}
              angle={(360 / orbitRings[i].length) * j - 90}
              radius={r.radius}
              size={r.iconSize}
              duration={r.duration}
              direction={r.direction}
              paused={pausedRing === i}
              onEnter={() => setPausedRing(i)}
              onLeave={() => setPausedRing(null)}
              entranceVariant={satelliteVariant}
            />
          ))}
        </motion.div>
      ))}

      <motion.div
        onMouseEnter={() => setSunHovered(true)}
        onMouseLeave={() => setSunHovered(false)}
        className="relative z-10 rounded-full bg-elevated/90 backdrop-blur-md border border-accent/20 flex flex-col
          items-center justify-center transition-all duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_28px_-4px_rgba(0,0,0,0.55),0_0_50px_-4px_var(--tw-shadow-color)]
          hover:shadow-accent/50"
        style={{ width: sunSize, height: sunSize }}
        variants={sunVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-text font-extrabold uppercase tracking-wide text-center leading-tight text-base sm:text-xl xl:text-2xl">
          Tech <br />
          Stack
        </span>
      </motion.div>
    </div>
  );
}
