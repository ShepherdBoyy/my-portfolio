import type { SearchInputProps } from "@/types"
import { Search, X } from "lucide-react"

export default function SearchInput({ value, onChange }: SearchInputProps) {
    
  return (
    <div className="relative flex items-center">
        <Search
            size={15}
            className="absolute left-3.5 text-muted pointer-events-none"
        />

        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search projects..."
            className="w-full sm:w-64 bg-surface border border-border/60 rounded-xl pl-10 pr-9 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/60 focus:bg-surface transition-all duration-200"
        />

        {value && (
            <button
                onClick={() => onChange("")}
                className="absolute right-3 text-muted hover:text-text transition-colors duration-200 cursor-pointer"
                aria-label="Clear search"
            >
                <X size={14} />
            </button>
        )}
    </div>
  )
}