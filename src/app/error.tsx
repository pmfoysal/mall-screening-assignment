'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'oklch(7% 0.01 264)',
        color: 'white',
        gap: '1.5rem',
        padding: '2rem',
        textAlign: 'center',
      }}
      role="alert"
    >
      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: 'oklch(78% 0.13 75)',
        }}
      >
        Something went wrong
      </h1>
      <p
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '1rem',
          color: 'oklch(68% 0.01 264)',
          maxWidth: '44ch',
        }}
      >
        We&apos;re sorry — an unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.75rem 2rem',
          borderRadius: '9999px',
          border: '1.5px solid oklch(78% 0.13 75)',
          background: 'transparent',
          color: 'oklch(78% 0.13 75)',
          cursor: 'pointer',
          transition: 'background 0.2s ease',
        }}
      >
        Try Again
      </button>
      <Link
        href="/"
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.75rem',
          color: 'oklch(45% 0.01 264)',
          letterSpacing: '0.08em',
        }}
      >
        ← Return to Homepage
      </Link>
    </div>
  )
}
