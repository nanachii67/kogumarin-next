'use client';

import { compareDesc } from 'date-fns';

import { notFound, useParams } from 'next/navigation';

import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { allNotes } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import NotesNamecard from '@/components/notes/notes-namecard';

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

    const components = {
      ArrowUpRightIcon,
      NotesNamecard,
    };

    return (
        <NotesLayout
            pageTitle="notes"
            noteIndex={`Entry #${index + 1}`}
            noteTitle={note.title}
            noteDescription={`Written ${formatDate(note.date)}`}
        >
            <article className="mx-auto w-full font-inter md:text-xl max-w-5xl leading-snug md:leading-snug prose prose-code:text-koguma-text-light prose-strong:text-koguma-text-light prose-a:no-underline prose-a:text-koguma-text-light prose-a:font-inter-display prose-a:hover:underline text-koguma-text-light prose-p:opacity-90 prose-h5:font-inter-display prose-h6:text-sm prose-h6:opacity-80 prose-h6:flex prose-h6:items-center prose-h6:gap-1 prose-img:md:max-w-125 prose-img:mx-auto prose-img:rounded-2xl">
                <MDXContent components={components} />
            </article>
        </NotesLayout>
    );
}

export const runtime = 'edge';
