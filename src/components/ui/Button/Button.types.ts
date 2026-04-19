import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from './Button'

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
   isLoading?: boolean
   asChild?: boolean
}
