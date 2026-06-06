export type ProjectCategory = "All" | "Frontend" | "Full Stack" | "Backend" | "Others"

export type ProjectPlatform = "All" | "Website" | "Mobile" | "Desktop"

export type Project = {
    title: string
    slug: string
    description: string
    details: string
    images: string[]
    category: Exclude<ProjectCategory, "All">
    platform: Exclude<ProjectPlatform, "All">
    techStack: string[]
    githubUrl: string
    isFeatured: boolean
}

export type ProjectCardProps = {
    project: Project
}

export type FeaturedCardProps = {
    project: Project
}

export type ProjectFilterProps = {
    activeCategory: ProjectCategory
    activePlatform: ProjectPlatform
    onCategoryChange: (category: ProjectCategory) => void
    onPlatformChange: (platform: ProjectPlatform) => void
}

export type SliderProps = {
    images: string[]
    title: string
}

export type SearchInputProps = {
    value: string
    onChange: (value: string) => void
}

export type PlatformDropdownProps = {
    activePlatform: ProjectPlatform
    onPlatformChange: (platform: ProjectPlatform) => void
}

export type CategoryPillProps = {
    activeCategory: ProjectCategory
    onCategoryChange: (category: ProjectCategory) => void
}