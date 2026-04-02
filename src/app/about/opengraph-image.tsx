import { readFileSync } from 'fs';
import { join } from 'path';

import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
    const fontData = readFileSync(
        join(process.cwd(), 'public/fonts/shorelines_script_bold.ttf'),
    );
    const instrumentSans = readFileSync(
        join(process.cwd(), 'public/fonts/InstrumentSans-Medium.ttf'),
    );

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
                About
            </h1>
        </div>,
        {
            ...size,
            fonts: [
                { name: 'Shorelines Script', data: fontData, style: 'normal' },
                {
                    name: 'Instrument Sans',
                    data: instrumentSans,
                    style: 'normal',
                },
            ],
        },
    );
}
