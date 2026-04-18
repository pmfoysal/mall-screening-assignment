'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { fadeInUp, staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/animations'
import { diningVenues, diningCategories } from '@/data/dining.data'
import { BLUR_DATA_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { DiningVenue } from '@/types/sections.types'
import './DiningSection.styles.css'

type DiningCategory = DiningVenue['category'] | 'all'

/**
 * Dining & lifestyle section with masonry image grid and category filtering.
 */
export function DiningSection() {
  const [activeCategory, setActiveCategory] = useState<DiningCategory>('all')

  const filteredVenues =
    activeCategory === 'all'
      ? diningVenues
      : diningVenues.filter((v) => v.category === activeCategory)

  return (
    <SectionContainer id="dining" label="Dining & Lifestyle">
      <div className="diningSection">
        <div className="diningInner">
          <SectionHeading
            label="Dining & Lifestyle"
            title="100+ Restaurants. Infinite Experiences."
            subtitle="Celebrity chef concepts, global cuisine, artisan markets, and experiential dining — American Dream redefines what it means to eat out."
          />

          {/* Category Pills */}
          <motion.div
            className="categoryPills"
            role="tablist"
            aria-label="Filter dining by category"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {diningCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={cn('categoryPill', activeCategory === cat.id && 'categoryPillActive')}
                onClick={() => setActiveCategory(cat.id as DiningCategory)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            className="diningGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            role="list"
            aria-label="Dining venues"
          >
            {filteredVenues.map((venue) => (
              <motion.div
                key={venue.id}
                className="diningCard"
                role="listitem"
                variants={staggerItem}
              >
                {venue.isSignature && (
                  <span className="signatureBadge" aria-label="Signature dining destination">
                    Signature
                  </span>
                )}
                <div className="diningCardImage">
                  <Image
                    src={venue.imageSrc}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="diningCardOverlay" aria-hidden="true">
                    <p className="diningCardCuisine">{venue.cuisineType}</p>
                    <h3 className="diningCardName">{venue.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dwell Time Message */}
          <motion.div
            className="dwellMessage"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <p className="dwellMessageQuote">
              &ldquo;Dining at American Dream isn&apos;t just a meal — it&apos;s the reason people
              stay for 6 hours, not 2.&rdquo;
            </p>
            <p className="dwellMessageSub">
              Average dwell time: 4.2 hours · Dining conversion: 78% of visitors
            </p>
            <CTAButton variant="primary" href="/leasing/fnb" size="md">
              Explore F&B Leasing
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
