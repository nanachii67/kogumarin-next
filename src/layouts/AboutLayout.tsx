'use client';

import { Footer } from '@/components/footer';
import { SiteMap } from '@/components/site-map';
import { HeroPolkaRevHeader } from '@/components/hero/hero-polka-header';
import { Easing, motion } from 'framer-motion';

const variants = {
    initial: { opacity: 0, filter: 'blur(2px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(3px)' },
};

const transition = { duration: 0.25, ease: 'easeOut' as Easing };

export default function AboutLayout({
    children,
    pageTitle,
    pageDescription,
}: {
    children: React.ReactNode;
    pageTitle?: string;
    pageDescription?: string;
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
            {/*<NavigationBar />*/}
            <div className="absolute inset-0 w-full about-background z-0" />
            <main className="flex flex-col mx-auto pt-10 px-10">
                {children}
            </main>
            <SiteMap />
            <Footer />
        </motion.div>
    );
}
