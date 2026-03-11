import { motion } from 'framer-motion';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import useCursor from '@/hooks/useCursor';
import { NewRelease as releases } from '@/utils/new-release';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

export default function NewRelease() {
    const cursor = useCursor(({ instance }) => instance);

    return (
        <div className="relative bg-indigo-600 py-5 px-10">
            <div className="container max-w-9xl mx-auto">
                {releases.map((item) => (
                    <div
                        key={item.title}
                        className="grid grid-cols-1 md:grid-cols-2 text-koguma-text-light gap-2 md:gap-0 font-inter"
                    >
                        <div className="col-span-1 -space-y-2">
                            <div className="flex flex-row gap-2 items-center font-medium text-neutral-500 mix-blend-plus-lighter justify-left">
                                <p>New Release</p>
                                <p>•</p>
                                <p>{item.releasedate}</p>
                            </div>
                            <h1 className="font-bold text-3xl">
                                {item.title}{' '}
                                <span className="text-neutral-400 mix-blend-plus-lighter font-medium">
                                    {item.subtitle}
                                </span>
                            </h1>
                        </div>
                        <div className="col-span-1 justify-self-start md:justify-self-end flex items-center">
                            <Link href={item.releaselink}>
                                <motion.div
                                    whileHover={{ scale: 1.025 }}
                                    whileTap={{ scale: 0.975 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                >
                                    <Button
                                        className="bg-koguma-text-hover hover:bg-koguma-card text-koguma-text-light font-medium rounded-full"
                                        onMouseEnter={(e) => {
                                            if (cursor) {
                                                cursor.setStick(
                                                    e.currentTarget,
                                                );
                                                cursor.addState('-scale');
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (cursor) {
                                                cursor.removeState('-scale');
                                                cursor.removeStick();
                                            }
                                        }}
                                    >
                                        Listen <ArrowUpRightIcon />
                                    </Button>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
