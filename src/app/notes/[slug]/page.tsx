'use client';

import { compareDesc } from 'date-fns';
import type { Metadata } from 'next';

import { notFound, useParams } from 'next/navigation';
import { allNotes } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';

import PretextParagraph from '@/components/mdx/pretext-paragraph';
import NotesNamecard from '@/components/notes/notes-namecard';
import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';

export default function Blog() {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug ?? '';

    const note = allNotes.find((n) => n._raw.flattenedPath === `notes/${slug}`);
    const posts = allNotes.sort((a, b) =>
        compareDesc(new Date(b.date), new Date(a.date)),
    );
    const index = posts.findIndex(
        (n) => n._raw.flattenedPath === `notes/${slug}`,
    );

    if (!note) notFound();

    const metadata: Metadata = {
        title: `${note.title} — Kogumarin`,
        openGraph: {
            title: `${note.title} — Kogumarin`,
            images: [`/notes/${slug}/opengraph-image`],
        },
    };

    const MDXContent = useMDXComponent(note.body.code);

    const components = { ArrowUpRightIcon, NotesNamecard, PretextParagraph };

    return (
        <NotesLayout
            metadata={metadata}
            pageTitle="notes"
            noteIndex={`Entry #${index + 1}`}
            noteTitle={note.title}
            noteDescription={`Written ${formatDate(note.date)}`}
        >
            <article className="mx-auto w-full font-inter font-medium md:text-xl max-w-5xl leading-snug md:leading-snug prose prose-code:text-koguma-text-light prose-strong:text-koguma-text-light prose-a:no-underline prose-a:text-koguma-text-light prose-a:font-bold prose-a:hover:underline text-koguma-text-light prose-p:opacity-90 prose-h4:text-koguma-text-light/60 prose-h4:font-bold prose-h4:text-sm prose-h5:font-bold prose-h6:text-sm prose-h6:opacity-80 prose-h6:flex prose-h6:items-center prose-h6:gap-1 prose-img:md:max-w-125 prose-img:mx-auto prose-img:rounded-2xl">
                {/* eslint-disable-next-line react-hooks/static-components */}
                <MDXContent components={components} />
            </article>
        </NotesLayout>
    );
}
