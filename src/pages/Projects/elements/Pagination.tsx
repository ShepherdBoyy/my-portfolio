import type { PaginationProps } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const firstItem: number = (currentPage - 1) * itemsPerPage + 1;
  const lastItem: number = Math.min(currentPage * itemsPerPage, totalItems);

  const pageNumbers: number[] = Array.from(
    { length: totalPages },
    (_, i) => i + 1,
  );

  if (totalPages <= 1 && totalItems <= itemsPerPage) {
    return (
        <div className="flex items-center justify-between">
            <p className="text-muted text-sm">
                Showing{" "}
                <span className="text-text font-semibold">{totalItems}</span>{" "}
                {totalItems === 1 ? "project" : "projects"}
            </p>
        </div>
    )
  }

  return (
    <div className="flex items-center justify-between">
        <p className="text-muted text-sm">
            Showing{" "}
            <span>{firstItem}-{lastItem}</span>
            {" "}of{" "}
            <span className="text-text font-semibold">{totalItems}</span>
            {" "}{totalItems === 1 ? "project" : "projects"}
        </p>

        <div className="flex items-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200
                    ${currentPage === 1
                        ? "border-border/30 text-muted/40 cursor-not-allowed"
                        : "border-border/60 text-muted hover:text-text hover:border-border cursor-pointer"
                    }
                `}
            >
                <ChevronLeft size={16} />
            </button>

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-9 h-9 f lex items-center rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer
                        ${currentPage === page
                            ? "bg-accent border-accent text-text shadow-lg shadow-accent/20"
                            : "bg-surface border-border/60 text-muted hover:text-text hover:border-border"
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200
                    ${currentPage === totalPages
                        ? "border-border/30 text-muted/40 cursor-not-allowed"
                        : "border-border/60 text-muted hover:text-text hover:border-border cursor-pointer"
                    }
                `}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    </div>
  );
}
