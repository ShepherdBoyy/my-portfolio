import {
  getNextProject,
  getPreviousProject,
  getProjectBySlug,
} from "@/data/projects.data";
import ImageSlider from "./elements/ImageSlider";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Show() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) {
    navigate("/projects");
    return null;
  }
  const project = getProjectBySlug(slug);
  const prev = getPreviousProject(slug);
  const next = getNextProject(slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-80">
        <div className="w-16 h-16 bg-surface rounded-2xl border border-border/60 flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-text text-xl font-bold">Project not found</h2>
          <p className="text-muted text-sm">
            The project you're looking for doesn't exist
          </p>
        </div>

        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-text text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-6 sm:px-12 xl:px-24 py-10 gap-10">
      <button
        onClick={() => navigate("/projects")}
        className="flex items-center gap-2 text-muted hover:text-text text-sm font-semibold transition-colors duration-200 cursor-pointer w-fit group"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        <span>Back to projects</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="w-full lg:w-[55%] shrink-0">
          <ImageSlider images={project.images} title={project.title} />
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold tracking-wide uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                {project.category}
              </span>

              <span className="text-xs font-semibold tracking-wide uppercase text-muted bg-surface px-3 py-1.5 rounded-full border border-border/60">
                {project.platform}
              </span>
            </div>

            <h1 className="text-3xl xl:text-4xl font-bold text-text leading-tight">
              {project.title}
            </h1>
          </div>

          <div className="h-px bg-border/40" />

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent">
              About This Project
            </h2>

            <p className="text-muted text-sm leading-relaxed">
              {project.details}
            </p>
          </div>

          <div className="h-px bg-border/40" />

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold text-text bg-elevated px-3 py-2 rounded-xl border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/40" />

          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex items-center justify-center gap-2 w-full bg-surface hover:bg-elevated border-border/60 hover:border-accent/40 text-text font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
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
            <span>View on Github</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {prev ? (
          <button
            onClick={() => navigate(`/projects/${prev.slug}`)}
            className="group flex items-center gap-3 bg-surface border border-border/60 hover:border-accent/40 rounded-2xl px-5 py-4 transition-all duration-200 cursor-pointer max-w-[45%]"
          >
            <ArrowLeft
              size={18}
              className="text-muted group-hover:text-accent shrink-0 transition-all duration-200 group-hover:-translate-x-1"
            />

            <div className="flex flex-col items-start gap-0.5 overflow-hidden">
              <span className="text-muted text-xs font-medium">Previous</span>
              <span className="text-text text-sm font-bold truncate w-full">
                {prev.title}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {next ? (
          <button
            onClick={() => navigate(`/projects/${next.slug}`)}
            className="group flex items-center gap-3 bg-surface border border-border/60 hover:border-accent/40 rounded-2xl px-5 py-4 transition-all duration-200 cursor-pointer max-w-[45%]"
          >
            <div className="flex flex-col items-end gap-0.5 overflow-hidden">
              <span className="text-muted text-xs font-medium">Next</span>
              <span className="text-text text-sm font-bold truncate w-full">
                {next.title}
              </span>
            </div>

            <ArrowRight
              size={18}
              className="text-muted group-hover:text-accent shrink-0 transition-all duration-200 group-hover:-translate-x-1"
            />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
