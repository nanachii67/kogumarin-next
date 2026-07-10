export interface KogsAlbumItem {
    albumnum: number;
    title: string;
    link: string;
    subtitle?: string;
}

export const KogsAlbum: KogsAlbumItem[] = [
    { albumnum: 1, title: 'Gogselection I', link: '/releases/gogselection-i' },
    {
        albumnum: 2,
        title: 'Macarons / Energy Drinks',
        link: '/releases/macarons-energy-drinks',
    },
    {
        albumnum: 3,
        title: 'Blue Archive Drum Covers 1',
        link: '/releases/blue-archive-drum-covers-1',
    },
];
