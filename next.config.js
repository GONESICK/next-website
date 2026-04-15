/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    const externalApiUrl = process.env.EXTERNAL_API_URL;

    // If EXTERNAL_API_URL is configured, proxy to external backend
    // Otherwise, use local Next.js Route Handlers
    if (externalApiUrl) {
      return [
        {
          source: '/api/trends/:path*',
          destination: `${externalApiUrl}/api/trends/:path*`,
        },
        {
          source: '/api/contact/:path*',
          destination: `${externalApiUrl}/api/contact/:path*`,
        },
      ];
    }

    // No rewrites needed when using local Route Handlers
    return [];
  },
}

module.exports = nextConfig
