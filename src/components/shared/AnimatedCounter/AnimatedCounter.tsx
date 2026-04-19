'use client'

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'
import './AnimatedCounter.styles.css'
import type { AnimatedCounterProps } from './AnimatedCounter.types'

/**
 * Animates a number from 0 to target when it enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function AnimatedCounter({
   target,
   prefix = '',
   suffix = '',
   duration = 2000,
   delay = 0,
   className,
   label,
}: AnimatedCounterProps) {
   const [ref, isIntersecting] = useIntersectionObserver<HTMLSpanElement>({
      threshold: 0.5,
      once: true,
   })

   const count = useAnimatedCounter({
      target,
      duration,
      delay,
      start: isIntersecting,
   })

   const displayValue = count.toLocaleString('en-US')
   const ariaLabel = label ?? `${prefix}${target.toLocaleString('en-US')}${suffix}`

   return (
      <span ref={ref} className={cn('counterWrapper', className)} aria-label={ariaLabel} aria-live="polite">
         {prefix && (
            <span className="counterPrefix" aria-hidden="true">
               {prefix}
            </span>
         )}
         <span className="counterValue" aria-hidden="true">
            {displayValue}
         </span>
         {suffix && (
            <span className="counterSuffix" aria-hidden="true">
               {suffix}
            </span>
         )}
      </span>
   )
}
