/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  experimental: { cpus: 1 },
  async rewrites() {
    return [
      { source: '/api/:path*', destination: 'http://commercial-review-api:8080/api/:path*' },
      { source: '/uploads/:path*', destination: 'http://commercial-review-api:8080/uploads/:path*' },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/businesses',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interconblobstorage.blob.core.windows.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
