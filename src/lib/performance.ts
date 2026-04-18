// Performance monitoring utilities — ready to wire up to analytics

/**
 * Track when a section enters the viewport
 * Wire up to Vercel Analytics, GA4, PostHog, etc.
 */
export function trackSectionView(sectionId: string): void {
  // Ready for analytics integration:
  // window.gtag?.('event', 'section_view', { section_id: sectionId })
  // posthog?.capture('section_view', { section_id: sectionId })
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Track] Section view: ${sectionId}`);
  }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaId: string, destination: string): void {
  // window.gtag?.('event', 'cta_click', { cta_id: ctaId, destination })
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Track] CTA click: ${ctaId} → ${destination}`);
  }
}

/**
 * Track contact form submissions
 */
export function trackFormSubmit(inquiryType: string): void {
  // window.gtag?.('event', 'form_submit', { inquiry_type: inquiryType })
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Track] Form submit: ${inquiryType}`);
  }
}
