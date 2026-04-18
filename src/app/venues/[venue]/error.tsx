'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function VenueError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[VenueError]', error)
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
      <p>Failed to load venue page.</p>
      <button onClick={reset}>Try again</button>
      <Link href="/venues">← Back to Venues</Link>
    </div>
  )
}
