import { skillCategories } from "@/data/skills.data";
import CategoryCard from "./elements/skills/CategoryCard";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])
  
  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center px-6 sm:px-12 xl:px-24 lg:py-26 pt-12 lg:pt-0">
      <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <span className="w-10 h-0.75 bg-accent rounded-full" />
        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
          Tech <span className="text-accent">Stack</span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <CategoryCard
            key={category.title}
            category={category}
            index={index}
            animate={visible}
          />
        ))}
      </div>
    </div>
  )
}