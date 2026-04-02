import type { Metadata } from 'next';

import { ReleaseCardsRev } from '@/components/release/release-cards-rev';
import FeatureDiscographyBar from '@/components/release/release-feature-bar';
import AboutLayout from '@/layouts/AboutLayout';

export const metadata: Metadata = {
    title: 'Releases — Kogumarin',
    openGraph: {
        title: 'Kogumarin',
        images: ['/opengraph-image'],
    },
};

export default function ReleasesPage() {
    return (
        <AboutLayout
            metadata={metadata}
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
