"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import "./CallToActionClose.styles.css";

/**
 * Final CTA section at the bottom of the page.
 * Features the contact form and footer navigation.
 */
export function CallToActionClose() {
  return (
    <div id="contact" aria-label="Contact and get started">
      <div className="ctaClose">
        <div className="ctaCloseInner">
          {/* Left column */}
          <motion.div
            className="ctaCloseLeft"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <h2 className="ctaCloseTitle">
              Ready to Be
              <br />
              Part of This?
            </h2>
            <p className="ctaCloseSubtitle">
              Connect with our commercial team to explore leasing, sponsorship,
              and event opportunities at American Dream.
            </p>

            <div className="ctaCloseContact">
              <p className="ctaCloseContactLabel">Commercial Inquiries</p>
              <p className="ctaCloseContactInfo">
                commercial@americandream.com
              </p>
              <p className="ctaCloseContactInfo">+1 (201) 559-3308</p>
            </div>
          </motion.div>

          {/* Right column — contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer bar */}
        <div className="footerBar">
          <p className="footerLogo">
            American <span className="footerLogoAccent">Dream</span>
          </p>
          <p className="footerCopyright">
            © {new Date().getFullYear()} American Dream. All rights reserved.
          </p>
          <nav className="footerLinks" aria-label="Footer navigation">
            <a className="footerLink" href="/leasing">
              Leasing
            </a>
            <a className="footerLink" href="/events">
              Events
            </a>
            <a className="footerLink" href="/sponsorship">
              Sponsorship
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
