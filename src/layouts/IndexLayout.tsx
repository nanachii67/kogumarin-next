import { Easing, motion } from 'framer-motion';

import NewRelease from '@/components/announcement/NewRelease';
import { Footer } from '@/components/footer';
import { HeroPolkaRevApril2026 } from '@/components/hero/hero-polka-rev-april-2026';

const variants = {
    initial: { opacity: 0, filter: 'blur(2px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(3px)' },
};

const transition = { duration: 0.25, ease: 'easeOut' as Easing };

export default function IndexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            className="relative flex flex-col select-none mx-0 tracking-wide"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
        >
            <HeroPolkaRevApril2026 />
            <NewRelease />
            {/*<NavigationBar />*/}
            <div className="relative z-1 bg-koguma-text-hover mx-auto">
                <main className="flex mx-auto pt-10 px-10">{children}</main>
            </div>
            <Footer />
        </motion.div>
    );
}
