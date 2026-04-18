import type { SponsorshipTier } from "@/types/sections.types";

export const sponsorshipTiers: readonly SponsorshipTier[] = [
  {
    id: "presenting",
    name: "Presenting Partner",
    description:
      "The highest visibility partnership — co-branded throughout the property with year-round activation rights and naming opportunities.",
    benefits: [
      "Property-wide naming rights for one attraction",
      "Year-round co-branded marketing campaigns",
      "Priority activation space in Grand Atrium",
      "Exclusive digital signage network access",
      "C-suite access to American Dream commercial team",
      "Priority renewal rights",
    ],
    isHighlighted: true,
  },
  {
    id: "category-exclusive",
    name: "Category Exclusive",
    description:
      "Own your category at American Dream — ensuring competitive exclusivity within your sector for the duration of the partnership.",
    benefits: [
      "Exclusive rights within your brand category",
      "Dedicated activation space year-round",
      "Digital and physical signage throughout property",
      "Co-marketing with American Dream social channels",
      "Event sponsorship priority access",
    ],
    isHighlighted: false,
  },
  {
    id: "activation",
    name: "Activation Partner",
    description:
      "Event-based and campaign-specific partnerships with targeted activation opportunities tied to high-traffic moments.",
    benefits: [
      "Season or event-specific activation rights",
      "Prime placement during activation period",
      "Branded digital content integration",
      "Access to visitor data and analytics",
      "Cross-promotional opportunities",
    ],
    isHighlighted: false,
  },
  {
    id: "digital-media",
    name: "Digital + Media",
    description:
      "Reach 40M+ annual visitors through American Dream's digital network — from in-property screens to social and email channels.",
    benefits: [
      "In-property digital network placements",
      "Email newsletter feature (2M subscribers)",
      "Social media content integration",
      "Mobile app banner and push campaigns",
      "Pre-event digital promotions",
    ],
    isHighlighted: false,
  },
] as const;

export const activationExamples = [
  {
    brand: "Nike",
    description:
      "Exclusive retail event in partnership with Nickelodeon Universe — product launch with custom in-park activation.",
    imageSrc:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    brand: "Samsung",
    description:
      "Product activation in Grand Atrium with interactive demo stations reaching 80K+ visitors over 3 days.",
    imageSrc:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
  },
  {
    brand: "Mercedes-Benz",
    description:
      "Luxury vehicle display throughout property atrium with VIP test-drive integration in adjacent lots.",
    imageSrc:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
] as const;
