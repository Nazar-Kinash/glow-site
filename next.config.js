/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: 'custom',
    formats: ['image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // unoptimized: true,
  },
  experimental: {
    // optimizeCss: {
    //   fonts: true,
    //   minimumExternalSize: 10 * 1000 * 1000,
    // },
    scrollRestoration: true,
  },
  transpilePackages: ['gsap'],
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' && false,
});
module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig;
