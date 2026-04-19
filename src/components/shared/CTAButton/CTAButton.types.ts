export interface CTAButtonProps {
   children: React.ReactNode
   href?: string
   onClick?: () => void
   variant?: 'primary' | 'secondary' | 'ghost' | 'glow' | 'dark' | 'outline-gold'
   size?: 'sm' | 'md' | 'lg'
   external?: boolean
   className?: string
   ariaLabel?: string
   isLoading?: boolean
   disabled?: boolean
   icon?: React.ReactNode
   iconPosition?: 'left' | 'right'
}
