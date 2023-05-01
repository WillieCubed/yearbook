/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
