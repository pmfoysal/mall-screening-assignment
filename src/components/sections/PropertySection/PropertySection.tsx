'use client'

import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { StatCard } from '@/components/shared/StatCard'
import { CTAButton } from '@/components/shared/CTAButton'
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from '@/lib/animations'
import { useLenis } from '@/components/layout/LenisProvider'
import { propertyStats, demographicsData } from '@/data/mall.config'
import './PropertySection.styles.css'

/**
 * Property overview section — animated stats grid, property map SVG,
 * and demographic data to validate the opportunity.
 */
export function PropertySection() {
   const lenisRef = useLenis()

   const scrollToEvents = () => {
      lenisRef.current?.scrollTo('#events', {
         duration: 1.2,
         easing: (t: number) => 1 - Math.pow(1 - t, 4),
      })
   }

   return (
      <SectionContainer id="property" label="Property Overview — Why American Dream">
         <div className="propertySection">
            <div className="propertyInner">
               <SectionHeading
                  label="Why American Dream"
                  title="The Numbers Tell the Story"
                  subtitle="American Dream isn't just the largest retail and entertainment destination in North America — it's a proven commercial engine with unmatched demographics and unrivaled traffic."
               />

               {/* Stats Grid */}
               <motion.div
                  className="statsGrid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
               >
                  {propertyStats.map((stat, index) => (
                     <StatCard
                        key={stat.label}
                        value={stat.display}
                        label={stat.label}
                        numericValue={stat.numericValue}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        delay={index}
                     />
                  ))}
               </motion.div>

               {/* Property Map + Text */}
               <motion.div
                  className="propertyMap"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
               >
                  <div className="propertyMapVisual" aria-label="American Dream property map">
                     <PropertyMapSVG />
                  </div>

                  <div className="propertyMapContent">
                     <SectionHeading
                        label="Property Layout"
                        title="Five Worlds Under One Roof"
                        subtitle="From the ultra-luxury wing to the world's largest indoor theme park — every zone is designed for maximum dwell time and commercial performance."
                        titleSize="md"
                        animate={false}
                     />

                     <div className="propertyMapZones">
                        {mapZones.map((zone) => (
                           <motion.div
                              key={zone.id}
                              className="demographicCard demographicCardZone"
                              variants={staggerItem}
                              initial="hidden"
                              whileInView="visible"
                              viewport={VIEWPORT_ONCE}
                              style={{ borderLeftColor: zone.color }}
                           >
                              <p className="demographicStat demographicStatZone" style={{ color: zone.color }}>
                                 {zone.name}
                              </p>
                              <p className="demographicLabel">{zone.description}</p>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </motion.div>

               {/* Demographics */}
               <div className="demographicsSection">
                  <SectionHeading
                     label="Visitor Demographics"
                     title="Premium Audience, Premium Opportunity"
                     titleSize="md"
                  />
                  <motion.div
                     className="demographicsGrid"
                     variants={staggerContainer}
                     initial="hidden"
                     whileInView="visible"
                     viewport={VIEWPORT_ONCE}
                  >
                     {demographicsData.map((item) => (
                        <motion.div key={item.stat} className="demographicCard" variants={staggerItem}>
                           <p className="demographicStat">{item.stat}</p>
                           <p className="demographicLabel">{item.description}</p>
                        </motion.div>
                     ))}
                  </motion.div>
               </div>

               {/* CTA */}
               <div className="propertyCTAWrapper">
                  <CTAButton variant="primary" size="lg" onClick={scrollToEvents}>
                     See the Platform in Action
                  </CTAButton>
               </div>
            </div>
         </div>
      </SectionContainer>
   )
}

// Simplified property map SVG
function PropertyMapSVG() {
   return (
      <svg
         viewBox="0 0 400 320"
         xmlns="http://www.w3.org/2000/svg"
         style={{ width: '100%', height: '100%', minHeight: '320px' }}
         aria-hidden="true"
      >
         <rect width="400" height="320" fill="oklch(10% 0.01 264)" />
         {/* Entertainment Zone */}
         <rect
            x="20"
            y="20"
            width="170"
            height="170"
            rx="8"
            fill="oklch(65% 0.2 45 / 0.3)"
            stroke="oklch(65% 0.2 45)"
            strokeWidth="1.5"
         />
         <text x="105" y="100" textAnchor="middle" fill="oklch(65% 0.2 45)" fontSize="11" fontFamily="system-ui">
            Entertainment
         </text>
         <text x="105" y="115" textAnchor="middle" fill="oklch(65% 0.2 45 / 0.7)" fontSize="9" fontFamily="system-ui">
            Nick Universe · Water Park · Snow
         </text>
         {/* Luxury Wing */}
         <rect
            x="210"
            y="20"
            width="170"
            height="80"
            rx="8"
            fill="oklch(72% 0.12 75 / 0.2)"
            stroke="oklch(72% 0.12 75)"
            strokeWidth="1.5"
         />
         <text x="295" y="62" textAnchor="middle" fill="oklch(72% 0.12 75)" fontSize="11" fontFamily="system-ui">
            Luxury Wing
         </text>
         <text x="295" y="76" textAnchor="middle" fill="oklch(72% 0.12 75 / 0.7)" fontSize="9" fontFamily="system-ui">
            Hermès · Gucci · Dior
         </text>
         {/* Retail Floors */}
         <rect
            x="210"
            y="115"
            width="170"
            height="75"
            rx="8"
            fill="oklch(55% 0.15 200 / 0.25)"
            stroke="oklch(55% 0.15 200)"
            strokeWidth="1.5"
         />
         <text x="295" y="155" textAnchor="middle" fill="oklch(55% 0.15 200)" fontSize="11" fontFamily="system-ui">
            Retail Floors
         </text>
         <text x="295" y="168" textAnchor="middle" fill="oklch(55% 0.15 200 / 0.7)" fontSize="9" fontFamily="system-ui">
            450+ Stores
         </text>
         {/* Dining Deck */}
         <rect
            x="20"
            y="210"
            width="110"
            height="75"
            rx="8"
            fill="oklch(60% 0.18 45 / 0.25)"
            stroke="oklch(60% 0.18 45)"
            strokeWidth="1.5"
         />
         <text x="75" y="245" textAnchor="middle" fill="oklch(60% 0.18 45)" fontSize="11" fontFamily="system-ui">
            Dining Deck
         </text>
         <text x="75" y="260" textAnchor="middle" fill="oklch(60% 0.18 45 / 0.7)" fontSize="9" fontFamily="system-ui">
            100+ Restaurants
         </text>
         {/* Dream Live PAC */}
         <rect
            x="145"
            y="210"
            width="235"
            height="75"
            rx="8"
            fill="oklch(65% 0.15 290 / 0.2)"
            stroke="oklch(65% 0.15 290)"
            strokeWidth="1.5"
         />
         <text x="268" y="245" textAnchor="middle" fill="oklch(65% 0.15 290)" fontSize="11" fontFamily="system-ui">
            Dream Live PAC · Expo Hall
         </text>
         <text x="268" y="260" textAnchor="middle" fill="oklch(65% 0.15 290 / 0.7)" fontSize="9" fontFamily="system-ui">
            5,000 seats · 48,000 sq ft
         </text>
         {/* Labels */}
         <text x="200" y="305" textAnchor="middle" fill="oklch(100% 0 0 / 0.3)" fontSize="9" fontFamily="system-ui">
            East Rutherford, NJ — 6 miles from NYC
         </text>
      </svg>
   )
}

const mapZones = [
   {
      id: 'entertainment',
      name: 'Entertainment Zone',
      color: 'oklch(65% 0.2 45)',
      description: 'Nickelodeon Universe, DreamWorks Water Park, Big SNOW, Sea Life Aquarium',
   },
   {
      id: 'luxury',
      name: 'Luxury Wing',
      color: 'oklch(72% 0.12 75)',
      description: 'Hermès, Gucci, Louis Vuitton, Dior, Saint Laurent — dedicated premium floor',
   },
   {
      id: 'dining',
      name: 'Dining & Lifestyle',
      color: 'oklch(60% 0.18 45)',
      description: '100+ restaurants — celebrity chef concepts, international dining, food halls',
   },
   {
      id: 'events',
      name: 'Dream Live & Expo',
      color: 'oklch(65% 0.15 290)',
      description: '5,000-seat PAC and 48,000 sq ft Expo Hall for events, concerts, and conventions',
   },
] as const
