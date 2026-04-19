import { cn } from '@/lib/utils'
import './Skeleton.styles.css'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
   height?: string | number
   width?: string | number
   rounded?: 'sm' | 'md' | 'lg' | 'full'
}

/**
 * Skeleton loading placeholder with shimmer animation.
 */
export function Skeleton({ className, height, width, rounded = 'md', style, ...props }: SkeletonProps) {
   const roundedClass = {
      sm: 'rounded-[var(--radius-sm)]',
      md: 'rounded-[var(--radius-md)]',
      lg: 'rounded-[var(--radius-lg)]',
      full: 'rounded-full',
   }[rounded]

   return (
      <div
         className={cn('skeleton-shimmer', roundedClass, className)}
         style={{ height, width, ...style }}
         aria-hidden="true"
         role="presentation"
         {...props}
      />
   )
}
