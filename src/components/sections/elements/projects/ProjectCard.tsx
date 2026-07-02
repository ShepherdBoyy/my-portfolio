import type { ProjectCardProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-border/60 bg-surface/80 backdrop-blur-md cursor-pointer h-full transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      <div className="relative w-full h-55 overflow-hidden bg-elevated shrink-0">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold tracking-wide uppercase bg-surface/90 backdrop-blur-sm text-accent px-3 py-1 rounded-full border border-accent/20">
            {project.category}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold tracking-wide bg-surface/90 backdrop-blur-sm text-muted px-3 py-1 rounded-full border border-border/60">
            {project.platform}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 p-5">
        <h3 className="text-text text-base font-bold leading-snug group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted text-xs leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-muted bg-elevated px-3 py-1 rounded-lg border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="h-px bg-border/40" />

        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.githubUrl, "_blank")
            }}
            className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-text transition-colors duration-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span>Code</span>
          </button>

          <div className="flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2 transtion-all duration-300">
            <span>Details</span>
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  )
}