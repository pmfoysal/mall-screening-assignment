import Image from 'next/image'
import Link from 'next/link'
import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { CTAButton } from '@/components/shared/CTAButton'
import { BLUR_DATA_URL } from '@/lib/constants'
import './venues.css'
import { CallToActionClose } from '@/components/sections/EventsSection/CallToActionClose'

export const metadata = {
   title: 'Venues | American Dream',
   description: 'Explore world-class event venues at American Dream — Dream Live PAC and Expo Hall.',
}

const venues = [
   {
      id: 'performing-arts',
      name: 'Dream Live PAC',
      subtitle: 'Performing Arts Center',
      description:
         '5,000 seats with state-of-the-art acoustics and flexible seating configurations for concerts, theater, and special events.',
      capacity: '5,000 seats',
      imageSrc: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=80',
      features: ['Modular stage system', 'Premium VIP boxes', 'Industry-standard acoustics', 'Full production support'],
   },
   {
      id: 'expo-hall',
      name: 'Expo Hall',
      subtitle: 'Convention & Exhibition',
      description:
         '48,000 sq ft of flexible exhibition space with high ceilings, loading docks, and comprehensive event infrastructure.',
      capacity: '48,000 sq ft',
      imageSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
      features: ['High ceiling clearance', 'Multiple entry points', 'Climate controlled', 'Connected breakout rooms'],
   },
   {
      id: 'outdoor-plaza',
      name: 'Dream Plaza',
      subtitle: 'Outdoor Entertainment',
      description:
         'Open-air venue with stage, LED screens, and capacity for large-scale outdoor activations, festivals, and community events.',
      capacity: '10,000+ capacity',
      imageSrc: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80',
      features: ['Open-air design', 'Premium AV systems', 'Flexible staging', 'Food & beverage access'],
   },
   {
      id: 'performing-arts',
      name: 'Dream Live PAC',
      subtitle: 'Performing Arts Center',
      description:
         '5,000 seats with state-of-the-art acoustics and flexible seating configurations for concerts, theater, and special events.',
      capacity: '5,000 seats',
      imageSrc: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=80',
      features: ['Modular stage system', 'Premium VIP boxes', 'Industry-standard acoustics', 'Full production support'],
   },
]

export default function VenuesPage() {
   return (
      <div className="venuesPage">
         <GlobalNavigation />

         {/* Hero */}
         <div className="venuesHero">
            <Image
               src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
               alt="Event venues at American Dream"
               fill
               priority
               sizes="100vw"
               className="object-cover"
               placeholder="blur"
               blurDataURL={BLUR_DATA_URL}
            />
            <div className="venuesHeroOverlay" />
            <div className="venuesHeroContent">
               <p className="venuesHeroLabel">Event Venues</p>
               <h1 className="venuesHeroTitle">World-Class Spaces for Every Occasion</h1>
               <p className="venuesHeroSubtitle">
                  From intimate gatherings to arena-scale productions, American Dream offers unparalleled venue options.
               </p>
            </div>
         </div>

         {/* Back link */}
         <div className="venuesBackLink">
            <CTAButton variant="ghost" href="/" size="sm">
               ← Return to Overview
            </CTAButton>
         </div>

         {/* Venues Grid */}
         <section className="venuesSection">
            <div className="venuesInner">
               <div className="venuesGrid">
                  {venues.map((venue) => (
                     <Link key={venue.id} href={`/venues/${venue.id}`} className="venueCard">
                        <div className="venueCardImage">
                           <Image
                              src={venue.imageSrc}
                              alt={venue.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                           />
                           <div className="venueCardOverlay" />
                        </div>
                        <div className="venueCardContent">
                           <p className="venueCardSubtitle">{venue.subtitle}</p>
                           <h2 className="venueCardTitle">{venue.name}</h2>
                           <p className="venueCardDescription">{venue.description}</p>
                           <div className="venueCardMeta">
                              <span className="venueCardCapacity">{venue.capacity}</span>
                              <span className="venueCardLink">Learn more →</span>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="venuesCTA">
            <div className="venuesCTAInner">
               <h2 className="venuesCTATitle">Ready to Book Your Event?</h2>
               <p className="venuesCTASubtitle">
                  Our venue team will help you find the perfect space for your next event.
               </p>
               <div className="venuesCTAActions">
                  <CTAButton variant="primary" href="/#contact" size="lg">
                     Contact Our Team
                  </CTAButton>
                  <CTAButton variant="secondary" href="/events" size="lg">
                     View Event Capabilities
                  </CTAButton>
               </div>
            </div>
         </section>

         {/* Footer */}
         <CallToActionClose />
      </div>
   )
}
