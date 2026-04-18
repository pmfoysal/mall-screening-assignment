// Section and content type definitions

export const SECTION_IDS = [
  "hero",
  "property",
  "retail",
  "luxury",
  "dining",
  "attractions",
  "events",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export interface SectionConfig {
  id: SectionId;
  label: string;
  navLabel: string | null;
  component: string;
  order: number;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

export type RetailCategory =
  | "luxury"
  | "flagship"
  | "lifestyle"
  | "dining"
  | "entertainment";
export type BrandTier = "anchor" | "premium" | "standard" | "pop-up";

export interface BrandItem {
  name: string;
  logoSrc: string;
  category: RetailCategory;
  tier: BrandTier;
  websiteUrl?: string;
  accentColor?: string;
}

export interface EventType {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  venueName: string;
  capacity?: string;
  icon?: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  videoPoster?: string;
  accentColor?: string;
  stats: StatItem[];
}

export interface DiningVenue {
  id: string;
  name: string;
  cuisineType: string;
  category:
    | "celebrity-chef"
    | "international"
    | "casual"
    | "cafe"
    | "food-hall";
  imageSrc: string;
  description: string;
  isSignature?: boolean;
}

export interface LuxuryBrand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageSrc: string;
  tier: "ultra-luxury" | "luxury" | "premium";
  founded?: number;
  country?: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  isHighlighted?: boolean;
}

export interface MallConfig {
  name: string;
  tagline: string;
  subTagline: string;
  location: {
    city: string;
    state: string;
    fullAddress: string;
    distanceToNYC: string;
    coordinates?: { lat: number; lng: number };
  };
  stats: {
    annualVisitors: string;
    totalSqFt: string;
    stores: string;
    totalInvestment: string;
    restaurants: string;
    distanceToNYC: string;
    nycMetroReach: string;
    occupancyRate: string;
  };
  founded: number;
  developer: string;
  logoSrc: string;
  heroImageSrc: string;
  heroVideoSrc?: string;
  heroVideoPoster?: string;
}
