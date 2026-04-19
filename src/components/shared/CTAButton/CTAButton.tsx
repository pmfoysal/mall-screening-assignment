'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import './CTAButton.styles.css'
import type { CTAButtonProps } from './CTAButton.types'

/**
 * Full-featured CTA button component.
 * Supports link/button modes, all variants, loading states,
 * and Framer Motion tap feedback.
 */
export function CTAButton({
   children,
   href,
   onClick,
   variant = 'primary',
   size = 'md',
   external = false,
   className,
   ariaLabel,
   isLoading = false,
   disabled = false,
   icon,
   iconPosition = 'right',
}: CTAButtonProps) {
   const variantClass = {
      primary: 'ctaPrimary',
      secondary: 'ctaSecondary',
      ghost: 'ctaGhost',
      glow: 'ctaGlow',
      dark: 'ctaDark',
      'outline-gold': 'ctaOutlineGold',
   }[variant]

   const sizeClass = {
      sm: 'ctaSm',
      md: 'ctaMd',
      lg: 'ctaLg',
   }[size]

   const baseClass = cn('ctaButton', variantClass, sizeClass, className)
   const isDisabled = disabled || isLoading
   const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

   const content = (
      <>
         {isLoading && <span className="ctaSpinner" aria-hidden="true" />}
         {!isLoading && icon && iconPosition === 'left' && icon}
         <span>{children}</span>
         {!isLoading && icon && iconPosition === 'right' && icon}
      </>
   )

   if (href) {
      return (
         <motion.a
            href={isDisabled ? undefined : href}
            className={baseClass}
            aria-label={ariaLabel}
            aria-disabled={isDisabled ? true : undefined}
            tabIndex={isDisabled ? -1 : undefined}
            onClick={isDisabled ? (e) => e.preventDefault() : undefined}
            whileTap={{ scale: isDisabled ? 1 : 0.97 }}
            {...(isDisabled ? {} : externalProps)}
         >
            {content}
         </motion.a>
      )
   }

   return (
      <motion.button
         type="button"
         className={baseClass}
         onClick={onClick}
         aria-label={ariaLabel}
         disabled={isDisabled}
         aria-busy={isLoading}
         whileTap={{ scale: 0.97 }}
      >
         {content}
      </motion.button>
   )
}
