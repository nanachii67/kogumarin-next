import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AnimatedContent from '@/components/react-bits/animated-content';

import { ArrowCircleUpRightIcon } from '@phosphor-icons/react';
import { BlogNavigationData } from '@/utils/blog-entries';
import Link from 'next/link';

export default function BlogNavigationCards() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 max-w-9xl my-5">
                {BlogNavigationData.map((item, index) => (
                    <Link href={item.brandlink} key={index}>
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
                            <div>
                                <div className="absolute inset-0 pointer-events-none rounded-xl"></div>
                                <Card
                                    className="cursor-pointer w-full max-w-[500px] h-75 bg-koguma-card hover:bg-koguma-text font-ceribri text-koguma-text-light border-0 shadow-xl rounded-lg transition-all flex flex-col"
                                    key={index}
                                >
                                    <CardHeader>
                                        <CardDescription className="font-inter z-1 opacity-80"></CardDescription>
                                        <CardTitle className="text-5xl font-notes z-1 leading-9 tracking-tighter">
                                            {item.title}
                                        </CardTitle>
                                        <CardAction>
                                            <ArrowCircleUpRightIcon
                                                weight="fill"
                                                size={24}
                                            />
                                        </CardAction>
                                    </CardHeader>
                                    <CardFooter className="font-inter items-end text-xs opacity-80 mt-auto">
                                        <div className="flex flex-col">
                                            <p>
                                                {item.entryDate}{' '}
                                                <span className="opacity-75">
                                                    {item.entryLength}
                                                </span>
                                            </p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </AnimatedContent>
                    </Link>
                ))}
            </div>
        </div>
    );
}
