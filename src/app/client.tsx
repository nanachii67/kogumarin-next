'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';

import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef } from 'react';

import { NavigationBar } from '@/components/navigation/navigation-bar';
import useMetadata from '@/hooks/metadata';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function getMetaContent(
    content: string,
    selector: string,
    attribute: 'name' | 'property',
    key: string,
) {
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.content = content;
}

function getTitle(title: unknown) {
    return typeof title === 'string' ? title : null;
}

function getImage(
    image: string | URL | { url: string | URL } | undefined,
) {
    if (!image) return null;
    if (typeof image === 'string') return image;
    if (image instanceof URL) return image.toString();
    if (typeof image.url === 'string') return image.url;

    return image.url.toString();
}

function getFirstImage(
    images:
        | string
        | URL
        | { url: string | URL }
        | Array<string | URL | { url: string | URL }>
        | undefined,
) {
    if (!images) return null;

    return getImage(Array.isArray(images) ? images[0] : images);
}

export default function Client({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();
    const metadata = useMetadata((state) => state.metadata);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (prefersReducedMotion) return;
        if (!wrapperRef.current || !contentRef.current) return;

        ScrollTrigger.getAll().forEach((t) => t.kill());
        ScrollSmoother.get()?.kill();

        const ctx = gsap.context(() => {
            ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1.2,
                effects: true,
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, [pathname, prefersReducedMotion]);

    useEffect(() => {
        const title = getTitle(metadata.title);
        const image = getFirstImage(metadata.openGraph?.images);

        if (title) {
            document.title = title;
            getMetaContent(title, 'meta[property="og:title"]', 'property', 'og:title');
            getMetaContent(title, 'meta[name="twitter:title"]', 'name', 'twitter:title');
        }

        if (image) {
            getMetaContent(image, 'meta[property="og:image"]', 'property', 'og:image');
            getMetaContent(image, 'meta[name="twitter:image"]', 'name', 'twitter:image');
        }
    }, [metadata]);

    if (prefersReducedMotion) {
        return (
            <div id="smooth-wrapper" ref={wrapperRef}>
                <div id="smooth-content" ref={contentRef}>
                    <NavigationBar />
                    {children}
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                <div id="smooth-wrapper" ref={wrapperRef}>
                    <div id="smooth-content" ref={contentRef}>
                        <NavigationBar />
                        {children}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
