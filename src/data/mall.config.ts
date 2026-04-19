import type { MallConfig } from '@/types/sections.types'

export const mallConfig: MallConfig = {
   name: 'American Dream',
   tagline: "The World's Most Extraordinary Destination",
   subTagline: '40 Million Visitors. One Address. Unlimited Opportunity.',
   location: {
      city: 'East Rutherford',
      state: 'NJ',
      fullAddress: 'One American Dream Way, East Rutherford, NJ 07073',
      distanceToNYC: '6 miles from Times Square',
      coordinates: { lat: 40.8136, lng: -74.0691 },
   },
   stats: {
      annualVisitors: '40M+',
      totalSqFt: '3M',
      stores: '450+',
      totalInvestment: '$5B+',
      restaurants: '100+',
      distanceToNYC: '6 miles',
      nycMetroReach: '120M+',
      occupancyRate: '98%',
   },
   founded: 2021,
   developer: 'Triple Five Group',
   logoSrc: '/logos/american-dream.svg',
   heroImageSrc: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80',
   heroVideoSrc: undefined,
   heroVideoPoster: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80',
}

export const propertyStats = [
   {
      value: '40',
      display: '40M+',
      label: 'Annual Visitors',
      suffix: 'M+',
      numericValue: 40,
      prefix: '',
   },
   {
      value: '3',
      display: '3M',
      label: 'Sq Ft Development',
      suffix: 'M',
      numericValue: 3,
      prefix: '',
   },
   {
      value: '450',
      display: '450+',
      label: 'Stores & Experiences',
      suffix: '+',
      numericValue: 450,
      prefix: '',
   },
   {
      value: '6',
      display: '6 Mi',
      label: 'From Times Square',
      suffix: ' Mi',
      numericValue: 6,
      prefix: '',
   },
   {
      value: '5',
      display: '$5B+',
      label: 'Total Investment',
      suffix: 'B+',
      numericValue: 5,
      prefix: '$',
   },
   {
      value: '120',
      display: '120M+',
      label: 'Annual NYC Metro Reach',
      suffix: 'M+',
      numericValue: 120,
      prefix: '',
   },
] as const

export const demographicsData = [
   {
      stat: '35%',
      description: 'Household Income $100K+',
   },
   {
      stat: '58%',
      description: 'Visitors Under 45',
   },
   {
      stat: 'Top 5',
      description: 'US Retail Markets by Spend',
   },
] as const
