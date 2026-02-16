import { motion } from 'framer-motion';

import Image from 'next/image';

import { Separator } from '../ui/separator';
import { featuredFriends } from '@/utils/featured-friends';
import { ArrowUpRightIcon, FacebookLogoIcon } from '@phosphor-icons/react';

export default function NotesNamecard() {
    return (
        <>
            <div className="bg-indigo-500 px-8 pb-4 mb-4 rounded-2xl shadow-2xl text-koguma-text-light">
                <h1 className="font-koguma text-3xl pt-8 text-koguma-text-light">
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
                            <div className="flex flex-row not-prose items-center">
                                <div className="flex flex-row items-center gap-4 grow">
                                    <Image
                                        src={friend?.friend_avatar}
                                        alt={friend.friend_name}
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                    <p className="font-inter-display">
                                        {friend.friend_name}
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <FacebookLogoIcon
                                        weight="fill"
                                        aria-label="Facebook"
                                    />
                                    <ArrowUpRightIcon />
                                </div>
                            </div>
                            <Separator className="mt-2 opacity-50" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
