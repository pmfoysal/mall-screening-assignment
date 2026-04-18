'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/shared/ContactForm'
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/animations'
import { sponsorshipTiers, activationExamples } from '@/data/sponsorship.data'
import { propertyStats } from '@/data/mall.config'
import { BLUR_DATA_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import './SponsorshipModule.styles.css'

export function SponsorshipModule() {
  return (
    <div className="sponsorshipModule">
      <GlobalNavigation />

      {/* Hero */}
      <div className="moduleHero">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Brand partnership at American Dream"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="moduleHeroOverlay" />
        <div className="moduleHeroContent">
          <SectionHeading
            label="Sponsorship & Partnerships"
            title="Partner With the Destination."
            subtitle="Reach 40M+ annual visitors through the world's most extraordinary retail and entertainment complex."
            theme="dark"
          />
        </div>
      </div>

      {/* Back link */}
      <div className="moduleBackLink">
        <CTAButton variant="secondary" href="/" size="sm">
          ← Return to Overview
        </CTAButton>
      </div>

      {/* Audience Data */}
      <section className="moduleSection" aria-label="Audience data">
        <div className="moduleInner">
          <SectionHeading label="Our Audience" title="The Numbers That Move Brands" />
          <motion.div
            className="audienceGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {propertyStats.slice(0, 4).map((stat) => (
              <motion.div key={stat.label} className="audienceStat" variants={staggerItem}>
                <span className="audienceStatValue">{stat.display}</span>
                <span className="audienceStatLabel">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="moduleSection moduleSectionAlt" aria-label="Partnership tiers">
        <div className="moduleInner">
          <SectionHeading label="Partnership Tiers" title="Find Your Level of Engagement" />
          <motion.div
            className="tiersGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {sponsorshipTiers.map((tier) => (
              <motion.div
                key={tier.id}
                className={cn('tierCard', tier.isHighlighted && 'tierCardHighlighted')}
                variants={staggerItem}
              >
                {tier.isHighlighted && <span className="tierHighlightBadge">Most Popular</span>}
                <h3 className="tierName">{tier.name}</h3>
                <p className="tierDesc">{tier.description}</p>
                <ul className="tierBenefits" aria-label={`${tier.name} benefits`}>
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="tierBenefit">
                      <CheckCircle size={14} className="tierBenefitIcon" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activation Examples */}
      <section className="moduleSection" aria-label="Activation examples">
        <div className="moduleInner">
          <SectionHeading label="Real Activations" title="Brands That Chose American Dream" />
          <motion.div
            className="activationsGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {activationExamples.map((example) => (
              <motion.div key={example.brand} className="activationCard" variants={staggerItem}>
                <div className="activationImage">
                  <Image
                    src={example.imageSrc}
                    alt={`${example.brand} activation at American Dream`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
                <div className="activationInfo">
                  <h3 className="activationBrand">{example.brand}</h3>
                  <p className="activationDesc">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="moduleSection moduleSectionAlt">
        <div className="moduleInner moduleContactInner">
          <SectionHeading
            label="Partner With Us"
            title="Start the Conversation."
            subtitle="Our partnership team responds within 24 hours."
          />
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
