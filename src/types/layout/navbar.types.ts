export type NavItem = {
  label: string
  sectionId: string
}

export type NavSharedProps = {
  navItems: NavItem[]
  isActive: (sectionId: string) => boolean
  onNavClick: (sectionId: string) => void
}

export type MobileSidebarProps = NavSharedProps & {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export type DesktopNavProps = NavSharedProps