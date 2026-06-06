import { getCategories } from "@/data/projects.data";
import type { CategoryPillProps, ProjectCategory } from "@/types";

export default function CategoryPills({
  activeCategory,
  onCategoryChange,
}: CategoryPillProps) {
  const categories = getCategories() as ProjectCategory[];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer
                    ${
                      activeCategory === category
                        ? "bg-accent text-text shadow-lg shadow-accent/20"
                        : "bg-surface border border-border/60 text-muted hover:text-text hover:border-border"
                    }
                `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
