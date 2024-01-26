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
};

module.exports = nextConfig;
