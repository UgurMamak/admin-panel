/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  typescript: {
    // ...
  },
}

module.exports = nextConfig
