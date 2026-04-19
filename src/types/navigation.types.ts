// Navigation type definitions

import type { SectionId } from './sections.types'

export interface NavItem {
   id: SectionId
   label: string
   href: string
}

export interface NavigationState {
   activeSection: SectionId | null
   isMobileMenuOpen: boolean
   isNavTransparent: boolean
   setActiveSection: (id: SectionId | null) => void
   setMobileMenuOpen: (open: boolean) => void
   setNavTransparent: (transparent: boolean) => void
}
