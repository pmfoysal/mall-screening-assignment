import type { BrandItem, RetailCategory } from '@/types/sections.types'

export interface BrandLogoGridProps {
  // Accept both readonly (from data files with `as const`) and mutable arrays
  brands: readonly BrandItem[] | BrandItem[]
  activeCategory?: RetailCategory | 'all'
  className?: string
}
