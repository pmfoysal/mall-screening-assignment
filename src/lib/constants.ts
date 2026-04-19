// Application-wide constants

import { SECTION_IDS } from '@/types/sections.types'

export { SECTION_IDS }

export const BREAKPOINTS = {
   mobile: 375,
   tablet: 768,
   laptop: 1024,
   desktop: 1440,
   wide: 1920,
} as const

export const THEME_STORAGE_KEY = 'mallx-theme'
export const SESSION_SECTION_KEY = 'mallx-last-section'

export const LENIS_CONFIG = {
   duration: 1.2,
   easing: (t: number) => 1 - Math.pow(1 - t, 4),
} as const

export const NAV_ITEMS = [
   { id: 'property' as const, label: 'Property', href: '#property' },
   { id: 'retail' as const, label: 'Retail', href: '#retail' },
   { id: 'luxury' as const, label: 'Luxury', href: '#luxury' },
   { id: 'dining' as const, label: 'Dining', href: '#dining' },
   { id: 'attractions' as const, label: 'Attractions', href: '#attractions' },
   { id: 'events' as const, label: 'Events', href: '#events' },
]

export const PAGE_NAV_ITEMS = [
   { label: 'Events', href: '/events' },
   { label: 'Leasing', href: '/leasing' },
   { label: 'Venues', href: '/venues' },
   { label: 'Sponsorship', href: '/sponsorship' },
]

export const BLUR_DATA_URL =
   'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EABoQAAIDAQEAAAAAAAAAAAAAAAABAgMEEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmSlIAB/9k='
