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
    <div className="min-h-screen flex items-center px-6 sm:px-12 lg:py-26 xl:px-24 lg:pt-0">
      <div className="w-full flex flex-col gap-5 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-10 h-[3px] bg-accent rounded-full" />
            <h2 className="text-3xl xl:text-4xl font-bold">
              My <span className="text-accent">Projects</span>
            </h2>
          </div>

          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-all duration-200 cursor-pointer group"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
        
        {spotlight && (
          <FeaturedCard project={spotlight} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridItems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}