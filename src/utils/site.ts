export type SiteConfig = typeof siteConfig;

const baseTitle = 'Kogumarin';

export const siteConfig = {
    name: baseTitle,
    description: 'Music, notes, and releases by Koguma Rin.',
    title: (pageName?: string) => {
        return pageName ? `${pageName} — ${baseTitle}` : baseTitle;
    },
    pages: [
        /*

      KOGUMA MAIN PAGES

    */
        { label: `Home`, href: '/' },
        { label: `Releases`, href: '/releases' },
        { label: `About`, href: '/about' },
        { label: `Notes`, href: '/notes' },
        { label: `Socials`, href: '/socials' },
        /*

        KOGUMA RELEASES

    */
        {
            label: `Blue Archive Drum Covers 1`,
            href: '/releases/blue-archive-3rd-anniversary-drum-covers/',
        },
        {
            label: `Macarons / Energy Drinks`,
            href: '/releases/macarons-energy-drinks/',
        },
        { label: `Orenji`, href: '/releases/orenji/' },
        {
            label: `Kirakira -Adrenaline Rashu Ver.-`,
            href: '/releases/kirakira/',
        },
        {
            label: `Rin's Small Tunes -Set 1-`,
            href: '/releases/rins-small-tunes-1/',
        },
        /*

        KOGUMA NOTES

    */
        {
            label: `Why I have been inactive`,
            href: '/notes/why-i-have-been-inactive',
        },
        {
            label: `Regarding the album "Rin's Silly Tunes"`,
            href: '/notes/regarding-the-album-rins-silly-tunes',
        },
        { label: `Happy New Year! (2026)`, href: '/notes/happy-new-year-2026' },
        {
            label: `Regarding a name change`,
            href: '/notes/regarding-a-name-change',
        },
    ],
};
