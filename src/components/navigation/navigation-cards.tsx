import { motion } from 'framer-motion';

import Link from 'next/link';

import AnimatedContent from '@/components/react-bits/animated-content';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { NavigationData } from '@/utils/navigation-cards';
import { ArrowCircleUpRightIcon } from '@phosphor-icons/react';

export function NavigationCards() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl md:min-w-9xl my-5">
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
                            threshold={0.2}
                            delay={item.id * 0.1}
                        >
                            <motion.div
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.975 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                <Card
                                    className="cursor-pointer w-full h-70 bg-koguma-card hover:bg-koguma-text font-ceribri text-koguma-text-light border-0 shadow-xl rounded-lg transition-all flex flex-col"
                                    key={index}
                                >
                                    <CardHeader>
                                        <CardDescription className="font-inter z-1 opacity-80">
                                            <p>{item.entry}</p>
                                        </CardDescription>
                                        <CardTitle className="text-4xl font-koguma mt-6 z-1">
                                            {item.title}
                                        </CardTitle>
                                        <CardAction>
                                            <ArrowCircleUpRightIcon
                                                weight="fill"
                                                size={24}
                                            />
                                        </CardAction>
                                    </CardHeader>
                                    <CardFooter className="font-inter items-end text-xs opacity-90 mt-auto">
                                        {item.description}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </AnimatedContent>
                    </Link>
                ))}
            </div>
        </div>
    );
}
