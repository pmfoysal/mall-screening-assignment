"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { cn } from "@/lib/utils";
import "./SectionHeading.styles.css";
import type { SectionHeadingProps } from "./SectionHeading.types";

/**
 * Consistent section heading with animated label + title + subtitle.
 * Used across all sections for visual hierarchy.
 */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  theme = "auto",
  titleSize = "xl",
  className,
  animate = true,
}: SectionHeadingProps) {
  const alignClass = {
    left: "headingWrapperLeft",
    center: "headingWrapperCenter",
    right: "headingWrapperRight",
  }[align];

  const themeClass = theme === "dark" ? "headingThemeDark" : "";

  const titleSizeClass = {
    xl: "headingTitleXl",
    lg: "headingTitleLg",
    md: "headingTitleMd",
  }[titleSize];

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT_ONCE,
      }
    : {};

  const Item = animate ? motion.div : "div";
  const itemProps = animate ? { variants: fadeInUp } : {};

  return (
    <Wrapper
      className={cn("headingWrapper", alignClass, themeClass, className)}
      {...wrapperProps}
    >
      {label && (
        <Item {...itemProps}>
          <span className="headingLabel">{label}</span>
        </Item>
      )}
      <Item {...itemProps}>
        <h2 className={cn("headingTitle", titleSizeClass)}>{title}</h2>
      </Item>
      {subtitle && (
        <Item {...itemProps}>
          <p className="headingSubtitle">{subtitle}</p>
        </Item>
      )}
    </Wrapper>
  );
}
