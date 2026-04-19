import { cn } from '@/lib/utils'
import './SectionContainer.styles.css'
import type { SectionContainerProps } from './SectionContainer.types'

/**
 * Wrapper for every main section.
 * Provides semantic `<section>` with id anchor, aria-label, and base styles.
 */
export function SectionContainer({
   id,
   children,
   label,
   className,
   fullBleed = false,
   minHeight = 'min-h-screen',
}: SectionContainerProps) {
   return (
      <section
         id={id}
         aria-label={label}
         data-section-id={id}
         className={cn('sectionWrapper', minHeight, fullBleed && 'sectionFullBleed', className)}
      >
         {children}
      </section>
   )
}
