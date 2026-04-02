import type { Metadata } from 'next';

import CardsLayout from '@/layouts/CardsLayout';

export const metadata: Metadata = {
    title: 'Socials — Kogumarin',
    openGraph: {
        title: 'Kogumarin',
        images: ['/opengraph-image'],
    },
};

export default function SocialCardsPage() {
    return (
        <CardsLayout metadata={metadata}>
            <></>
        </CardsLayout>
    );
}
