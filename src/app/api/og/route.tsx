import { ImageResponse } from 'next/og';

// App router includes @vercel/og.
// No need to install it.

async function loadGoogleFont(font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/,
    );

    if (resource) {
        const response = await fetch(resource[1]);
        if (response.status == 200) {
            return await response.arrayBuffer();
        }
    }

    throw new Error('failed to load font data');
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const title = searchParams.get('title')?.slice(0, 100) ?? 'Kogumarin';

        return new ImageResponse(
            <div
                style={{
                    backgroundColor: '#312c85',
                    backgroundSize: '150px 150px',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                }}
            >
                <div
                    style={{
                        color: '#fce7f3',
                        fontSize: 60,
                        fontFamily: 'Inter Tight',
                        padding: '0 120px',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        color: '#a5b4fc',
                        fontSize: 30,
                        fontFamily: 'Inter Tight',
                        fontWeight: 500,
                        padding: '0 120px',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    @kogumarin
                </div>
            </div>,
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Inter+Tight',
                        data: await loadGoogleFont('Inter+Tight', title),
                        style: 'normal',
                    },
                ],
            },
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, { status: 500 });
    }
}
