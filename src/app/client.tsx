'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';

import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

import { NavigationBar } from '@/components/navigation/navigation-bar';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Client({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
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
    }, [pathname]);

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
