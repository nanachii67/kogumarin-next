'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import AnimatedContent from '@/components/react-bits/animated-content';
import { InspirationData } from '@/utils/inspiration-cards';

export function InspirationCards() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl my-5 md:px-10 lg:px-0">
                {InspirationData.map((item, index) => (
                    <Link
                        href={item.brandlink}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
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
                            threshold={0}
                            delay={item.id * 0.1}
                        >
                            <motion.div
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.975 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                <div className="flex flex-col">
                                    <Image
                                        src={item.imagelink}
                                        alt={`${item.title} - ${item.description}`}
                                        height={0}
                                        width={512}
                                        className="mx-auto object-cover aspect-square rounded-xl hover:bg-koguma-text-hover hover:opacity-90 shadow-xl"
                                    />
                                    <div className="flex flex-col mt-2 space-y-[-2px]">
                                        <p className="text-xs opacity-80">
                                            {item.catalogtype} •{' '}
                                            {item.releaseyear}
                                        </p>
                                        <p className="font-inter-display text-xl">
                                            {item.title}
                                        </p>
                                        <p className="text-xs opacity-80 font-inter">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedContent>
                    </Link>
                ))}
            </div>
        </div>
    );
}
