'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/shared/ContactForm'
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/animations'
import { eventTypes, pastEventsHighlights } from '@/data/events.data'
import { BLUR_DATA_URL } from '@/lib/constants'
import { Music, Zap, Briefcase, Star } from 'lucide-react'
import './EventsModule.styles.css'

const eventIcons: Record<string, React.ReactNode> = {
  music: <Music size={22} />,
  zap: <Zap size={22} />,
  briefcase: <Briefcase size={22} />,
  star: <Star size={22} />,
}

export function EventsModule() {
  return (
    <div className="eventsModule">
      <GlobalNavigation />

      {/* Hero */}
      <div className="moduleHero">
        <Image
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80"
          alt="Events at American Dream"
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
            label="Events at American Dream"
            title="The Stage is Set."
            subtitle="5,000-seat PAC. 48,000 sq ft Expo Hall. Year-round activations. Your event deserves the world's most extraordinary destination."
            theme="dark"
          />
        </div>
      </div>

      {/* Back link */}
      <div className="moduleBackLink">
        <CTAButton variant="ghost" href="/" size="sm">
          ← Return to Overview
        </CTAButton>
      </div>

      {/* Venue Cards */}
      <section className="moduleSection" aria-label="Venue capabilities">
        <div className="moduleInner">
          <SectionHeading label="Venues" title="World-Class Spaces for Every Event" />
          <motion.div
            className="venueGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {eventTypes.map((event) => (
              <motion.div key={event.id} className="venueCard" variants={staggerItem}>
                <div className="venueCardIcon">{eventIcons[event.icon ?? 'star']}</div>
                <h3 className="venueCardTitle">{event.title}</h3>
                <p className="venueCardVenue">{event.venueName}</p>
                <p className="venueCardDesc">{event.description}</p>
                {event.capacity && <span className="venueCardCapacity">{event.capacity}</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="moduleSection moduleSectionAlt" aria-label="Past events">
        <div className="moduleInner">
          <SectionHeading label="Track Record" title="Events That Moved the Needle" />
          <motion.div
            className="pastEventsGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {pastEventsHighlights.map((event) => (
              <motion.div key={event.title} className="pastEventCard" variants={staggerItem}>
                <div className="pastEventImage">
                  <Image
                    src={event.imageSrc}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
                <div className="pastEventInfo">
                  <span className="pastEventType">{event.type}</span>
                  <h3 className="pastEventTitle">{event.title}</h3>
                  <p className="pastEventMeta">
                    {event.year} · {event.attendance} attendees
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="moduleSection" aria-label="Book an event" id="events-contact">
        <div className="moduleInner moduleContactInner">
          <div>
            <SectionHeading
              label="Get Started"
              title="Let's Make It Happen."
              subtitle="Tell us about your event and our team will be in touch within 24 hours."
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
