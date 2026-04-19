import type { LuxuryBrand } from '@/types/sections.types'

export const luxuryBrands: readonly LuxuryBrand[] = [
   {
      id: 'hermes',
      name: 'Hermès',
      tagline: 'The pinnacle of French luxury craftsmanship.',
      description:
         'Founded in 1837, Hermès brings its iconic leatherwork, silk, and haute couture to American Dream — the only North American address that matches their exacting standards.',
      imageSrc: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      tier: 'ultra-luxury',
      founded: 1837,
      country: 'France',
   },
   {
      id: 'gucci',
      name: 'Gucci',
      tagline: 'Italian luxury redefined for the modern era.',
      description:
         "The house of Gucci commands a flagship presence in American Dream's luxury wing, drawing clientele from across the tri-state area and beyond.",
      imageSrc: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
      tier: 'ultra-luxury',
      founded: 1921,
      country: 'Italy',
   },
   {
      id: 'louis-vuitton',
      name: 'Louis Vuitton',
      tagline: "The world's most recognized luxury house.",
      description:
         "Louis Vuitton's presence elevates the entire luxury wing — a beacon for discerning shoppers seeking the iconic monogram and beyond.",
      imageSrc: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      tier: 'ultra-luxury',
      founded: 1854,
      country: 'France',
   },
   {
      id: 'saint-laurent',
      name: 'Saint Laurent',
      tagline: 'Parisian edge, global prestige.',
      description:
         'Saint Laurent at American Dream brings the rock-and-roll spirit of Paris to New Jersey, attracting a younger luxury demographic.',
      imageSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      tier: 'ultra-luxury',
      founded: 1961,
      country: 'France',
   },
   {
      id: 'dior',
      name: 'Dior',
      tagline: 'The art of French couture, accessible in the metro.',
      description:
         "Christian Dior brings haute couture and lifestyle collections to American Dream, reinforcing the property's status as a true luxury destination.",
      imageSrc: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      tier: 'ultra-luxury',
      founded: 1946,
      country: 'France',
   },
] as const

export const luxuryPositioningStats = [
   { value: '10+', label: 'Ultra-Luxury Anchors' },
   { value: '1', label: 'Dedicated Luxury Floor' },
   { value: '6 Mi', label: 'From Manhattan' },
] as const
