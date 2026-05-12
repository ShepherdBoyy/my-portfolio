import type { LucideIcon } from "lucide-react"

export type ExperienceItem = {
    title: string
    organization: string
    period: string
    address: string
    website: string
    type: "work" | "education"
}

export type Certification = {
    name: string
    issuer: string
    date: string
    image: string
}

export type ExperienceTab = {
    label: string
    value: "work" | "education"
    icon: LucideIcon
}