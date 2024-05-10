/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  }
  
  const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })
  
  module.exports = withNextra(nextConfig)