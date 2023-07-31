/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './src/styles/main.scss';`,
  },
  trailingSlash: true,
  images: {
    minimumCacheTTL: 1500000,
    loader: "default",
    unoptimized: true,
  },
}

module.exports = nextConfig
