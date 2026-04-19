'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from '@/lib/animations'
import { useLenis } from '@/components/layout/LenisProvider'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { attractionsData } from '@/data/attractions.data'
import { BLUR_DATA_URL } from '@/lib/constants'
import './AttractionsSection.styles.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Attractions & Entertainment section.
 * Desktop: GSAP ScrollTrigger horizontal scroll with 5 full-screen panels.
 * Mobile/Tablet: Vertical stacked layout (GSAP disabled).
 */
export function AttractionsSection() {
   const containerRef = useRef<HTMLDivElement>(null)
   const prefersReducedMotion = useReducedMotion()
   const lenisRef = useLenis()

   useGSAP(
      () => {
         if (prefersReducedMotion) return
         // Only apply horizontal scroll on desktop
         if (window.innerWidth < 1024) return

         const track = containerRef.current?.querySelector('.attractionsTrack')
         const scrollContainer = containerRef.current?.querySelector('.attractionsScrollContainer')

         if (!track || !scrollContainer) return

         const panels = track.querySelectorAll('.attractionPanel')
         const panelCount = panels.length

         gsap.to(track, {
            xPercent: -100 * (panelCount - 1),
            ease: 'none',
            scrollTrigger: {
               trigger: scrollContainer,
               start: 'top top',
               end: () => `+=${window.innerWidth * (panelCount - 1)}`,
               scrub: 1,
               pin: true,
               anticipatePin: 1,
               invalidateOnRefresh: true,
            },
         })
      },
      { scope: containerRef }
   )

   const scrollToEvents = () => {
      lenisRef.current?.scrollTo('#events', {
         duration: 1.2,
         easing: (t: number) => 1 - Math.pow(1 - t, 4),
      })
   }

   return (
      <SectionContainer id="attractions" label="Attractions & Entertainment">
         <div className="attractionsSection" ref={containerRef}>
            {/* ─── Desktop: Horizontal scroll panels ─── */}
            <div className="attractionsScrollContainer" aria-label="Attraction features">
               <div className="attractionsTrack">
                  {attractionsData.map((attraction, index) => (
                     <div
                        key={attraction.id}
                        className="attractionPanel"
                        aria-label={`${attraction.name} — ${attraction.tagline}`}
                     >
                        {/* Background Image */}
                        <div className="attractionPanelBg" aria-hidden="true">
                           <Image
                              src={attraction.imageSrc}
                              alt=""
                              fill
                              sizes="100vw"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                              priority={index === 0}
                           />
                        </div>
                        <div className="attractionPanelOverlay" aria-hidden="true" />

                        {/* Content */}
                        <div className="attractionPanelContent">
                           <p className="attractionCategory">{attraction.category}</p>
                           <h3 className="attractionName">{attraction.name}</h3>
                           <p className="attractionTagline">{attraction.tagline}</p>

                           <div className="attractionStats" aria-label={`${attraction.name} statistics`}>
                              {attraction.stats.map((stat) => (
                                 <div key={stat.label} className="attractionStatItem">
                                    <span className="attractionStatValue">{stat.value}</span>
                                    <span className="attractionStatLabel">{stat.label}</span>
                                 </div>
                              ))}
                           </div>

                           {index === attractionsData.length - 1 && (
                              <CTAButton variant="glow" size="md" onClick={scrollToEvents}>
                                 See What&apos;s Possible
                              </CTAButton>
                           )}
                        </div>

                        {/* Panel number */}
                        <div className="panelCounter" aria-hidden="true">
                           0{index + 1}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* ─── Mobile/Tablet: Vertical stack ─── */}
            <div className="attractionsVertical">
               <SectionHeading
                  label="Attractions & Entertainment"
                  title="Not a Mall. A Destination."
                  subtitle="Five world-class attractions under one roof — from theme parks to ski slopes. American Dream is a reason to travel, not just shop."
                  theme="dark"
               />

               <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
                  {attractionsData.map((attraction) => (
                     <motion.div key={attraction.id} className="attractionCard" variants={staggerItem}>
                        <div className="attractionCardImage">
                           <Image
                              src={attraction.imageSrc}
                              alt={attraction.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 80vw"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                           />
                        </div>

                        <div className="attractionCardContent">
                           <p className="attractionCategory">{attraction.category}</p>
                           <h3 className="attractionCardName">{attraction.name}</h3>
                           <p className="attractionCardTagline">{attraction.tagline}</p>

                           <div className="attractionCardStats">
                              {attraction.stats.slice(0, 2).map((stat) => (
                                 <div key={stat.label} className="attractionStatItem">
                                    <span className="attractionStatValue">{stat.value}</span>
                                    <span className="attractionStatLabel">{stat.label}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>

               <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
                  <CTAButton variant="glow" size="lg" onClick={scrollToEvents}>
                     See What&apos;s Possible Here
                  </CTAButton>
               </motion.div>
            </div>
         </div>
      </SectionContainer>
   )
}
