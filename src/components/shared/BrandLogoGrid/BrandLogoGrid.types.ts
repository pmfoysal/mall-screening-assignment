import type { BrandItem, RetailCategory } from "@/types/sections.types";

export interface BrandLogoGridProps {
  brands: BrandItem[];
  activeCategory?: RetailCategory | "all";
  className?: string;
}
