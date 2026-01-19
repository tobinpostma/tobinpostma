import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Images are pre-optimized at build time via scripts/optimize-images.mjs
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./styles/scss'],
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here if needed
});

export default withMDX(nextConfig);
