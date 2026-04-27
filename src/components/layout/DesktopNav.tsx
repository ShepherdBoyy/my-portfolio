import type { DesktopNavProps } from "@/types";

export default function DesktopNav({
  navItems,
  isActive,
  onNavClick,
}: DesktopNavProps) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[115rem] mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => onNavClick("home")}
          className="text-accent font-bold text-2xl tracking-widest uppercase cursor-pointer"
        >
          Logo
        </button>

        <ul className="hidden md:flex items-center gap-20">
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

        <button
          onClick={() => onNavClick("contact")}
          className="bg-accent hover:bg-accent-hover text-text text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
