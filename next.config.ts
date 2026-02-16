import { withContentlayer } from 'next-contentlayer2';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: {},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'is1-ssl.mzstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'f4.bcbits.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                pathname: '/**',
            },
        ],
    },
};

export default withContentlayer(nextConfig);