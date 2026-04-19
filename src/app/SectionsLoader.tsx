'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// ─── Section Skeletons ────────────────────────────────────────────────────────

function HeroSkeleton() {
   return <div style={{ minHeight: '100svh', background: 'oklch(5% 0 0)' }} aria-hidden="true" />
}

function SectionSkeleton() {
   return <div className="skeleton-shimmer" style={{ minHeight: '100vh', width: '100%' }} aria-hidden="true" />
}

// ─── Dynamic Section Imports ────────────────────────────────────────────────────
// Using ssr: true to ensure proper hydration and back-navigation support

const HeroSection = dynamic(() => import('@/components/sections/HeroSection').then((m) => m.HeroSection), {
   ssr: true,
   loading: () => <HeroSkeleton />,
})

const PropertySection = dynamic(() => import('@/components/sections/PropertySection').then((m) => m.PropertySection), {
   ssr: true,
   loading: () => <SectionSkeleton />,
})

const RetailSection = dynamic(() => import('@/components/sections/RetailSection').then((m) => m.RetailSection), {
   ssr: true,
   loading: () => <SectionSkeleton />,
})

const LuxurySection = dynamic(() => import('@/components/sections/LuxurySection').then((m) => m.LuxurySection), {
   ssr: true,
   loading: () => <SectionSkeleton />,
})

const DiningSection = dynamic(() => import('@/components/sections/DiningSection').then((m) => m.DiningSection), {
   ssr: true,
   loading: () => <SectionSkeleton />,
})

const AttractionsSection = dynamic(
   () => import('@/components/sections/AttractionsSection').then((m) => m.AttractionsSection),
   { ssr: true, loading: () => <SectionSkeleton /> }
)

const EventsSection = dynamic(() => import('@/components/sections/EventsSection').then((m) => m.EventsSection), {
   ssr: true,
   loading: () => <SectionSkeleton />,
})

const CallToActionClose = dynamic(
   () => import('@/components/sections/EventsSection/CallToActionClose').then((m) => m.CallToActionClose),
   { ssr: true, loading: () => <div style={{ minHeight: '400px' }} /> }
)

// Track if we're on the client to handle hydration properly
function SectionsLoader() {
   const [isClient, setIsClient] = useState(false)

   // Set client state after initial mount
   useEffect(() => {
      // Use requestAnimationFrame to avoid synchronously triggering cascading renders
      const frameId = requestAnimationFrame(() => {
         setIsClient(true)
      })
      return () => cancelAnimationFrame(frameId)
   }, [])

   // Don't render sections until client-side to avoid hydration mismatches
   if (!isClient) {
      return <HeroSkeleton />
   }

   return (
      <>
         <HeroSection />
         <PropertySection />
         <RetailSection />
         <LuxurySection />
         <DiningSection />
         <AttractionsSection />
         <EventsSection />
         <CallToActionClose />
      </>
   )
}

export { SectionsLoader }
