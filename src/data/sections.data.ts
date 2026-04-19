import type { SectionConfig } from '@/types/sections.types'

export const sectionsData: readonly SectionConfig[] = [
   {
      id: 'hero',
      label: 'Home',
      navLabel: null,
      component: 'HeroSection',
      order: 1,
   },
   {
      id: 'property',
      label: 'Why This Property',
      navLabel: 'Property',
      component: 'PropertySection',
      order: 2,
   },
   {
      id: 'retail',
      label: 'The Retail Ecosystem',
      navLabel: 'Retail',
      component: 'RetailSection',
      order: 3,
   },
   {
      id: 'luxury',
      label: 'The Luxury Wing',
      navLabel: 'Luxury',
      component: 'LuxurySection',
      order: 4,
   },
   {
      id: 'dining',
      label: 'Dining & Lifestyle',
      navLabel: 'Dining',
      component: 'DiningSection',
      order: 5,
   },
   {
      id: 'attractions',
      label: 'Attractions & Entertainment',
      navLabel: 'Attractions',
      component: 'AttractionsSection',
      order: 6,
   },
   {
      id: 'events',
      label: 'Events & Platform',
      navLabel: 'Events',
      component: 'EventsSection',
      order: 7,
   },
] as const
