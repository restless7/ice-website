/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  async rewrites() {
    return [
      {
        source: '/student-portal',
        destination: 'http://localhost:3000/student-portal'
      },
      {
        source: '/student-portal/:path*',
        destination: 'http://localhost:3000/student-portal/:path*'
      },
      {
        source: '/api/chat',
        destination: 'http://localhost:3000/api/chat'
      }
    ]
  }
}

module.exports = nextConfig
