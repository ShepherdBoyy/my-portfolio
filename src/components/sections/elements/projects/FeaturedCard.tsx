import type { FeaturedCardProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturedCard({ project }: FeaturedCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="group relative w-full rounded-3xl overflow-hidden border border-border/60 bg-surface/80 backdrop-blur-md cursor-pointer transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-[55%] h-56 lg:h-72 overflow-hidden bg-elevated flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center bg-elevated">
            <span className="text-muted text-sm">Project Image</span>
          </div>

          {/* <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          /> */}
        </div>

        <div className="flex-1 flex flex-col justify-between p-5 lg:p-7">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-wide uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-border/20">
                {project.category}
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-muted bg-surface px-3 py-1 rounded-full border border-border/60">
                {project.platform}
              </span>
            </div>

            <h3 className="text-text text-2xl lg:text-3xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted text-sm lg:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-muted bg-elevated px-3 py-1 rounded-lg border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border/40">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, "_blank")
                }}
                className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-text transition-colors duration-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                
                <span>Code</span>
              </button>

              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                <span>View Details</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
