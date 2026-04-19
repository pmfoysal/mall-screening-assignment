import { notFound } from 'next/navigation'
import { VenueModule } from '@/components/modules/VenueModule'
import type { VenueType } from '@/components/modules/VenueModule'

const VALID_VENUES: VenueType[] = ['performing-arts', 'expo-hall']

interface VenuePageProps {
   params: Promise<{ venue: string }>
}

export function generateStaticParams() {
   return VALID_VENUES.map((venue) => ({ venue }))
}

export async function generateMetadata({ params }: VenuePageProps) {
   const { venue } = await params
   const titles: Record<string, string> = {
      'performing-arts': 'Dream Live Performing Arts Center | American Dream',
      'expo-hall': 'Expo Hall | American Dream',
   }
   return {
      title: titles[venue] ?? 'Venue | American Dream',
   }
}

export default async function VenuePage({ params }: VenuePageProps) {
   const { venue } = await params

   if (!VALID_VENUES.includes(venue as VenueType)) {
      notFound()
   }

   return <VenueModule venue={venue as VenueType} />
}
