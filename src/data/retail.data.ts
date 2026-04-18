import type { BrandItem, RetailCategory } from "@/types/sections.types";

export const retailBrands: readonly BrandItem[] = [
  // Luxury Anchors
  {
    name: "Hermès",
    logoSrc: "/logos/brands/hermes.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Gucci",
    logoSrc: "/logos/brands/gucci.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Louis Vuitton",
    logoSrc: "/logos/brands/lv.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Saint Laurent",
    logoSrc: "/logos/brands/ysl.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Dior",
    logoSrc: "/logos/brands/dior.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Prada",
    logoSrc: "/logos/brands/prada.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Balenciaga",
    logoSrc: "/logos/brands/balenciaga.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Bottega Veneta",
    logoSrc: "/logos/brands/bottega.svg",
    category: "luxury",
    tier: "anchor",
  },
  {
    name: "Moncler",
    logoSrc: "/logos/brands/moncler.svg",
    category: "luxury",
    tier: "premium",
  },
  {
    name: "Dolce & Gabbana",
    logoSrc: "/logos/brands/dg.svg",
    category: "luxury",
    tier: "anchor",
  },
  // Flagship
  {
    name: "Apple",
    logoSrc: "/logos/brands/apple.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "Nike",
    logoSrc: "/logos/brands/nike.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "H&M",
    logoSrc: "/logos/brands/hm.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "Zara",
    logoSrc: "/logos/brands/zara.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "Uniqlo",
    logoSrc: "/logos/brands/uniqlo.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "Sephora",
    logoSrc: "/logos/brands/sephora.svg",
    category: "flagship",
    tier: "anchor",
  },
  {
    name: "Urban Outfitters",
    logoSrc: "/logos/brands/uo.svg",
    category: "flagship",
    tier: "premium",
  },
  {
    name: "Bath & Body Works",
    logoSrc: "/logos/brands/bbw.svg",
    category: "flagship",
    tier: "standard",
  },
  {
    name: "Victoria's Secret",
    logoSrc: "/logos/brands/vs.svg",
    category: "flagship",
    tier: "standard",
  },
  {
    name: "The North Face",
    logoSrc: "/logos/brands/tnf.svg",
    category: "flagship",
    tier: "premium",
  },
  // Lifestyle
  {
    name: "Foot Locker",
    logoSrc: "/logos/brands/fl.svg",
    category: "lifestyle",
    tier: "standard",
  },
  {
    name: "PacSun",
    logoSrc: "/logos/brands/pacsun.svg",
    category: "lifestyle",
    tier: "standard",
  },
  {
    name: "Lids",
    logoSrc: "/logos/brands/lids.svg",
    category: "lifestyle",
    tier: "standard",
  },
  {
    name: "Aeropostale",
    logoSrc: "/logos/brands/aero.svg",
    category: "lifestyle",
    tier: "standard",
  },
  {
    name: "Brooks Brothers",
    logoSrc: "/logos/brands/bb.svg",
    category: "lifestyle",
    tier: "premium",
  },
  {
    name: "Free People",
    logoSrc: "/logos/brands/fp.svg",
    category: "lifestyle",
    tier: "premium",
  },
  {
    name: "Anthropologie",
    logoSrc: "/logos/brands/anthro.svg",
    category: "lifestyle",
    tier: "premium",
  },
  // Dining
  {
    name: "Din Tai Fung",
    logoSrc: "/logos/brands/dtf.svg",
    category: "dining",
    tier: "anchor",
  },
  {
    name: "Shake Shack",
    logoSrc: "/logos/brands/ss.svg",
    category: "dining",
    tier: "standard",
  },
  {
    name: "Nobu",
    logoSrc: "/logos/brands/nobu.svg",
    category: "dining",
    tier: "anchor",
  },
  {
    name: "Starbucks",
    logoSrc: "/logos/brands/sbux.svg",
    category: "dining",
    tier: "standard",
  },
  {
    name: "Bubba Gump",
    logoSrc: "/logos/brands/bg.svg",
    category: "dining",
    tier: "standard",
  },
  // Entertainment
  {
    name: "Nickelodeon Universe",
    logoSrc: "/logos/brands/nick.svg",
    category: "entertainment",
    tier: "anchor",
  },
  {
    name: "DreamWorks Water Park",
    logoSrc: "/logos/brands/dw.svg",
    category: "entertainment",
    tier: "anchor",
  },
  {
    name: "Big SNOW",
    logoSrc: "/logos/brands/bigsnow.svg",
    category: "entertainment",
    tier: "anchor",
  },
  {
    name: "Sea Life Aquarium",
    logoSrc: "/logos/brands/sealife.svg",
    category: "entertainment",
    tier: "anchor",
  },
] as const;

export const retailCategories: readonly {
  id: RetailCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All Brands" },
  { id: "luxury", label: "Luxury" },
  { id: "flagship", label: "Flagship" },
  { id: "lifestyle", label: "Lifestyle & Sport" },
  { id: "dining", label: "F&B" },
  { id: "entertainment", label: "Entertainment" },
] as const;
