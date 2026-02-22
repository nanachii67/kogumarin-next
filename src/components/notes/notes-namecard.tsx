'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '../ui/separator';
import { featuredFriends } from '@/utils/featured-friends';
import { ArrowUpRightIcon, FacebookLogoIcon } from '@phosphor-icons/react';

export default function NotesNamecard() {
    return (
        <>
            <div className="bg-indigo-500 px-8 pb-6 mb-4 rounded-2xl shadow-2xl text-koguma-text-light">
                <h1 className="font-koguma text-3xl pt-8 text-koguma-text-light justify-center text-center">
                    friend plaque
                </h1>
                <div className="grid grid-col-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {featuredFriends.map((friend) => (
                        <motion.div
                            key={friend.friend_id}
                            whileHover={{ scale: 1.025 }}
                            whileTap={{ scale: 0.975 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <Link
                                href={friend.friend_link}
                                className="not-prose"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-row not-prose items-center">
                                    <div className="flex flex-row items-center gap-2 grow">
                                        <Image
                                            src={friend?.friend_avatar}
                                            alt={`${friend.friend_name}'s Facebook`}
                                            width={36}
                                            height={36}
                                            className="rounded-full"
                                        />
                                        <p className="font-inter-display leading-4">
                                            {friend.friend_name}
                                        </p>
                                        <p className="font-inter bg-koguma-text-light text-koguma-text px-1.5 rounded-full text-xs">
                                            {friend.friend_desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-row ml-2">
                                        <FacebookLogoIcon
                                            weight="fill"
                                            aria-label="Facebook"
                                        />
                                        <ArrowUpRightIcon />
                                    </div>
                                </div>
                                <Separator className="mt-2 opacity-50" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
