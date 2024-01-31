/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    webpack: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
