import type { PlatformDropdownProps, ProjectPlatform } from "@/types";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const platforms: ProjectPlatform[] = ["All", "Website", "Mobile", "Desktop"];

export default function PlatformDropdown({
  activePlatform,
  onPlatformChange,
}: PlatformDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isFiltered: boolean = activePlatform !== "All";
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (platform: ProjectPlatform): void => {
    onPlatformChange(platform);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer
            ${
              isFiltered
                ? "bg-accent/10 border-accent/40 text-accent"
                : "bg-surface border-border/60 text-muted hover:text-text hover:border-border"
            }`}
      >
        <span>
          Platform
          {activePlatform === "All" ? "Platform" : activePlatform}
        </span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-surface border border-border/60 rounded-2xl shadow-black/30 z-40 overflow-hidden">
          {platforms.map((platform) => (
            <button
                key={platform}
                onClick={() => handleSelect(platform)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer
                    ${
                        activePlatform === platform
                            ? "text-accent bg-accent/10"
                            : "text-muted hover:text-text hover:bg-elevated"
                    }
                `}
            >
              <span>{platform}</span>
              {activePlatform === platform && (
                <Check size={14} className="text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
