"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BrandLogoGrid } from "@/components/shared/BrandLogoGrid";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { retailBrands, retailCategories } from "@/data/retail.data";
import { cn } from "@/lib/utils";
import type { RetailCategory } from "@/types/sections.types";
import "./RetailSection.styles.css";

type ActiveCategory = RetailCategory | "all";

/**
 * Retail ecosystem section — filterable brand logo grid with category tabs.
 */
export function RetailSection() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("all");

  return (
    <SectionContainer id="retail" label="The Retail Ecosystem">
      <div className="retailSection">
        <div className="retailInner">
          <SectionHeading
            label="The Retail Ecosystem"
            title="450+ Brands. Every Category. One Destination."
            subtitle="From the world's top luxury houses to the most sought-after flagship retailers — American Dream commands the most coveted tenant mix in North America."
          />

          {/* Category Tabs */}
          <motion.div
            className="categoryTabs"
            role="tablist"
            aria-label="Filter brands by category"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {retailCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={cn(
                  "categoryTab",
                  activeCategory === cat.id && "categoryTabActive",
                )}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Brand Logo Grid */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <BrandLogoGrid
              brands={
                retailBrands as unknown as import("@/types/sections.types").BrandItem[]
              }
              activeCategory={activeCategory}
            />
          </motion.div>

          {/* Growth Block */}
          <motion.div
            className="growthBlock"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <div className="growthStats">
              {growthMetrics.map((metric) => (
                <div key={metric.label} className="growthStatItem">
                  <span className="growthStatValue">{metric.value}</span>
                  <span className="growthStatLabel">{metric.label}</span>
                </div>
              ))}
            </div>
            <CTAButton variant="primary" href="/leasing" size="md">
              Explore Leasing
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

const growthMetrics = [
  { value: "98%", label: "Occupancy Rate" },
  { value: "40%", label: "Premium Brands" },
  { value: "12", label: "New Flagships 2024" },
] as const;
