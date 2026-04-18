import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'americandream.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
}

export default nextConfig
