import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/apis/:path*',
                destination: `${process.env.REST_API_URL}/apis/:path*`
            }
        ]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
        },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
