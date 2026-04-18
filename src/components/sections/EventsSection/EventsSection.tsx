"use client";

import { Music, Zap, Briefcase, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { eventTypes, eventCapabilities } from "@/data/events.data";
import "./EventsSection.styles.css";

const eventIcons: Record<string, React.ReactNode> = {
  music: <Music size={22} aria-hidden="true" />,
  zap: <Zap size={22} aria-hidden="true" />,
  briefcase: <Briefcase size={22} aria-hidden="true" />,
  star: <Star size={22} aria-hidden="true" />,
};

/**
 * Events & Platform section — video reel background with glass-card event types
 * and capability stats.
 */
export function EventsSection() {
  return (
    <SectionContainer id="events" label="Events & Platform">
      <div className="eventsSection">
        {/* Background Video / Fallback */}
        <div className="eventsBgVideo" aria-hidden="true">
          <VideoPlayer
            fallbackImageSrc="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80"
            className="w-full h-full"
            pauseWhenOffscreen
          />
        </div>
        <div className="eventsOverlay" aria-hidden="true" />

        {/* Content */}
        <div className="eventsContent">
          <SectionHeading
            label="Events & Platform"
            title="A Global Stage. In Your Backyard."
            subtitle="American Dream isn't just a mall — it's a platform. 40M+ annual visitors. World-class venues. Year-round programming."
            theme="dark"
          />

          {/* Event Type Cards */}
          <motion.div
            className="eventTypeGrid"
            role="list"
            aria-label="Event capabilities"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {eventTypes.map((eventType) => (
              <motion.div
                key={eventType.id}
                className="eventTypeCard"
                role="listitem"
                variants={staggerItem}
              >
                <div className="eventTypeIcon">
                  {eventIcons[eventType.icon ?? "star"]}
                </div>
                <div>
                  <p className="eventVenueLabel">
                    <MapPin size={12} aria-hidden="true" />
                    {eventType.venueName}
                  </p>
                </div>
                <h3 className="eventTypeTitle">{eventType.title}</h3>
                <p className="eventTypeDescription">{eventType.description}</p>
                {eventType.capacity && (
                  <span className="eventCapacityBadge">
                    {eventType.capacity}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Capabilities Bar */}
          <motion.div
            className="capabilitiesBar"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            role="list"
            aria-label="Event venue capabilities"
          >
            {eventCapabilities.map((cap, index) => (
              <div key={cap.label} className="capabilitiesItem" role="listitem">
                <span className="capabilitiesValue">{cap.value}</span>
                <span className="capabilitiesLabel">{cap.label}</span>
                {index < eventCapabilities.length - 1 && (
                  <span className="capabilitiesDivider" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="eventsCTASection"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <div className="eventsCTAGroup">
              <CTAButton variant="glow" size="lg" href="/events">
                Explore Event Capabilities
              </CTAButton>
              <CTAButton variant="ghost" size="lg" href="#contact">
                Book a Conversation
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
