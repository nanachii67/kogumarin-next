'use client';

import { useEffect } from 'react';

import { ReleaseCardsRev } from '@/components/release/release-cards-rev';
import FeatureDiscographyBar from '@/components/release/release-feature-bar';
import { defaultMetadata } from '@/hooks/metadata';
import useMetadata from '@/hooks/metadata';
import AboutLayout from '@/layouts/AboutLayout';

export default function ReleasesPage() {
    const setMetadata = useMetadata((state) => state.setMetadata);

    useEffect(() => {
        setMetadata({
            title: 'Releases — Kogumarin',
            openGraph: {
                title: 'Kogumarin',
                images: ['/opengraph-image'],
            },
        });

        return () => setMetadata(defaultMetadata);
    }, [setMetadata]);

    return (
        <AboutLayout
            pageTitle="releases"
            pageDescription="All major music releases of Koguma Rin!"
        >
            <div className="relative z-0">
                <div className="relative z-1 flex flex-col mx-auto pb-10 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
                    <ReleaseCardsRev />
                    <FeatureDiscographyBar />
                </div>
            </div>
        </AboutLayout>
    );
}
