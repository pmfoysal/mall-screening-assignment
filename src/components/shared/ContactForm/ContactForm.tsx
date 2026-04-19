'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CTAButton } from '@/components/shared/CTAButton'
import { trackFormSubmit } from '@/lib/performance'
import { cn } from '@/lib/utils'
import { contactFormSchema, type ContactFormValues, type ContactFormProps } from './ContactForm.types'
import './ContactForm.styles.css'

/**
 * Contact form with React Hook Form + Zod validation.
 * Handles idle → submitting → success/error states.
 * Frontend-only submission (ready for API integration).
 */
export function ContactForm({ className, onSuccess }: ContactFormProps) {
   const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<ContactFormValues>({
      resolver: zodResolver(contactFormSchema),
   })

   const onSubmit = async (data: ContactFormValues) => {
      setSubmitState('loading')
      try {
         // Simulate API call — replace with real endpoint
         await new Promise((resolve) => setTimeout(resolve, 1200))
         trackFormSubmit(data.inquiryType)
         setSubmitState('success')
         onSuccess?.()
      } catch {
         setSubmitState('error')
      }
   }

   return (
      <AnimatePresence mode="wait">
         {submitState === 'success' ? (
            <motion.div
               key="success"
               className={cn('formSuccessMessage', className)}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
               <CheckCircle size={48} color="var(--color-gold)" aria-hidden="true" />
               <p className="formSuccessTitle">Message Received</p>
               <p className="formSuccessText">Our commercial team will be in touch within 24 hours.</p>
               <CTAButton
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                     setSubmitState('idle')
                     reset()
                  }}
               >
                  Send Another
               </CTAButton>
            </motion.div>
         ) : (
            <motion.form
               key="form"
               className={cn('form', className)}
               onSubmit={handleSubmit(onSubmit)}
               noValidate
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <div className="formRow">
                  <div className="formField">
                     <label className="formLabel" htmlFor="contact-name">
                        Full Name
                     </label>
                     <input
                        id="contact-name"
                        type="text"
                        className={cn('formInput', errors.name && 'border-[var(--color-error)]')}
                        placeholder="Jane Smith"
                        autoComplete="name"
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        aria-invalid={!!errors.name}
                        {...register('name')}
                     />
                     {errors.name && (
                        <span id="contact-name-error" className="formError" role="alert">
                           {errors.name.message}
                        </span>
                     )}
                  </div>

                  <div className="formField">
                     <label className="formLabel" htmlFor="contact-company">
                        Company
                     </label>
                     <input
                        id="contact-company"
                        type="text"
                        className={cn('formInput', errors.company && 'border-[var(--color-error)]')}
                        placeholder="Acme Corp"
                        autoComplete="organization"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'contact-company-error' : undefined}
                        {...register('company')}
                     />
                     {errors.company && (
                        <span id="contact-company-error" className="formError" role="alert">
                           {errors.company.message}
                        </span>
                     )}
                  </div>
               </div>

               <div className="formRow">
                  <div className="formField">
                     <label className="formLabel" htmlFor="contact-email">
                        Email Address
                     </label>
                     <input
                        id="contact-email"
                        type="email"
                        className={cn('formInput', errors.email && 'border-[var(--color-error)]')}
                        placeholder="jane@acme.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        {...register('email')}
                     />
                     {errors.email && (
                        <span id="contact-email-error" className="formError" role="alert">
                           {errors.email.message}
                        </span>
                     )}
                  </div>

                  <div className="formField">
                     <label className="formLabel" htmlFor="contact-inquiry">
                        Inquiry Type
                     </label>
                     <select
                        id="contact-inquiry"
                        className={cn('formSelect', errors.inquiryType && 'border-[var(--color-error)]')}
                        aria-invalid={!!errors.inquiryType}
                        aria-describedby={errors.inquiryType ? 'contact-inquiry-error' : undefined}
                        {...register('inquiryType')}
                     >
                        <option value="">Select a type...</option>
                        <option value="leasing">Retail Leasing</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="events">Events & Venues</option>
                        <option value="other">Other</option>
                     </select>
                     {errors.inquiryType && (
                        <span id="contact-inquiry-error" className="formError" role="alert">
                           {errors.inquiryType.message}
                        </span>
                     )}
                  </div>
               </div>

               <div className="formField">
                  <label className="formLabel" htmlFor="contact-message">
                     Message <span className="formLabelOptional">(Optional)</span>
                  </label>
                  <textarea
                     id="contact-message"
                     className="formTextarea"
                     placeholder="Tell us about your interest..."
                     {...register('message')}
                  />
               </div>

               <div className="formSubmitArea">
                  <CTAButton
                     variant="glow"
                     size="lg"
                     isLoading={submitState === 'loading'}
                     disabled={submitState === 'loading'}
                  >
                     {submitState === 'loading' ? 'Sending...' : 'Start a Conversation'}
                  </CTAButton>
                  {submitState === 'error' && (
                     <span className="formError" role="alert">
                        Something went wrong. Please try again.
                     </span>
                  )}
               </div>
            </motion.form>
         )}
      </AnimatePresence>
   )
}
