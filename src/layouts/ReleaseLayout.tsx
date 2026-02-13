import { Footer } from '@/components/footer';
import DotGrid from '@/components/react-bits/dot-grid';
import ReleaseDiscographyBar from '@/components/release/release-bar-new';
import { Easing, motion } from 'framer-motion';

const variants = {
    initial: { opacity: 0, filter: 'blur(2px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(3px)' },
};

const transition = { duration: 0.25, ease: 'easeOut' as Easing };

export default function ReleaseLayout({
    children,
}: {
    children: React.ReactNode;
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
            {/*<NavigationBar />*/}
            <div className="absolute inset-0 w-full z-0 opacity-50">
                <DotGrid
                    dotSize={5}
                    gap={30}
                    baseColor="#1e1b4b"
                    activeColor="#1e1b4b"
                    proximity={50}
                    shockRadius={50}
                    shockStrength={1}
                    resistance={2000}
                    returnDuration={2.5}
                />
            </div>
            <main className="flex flex-col mx-auto">{children}</main>
            {/*<ReleaseProductionCredits />*/}
            <ReleaseDiscographyBar />
            <Footer />
        </motion.div>
    );
}
