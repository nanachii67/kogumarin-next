'use client';

import { compareDesc } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { defaultMetadata } from '@/hooks/metadata';
import useMetadata from '@/hooks/metadata';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import NotesLayout from '@/layouts/NotesLayout';
import { formatDate } from '@/lib/formatDate';
import {
    ArrowRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
} from '@phosphor-icons/react';
import { allNotes } from 'contentlayer/generated';

const ENTRIES_PER_PAGE = 10;

export default function Blogs() {
    const setMetadata = useMetadata((state) => state.setMetadata);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setMetadata({
            title: 'Notes — Kogumarin',
            openGraph: {
                title: 'Notes — Kogumarin',
                images: ['/opengraph-image'],
            },
        });

        return () => setMetadata(defaultMetadata);
    }, [setMetadata]);

    const totalPages = Math.ceil(allNotes.length / ENTRIES_PER_PAGE);
    const paginatedEntries = useMemo(() => {
        const posts = allNotes
            .sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))
            .map((v, i) => ({ value: v, index: i }))
            .reverse();
        const start = (currentPage - 1) * ENTRIES_PER_PAGE;
        return posts.slice(start, start + ENTRIES_PER_PAGE);
    }, [currentPage]);

    const globalStartIndex = (currentPage - 1) * ENTRIES_PER_PAGE;

    function goToPage(page: number) {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /** Build the visible page numbers with ellipsis gaps */
    function getPageNumbers(): (number | '...')[] {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages: (number | '...')[] = [];

        if (currentPage <= 4) {
            pages.push(1, 2, 3, 4, 5, '...', totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(
                1,
                '...',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            );
        } else {
            pages.push(
                1,
                '...',
                currentPage - 1,
                currentPage,
                currentPage + 1,
                '...',
                totalPages,
            );
        }

        return pages;
    }

    const pageNumbers = getPageNumbers();

    return (
        <>
            <NotesLayout
                pageTitle="notes"
                pageDescription="Koguma Rin's Journal Entries"
            >
                <div className="relative z-0 flex flex-col flex-1">
                    <div className="relative z-1 flex flex-col flex-1 mx-auto pt-5 pb-10 md:px-10 lg:px-0 text-koguma-text-light md:max-w-5xl font-inter w-full">
                        {/* Entry List */}
                        <div className="flex flex-col mb-8 gap-0 w-full flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, scale: 0.9625 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9625 }}
                                    transition={{
                                        duration: 0.2,
                                        type: 'spring',
                                        stiffness: 100,
                                    }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-stretch"
                                >
                                    {paginatedEntries.map((entry) => (
                                        <motion.div
                                            whileHover={{ scale: 1.025 }}
                                            whileTap={{ scale: 0.975 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 200,
                                            }}
                                            key={entry.value._id}
                                            className="w-full"
                                        >
                                            <Link
                                                href={entry.value.url}
                                                className="block"
                                            >
                                                <Card className="bg-koguma-card border-0 text-koguma-text-light flex flex-col h-full">
                                                    <CardHeader className="flex-none h-25 items-start justify-start content-start flex">
                                                        <div className="w-full">
                                                            <CardDescription className="w-full font-medium opacity-80">
                                                                Entry #
                                                                {globalStartIndex +
                                                                    entry.index +
                                                                    1}
                                                            </CardDescription>
                                                            <CardTitle className="text-2xl font-semibold line-clamp-2 w-full self-start leading-tight">
                                                                {
                                                                    entry.value
                                                                        .title
                                                                }
                                                            </CardTitle>
                                                        </div>

                                                        <CardAction>
                                                            <ArrowRightIcon />
                                                        </CardAction>
                                                    </CardHeader>
                                                    <CardFooter className="mt-auto">
                                                        <div className="flex flex-1 text-xs font-bold opacity-60 justify-between">
                                                            <p>
                                                                {formatDate(
                                                                    entry.value
                                                                        .date,
                                                                )}
                                                            </p>
                                                            <p>
                                                                {
                                                                    entry.value
                                                                        .readingTime
                                                                }
                                                            </p>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Pagination — only rendered when there is more than one page */}
                        {totalPages > 1 && (
                            <div className="flex flex-col items-center gap-3 mb-12">
                                <div className="flex items-center gap-2">
                                    {/* Prev */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        disabled={currentPage === 1}
                                        onClick={() =>
                                            goToPage(currentPage - 1)
                                        }
                                        className="flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 disabled:opacity-30 transition-opacity cursor-pointer"
                                    >
                                        <CaretLeftIcon
                                            size={14}
                                            weight="bold"
                                        />
                                        Prev
                                    </Button>

                                    {/* Page numbers */}
                                    <div className="flex items-center gap-1">
                                        {pageNumbers.map((page, i) =>
                                            page === '...' ? (
                                                <span
                                                    key={`ellipsis-${i}`}
                                                    className="w-8 text-center text-sm opacity-40 select-none"
                                                >
                                                    …
                                                </span>
                                            ) : (
                                                <motion.button
                                                    key={page}
                                                    onClick={() =>
                                                        goToPage(page)
                                                    }
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 300,
                                                    }}
                                                    className={[
                                                        'w-8 h-8 rounded-md text-sm font-inter font-medium transition-all cursor-pointer',
                                                        currentPage === page
                                                            ? 'bg-koguma-card text-koguma-bg font-semibold opacity-100'
                                                            : 'opacity-50 hover:opacity-90 hover:bg-koguma-text-hover',
                                                    ].join(' ')}
                                                >
                                                    {page}
                                                </motion.button>
                                            ),
                                        )}
                                    </div>

                                    {/* Next */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        disabled={currentPage === totalPages}
                                        onClick={() =>
                                            goToPage(currentPage + 1)
                                        }
                                        className="flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 disabled:opacity-30 transition-opacity cursor-pointer"
                                    >
                                        Next
                                        <CaretRightIcon
                                            size={14}
                                            weight="bold"
                                        />
                                    </Button>
                                </div>

                                {/* Page counter */}
                                <p className="text-xs opacity-40 font-inter font-medium select-none">
                                    Page {currentPage} of {totalPages} &mdash;{' '}
                                    {allNotes.length} entries total
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </NotesLayout>
        </>
    );
}
