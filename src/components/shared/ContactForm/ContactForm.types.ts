import { z } from 'zod'

export const contactFormSchema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters'),
   company: z.string().min(1, 'Company is required'),
   email: z.string().email('Please enter a valid email address'),
   inquiryType: z
      .string()
      .min(1, 'Please select an inquiry type')
      .refine((val) => ['leasing', 'sponsorship', 'events', 'other'].includes(val), {
         message: 'Invalid inquiry type',
      }),
   message: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export interface ContactFormProps {
   className?: string
   onSuccess?: () => void
}
