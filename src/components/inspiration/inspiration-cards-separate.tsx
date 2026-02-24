'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import GradualBlur from '../react-bits/gradual-blur';
import AnimatedContent from '@/components/react-bits/animated-content';
import { useImageBrightness } from '@/hooks/useImageBrightness';
import { ReleaseData } from '@/utils/release-cards';
import * as motion from 'motion/react-client';

type ReleaseItem = (typeof ReleaseData)[number];

export function InspirationCardSeperate({
    item,
    index,
}: {
    item: ReleaseItem;
    index: number;
}) {
    const imageRef = useRef<HTMLImageElement>(null);
    const analysis = useImageBrightness(imageRef, 'bottom');

    const textColor =
        analysis?.brightness === 'light'
            ? 'text-koguma-text'
            : 'text-koguma-text-light';

    return (
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
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.025, opacity: 0.9 }}
                    whileTap={{ scale: 0.975 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                >
                    <div className="flex flex-col">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                ref={imageRef}
                                height={512}
                                width={512}
                                src={item.imagelink}
                                alt={`${item.title} ${item?.subtitle} - ${item.description}`}
                                className="object-cover aspect-square hover:bg-koguma-text-hover shadow-xl"
                                crossOrigin="anonymous"
                            />

                            <GradualBlur
                                target="parent"
                                position="bottom"
                                height="7rem"
                                strength={1}
                                divCount={5}
                                curve="bezier"
                                exponential={false}
                                opacity={1}
                                zIndex={10}
                            />

                            <div
                                className="absolute bottom-0 left-0 right-0 rounded-b-xl"
                                style={{
                                    zIndex: 15,
                                    height:
                                        analysis?.brightness === 'light'
                                            ? '8rem'
                                            : '7rem',
                                    background: analysis
                                        ? `linear-gradient(to top, ${analysis.dominantColorDark} 0%, transparent 100%)`
                                        : 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                                    opacity:
                                        analysis?.brightness === 'light'
                                            ? 0.6
                                            : 0.5,
                                    mixBlendMode:
                                        analysis?.brightness === 'light'
                                            ? 'screen'
                                            : 'multiply',
                                }}
                            />

                            <div
                                className="absolute bottom-0 left-0 right-0"
                                style={{ zIndex: 20 }}
                            >
                                <div className="flex flex-col my-3 mx-4">
                                    <div className={`text-left ${textColor}`}>
                                        <div className="flex flex-row justify-between items-center opacity-80 font-normal">
                                            <p className="text-xs">
                                                {item.description}
                                            </p>
                                            <p className="text-xs">
                                                {item.catalogtype} •{' '}
                                                {item.releaseyear}
                                            </p>
                                        </div>
                                        <p className="text-xl font-medium leading-5.5 line-clamp-2">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatedContent>
        </Link>
    );
}
