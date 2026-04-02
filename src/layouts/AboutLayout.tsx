'use client';

import { Easing, motion } from 'framer-motion';
import type { Metadata } from 'next';
import { useEffect } from 'react';

import { Footer } from '@/components/footer';
import { HeroPolkaRevHeader } from '@/components/hero/hero-polka-header';
import { defaultMetadata } from '@/hooks/metadata';
import useMetadata from '@/hooks/metadata';
import { SiteMap } from '@/components/site-map';

const variants = {
    initial: { opacity: 0, filter: 'blur(2px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(3px)' },
};

const transition = { duration: 0.25, ease: 'easeOut' as Easing };

export default function AboutLayout({
    children,
    metadata,
    pageTitle,
    pageDescription,
}: {
    children: React.ReactNode;
    metadata?: Metadata;
    pageTitle?: string;
    pageDescription?: string;
}) {
    const setMetadata = useMetadata((state) => state.setMetadata);

    useEffect(() => {
        if (!metadata) return;

        setMetadata(metadata);

        return () => setMetadata(defaultMetadata);
    }, [metadata, setMetadata]);

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
