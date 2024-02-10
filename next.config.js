/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api-backend/:path*",
        destination: `https://backend.bimbelgriselda.com/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
