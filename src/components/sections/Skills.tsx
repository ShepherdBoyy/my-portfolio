import { useEffect, useRef, useState } from "react";
import TechOrbitSystem from "./elements/skills/TechOrbitSystem";
import type { Breakpoint } from "@/types";
import { TECH_ORBIT } from "@/data/skills.data";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 639px)");
    const tabletMq = window.matchMedia(
      "(min-width: 640px) and (max-width: 1279px)",
    );

    const update = () => {
      if (mobileMq.matches) setBreakpoint("mobile");
      else if (tabletMq.matches) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };
    update();

    mobileMq.addEventListener("change", update);
    tabletMq.addEventListener("change", update);

    return () => {
      mobileMq.removeEventListener("change", update);
      tabletMq.removeEventListener("change", update);
    }
  }, []);

  const cfg = TECH_ORBIT[breakpoint];

  return (
    <div
      ref={ref}
      className="relative flex-1 min-h-0 flex items-center justify-center px-6 sm:px-12 xl:px-24 overflow-hidden"
    >
      <style>{`
        @property --a {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes orbit-revolve-cw { from { --a: 0deg; } to { --a: 360deg; } }
        @keyframes orbit-revolve-ccw { from { --a: 0deg; } to { --a: -360deg; } }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <TechOrbitSystem
          size={cfg.size}
          sunSize={cfg.sunSize}
          rings={cfg.rings}
        />
      </div>
    </div>
  );
}
