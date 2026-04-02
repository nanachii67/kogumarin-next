import { ImageResponse } from 'next/og';

import { loadOgFonts } from '@/utils/opengraph';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default async function OgImage() {
    const fonts = await loadOgFonts();

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 80,
                background: '#312e81',
                color: '#fecdd3',
            }}
        >
            <p style={{ fontSize: 40, fontFamily: 'Shorelines Script' }}>
                kogumarin
            </p>
            <h1 style={{ fontSize: 64, fontFamily: 'Instrument Sans' }}>
                Home
            </h1>
        </div>,
        { ...size, fonts },
    );
}
