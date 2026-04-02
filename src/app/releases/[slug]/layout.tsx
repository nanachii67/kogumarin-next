import type { Metadata } from 'next';

import releases from '@/utils/releases.json';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const track = releases[slug as keyof typeof releases];

    const title = track?.title
        ? `${track.title} — Kogumarin`
        : 'Releases — Kogumarin';

    return {
        title,
        openGraph: {
            title,
            images: track?.coverImage ? [track.coverImage] : ['/opengraph-image'],
        },
    };
}

export default function ReleasesSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
