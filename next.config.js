/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
	// remotePatterns: [
	// 	{
	// 		hostname: 'localhost',
	// 	}
	// ]
  // },
  async rewrites() {
    return [
      {
        source: "/api-backend/:path*",
        // destination: `http://localhost:3001/api/:path*`,
        destination: `http://be-griselda:3001/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
