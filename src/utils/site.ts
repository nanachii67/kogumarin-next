export type SiteConfig = typeof siteConfig;

const baseTitle = "Kogumarin";

export const siteConfig = {
  name: baseTitle,
  description: "Kogumarin.",
  title: (pageName?: string) => {
    return pageName ? `${pageName} — ${baseTitle}` : baseTitle;
  },
  pages: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Releases",
      href: "/releases",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Socials",
      href: "/socials",
    },
    {
      label: "Blue Archive Drum Covers 1",
      href: "/releases/blue-archive-3rd-anniversary-drum-covers/",
    },
    {
      label: "Macarons / Energy Drinks",
      href: "/releases/macarons-energy-drinks/",
    },
    {
      label: "Orenji",
      href: "/releases/orenji/",
    },
    {
      label: "Kirakira",
      href: "/releases/kirakira/",
    },
    {
      label: "Rin's Small Tunes 1",
      href: "/releases/rins-small-tunes-1/",
    },
  ],
};
