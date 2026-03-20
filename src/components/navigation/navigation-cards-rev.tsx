import Link from 'next/link';

import { Card } from '../ui/card';
import AnimatedContent from '@/components/react-bits/animated-content';
import { NavigationData } from '@/utils/navigation-cards';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import * as motion from 'motion/react-client';

export function NavigationCardsRev() {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full my-5 px-0">
            {NavigationData.map((item, index) => (
                <Link href={item.brandlink} key={index} className="w-full">
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
                            whileHover={{ scale: 1.025 }}
                            whileTap={{ scale: 0.975 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <div className="flex flex-col w-full h-full">
                                <div className="flex flex-row rounded-2xl bg-koguma-text shadow-2xl p-6 w-full h-full">
                                    <div className="flex flex-col font-inter grow">
                                        <p className="font-inter-display">
                                            {item.entry}
                                        </p>
                                        <h1 className="text-5xl font-koguma py-8 grow w-full">
                                            {item.title}
                                        </h1>
                                        <p className="text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ArrowUpRightIcon />
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
