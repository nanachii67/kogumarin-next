import type { Metadata } from 'next';

import { allNotes } from 'contentlayer/generated';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);
    const title = note?.title ? `${note.title} — Kogumarin` : 'Notes — Kogumarin';

    return {
        title,
        openGraph: {
            title,
            images: [`/notes/${slug}/opengraph-image`],
        },
    };
}

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
