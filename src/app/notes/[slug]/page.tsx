'use client';

import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';
import { useParams, notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allNotes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Blog() {
    const params = useParams<{ slug: string }>();
    if (!params) return;

    const { slug } = params;

    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);
    const posts = allNotes.sort((a, b) =>
        compareDesc(new Date(b.date), new Date(a.date)),
    );
    const index = posts.findIndex(
        (n) => n._raw.flattenedPath === `notes/${slug}`,
    );

    if (!note) notFound();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const MDXContent = useMDXComponent(note.body.code);

    return (
        <NotesLayout
            pageTitle="notes"
            noteIndex={`Entry #${index}`}
            noteTitle={note.title}
            noteDescription={`Written ${formatDate(note.date)}`}
        >
            <article className="mx-auto max-w-none w-full font-inter prose prose-headings:text-zinc-200 lg:prose-xl text-zinc-200">
                <MDXContent />
            </article>
        </NotesLayout>
    );
}
