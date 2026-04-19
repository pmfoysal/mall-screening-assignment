import type { EventType } from '@/types/sections.types'

export const eventTypes: readonly EventType[] = [
   {
      id: 'concerts',
      title: 'Concerts & Live Performances',
      description:
         'The Dream Live Performing Arts Center seats 5,000 — hosting major recording artists, touring productions, and intimate residencies. State-of-the-art acoustics, full production capabilities, VIP suites.',
      imageSrc: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
      venueName: 'Dream Live PAC',
      capacity: '5,000 seated',
      icon: 'music',
   },
   {
      id: 'brand-activations',
      title: 'Brand Activations & Launches',
      description:
         'Turn-key pop-ups, product launches, experiential marketing campaigns. 40M+ annual visitors as your built-in audience. Flexible spaces from 500 to 50,000 sq ft. High-footfall common areas and dedicated activation zones.',
      imageSrc: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      venueName: 'Grand Atrium & Common Areas',
      capacity: 'Flexible — up to 10,000',
      icon: 'zap',
   },
   {
      id: 'corporate',
      title: 'Corporate & Convention',
      description:
         'The 48,000 sq ft Expo Hall accommodates multi-day conventions, trade shows, corporate summits, and product expos. Private entrance, dedicated loading docks, full A/V infrastructure, catering partnerships.',
      imageSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      venueName: 'Expo Hall',
      capacity: '48,000 sq ft / 3,000+ attendees',
      icon: 'briefcase',
   },
   {
      id: 'celebrity-media',
      title: 'Celebrity & Media Events',
      description:
         'Premieres, press junkets, celebrity appearances, and media activations with built-in audience reach. Proximity to NYC creates seamless logistics for talent, media, and guests.',
      imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      venueName: 'Multiple Venues',
      capacity: '500–5,000',
      icon: 'star',
   },
] as const

export const pastEventsHighlights = [
   {
      title: "New Year's Eve Spectacular",
      year: '2024',
      type: 'Live Performance',
      imageSrc: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&q=80',
      attendance: '12,000',
   },
   {
      title: 'Spring Fashion Week Activation',
      year: '2024',
      type: 'Brand Activation',
      imageSrc: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
      attendance: '45,000',
   },
   {
      title: 'International Auto Show',
      year: '2023',
      type: 'Convention',
      imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
      attendance: '28,000',
   },
] as const

export const eventCapabilities = [
   { value: '5,000', label: 'PAC Seated Capacity' },
   { value: '48K sq ft', label: 'Expo Hall' },
   { value: '365+', label: 'Events Per Year' },
] as const
