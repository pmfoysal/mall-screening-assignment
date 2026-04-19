import type { AttractionItem } from '@/types/sections.types'

export const attractionsData: readonly AttractionItem[] = [
   {
      id: 'nickelodeon-universe',
      name: 'Nickelodeon Universe',
      category: 'Theme Park',
      tagline: "World's Largest Indoor Theme Park",
      description:
         '35+ rides, attractions, and interactive experiences across 8 acres — featuring beloved Nickelodeon characters including SpongeBob, PAW Patrol, and Avatar. The only attraction of its kind in the world.',
      imageSrc: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80',
      videoSrc: undefined,
      accentColor: 'oklch(65% 0.2 45)',
      stats: [
         { value: '35+', label: 'Rides & Attractions' },
         { value: '8', label: 'Acres of Excitement', suffix: ' ac' },
         { value: '5M+', label: 'Annual Riders' },
      ],
   },
   {
      id: 'dreamworks-water-park',
      name: 'DreamWorks Water Park',
      category: 'Water Park',
      tagline: "Western Hemisphere's Largest Indoor Water Park",
      description:
         '40+ slides and water attractions, 1,500 guests capacity, year-round 84°F — featuring DreamWorks characters including Shrek, Kung Fu Panda, and Madagascar. A $130M attraction unlike anything in North America.',
      imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
      videoSrc: undefined,
      accentColor: 'oklch(60% 0.18 220)',
      stats: [
         { value: '40+', label: 'Water Slides & Attractions' },
         { value: '84°F', label: 'Year-Round Temperature' },
         { value: '$130M', label: 'Investment' },
      ],
   },
   {
      id: 'big-snow',
      name: 'Big SNOW',
      category: 'Ski & Snow',
      tagline: "America's Only Indoor Real-Snow Ski Slope",
      description:
         'Year-round skiing on real snow, 1 mile from Meadowlands. A 16,000 sq ft facility with beginner slopes, terrain parks, and snow play areas — the first and only indoor real-snow destination in the United States.',
      imageSrc: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&q=80',
      videoSrc: undefined,
      accentColor: 'oklch(75% 0.08 240)',
      stats: [
         { value: '16K', label: 'Sq Ft Ski Facility', suffix: ' sqft' },
         { value: '1st', label: 'Indoor Real Snow in US' },
         { value: '365', label: 'Days a Year', suffix: ' days' },
      ],
   },
   {
      id: 'sea-life',
      name: 'Sea Life Aquarium',
      category: 'Aquarium',
      tagline: 'Immersive Marine Experience',
      description:
         '35,000 sq ft of marine wonders with over 5,000 creatures across 25 themed zones. Walk-through ocean tunnel, shark lagoon, jellyfish cove — an educational and breathtaking experience for all ages.',
      imageSrc: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80',
      videoSrc: undefined,
      accentColor: 'oklch(55% 0.15 200)',
      stats: [
         { value: '35K', label: 'Sq Ft Experience', suffix: ' sqft' },
         { value: '5K+', label: 'Marine Creatures' },
         { value: '25', label: 'Themed Zones' },
      ],
   },
   {
      id: 'more-attractions',
      name: 'Mirror Maze & More',
      category: 'Entertainment',
      tagline: 'And So Much More',
      description:
         'Beyond the headline attractions: Legoland Discovery Center, KidZania, mirror maze, mini-golf, ice rink, and an ever-growing calendar of activations. Something for every age, every visit.',
      imageSrc: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
      videoSrc: undefined,
      accentColor: 'oklch(70% 0.15 320)',
      stats: [
         { value: '6+', label: 'Major Attractions' },
         { value: '365', label: 'Events Per Year', suffix: '/yr' },
         { value: '∞', label: 'Reasons to Return' },
      ],
   },
] as const
