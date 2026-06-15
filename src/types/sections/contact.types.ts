import type { LucideIcon } from "lucide-react"

export type FormField = {
    name: string
    email: string
    subject: string
    message: string
}

export type FormStatus = "idle" | "loading" | "success" | "error"

export type FormErrors = Partial<FormField>

export type AvailabilityItem = {
    icon: LucideIcon
    label: string
}

export type ContactSuccessProps = {
    onReset: () => void
}