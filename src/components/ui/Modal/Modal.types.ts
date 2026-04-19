export interface ModalProps {
   isOpen: boolean
   onClose: () => void
   title?: string
   description?: string
   children: React.ReactNode
   size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
