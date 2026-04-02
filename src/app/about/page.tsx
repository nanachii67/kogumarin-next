import type { Metadata } from 'next';

import { InspirationCardsRev } from '@/components/inspiration/inspiration-cards-rev';
import AboutLayout from '@/layouts/AboutLayout';

export const metadata: Metadata = {
    title: 'About — Kogumarin',
    openGraph: {
        title: 'Kogumarin',
        images: ['/opengraph-image'],
    },
};

export default function AboutPage() {
    return (
        <>
            <AboutLayout
                metadata={metadata}
                pageTitle="about"
                pageDescription="Revised 5th February 2026"
            >
                <div className="relative z-0">
                    <div className="relative z-1 flex flex-col mx-auto pt-5 pb-10 text-koguma-text-light md:max-w-5xl font-inter font-medium text-center justify-center w-full">
                        <div className="flex flex-col mb-20 gap-6 md:text-2xl justify-center text-left mx-auto opacity-90">
                            <p>
                                Hewwo! I&apos;m Koguma Rin, and I make music,
                                nice to meet you!~
                            </p>
                            <p>
                                For 11 years in music production, I&apos;ve
                                wanted to start a personal page to document my
                                venture through music, although I&apos;m not
                                always blessed with time. So I finally took the
                                shot to make one! The styles I&apos;ve decided
                                to work under this title will focus on synthpop,
                                much like{' '}
                                <span className="font-inter font-bold  decoration-koguma-text-light/50">
                                    <a
                                        href="https://music.apple.com/ph/artist/snails-house/1007737414"
                                        className="hover:underline underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Snail&apos;s House
                                    </a>
                                    ,{' '}
                                    <a
                                        href="https://music.apple.com/ph/artist/synthion/978885336"
                                        className="hover:underline underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Synthion
                                    </a>
                                    ,{' '}
                                    <a
                                        href="https://music.apple.com/ph/artist/stessie/1439746986"
                                        className="hover:underline underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Stessie
                                    </a>
                                    ,{' '}
                                    <a
                                        href="https://music.apple.com/ph/artist/mitsukiyo/1477210468"
                                        className="hover:underline underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Mitsukiyo
                                    </a>
                                    ,{' '}
                                    <a
                                        href="https://music.apple.com/ph/artist/kotomi/1702107932"
                                        className="hover:underline underline-offset-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Kotomi
                                    </a>
                                </span>
                                , or something akin to the aesthetics of their
                                genre. Sometimes I&apos;d like to deviate from
                                my writing and be interested in J-Rock and
                                orchestral pieces.
                            </p>
                            <p>
                                With that being my introduction, I will be
                                looking forward to write more music with you!~
                            </p>
                        </div>
                        <div className="flex flex-col opacity-75">
                            <p>Koguma Rin&apos;s</p>
                        </div>
                        <div className="flex mx-auto gap-2">
                            <h1 className="text-4xl md:text-7xl font-koguma py-5 md:py-10">
                                Inspirations
                            </h1>
                            <p className="font-inter opacity-75 translate-y-10">
                                *
                            </p>
                        </div>
                        <div className="flex opacity-75 gap-2 items-center">
                            <p className="font-inter-display font-bold">*</p>
                            <p className="text-xs font-inter font-medium text-start">
                                Interacting with these cards redirects to Apple
                                Music and Apple Music Classical.{' '}
                                <span className="opacity-80">
                                    Apple Music, and Apple Music Classical are
                                    trademarks of Apple Inc.
                                </span>
                            </p>
                        </div>
                        <div>
                            <InspirationCardsRev />
                        </div>
                    </div>
                </div>
            </AboutLayout>
        </>
    );
}
