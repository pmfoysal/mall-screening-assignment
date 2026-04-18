import { GlobalNavigation } from '@/components/layout/GlobalNavigation'
import { ProgressIndicator } from '@/components/layout/ProgressIndicator'
import { SectionsLoader } from './SectionsLoader'

/**
 * Main experience page — Server Component root.
 * Renders nav + delegates section loading to a Client Component
 * (required for ssr:false dynamic imports per Next.js 16 rules).
 */
export default function HomePage() {
  return (
    <>
      {/* Fixed global navigation */}
      <GlobalNavigation />

      {/* Right-edge section progress dots */}
      <ProgressIndicator />

      {/* All 7 sections + contact footer */}
      <main id="main-content" tabIndex={-1}>
        <SectionsLoader />
      </main>
    </>
  )
}
