import { featuredProjects } from "@/data/projects.data"
import { useNavigate } from "react-router-dom"
import FeaturedCard from "./elements/projects/FeaturedCard"
import ProjectCard from "./elements/projects/ProjectCard"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const navigate = useNavigate()
  const spotlight = featuredProjects[0]
  const gridItems = featuredProjects.slice(1, 4)

  return (
    <div className="">
      <div className="w-full flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <span className="w-10 h-[3px] bg-accent rounded-full" />
          <h2 className="text-3xl xl:text-4xl rounded-full">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>
        
        {spotlight && (
          <FeaturedCard project={spotlight} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridItems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-3 bg-surface border border-border/60 hover:border-accent/40 text-text text-sm font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer gruop"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}