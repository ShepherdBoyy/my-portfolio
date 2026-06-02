import type { Project } from "@/types";
import { generateSlug } from "@/utils/slug";

const project = (p: Omit<Project, "slug">): Project => ({
    ...p,
    slug: generateSlug(p.title)
});

export const projects: Project[] = [
  project({
    title:       "Portfolio Website",
    description: "My personal portfolio website built with React and TypeScript.",
    details:     "A fully responsive personal portfolio website showcasing my skills, experience, and projects. Built with modern web technologies and best practices in mind.",
    images:      [
      "/projects/portfolio/img1.jpg",
      "/projects/portfolio/img2.jpg",
      "/projects/portfolio/img3.jpg",
    ],
    category:    "Frontend",
    platform:    "Website",
    techStack:   ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl:   "https://github.com/yourusername/portfolio",
    isFeatured:  true,
  }),
  project({
    title:       "E-Commerce App",
    description: "A full stack e-commerce platform with cart and checkout.",
    details:     "A complete e-commerce solution with product listings, cart management, user authentication, and checkout flow. Features a responsive design and real-time inventory updates.",
    images:      [
      "/projects/ecommerce/img1.jpg",
      "/projects/ecommerce/img2.jpg",
    ],
    category:    "Full Stack",
    platform:    "Website",
    techStack:   ["React", "Node.js", "Express", "PostgreSQL"],
    githubUrl:   "https://github.com/yourusername/ecommerce",
    isFeatured:  true,
  }),
  project({
    title:       "Task Manager Mobile",
    description: "A mobile task management app with offline support.",
    details:     "A cross-platform mobile application for managing daily tasks with offline-first support, push notifications, and a clean intuitive interface.",
    images:      [
      "/projects/taskmanager/img1.jpg",
      "/projects/taskmanager/img2.jpg",
    ],
    category:    "Full Stack",
    platform:    "Mobile",
    techStack:   ["React Native", "TypeScript", "SQLite"],
    githubUrl:   "https://github.com/yourusername/task-manager",
    isFeatured:  true,
  }),
  project({
    title:       "Inventory System",
    description: "A desktop inventory management system for small businesses.",
    details:     "A desktop application for managing product inventory, tracking stock levels, generating reports, and handling supplier information for small to medium businesses.",
    images:      [
      "/projects/inventory/img1.jpg",
      "/projects/inventory/img2.jpg",
    ],
    category:    "Full Stack",
    platform:    "Desktop",
    techStack:   ["Electron", "React", "TypeScript", "SQLite"],
    githubUrl:   "https://github.com/yourusername/inventory",
    isFeatured:  true,
  }),
  project({
    title:       "Weather Dashboard",
    description: "A weather dashboard that shows real-time forecasts.",
    details:     "A real-time weather dashboard that displays current conditions, hourly and weekly forecasts using data from a public weather API. Includes location search and saved favorites.",
    images:      [
      "/projects/weather/img1.jpg",
      "/projects/weather/img2.jpg",
    ],
    category:    "Frontend",
    platform:    "Website",
    techStack:   ["React", "TypeScript", "Tailwind CSS"],
    githubUrl:   "https://github.com/yourusername/weather",
    isFeatured:  false,
  }),
  project({
    title:       "REST API Service",
    description: "A RESTful API service with authentication and rate limiting.",
    details:     "A production-ready REST API built with Node.js featuring JWT authentication, rate limiting, input validation, and comprehensive error handling.",
    images:      [
      "/projects/api/img1.jpg",
      "/projects/api/img2.jpg",
    ],
    category:    "Backend",
    platform:    "Website",
    techStack:   ["Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl:   "https://github.com/yourusername/rest-api",
    isFeatured:  false,
  }),
  project({
    title:       "Fitness Tracker App",
    description: "A mobile app to track workouts and monitor fitness goals.",
    details:     "A mobile fitness tracking application that lets users log workouts, set goals, track progress over time, and visualize their fitness journey through charts and statistics.",
    images:      [
      "/projects/fitness/img1.jpg",
      "/projects/fitness/img2.jpg",
    ],
    category:    "Full Stack",
    platform:    "Mobile",
    techStack:   ["React Native", "TypeScript", "Node.js", "MongoDB"],
    githubUrl:   "https://github.com/yourusername/fitness-tracker",
    isFeatured:  false,
  }),
]

export const featuredProjects: Project[] = projects.filter(p => p.isFeatured)

export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find(p => p.slug === slug)

export const getPreviousProject = (slug: string): Project | undefined => {
    const index = projects.findIndex(p => p.slug === slug)
    return index > 0 ? projects[index - 1] : undefined
}

export const getNextProject = (slug: string): Project | undefined => {
    const index = projects.findIndex(p => p.slug === slug)
    return index < projects.length - 1 ? projects[index + 1] : undefined
}

export const getCategories = (): string[] => {
    const categories = projects.map(p => p.category)
    return ["All", ...Array.from(new Set(categories))]
}

export const getPlatforms = (): string[] => {
    const platforms = projects.map(p => p.platform)
    return ["All", ...Array.from(new Set(platforms))]
}