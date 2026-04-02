import { ImageResponse } from 'next/og';

import { allNotes } from 'contentlayer/generated';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 80,
                background: '#your-bg-color',
                color: '#your-text-color',
                fontFamily: 'sans-serif',
            }}
        >
            <p style={{ fontSize: 24, opacity: 0.5, margin: 0 }}>
                kogumarin — notes
            </p>
            <h1 style={{ fontSize: 64, margin: '16px 0 0' }}>
                {note?.title ?? 'Notes'}
            </h1>
        </div>,
        { ...size },
    );
}
