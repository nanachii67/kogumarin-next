'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import AnimatedContent from '@/components/react-bits/animated-content';
import ReleaseLayout from '@/layouts/ReleaseLayout';
import releases from '@/utils/releases.json';
import { ArrowLeftIcon } from '@phosphor-icons/react';

interface ReleasesSlug {
    iframe: { src: string; href: string; label: string };
    title: string;
    subtitle?: string;
    artist: string;
    releaseDate: string;
    releaseYear: string;
    coverCopyright?: string;
    releaseLabel: string;
    releaseType: string;
    coverImage: string;
    streamingLinks: { bandcamp: string };
    tracklist?: {
        trackNumber: number;
        title: string;
        subtitle?: string;
        duration: string;
    }[];
}

export default function Track() {
    const params = useParams<{ slug: string }>();
    if (!params) return;

    const { slug: trackId } = params;

    const track: ReleasesSlug | undefined = trackId
        ? releases[trackId as keyof typeof releases]
        : undefined;

    if (!track) {
        return; // <Navigate to="/releases" replace />;
    }

    return (
        <ReleaseLayout>
            <div className="relative z-0">
                <div className="relative z-1 flex flex-col mt-10 md:mt-0 px-10 md:px-0 mx-auto text-koguma-text-light max-w-7xl font-inter text-center justify-center h-screen">
                    <div className="flex flex-col items-center justify-center space-y-8 font-inter py-5">
                        <div className="flex flex-col">
                            <div className="flex flex-row mb-2 justify-start items-center gap-2 text-koguma-text-light/80">
                                <ArrowLeftIcon />
                                <Link href="/releases">
                                    <p className="hover:underline underline-offset-3 decoration-0">
                                        Releases
                                    </p>
                                </Link>
                            </div>
                            <div className="space-y-2 justify-center">
                                <iframe
                                    className="w-[350px] md:min-w-[500px] aspect-square font-inter rounded-xl shadow-2xl shadow-koguma-fonts/20"
                                    src={track.iframe.src}
                                    seamless
                                >
                                    <a href={track.iframe.href}>
                                        {track.iframe.label}
                                    </a>
                                </iframe>
                                <div className="flex flex-col my-5 text-start">
                                    <p>{track.artist}</p>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
                                        <h1 className="text-4xl font-inter-display">
                                            {track.title}{' '}
                                        </h1>
                                        <h2 className="text-2xl md:text-4xl font-inter opacity-80">
                                            {track.subtitle}
                                        </h2>
                                    </div>
                                    <p className="opacity-80">
                                        {track.releaseType} •{' '}
                                        {track.releaseYear}
                                    </p>
                                </div>
                            </div>
                            {track.tracklist && (
                                <div className="tracklist">
                                    <div className="flex flex-col text-start mt-5 mb-2">
                                        <p>Featured Works</p>
                                    </div>
                                    {track.tracklist.map((track) => (
                                        <AnimatedContent
                                            key={track.trackNumber}
                                            distance={25}
                                            direction="vertical"
                                            reverse={true}
                                            duration={1.2}
                                            ease="power3.out"
                                            initialOpacity={0.0}
                                            animateOpacity
                                            scale={1.0}
                                            threshold={0}
                                            delay={track.trackNumber * 0.1}
                                        >
                                            <div key={track.trackNumber}>
                                                <div className="flex flex-row text-start items-center justify-between">
                                                    <div className="flex flex-row gap-3 items-center">
                                                        <p className="opacity-75">
                                                            {track.trackNumber}
                                                        </p>
                                                        <h3 className="md:text-2xl font-inter-display items-center">
                                                            {track.title}{' '}
                                                            <span className="font-inter opacity-75">
                                                                {track.subtitle}
                                                            </span>
                                                        </h3>
                                                    </div>
                                                    <p className="opacity-75">
                                                        {track.duration}
                                                    </p>
                                                </div>
                                            </div>
                                        </AnimatedContent>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ReleaseLayout>
    );
}

export const runtime = 'edge';
