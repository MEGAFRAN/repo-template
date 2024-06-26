/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    const modifiedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      },
    }

    return modifiedConfig
  },
  output: "export",
}

export default nextConfig
