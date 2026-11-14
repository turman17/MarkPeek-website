/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MarkPeek-website',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
};

export default nextConfig;
