export type VenueType = "performing-arts" | "expo-hall";

export interface VenueModuleProps {
  venue: VenueType;
}

export interface VenueConfig {
  id: VenueType;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  sqft: string;
  imageSrc: string;
  specs: { label: string; value: string }[];
}
