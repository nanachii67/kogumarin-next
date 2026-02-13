import { withContentlayer } from 'next-contentlayer2';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: {},
    images: {
        remotePatterns: [
            new URL('https://is1-ssl.mzstatic.com/**'),
            new URL('https://f4.bcbits.com/**')
        ],
    },
};

export default withContentlayer(nextConfig);
