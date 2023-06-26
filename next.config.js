/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["yield2-website.s3.eu-central-1.amazonaws.com"] },
  experimental: {
    mdxRs: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
