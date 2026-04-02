import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Notes — Kogumarin',
    openGraph: {
        title: 'Notes — Kogumarin',
        images: ['/opengraph-image'],
    },
};

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
