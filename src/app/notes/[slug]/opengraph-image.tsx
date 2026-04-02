import { readFileSync } from 'fs';
import { join } from 'path';

import { ImageResponse } from 'next/og';

import { allNotes } from 'contentlayer/generated';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);

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
            {/* row with justify-between */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <p
                    style={{
                        fontSize: 40,
                        margin: 0,
                        fontFamily: 'Shorelines Script',
                    }}
                >
                    kogumarin
                </p>
                <p
                    style={{
                        fontSize: 40,
                        margin: 0,
                        fontFamily: 'Shorelines Script',
                    }}
                >
                    notes
                </p>
            </div>
            <hr />
            <h1
                style={{
                    fontSize: 64,
                    margin: '16px 0 0',
                    fontFamily: 'Instrument Sans',
                }}
            >
                {note?.title ?? 'Notes'}
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
