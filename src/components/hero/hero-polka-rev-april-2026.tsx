import { motion } from 'framer-motion';

import { AnimatedTitle } from '../animated-title';
import AnimatedContent from '@/components/react-bits/animated-content';
import { ArrowDownIcon } from '@phosphor-icons/react';

export function HeroPolkaRevApril2026() {
    return (
        <div className="relative z-0 bg-indigo-700 flex flex-col justify-center text-indigo-950 h-screen font-inter">
            <div className="absolute inset-0 w-full opacity-50">
                <div className="absolute top-0 left-0 w-full h-full about-background z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 z-0" />
            </div>
            <div className="container max-w-9xl mx-auto z-10 my-10 lg:my-0 px-10 xl:px-0">
                <div className="flex flex-col text-koguma-text-light mt-5 -space-y-4">
                    <AnimatedContent
                        distance={10}
                        direction="vertical"
                        reverse={true}
                        duration={2.0}
                        ease="elastic.out(1, 0.3)"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.0}
                        threshold={0}
                        delay={0.2}
                    >
                        <h2 className="w-full flex justify-center text-2xl md:text-4xl font-gaegu tracking-tighter">
                            hi there. I am
                        </h2>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={10}
                        direction="vertical"
                        reverse={true}
                        duration={2.0}
                        ease="elastic.out(1, 0.3)"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.0}
                        threshold={0}
                        delay={0.4}
                    >
                        <AnimatedTitle text="kogumarin." />
                    </AnimatedContent>
                    <AnimatedContent
                        distance={10}
                        direction="vertical"
                        reverse={true}
                        duration={2.0}
                        ease="elastic.out(1, 0.3)"
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.0}
                        threshold={0}
                        delay={0.6}
                    >
                        <p className="text-xl font-medium leading-6 md:w-96 mx-auto text-center py-7">
                            A musician, a gamer, and a frontend developer, and
                            here is my repository of personal projects!
                        </p>
                    </AnimatedContent>
                </div>
            </div>
            <div className="absolute flex flex-col gap-3 bottom-8 right-8 justify-center items-center font-inter text-koguma-text-light/50">
                <AnimatedContent
                    distance={12.5}
                    direction="vertical"
                    reverse={true}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    threshold={0}
                    delay={1}
                >
                    <div className="p-2 bg-indigo-800 rounded-full">
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="flex flex-row gap-1"
                        >
                            <ArrowDownIcon size={25} />
                        </motion.div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}
