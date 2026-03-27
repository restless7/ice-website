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
        destination: '/portal',
        permanent: false,
      },
      {
        source: '/student-portal/:path*',
        destination: '/portal/:path*',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
