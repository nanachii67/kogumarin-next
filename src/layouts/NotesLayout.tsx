import { Easing, motion } from 'framer-motion';

import { Footer } from '@/components/footer';
import { HeroPolkaRevHeader } from '@/components/hero/hero-polka-header';
import { NotesHeader } from '@/components/notes/notes-header';
import { SiteMap } from '@/components/site-map';

const variants = {
    initial: { opacity: 0, filter: 'blur(1px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(1px)' },
};

const transition = { duration: 0.25, ease: 'easeOut' as Easing };

export default function AboutLayout({
    children,
    pageTitle,
    pageDescription,
    noteIndex,
    noteTitle,
    noteDescription,
}: {
    children: React.ReactNode;
    pageTitle?: string;
    pageDescription?: string;
    noteIndex?: string;
    noteTitle?: string;
    noteDescription?: string;
}) {
    return (
        <motion.div
            className="relative flex flex-col select-none mx-0"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
        >
            <HeroPolkaRevHeader
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            />
            {noteIndex && noteTitle && noteDescription && (
                <NotesHeader
                    pageIndex={noteIndex}
                    pageTitle={noteTitle}
                    pageDescription={noteDescription}
                />
            )}
            <section className="container md:max-w-9xl my-10 mx-auto z-10 px-10 md:px-0 min-h-[calc(100vh-50vh)]">
                {children}
            </section>
            <SiteMap />
            <Footer />
        </motion.div>
    );
}
