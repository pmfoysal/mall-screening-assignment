import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   const base = 'https://american-dream-deck.vercel.app'

   return [
      {
         url: base,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
      },
      {
         url: `${base}/events`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      {
         url: `${base}/sponsorship`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      },
      {
         url: `${base}/leasing`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      },
      {
         url: `${base}/leasing/luxury`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${base}/leasing/retail`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${base}/leasing/fnb`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${base}/leasing/popup`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.6,
      },
      {
         url: `${base}/venues`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${base}/venues/performing-arts`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${base}/venues/expo-hall`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
   ]
}
