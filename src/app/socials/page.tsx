'use client';

import { useEffect } from 'react';

import { defaultMetadata } from '@/hooks/metadata';
import useMetadata from '@/hooks/metadata';
import CardsLayout from '@/layouts/CardsLayout';

export default function SocialCardsPage() {
    const setMetadata = useMetadata((state) => state.setMetadata);

    useEffect(() => {
        setMetadata({
            title: 'Socials — Kogumarin',
            openGraph: {
                title: 'Kogumarin',
                images: ['/opengraph-image'],
            },
        });

        return () => setMetadata(defaultMetadata);
    }, [setMetadata]);

    return (
        <CardsLayout>
            <></>
        </CardsLayout>
    );
}
