'use client'

/**
 * Global error boundary for the root layout.
 * Catches errors in app/layout.tsx itself.
 * Must include <html> and <body> tags (replaces the layout when triggered).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong | American Dream</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#07070f',
          color: '#fff',
          gap: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'oklch(78% 0.13 75)',
          }}
        >
          Critical Error
        </p>
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '44ch',
            lineHeight: 1.6,
          }}
        >
          A critical error occurred. Please try again or refresh the page.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={reset}
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              background: 'oklch(78% 0.13 75)',
              color: 'oklch(7% 0.01 264)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Reload Page
          </a>
        </div>
      </body>
    </html>
  )
}
