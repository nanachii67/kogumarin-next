import { allNotes } from 'contentlayer/generated';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);

    return {
        title: note?.title ? `${note.title} — Kogumarin` : 'Notes — Kogumarin',
        openGraph: {
            title: note?.title
                ? `${note.title} — Kogumarin`
                : 'Notes — Kogumarin',
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
