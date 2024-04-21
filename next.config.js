/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = {
  output: 'export',
  images: { unoptimized: true },

  reactStrictMode: true,
  swcMinify: true
}
