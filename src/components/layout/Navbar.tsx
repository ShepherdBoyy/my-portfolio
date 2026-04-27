import type { NavItem } from "@/types"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useWindowSize } from "@/hooks/useWindowSize"
import DesktopNav from "./DesktopNav"
import MobileSidebar from "./MobileSidebar"

const navItems: NavItem[] = [
  { label: "Home",       sectionId: "home"       },
  { label: "About",      sectionId: "about"      },
  { label: "Skills",     sectionId: "skills"     },
  { label: "Projects",   sectionId: "projects"   },
  { label: "Experience", sectionId: "experience" },
  { label: "Contact",    sectionId: "contact"    },
]

export default function Navbar() {
  const [isOpen, setIsOpen]               = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const location  = useLocation()
  const navigate  = useNavigate()
  const { width } = useWindowSize()

  const isMobile: boolean = width < 768
  const sidebarOpen: boolean = isMobile && isOpen;

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [sidebarOpen])

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
  }

  useEffect(() => {
    if (location.pathname !== "/") return

    const observers: IntersectionObserver[] = []

    navItems.forEach(({ sectionId }) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId)
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => { observers.forEach(o => o.disconnect()) }
  }, [location.pathname])

  const isActive = (sectionId: string): boolean =>
    location.pathname === "/" && activeSection === sectionId

  const sharedProps = {
    navItems,
    isActive,
    onNavClick: handleNavClick,
  }

  return isMobile
    ? <MobileSidebar
        {...sharedProps}
        isOpen={sidebarOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    : <DesktopNav {...sharedProps} />
}