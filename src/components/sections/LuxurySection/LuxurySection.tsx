'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { CTAButton } from '@/components/shared/CTAButton'
import { luxuryFadeIn, slideInLeft, slideInRight, VIEWPORT_ONCE, VIEWPORT_ONCE_HALF } from '@/lib/animations'
import { luxuryBrands } from '@/data/luxury.data'
import { BLUR_DATA_URL } from '@/lib/constants'
import './LuxurySection.styles.css'

/**
 * Luxury wing section — premium design treatment with slow transitions,
 * horizontal drag carousel, and positioning statement.
 */
export function LuxurySection() {
   return (
      <SectionContainer id="luxury" label="The Luxury Wing">
         <div className="luxurySection">
            {/* Hero Image */}
            <motion.div
               className="luxuryHeroImage"
               variants={luxuryFadeIn}
               initial="hidden"
               whileInView="visible"
               viewport={VIEWPORT_ONCE}
            >
               <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=90"
                  alt="Luxury retail interior at American Dream"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={false}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
               />
               <div className="luxuryHeroOverlay" aria-hidden="true" />
            </motion.div>

            {/* Text Block */}
            <div className="luxuryTextBlock">
               <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
                  <p className="luxuryLabel">The Luxury Wing</p>
                  <h2 className="luxuryTitle">
                     Where
                     <br />
                     Prestige
                     <br />
                     <em>Lives.</em>
                  </h2>
               </motion.div>

               <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="luxuryTextBlockRight"
               >
                  <p className="luxuryBody">
                     A dedicated luxury floor featuring the world&apos;s most coveted brands — from Hermès to Dior — in
                     an environment that matches their prestige. The only destination in North America where these
                     houses exist side-by-side, steps from New York City.
                  </p>
                  <CTAButton variant="outline-gold" href="/leasing/luxury" size="md">
                     Access Luxury Leasing
                  </CTAButton>
               </motion.div>
            </div>

            {/* Brand Carousel */}
            <motion.div
               className="brandCarousel"
               variants={luxuryFadeIn}
               initial="hidden"
               whileInView="visible"
               viewport={VIEWPORT_ONCE}
            >
               <div className="brandCarouselInner" role="list" aria-label="Featured luxury brands">
                  {luxuryBrands.map((brand) => (
                     <div key={brand.id} className="brandFeatureCard" role="listitem">
                        <div className="brandFeatureImage">
                           <Image
                              src={brand.imageSrc}
                              alt={`${brand.name} luxury boutique`}
                              fill
                              sizes="(max-width: 640px) 80vw, 30vw"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                           />
                        </div>
                        <div className="brandFeatureOverlay">
                           {brand.founded && <p className="brandFoundedBadge">Est. {brand.founded}</p>}
                           <h3 className="brandFeatureName">{brand.name}</h3>
                           <p className="brandFeatureTagline">{brand.tagline}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* Positioning Statement */}
            <motion.div
               className="luxuryPositioning"
               variants={luxuryFadeIn}
               initial="hidden"
               whileInView="visible"
               viewport={VIEWPORT_ONCE_HALF}
            >
               <div className="luxuryGoldDivider" aria-hidden="true" />
               <blockquote className="luxuryPositioningQuote">
                  &ldquo;The only destination in North America that rivals the world&apos;s great luxury
                  capitals.&rdquo;
               </blockquote>
               <p className="luxuryPositioningSub">
                  Adjacent to Manhattan. Home to the world&apos;s top luxury brands.
               </p>
               <div className="luxuryGoldDivider" aria-hidden="true" />
            </motion.div>
         </div>
      </SectionContainer>
   )
}
