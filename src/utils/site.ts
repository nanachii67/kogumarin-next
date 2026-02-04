export type SiteConfig = typeof siteConfig

const baseTitle = 'Kogumarin'

export const siteConfig = {
    name: baseTitle,
    description:
        'Kogumarin.',
    title: (pageName?: string) => {
        return pageName ? `${pageName} — ${baseTitle}` : baseTitle
    },
    pages: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Releases',
            href: '/releases/',
        },
        {
            label: 'About',
            href: '/about/',
        },
        {
            label: 'Cards',
            href: '/cards/',
        },
        {
            label: 'Orenji',
            href: '/releases/orenji/',
        },
        {
            label: 'Kirakira',
            href: '/releases/kirakira/',
        },
    ],
}
