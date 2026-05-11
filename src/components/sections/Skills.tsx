import { skillCategories } from "@/data/skills.data";
import CategoryCard from "./elements/CategoryCard";
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
    <div ref={ref} className="min-h-screen flex md:block lg:flex items-center px-6 sm:px-12 xl:px-24 lg:py-26 pt-12 lg:pt-0">
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