/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
