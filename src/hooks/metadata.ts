import type { Metadata } from 'next';
import { create } from 'zustand';

type MetadataState = {
    metadata: Metadata;
    setMetadata: (metadata: Metadata) => void;
};

export const defaultMetadata: Metadata = {
    title: 'Home — Kogumarin',
    openGraph: {
        title: 'Kogumarin',
        images: ['/opengraph-image'],
    },
};

const useMetadata = create<MetadataState>((set) => ({
    metadata: defaultMetadata,
    setMetadata: (metadata) => set({ metadata }),
}));

export default useMetadata;
