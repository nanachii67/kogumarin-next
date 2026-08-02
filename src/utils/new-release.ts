export interface NewReleaseItem {
    title: string;
    releaselink: string;
    releasecover: string;
    releasedate: string;
    subtitle?: string;
}

export const NewRelease: NewReleaseItem[] = [
    {
        title: `Stars Beneath The Cosmos`,
        releaselink: '/releases/stars-beneath-the-cosmos',
        releasecover: `https://f4.bcbits.com/img/a3543959136_10.jpg`,
        releasedate: '2026',
    },
];
