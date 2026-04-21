import type { NavItem } from "@/types/navbar.types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems: NavItem[] = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string): void => {
    setIsOpen(false)

    if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        }, 100)
        return
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observers: IntersectionObserver[] = []

    navItems.forEach(({ sectionId }) => {
        const element = document.getElementById(sectionId)
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setActiveSection(sectionId)
            }
        }, { threshold: 0.5 })

        observer.observe(element)
        observers.push(observer)
    })

    return () => {
        observers.forEach(observer => observer.disconnect())
    }
  }, [location.pathname])

  const isActive = (sectionId: string): boolean => {
    return location.pathname === "/" && activeSection === sectionId
  }

  return (
    <nav className="sticky top-0 z-50 bg-charcoal">
      <div className="max-w-[115rem] mx-auto px-4 py-8 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="text-secondary font-bold text-2xl tracking-widest uppercase cursor-pointer"
        >
          Logo
        </button>

        <ul className="hidden md:flex items-center gap-20">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => handleNavClick(item.sectionId)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer
                    ${isActive(item.sectionId)
                        ? "text-secondary"
                        : "text-text-muted hover:text-text-primary"
                    }`
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
        >
          {isOpen ? "Hello" : "Hi"}
        </button>
      </div>
    </nav>
  );
}
