'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { useState } from 'react';

import AnimatedContent from '@/components/react-bits/animated-content';
import DotGrid from '@/components/react-bits/dot-grid';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { IconProvider } from '@/utils/icon-provider';
import { SocialCards } from '@/utils/social-cards';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { CopyIcon } from '@phosphor-icons/react/dist/ssr';

export function HeroPolkaRevCards() {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleCopy = (text: string, id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="relative z-0 bg-indigo-700 flex flex-col justify-center text-indigo-950 min-h-screen py-10 px-10 font-inter">
            <div className="absolute inset-0 w-full opacity-50">
                <DotGrid
                    dotSize={5}
                    gap={30}
                    baseColor="#312e81"
                    activeColor="#312e81"
                    proximity={50}
                    shockRadius={50}
                    shockStrength={1}
                    resistance={2000}
                    returnDuration={2.5}
                />
            </div>
            <div className="container max-w-9xl mx-auto z-10 md:px-10 mt-20 lg:mt-0 lg:px-0">
                <div className="flex flex-col text-koguma-text-light mb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="col-span-1">
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={true}
                                duration={2.0}
                                ease="power3.out"
                                initialOpacity={0.0}
                                animateOpacity
                                scale={1.0}
                                threshold={0}
                                delay={0.2}
                            >
                                <p className="text-5xl font-koguma pt-5">
                                    kogumarin
                                </p>
                                <p className="font-medium text-xs">EST. 2024</p>
                            </AnimatedContent>
                        </div>
                        <div className="col-span-1 text-left md:justify-self-end md:text-right">
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={true}
                                duration={2.0}
                                ease="power3.out"
                                initialOpacity={0.0}
                                animateOpacity
                                scale={1.0}
                                threshold={0}
                                delay={0.4}
                            >
                                <p className="text-5xl font-koguma py-5">
                                    socials
                                </p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={true}
                                duration={2.0}
                                ease="power3.out"
                                initialOpacity={0.0}
                                animateOpacity
                                scale={1.0}
                                threshold={0}
                                delay={0.6}
                            >
                                <p className="text-xl font-medium leading-6 md:w-96">
                                    Feel free to look at these platforms, and
                                    consider giving a follow!~
                                </p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
                <TooltipProvider delayDuration={0}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 lg:mb-0">
                        {SocialCards.map((item) => {
                            const ProviderIcon = IconProvider.find(
                                (p) => p.id === item.id,
                            )?.icon;

                            return (
                                <AnimatedContent
                                    key={item.id}
                                    distance={50}
                                    direction="vertical"
                                    reverse={true}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.0}
                                    threshold={0}
                                    delay={item.id * 0.1}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.025 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 200,
                                        }}
                                    >
                                        <Card className="group cursor-pointer h-full lg:min-h-87.5 min-h-68.75 bg-indigo-500 hover:bg-indigo-600 text-koguma-text-light border-0 shadow-2xl shadow-koguma-text/50 rounded-lg transition-all relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full about-background z-0" />
                                            <div className="relative container z-10 flex flex-col h-full">
                                                <CardHeader className="-space-y-2 mb-9 lg:mb-27">
                                                    <div className="flex flex-row items-center gap-2 mb-1">
                                                        {ProviderIcon && (
                                                            <ProviderIcon
                                                                className="w-10 h-10"
                                                                weight="fill"
                                                            />
                                                        )}
                                                        <Avatar className="w-10 h-10">
                                                            <AvatarImage
                                                                src={
                                                                    item.socialMediaCurrentAvatar
                                                                }
                                                            />
                                                        </Avatar>
                                                    </div>
                                                    <CardTitle className="font-extrabold text-3xl">
                                                        {
                                                            item.socialMediaAppName
                                                        }
                                                    </CardTitle>
                                                    <CardDescription className="font-medium text-lg opacity-80 -space-y-1">
                                                        <p className="font-bold">
                                                            {
                                                                item.socialMediaHandlerFullName
                                                            }
                                                        </p>
                                                        <p className="flex flex-row items-center gap-2">
                                                            @
                                                            {
                                                                item.socialMediaHandler
                                                            }
                                                            <Tooltip
                                                                open={
                                                                    copiedId ===
                                                                    item.id
                                                                        ? true
                                                                        : undefined
                                                                }
                                                            >
                                                                <TooltipTrigger
                                                                    asChild
                                                                    className="bg-koguma-card"
                                                                >
                                                                    <Button
                                                                        size="icon-xs"
                                                                        variant="link"
                                                                        aria-label="Copy username"
                                                                        className="text-koguma-text-light opacity-0 group-hover:opacity-100 transition-opacity"
                                                                        onClick={(
                                                                            e,
                                                                        ) =>
                                                                            handleCopy(
                                                                                item.socialMediaHandler,
                                                                                item.id,
                                                                                e,
                                                                            )
                                                                        }
                                                                    >
                                                                        <CopyIcon weight="fill" />
                                                                    </Button>
                                                                </TooltipTrigger>
                                                                <TooltipContent
                                                                    side="bottom"
                                                                    className=" text-koguma-text-light select-none shadow"
                                                                >
                                                                    <p>
                                                                        {copiedId ===
                                                                        item.id
                                                                            ? 'Copied!'
                                                                            : 'Copy'}
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </p>
                                                    </CardDescription>
                                                    <CardAction>
                                                        <Link
                                                            href={
                                                                item.socialMediaLink
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button
                                                                size="icon"
                                                                className="text-koguma-text-light bg-koguma-card/75 rounded-full hover:bg-koguma-card"
                                                                aria-label="Open externally"
                                                                title="Open externally"
                                                                asChild
                                                            >
                                                                <div>
                                                                    <ArrowUpRightIcon />
                                                                </div>
                                                            </Button>
                                                        </Link>
                                                    </CardAction>
                                                </CardHeader>
                                                <CardFooter className="flex-none items-end">
                                                    {item.relevantLinks &&
                                                        item.relevantLinks.map(
                                                            (link) => (
                                                                <div
                                                                    key={
                                                                        link.relevantLinkId
                                                                    }
                                                                >
                                                                    <p className="text-sm opacity-80">
                                                                        Also
                                                                        check
                                                                        out
                                                                    </p>
                                                                    <a
                                                                        href={
                                                                            link.relevantLinkReferral
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="font-bold leading-6 flex items-center gap-1 underline underline-offset-3 hover:text-rose-200 transition-colors"
                                                                        aria-label={
                                                                            link.relevantLinkName
                                                                        }
                                                                        title={`${link.relevantLinkName} - ${link.relevantLinkAppName}`}
                                                                        onClick={(
                                                                            e,
                                                                        ) =>
                                                                            e.stopPropagation()
                                                                        }
                                                                    >
                                                                        {
                                                                            link.relevantLinkName
                                                                        }
                                                                        <ArrowUpRightIcon className="w-5 h-5" />
                                                                    </a>
                                                                    <p className="text-sm opacity-80">
                                                                        {
                                                                            link.relevantLinkAppName
                                                                        }
                                                                    </p>
                                                                </div>
                                                            ),
                                                        )}
                                                </CardFooter>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </AnimatedContent>
                            );
                        })}
                    </div>
                </TooltipProvider>
            </div>
            <div className="absolute flex flex-col gap-3 bottom-8 left-1/2 transform -translate-x-1/2 justify-center items-center font-inter text-koguma-text-light/40">
                <AnimatedContent
                    distance={12.5}
                    direction="vertical"
                    reverse={true}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    threshold={0}
                    delay={0.8}
                >
                    <p className="text-xs md:text-base">
                        © {new Date().getFullYear()}{' '}
                        <span>Kogs, on behalf of Kogumarin.</span>{' '}
                    </p>
                </AnimatedContent>
            </div>
        </div>
    );
}
