import { SIZES, skillCategories } from "@/data/skills.data";
import { useEffect, useRef, useState } from "react";
import OrbitSystem from "./elements/skills/OrbitSystem";
import type { Breakpoint } from "@/types";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
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
    };
  }, []);

  const isMobile = breakpoint === "mobile";
  const cfg = SIZES[breakpoint];

  return (
    <div
      ref={ref}
      onClick={(e) => {
        if (e.target === e.currentTarget) setFocusedIndex(null);
      }}
      className="relative flex-1 min-h-0 flex flex-col items-center justify-center px-6 sm:px-12 xl:px-24 py-10 overflow-hidden"
    >
      <style>{`
        @keyframes orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-ccw { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
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
        className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="w-10 h-0.75 bg-accent rounded-full" />
        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
          Tech <span className="text-accent">Stack</span>
        </h2>
      </div>

      <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-8 sm:gap-y-10 xl:gap-y-16 gap-x-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <OrbitSystem
              category={category}
              size={cfg.size}
              sunSize={cfg.sunSize}
              innerRadius={cfg.innerRadius}
              outerRadius={cfg.outerRadius}
              innerIconSize={cfg.innerIconSize}
              outerIconSize={cfg.outerIconSize}
              innerDuration={cfg.innerDuration}
              outerDuration={cfg.outerDuration}
              isMobile={isMobile}
              focused={focusedIndex === index}
              dimmed={focusedIndex !== null && focusedIndex !== index}
              onToggleFocus={() => setFocusedIndex(focusedIndex === index ? null : index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}