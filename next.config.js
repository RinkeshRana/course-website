/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fireship.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
