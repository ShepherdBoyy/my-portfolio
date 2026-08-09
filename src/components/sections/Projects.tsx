import { featuredProjects } from "@/data/projects.data"
import { useNavigate } from "react-router-dom"
import FeaturedCard from "./elements/projects/FeaturedCard"
import ProjectCard from "./elements/projects/ProjectCard"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, scaleUp, staggerContainer, viewport } from "@/utils/animations.utils"

export default function Projects() {
  const navigate = useNavigate()
  const spotlight = featuredProjects[0]
  const gridItems = featuredProjects.slice(1, 4)

  return (
    <div className="flex-1 min-h-0 flex items-center px-6 sm:px-12 xl:px-24 py-5">
      <div className="w-full flex flex-col gap-5">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex items-center gap-4">
            <span className="w-10 h-0.75 bg-accent rounded-full" />
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
              My <span className="text-accent">Projects</span>
            </h2>
          </div>

          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-all duration-200 cursor-pointer group pl-14 sm:pl-0"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
        
        {spotlight && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <FeaturedCard project={spotlight} />
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {gridItems.map((project) => (
            <motion.div key={project.slug} variants={scaleUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}