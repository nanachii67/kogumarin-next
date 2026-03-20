// app/releases/[slug]/layout.tsx
import releases from '@/utils/releases.json';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const track = releases[slug as keyof typeof releases];

    return {
        title: track?.title
            ? `${track.title} — Kogumarin`
            : 'Releases — Kogumarin',
    };
}

export default function ReleasesSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
