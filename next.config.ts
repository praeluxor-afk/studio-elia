import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
