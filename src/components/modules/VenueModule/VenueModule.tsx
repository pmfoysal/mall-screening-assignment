'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/shared/ContactForm'
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from '@/lib/animations'
import { BLUR_DATA_URL } from '@/lib/constants'
import type { VenueModuleProps, VenueConfig, VenueType } from './VenueModule.types'
import './VenueModule.styles.css'
import { CallToActionClose } from '@/components/sections/EventsSection/CallToActionClose'

const venueConfigs: Record<VenueType, VenueConfig> = {
   'performing-arts': {
      id: 'performing-arts',
      name: 'Dream Live Performing Arts Center',
      tagline: '5,000 Seats. Infinite Possibilities.',
      description:
         'The Dream Live PAC is a world-class, 5,000-seat performing arts center designed for major concerts, touring productions, comedy shows, sporting events, and corporate galas. State-of-the-art acoustics, flexible configurations, and full production capabilities make it the premier event venue in the tri-state area.',
      capacity: '5,000 seated',
      sqft: '45,000 sq ft',
      imageSrc: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=80',
      specs: [
         { label: 'Capacity', value: '5,000 seated / 7,000 standing' },
         { label: 'Stage Dimensions', value: '60 ft × 40 ft (expandable)' },
         { label: 'Production', value: 'Full AV, lighting, rigging' },
         { label: 'VIP Suites', value: '12 luxury suites' },
         { label: 'Loading', value: 'Dedicated loading dock + freight elevator' },
         { label: 'Parking', value: '5,000+ spots on-site' },
      ],
   },
   'expo-hall': {
      id: 'expo-hall',
      name: 'Expo Hall',
      tagline: '48,000 Sq Ft of Convention Excellence.',
      description:
         'The Expo Hall is a flexible, 48,000 sq ft convention and exhibition space capable of hosting trade shows, corporate summits, product expos, fashion shows, and multi-day conventions. Private entrance, dedicated A/V infrastructure, and catering partnerships make logistics seamless.',
      capacity: '3,000+ attendees',
      sqft: '48,000 sq ft',
      imageSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
      specs: [
         { label: 'Total Space', value: '48,000 sq ft (divisible)' },
         { label: 'Configuration', value: 'Theater, banquet, trade show' },
         { label: 'A/V', value: 'Full-build AV, LED walls, rigging' },
         { label: 'Catering', value: 'Dedicated kitchen & catering partnerships' },
         { label: 'Load-In', value: 'Direct truck access, freight elevators' },
         { label: 'Connectivity', value: 'Enterprise WiFi, fiber available' },
      ],
   },
}

export function VenueModule({ venue }: VenueModuleProps) {
   const config = venueConfigs[venue]

   return (
      <div className="venueModule">
         <GlobalNavigation />

         {/* Hero */}
         <div className="venueHero">
            <Image
               src={config.imageSrc}
               alt={config.name}
               fill
               priority
               sizes="100vw"
               className="object-cover"
               placeholder="blur"
               blurDataURL={BLUR_DATA_URL}
            />
            <div className="venueHeroOverlay" />
            <div className="venueHeroContent">
               <SectionHeading label="Venue" title={config.name} subtitle={config.tagline} theme="dark" />
            </div>
         </div>

         <div className="venueBackLink">
            <CTAButton variant="secondary" href="/events" size="sm">
               ← Back to Events
            </CTAButton>
         </div>

         {/* Overview */}
         <section className="venueSection">
            <div className="venueInner venueOverviewGrid">
               <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
                  <SectionHeading
                     label="Overview"
                     title={config.tagline}
                     subtitle={config.description}
                     titleSize="md"
                     animate={false}
                  />
               </motion.div>

               {/* Specs Table */}
               <motion.div
                  className="venueSpecs"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
               >
                  {config.specs.map((spec) => (
                     <motion.div key={spec.label} className="venueSpecRow" variants={staggerItem}>
                        <span className="venueSpecLabel">{spec.label}</span>
                        <span className="venueSpecValue">{spec.value}</span>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Contact */}
         {/*<section className="venueSection venueSectionAlt">
        <div className="venueInner venueContactGrid">
          <SectionHeading
            label="Book This Venue"
            title="Check Availability."
            subtitle="Our events team will confirm availability and send a detailed proposal within 24 hours."
          />
          <ContactForm />
        </div>
      </section>*/}

         {/* Footer */}
         <CallToActionClose />
      </div>
   )
}
