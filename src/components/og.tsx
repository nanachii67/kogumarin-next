import { ImageResponse } from 'next/og';

import { loadOgFonts } from '@/utils/opengraph';

type OgImageProps = {
    section: string;
    description: string;
};

export async function createOgImage({
    section,
    description,
}: OgImageProps) {
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
                    {section}
                </p>
            </div>
            <hr />
            <h1
                style={{
                    fontSize: 64,
                    margin: '16px 0 0',
                    fontFamily: 'Google Sans Flex',
                }}
            >
                {description}
            </h1>
        </div>,
        {
            width: 1200,
            height: 630,
            fonts,
        },
    );
}
