'use client';

import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';
import { useParams, notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allNotes } from 'contentlayer/generated';

export default function Blog() {
    const params = useParams<{ slug: string }>();
    if (!params) return;

    const { slug } = params;

    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);

    if (!note) notFound();

    const MDXContent = useMDXComponent(note.body.code);

    return (
        <NotesLayout
            pageTitle="notes"
            noteIndex={`Entry #0`}
            noteTitle={note.title}
            noteDescription={`Written ${formatDate(note.date)}`}
        >
            <div className="relative z-0">
                <div className="relative z-1 flex flex-col mx-auto pb-10 md:pt-0 md:px-10 lg:px-0 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
                    <div className="flex flex-col gap-8 w-full mx-auto md:py-5 md:text-xl text-left">
                        <MDXContent />
                    </div>
                </div>
            </div>
        </NotesLayout>
    );
}
