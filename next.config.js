/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  experimental: {
    appDir: true,
  },
};
