/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n configuration is handled by middleware in App Router
  // This is just for reference and documentation
  experimental: {
    // This is optional, but recommended for typesafe i18n
    typedRoutes: true
  }
}

export default nextConfig

