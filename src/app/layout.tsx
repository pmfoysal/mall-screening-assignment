import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { LenisProvider } from '@/components/layout/LenisProvider'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a14' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://american-dream-deck.vercel.app'),
  title: {
    default: "American Dream | The World's Most Extraordinary Destination",
    template: '%s | American Dream',
  },
  description:
    'American Dream — 3 million sq ft of retail, dining, entertainment, and luxury in East Rutherford, NJ. 40M+ annual visitors, 6 miles from NYC. Explore leasing, events, and sponsorship opportunities.',
  keywords: [
    'American Dream mall',
    'retail leasing NJ',
    'luxury shopping New Jersey',
    'mall events',
    'Nickelodeon Universe',
    'DreamWorks Water Park',
    'commercial real estate NJ',
  ],
  openGraph: {
    title: "American Dream | The World's Most Extraordinary Destination",
    description: '40M+ annual visitors. 3M sq ft. 6 miles from NYC. Unlimited opportunity.',
    type: 'website',
    locale: 'en_US',
    siteName: 'American Dream',
  },
  twitter: {
    card: 'summary_large_image',
    title: "American Dream | The World's Most Extraordinary Destination",
    description: '40M+ annual visitors. 3M sq ft. 6 miles from NYC.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* FOUC Prevention — applies theme class before hydration */}
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mallx-theme');var s=t?JSON.parse(t):{};var theme=s.state&&s.state.theme?s.state.theme:'system';var isDark=theme==='dark'||(theme==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(isDark)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex flex-col min-h-full">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
