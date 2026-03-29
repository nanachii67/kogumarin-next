'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { Separator } from '../ui/separator';
import { featuredFriends } from '@/utils/featured-friends';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

export default function NotesNamecard() {
    return (
        <>
            <div className="bg-indigo-500 px-8 pb-6 mb-4 rounded-2xl shadow-2xl text-koguma-text-light">
                <h1 className="font-koguma text-3xl pt-8 text-koguma-text-light justify-center text-center">
                    friend plaque
                </h1>
                <Separator className="mt-2 mb-4 opacity-50" />
                <Carousel>
                    <CarouselContent>
                        {featuredFriends.map((friend) => (
                            <CarouselItem
                                key={friend.friend_id}
                                className="basis-1/2 md:basis-1/5"
                            >
                                <motion.div
                                    whileHover={{ scale: 0.975 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                >
                                    <Link
                                        href={friend.friend_link}
                                        className="not-prose"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex flex-row not-prose items-start font-inter">
                                            <div className="flex flex-col items-center gap-2 grow">
                                                <Image
                                                    src={friend?.friend_avatar}
                                                    alt={`${friend.friend_name}'s Facebook`}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full shadow-2xl"
                                                />
                                                <div className="flex flex-col gap-0.5 justify-center items-center text-center">
                                                    <p className="font-medium text-[0.6rem] opacity-80">
                                                        {friend.friend_desc}
                                                    </p>
                                                    <p className="font-semibold leading-4.5">
                                                        {friend.friend_name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <ArrowUpRightIcon />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={'default'} />
                    <CarouselNext variant={'default'} />
                </Carousel>
            </div>
        </>
    );
}
