'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { fadeInUp, VIEWPORT_ONCE } from '@/lib/animations'
import { cn } from '@/lib/utils'
import './StatCard.styles.css'
import type { StatCardProps } from './StatCard.types'

/**
 * A stat display card with animated counter on viewport entry.
 */
export function StatCard({
  value,
  label,
  numericValue,
  prefix = '',
  suffix = '',
  delay = 0,
  theme = 'light',
  className,
}: StatCardProps) {
  const isDark = theme === 'dark'

  return (
    <motion.div
      className={cn('statCard', isDark && 'statCardDark', className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delay: delay * 0.1 }}
    >
      <div className={cn('statValue', isDark && 'statValueDark')}>
        {numericValue !== undefined ? (
          <AnimatedCounter
            target={numericValue}
            prefix={prefix}
            suffix={suffix}
            delay={delay * 150}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="statDivider" aria-hidden="true" />
      <p className={cn('statLabel', isDark && 'statLabelDark')}>{label}</p>
    </motion.div>
  )
}
