import { ImageResponse } from 'next/og'

export const alt = "American Dream — The World's Most Extraordinary Destination"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Open Graph image for social sharing.
 * Uses next/og (NOT @vercel/og) per metadata.md best practices.
 * No Edge runtime — uses default Node.js runtime.
 */
export default function Image() {
   return new ImageResponse(
      <div
         style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '80px',
            background: 'linear-gradient(135deg, #07070f 0%, #0f0f1a 50%, #12100a 100%)',
            position: 'relative',
            overflow: 'hidden',
         }}
      >
         {/* Background texture dots */}
         <div
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               backgroundImage: 'radial-gradient(circle, rgba(200,160,60,0.08) 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               display: 'flex',
            }}
         />

         {/* Gold accent line */}
         <div
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               height: '3px',
               background: 'linear-gradient(to right, transparent, rgba(200,160,60,0.8), transparent)',
               display: 'flex',
            }}
         />

         {/* Label */}
         <div
            style={{
               fontSize: '14px',
               letterSpacing: '0.2em',
               textTransform: 'uppercase',
               color: 'rgba(200,160,60,0.9)',
               fontFamily: 'system-ui',
               fontWeight: 500,
               marginBottom: '24px',
               display: 'flex',
            }}
         >
            American Dream · East Rutherford, NJ
         </div>

         {/* Headline */}
         <div
            style={{
               fontSize: '72px',
               fontWeight: 300,
               letterSpacing: '-0.04em',
               lineHeight: 0.92,
               color: '#f9f7f2',
               fontFamily: 'Georgia, serif',
               marginBottom: '32px',
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <span>The World&apos;s</span>
            <span>Most Extraordinary</span>
            <span style={{ color: 'rgba(200,160,60,0.9)', fontStyle: 'italic' }}>Destination</span>
         </div>

         {/* Stats row */}
         <div
            style={{
               display: 'flex',
               gap: '48px',
               alignItems: 'center',
            }}
         >
            {[
               { value: '40M+', label: 'Annual Visitors' },
               { value: '3M SQ FT', label: 'Development' },
               { value: '450+', label: 'Brands' },
            ].map((stat, i) => (
               <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                     style={{
                        fontSize: '28px',
                        fontWeight: 300,
                        color: '#f9f7f2',
                        fontFamily: 'Georgia, serif',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                     }}
                  >
                     {stat.value}
                  </span>
                  <span
                     style={{
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.45)',
                        fontFamily: 'system-ui',
                        display: 'flex',
                     }}
                  >
                     {stat.label}
                  </span>
               </div>
            ))}
         </div>
      </div>,
      { ...size }
   )
}
