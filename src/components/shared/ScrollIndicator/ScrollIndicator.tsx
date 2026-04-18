'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import './ScrollIndicator.styles.css'

interface ScrollIndicatorProps {
  className?: string
}

/**
 * Animated scroll-down indicator shown in the hero section.
 */
export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={cn('scrollIndicator', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.6 }}
      aria-hidden="true"
    >
      <span className="scrollIndicatorLabel">Scroll</span>
      <motion.div
        className="scrollIndicatorIcon"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}
