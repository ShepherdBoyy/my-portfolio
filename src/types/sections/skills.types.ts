import type { LucideIcon } from "lucide-react"

export type Skill = {
    name: string
    icon: string
}

export type SkillCategory = {
    title: string
    icon: LucideIcon
    skills: Skill[]
}

export type Direction = "cw" | "ccw"
export type Breakpoint = "mobile" | "tablet" | "desktop"

export type Orbit = {
    category: SkillCategory,
    size: number,
    sunSize: number,
    innerRadius: number,
    outerRadius: number,
    innerIconSize: number,
    outerIconSize: number,
    innerDuration: number,
    outerDuration: number,
    isMobile: boolean,
    focused: boolean,
    dimmed: boolean,
    onToggleFocus: () => void
}

export type SkillIcon = {
    skill: Skill,
    angle: number,
    radius: number,
    size: number,
    duration: number,
    direction: Direction,
    paused: boolean,
    onEnter: () => void,
    onLeave: () => void
}