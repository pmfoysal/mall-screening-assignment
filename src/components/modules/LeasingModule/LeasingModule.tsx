'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/shared/ContactForm'
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from '@/lib/animations'
import { BLUR_DATA_URL } from '@/lib/constants'
import type { LeasingModuleProps, LeasingType, LeasingConfig } from './LeasingModule.types'
import './LeasingModule.styles.css'

const leasingConfigs: Record<LeasingType, LeasingConfig> = {
  luxury: {
    type: 'luxury',
    title: 'Luxury Leasing',
    tagline: 'Join the Most Prestigious Address in North America',
    description:
      "American Dream's Luxury Wing offers a dedicated premium floor alongside Hermès, Gucci, Louis Vuitton, and Dior — the only concentration of luxury brands of this scale outside major global capitals.",
    highlights: [
      'Dedicated luxury floor with controlled access',
      "Adjacent to the world's top luxury houses",
      'Premium clientele: 35% earn $100K+ household income',
      '6 miles from Manhattan — the luxury consumer capital',
      'Custom build-out capabilities and flexible configurations',
      'VIP parking and concierge services',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    ctaLabel: 'Inquire About Luxury Leasing',
  },
  retail: {
    type: 'retail',
    title: 'Flagship Retail Leasing',
    tagline: 'Your Best Store. In the Best Mall.',
    description:
      'With 40M+ annual visitors, 98% occupancy, and proven traffic data, American Dream delivers exceptional commercial performance for flagship and mid-tier retail brands.',
    highlights: [
      '40M+ annual visitors — proven traffic performance',
      '98% occupancy rate across retail floors',
      'Multi-format options: inline, kiosk, and anchor',
      'Strong co-tenancy with Nike, Apple, Zara, and more',
      'Flexible lease terms including pop-up pilots',
      'Comprehensive marketing and event support',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
    ctaLabel: 'Explore Retail Leasing',
  },
  fnb: {
    type: 'fnb',
    title: 'F&B & Restaurant Leasing',
    tagline: 'The Highest-Dwell Dining Destination in the Region',
    description:
      'Average dwell time of 4.2 hours and 78% dining conversion rate make American Dream the most commercially attractive F&B destination in the tri-state area.',
    highlights: [
      '4.2 hour average dwell time — extend the meal occasion',
      '78% of visitors make at least one dining transaction',
      '100+ existing restaurants driving cross-visit traffic',
      'Celebrity chef concepts anchoring the dining experience',
      'Outdoor and indoor dining configurations available',
      'Unique event-driven traffic spikes tied to attractions',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    ctaLabel: 'Explore F&B Leasing',
  },
  popup: {
    type: 'popup',
    title: 'Pop-Up & Temporary Leasing',
    tagline: 'Test, Activate, and Grow',
    description:
      'Short-term and seasonal leasing opportunities with flexible configurations — ideal for new market entries, product launches, holiday activations, and brand pilots.',
    highlights: [
      'Flexible terms from 30 days to 12 months',
      'Move-in ready configurations available',
      'High-traffic holiday and seasonal locations',
      'Perfect for new market entry and brand testing',
      'Full marketing support from American Dream team',
      'Path to permanent leasing upon success',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
    ctaLabel: 'Inquire About Pop-Up Space',
  },
}

export function LeasingModule({ type }: LeasingModuleProps) {
  const allTypes = Object.values(leasingConfigs)
  const activeConfig = type ? leasingConfigs[type] : null

  return (
    <div className="leasingModule">
      <GlobalNavigation />

      {/* Hero */}
      <div className="leasingHero">
        <Image
          src={
            activeConfig?.imageSrc ??
            'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80'
          }
          alt={activeConfig?.title ?? 'Leasing at American Dream'}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="leasingHeroOverlay" />
        <div className="leasingHeroContent">
          <SectionHeading
            label={activeConfig ? 'Leasing' : 'Leasing Opportunities'}
            title={activeConfig?.title ?? 'Find Your Place at American Dream'}
            subtitle={
              activeConfig?.tagline ??
              '450+ tenants. 98% occupancy. 40M+ annual visitors. The numbers make the case.'
            }
            theme="dark"
          />
        </div>
      </div>

      <div className="leasingBackLink">
        <CTAButton variant="secondary" href="/" size="sm">
          ← Return to Overview
        </CTAButton>
      </div>

      {activeConfig ? (
        /* ─── Specific leasing type view ─── */
        <>
          <section className="leasingSection">
            <div className="leasingInner leasingDetailGrid">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <SectionHeading
                  label="Why This Space"
                  title={activeConfig.tagline}
                  subtitle={activeConfig.description}
                  titleSize="md"
                  animate={false}
                />
                <ul className="leasingHighlights" aria-label="Leasing highlights">
                  {activeConfig.highlights.map((h) => (
                    <li key={h} className="leasingHighlight">
                      <CheckCircle size={16} className="leasingHighlightIcon" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div>
                <ContactForm />
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ─── Overview: all leasing types ─── */
        <section className="leasingSection">
          <div className="leasingInner">
            <SectionHeading label="Leasing Paths" title="Every Format. Every Opportunity." />
            <motion.div
              className="leasingTypeGrid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              {allTypes.map((config) => (
                <motion.a
                  key={config.type}
                  href={`/leasing/${config.type}`}
                  className="leasingTypeCard"
                  variants={staggerItem}
                  aria-label={`Explore ${config.title}`}
                >
                  <div className="leasingTypeImage">
                    <Image
                      src={config.imageSrc}
                      alt={config.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <div className="leasingTypeOverlay" />
                  </div>
                  <div className="leasingTypeInfo">
                    <h3 className="leasingTypeTitle">{config.title}</h3>
                    <p className="leasingTypeTagline">{config.tagline}</p>
                    <span className="leasingTypeLink">
                      Explore <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
