import type { MobileSidebarProps } from "@/types";
import { Menu, X } from "lucide-react";

export default function MobileSidebar({
  navItems,
  isActive,
  onNavClick,
  isOpen,
  onOpen,
  onClose,
}: MobileSidebarProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <button
        onClick={onOpen}
        className={`absolute top-6 right-6 text-text cursor-pointer pointer-events-auto transition-opacity duration-200
                ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
      >
        <Menu />
      </button>

      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
      />

      <div className={`absolute top-0 right-0 h-full w-72 bg-surface flex flex-col px-6 py-8 gap-8 transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}
        `}>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => onNavClick("home")}
            className="cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-50"
            />
          </button>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-muted hover:text-text transition-colors duration-200 cursor-pointer"
            aria-label="Close Menu"
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => onNavClick(item.sectionId)}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer
                    ${
                      isActive(item.sectionId)
                        ? "text-accent"
                        : "text-muted hover:text-accent hover:scale-130"
                    }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
            <button
                onClick={() => onNavClick("contact")}
                className="w-full bg-accent hover:bg-accent-hover text-text text-sm font-semibold px-5 py-3 rounded-md transition-all duration-300 cursor-pointer"
            >
                Hire Me
            </button>
        </div>
      </div>
    </div>
  );
}
