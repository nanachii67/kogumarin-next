// import { Link, useParams } from 'react-router-dom';
import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';
import releases from '@/utils/releases.json';

interface ProductionSlug {
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
    streamingLinks: { bandcamp: string; applemusic?: string; spotify?: string };
    production?: {
        background_vocals?: string;
        producer?: string;
        orchestrator?: string;
        executive_producer?: string;
        programming?: string;
        synthesizer?: string;
        recording_engineer?: string;
        remixing_engineer?: string;
        mix_mastering_engineer?: string;
        record_label?: string;
        sampled_artist?: string;
    };
}

export default function ReleaseProductionCredits({
    trackId,
}: {
    trackId: string;
}) {
    const track: ProductionSlug | undefined = trackId
        ? releases[trackId as keyof typeof releases]
        : undefined;

    return (
        <div className="relative bg-koguma-card py-5 px-10">
            <div className="container max-w-9xl mx-auto font-inter">
                <div className="flex flex-row gap-2 items-center font-inter font-bold text-lg text-koguma-text-light/80 leading-5">
                    <p>
                        Production of{' '}
                        <span className="font-medium opacity-90">
                            {track?.title} {track?.subtitle}
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-koguma-text-light my-5 space-y-4 tracking-wide">
                    {track?.production?.producer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.producer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                producer
                            </p>
                        </div>
                    )}
                    {track?.production?.executive_producer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.executive_producer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                executive producer
                            </p>
                        </div>
                    )}
                    {track?.production?.background_vocals && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.background_vocals}
                            </p>
                            <p className="text-sm items-center capitalize">
                                Background Vocals
                            </p>
                        </div>
                    )}
                    {track?.production?.orchestrator && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.orchestrator}
                            </p>
                            <p className="text-sm items-center capitalize">
                                orchestrator
                            </p>
                        </div>
                    )}
                    {track?.production?.programming && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.programming}
                            </p>
                            <p className="text-sm items-center capitalize">
                                programming
                            </p>
                        </div>
                    )}
                    {track?.production?.synthesizer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.synthesizer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                synthesizer
                            </p>
                        </div>
                    )}
                    {track?.production?.recording_engineer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.recording_engineer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                recording engineer
                            </p>
                        </div>
                    )}
                    {track?.production?.remixing_engineer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.remixing_engineer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                Remixing engineer
                            </p>
                        </div>
                    )}
                    {track?.production?.mix_mastering_engineer && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.mix_mastering_engineer}
                            </p>
                            <p className="text-sm items-center capitalize">
                                mixing engineer, mastering engineer
                            </p>
                        </div>
                    )}
                    {track?.production?.sampled_artist && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.sampled_artist}
                            </p>
                            <p className="text-sm items-center capitalize">
                                Sampled Artist
                            </p>
                        </div>
                    )}
                    {track?.production?.record_label && (
                        <div className="col-span-1">
                            <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                {track?.production?.record_label}
                            </p>
                            <p className="text-sm items-center capitalize">
                                record label
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex flex-row gap-2 items-center font-medium text-sm text-koguma-text-light/80">
                    <p>Released on {formatDate(track?.releaseDate)}</p>
                </div>

                {track?.coverCopyright && (
                    <div className="flex flex-row gap-2 items-center font-medium text-sm text-koguma-text-light opacity-50">
                        <p>℗ {track?.coverCopyright}</p>
                    </div>
                )}
                <div className="flex flex-row gap-2 items-center font-medium text-sm text-koguma-text-light opacity-75">
                    <p>℗ {track?.releaseLabel}</p>
                </div>
                <div className="flex flex-row gap-2 items-center font-medium text-sm text-koguma-text-light/80">
                    <p>
                        Source:{' '}
                        <span className="font-bold space-x-1">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={track?.streamingLinks.bandcamp || '#'}
                                className="hover:underline underline-offset-2 decoration-1"
                            >
                                Bandcamp
                            </Link>
                            {track?.streamingLinks?.applemusic && (
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={
                                        track?.streamingLinks.applemusic || '#'
                                    }
                                    className="hover:underline underline-offset-2 decoration-1"
                                >
                                    Apple Music
                                </Link>
                            )}
                            {track?.streamingLinks?.spotify && (
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={track?.streamingLinks.spotify || '#'}
                                    className="hover:underline underline-offset-2 decoration-1"
                                >
                                    Spotify
                                </Link>
                            )}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
