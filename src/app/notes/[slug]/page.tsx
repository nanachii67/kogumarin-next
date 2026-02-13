'use client';

import notes from '@/utils/notes.json';
import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';
import { NotionNote } from '@/components/notion-note';
import { useParams } from 'next/navigation';

interface BlogsSlugs {
    entry_index: number;
    entry_date: string;
    entry_title: string;
    entry_notion_id: string;
}

export default function Blog() {
    const params = useParams<{ slug: string }>();
    if (!params) return;
    
    const { slug: blogId } = params;

    const blogs: BlogsSlugs | undefined = blogId
        ? (notes[blogId as keyof typeof notes] as BlogsSlugs | undefined)
        : undefined;

    if (!blogs) {
        return // <Navigate to="/notes" replace />;
    }

    return (
        <NotesLayout
            pageTitle="notes"
            noteIndex={`Entry #${blogs.entry_index}`}
            noteTitle={blogs.entry_title}
            noteDescription={`Written ${formatDate(blogs.entry_date)}`}
        >
            <div className="relative z-0">
                <div className="relative z-1 flex flex-col mx-auto pb-10 md:pt-0 md:px-10 lg:px-0 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
                    <div className="flex flex-col gap-8 w-full mx-auto md:py-5 md:text-xl text-left">
                        <NotionNote pageId={blogs.entry_notion_id} />
                    </div>
                </div>
            </div>
        </NotesLayout>
    );
}
