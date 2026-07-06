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