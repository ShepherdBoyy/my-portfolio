import type { ComponentType } from "react"

export type IconProps = {
    size?: number
    className?: string
}

export type SocialLink = {
    label: string
    href: string
    icon: ComponentType<IconProps>
}