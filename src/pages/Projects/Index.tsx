import { ArrowLeft, X } from "lucide-react";
import SearchInput from "./elements/SearchInput";
import { useMemo, useState } from "react";
import PlatformDropdown from "./elements/PlatformDropdown";
import type { ProjectCategory, ProjectPlatform } from "@/types";
import CategoryPills from "./elements/CategoryPills";
import { projects } from "@/data/projects.data";
import ProjectCard from "@/components/sections/elements/projects/ProjectCard";
import Pagination from "./elements/Pagination";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  cardVariant,
  fadeUp,
  staggerContainer,
} from "@/utils/animations.utils";

const ITEMS_PER_PAGE = 12;

export default function Index() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activePlatform, setActivePlatform] = useState<ProjectPlatform>("All");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const navigate = useNavigate();

  const isFiltered: boolean =
    searchQuery !== "" || activeCategory !== "All" || activePlatform !== "All";

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesPlatform =
        activePlatform === "All" || project.platform === activePlatform;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPlatform && matchesSearch;
    });
  }, [searchQuery, activeCategory, activePlatform]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    return filteredProjects.slice(start, end);
  }, [filteredProjects, currentPage]);

  const handleSearchChange = (value: string): void => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePlatformChange = (platform: ProjectPlatform): void => {
    setActivePlatform(platform);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: ProjectCategory): void => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleClearFilters = (): void => {
    setSearchQuery("");
    setActiveCategory("All");
    setActivePlatform("All");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col px-6 sm:px-12 xl:px-24 py-10">
      <div className="flex flex-col gap-6">
        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className="flex items-center gap-2 text-muted hover:text-text text-sm font-semibold transition-colors duration-200 cursor-pointer w-fit group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          <span>Back</span>
        </motion.button>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
            All <span className="text-accent">Projects</span>
          </h1>

          <div className="w-full sm:w-auto">
            <SearchInput value={searchQuery} onChange={handleSearchChange} />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3">
            <PlatformDropdown
              activePlatform={activePlatform}
              onPlatformChange={handlePlatformChange}
            />

            {isFiltered && (
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-text transition-colors duration-200 cursor-pointer whitespace-nowrap ml-auto"
              >
                <X size={14} />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          <div className="w-full">
            <CategoryPills
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </motion.div>

        {paginatedProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            className="flex-1 flex flex-col items-center justify-center gap-5 py-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface border border-border/60 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>

            <div className="text-center space-y-2">
              <p className="text-text font-semibold">No projects found</p>
              <p className="text-muted text-sm">
                Try a different search or clear your filters
              </p>
            </div>

            <button
              onClick={handleClearFilters}
              className="flex items-center gap-2 bg-surface border border-border/60 hover:border-accent/40 text-text text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <X size={14} />
              <span>Clear Filters</span>
            </button>
          </motion.div>
        )}

        <div className="mt-auto pt-8">
          <Pagination
            currentPage={currentPage}
            totalItems={filteredProjects.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
