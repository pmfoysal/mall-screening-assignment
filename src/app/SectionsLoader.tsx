'use client'

import dynamic from 'next/dynamic'

// ─── Section Skeletons ────────────────────────────────────────────────────────

function HeroSkeleton() {
  return <div style={{ minHeight: '100svh', background: 'oklch(5% 0 0)' }} aria-hidden="true" />
}

function SectionSkeleton() {
  return (
    <div
      className="skeleton-shimmer"
      style={{ minHeight: '100vh', width: '100%' }}
      aria-hidden="true"
    />
  )
}

// ─── Dynamic Section Imports ─────────────────────────────────────────────────
// Must be in a 'use client' component — Next.js 16 requires dynamic() with
// any configuration (ssr:false or ssr:true) to be called inside a Client Component.

const HeroSection = dynamic(
  () => import('@/components/sections/HeroSection').then((m) => m.HeroSection),
  { ssr: true, loading: () => <HeroSkeleton /> }
)

const PropertySection = dynamic(
  () => import('@/components/sections/PropertySection').then((m) => m.PropertySection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const RetailSection = dynamic(
  () => import('@/components/sections/RetailSection').then((m) => m.RetailSection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const LuxurySection = dynamic(
  () => import('@/components/sections/LuxurySection').then((m) => m.LuxurySection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const DiningSection = dynamic(
  () => import('@/components/sections/DiningSection').then((m) => m.DiningSection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const AttractionsSection = dynamic(
  () => import('@/components/sections/AttractionsSection').then((m) => m.AttractionsSection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const EventsSection = dynamic(
  () => import('@/components/sections/EventsSection').then((m) => m.EventsSection),
  { ssr: false, loading: () => <SectionSkeleton /> }
)

const CallToActionClose = dynamic(
  () =>
    import('@/components/sections/EventsSection/CallToActionClose').then(
      (m) => m.CallToActionClose
    ),
  { ssr: false, loading: () => <div style={{ minHeight: '400px' }} /> }
)

/**
 * Client-side section loader — handles dynamic imports with ssr:false.
 * Must be a Client Component per Next.js 16 restriction.
 */
export function SectionsLoader() {
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
