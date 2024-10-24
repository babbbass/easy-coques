/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        // port: "1337",
      },
    ],
  },
}

export default nextConfig
