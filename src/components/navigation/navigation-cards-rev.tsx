import Link from 'next/link';

import AnimatedContent from '@/components/react-bits/animated-content';
import { NavigationData } from '@/utils/navigation-cards';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import * as motion from 'motion/react-client';

export function NavigationCardsRev() {
    return (
        <div className="relative grid grid-cols-1 gap-8 w-full my-5 px-0 md:grid-cols-2 xl:grid-cols-4">
            {NavigationData.map((item, index) => (
                <Link
                    href={item.brandlink}
                    key={index}
                    className="block h-full w-full"
                >
                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={true}
                        duration={1}
                        ease="power3.out"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        delay={item.id * 0.1}
                    >
                        <motion.div
                            className="h-full"
                            whileHover={{ scale: 1.025 }}
                            whileTap={{ scale: 0.975 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <div className="flex h-full w-full flex-col">
                                <div className="flex h-full min-h-50 w-full flex-col rounded-2xl bg-koguma-text p-6 shadow-2xl">
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="font-inter-display">
                                            {item.entry}
                                        </p>
                                        <ArrowUpRightIcon />
                                    </div>
                                    <div className="flex grow flex-col font-inter">
                                        <h1 className="w-full min-h-40 py-8 text-5xl font-koguma leading-[0.9]">
                                            {item.title}
                                        </h1>
                                        <div className="mt-auto flex min-h-12 items-end">
                                            <p className="text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatedContent>
                </Link>
            ))}
        </div>
    );
}
