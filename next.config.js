/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["brokerchooser.com"]
  }
}

module.exports = nextConfig
