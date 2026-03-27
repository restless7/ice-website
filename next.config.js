/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  async redirects() {
    return [
      {
        source: '/student-portal',
        destination: process.env.NEXT_PUBLIC_PORTAL_API_URL || 'http://192.168.1.17:3000',
        permanent: false,
      },
      {
        source: '/student-portal/:path*',
        destination: (process.env.NEXT_PUBLIC_PORTAL_API_URL || 'http://192.168.1.17:3000') + '/:path*',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
