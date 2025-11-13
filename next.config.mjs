/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rotibank",
  assetPrefix: "/rotibank/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;

