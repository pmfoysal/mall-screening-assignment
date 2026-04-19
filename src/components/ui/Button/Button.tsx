import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import './Button.styles.css'
import type { ButtonProps } from './Button.types'

export const buttonVariants = cva('btn', {
   variants: {
      variant: {
         primary: 'btn-primary',
         secondary: 'btn-secondary',
         ghost: 'btn-ghost',
         glow: 'btn-glow',
         dark: 'btn-dark',
      },
      size: {
         sm: 'btn-sm',
         md: 'btn-md',
         lg: 'btn-lg',
      },
   },
   defaultVariants: {
      variant: 'primary',
      size: 'md',
   },
})

/**
 * Base Button component with full variant system via CVA.
 * Supports loading state, all interaction states, and accessible focus.
 */
export function Button({ className, variant, size, isLoading, disabled, children, ...props }: ButtonProps) {
   return (
      <button
         className={cn(buttonVariants({ variant, size }), className)}
         disabled={disabled ?? isLoading}
         aria-busy={isLoading}
         {...props}
      >
         {isLoading && <span className="btn-spinner" aria-hidden="true" />}
         {children}
      </button>
   )
}
