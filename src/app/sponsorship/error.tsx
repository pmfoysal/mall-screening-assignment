'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
   error: Error & { digest?: string }
   reset: () => void
}

export default function SponsorshipError({ error, reset }: ErrorProps) {
   useEffect(() => {
      console.error('[SponsorshipError]', error)
   }, [error])

   return (
      <div
         style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
         }}
      >
         <p>Failed to load sponsorship page.</p>
         <button onClick={reset}>Try again</button>
         <Link href="/">← Back to Homepage</Link>
      </div>
   )
}
