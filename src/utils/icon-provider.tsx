import {
    FacebookLogoIcon,
    InstagramLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import {
    DiscordLogoIcon,
    GithubLogoIcon,
    MusicNoteIcon,
    SteamLogoIcon,
    type Icon,
} from '@phosphor-icons/react';

export type AppIcons = { id: number; icon: Icon; socialMediaAppName: string };

export const IconProvider: AppIcons[] = [
    { id: 1, icon: FacebookLogoIcon, socialMediaAppName: 'Facebook' },
    { id: 2, icon: InstagramLogoIcon, socialMediaAppName: 'Instagram' },
    { id: 3, icon: DiscordLogoIcon, socialMediaAppName: 'Discord' },
    { id: 4, icon: MusicNoteIcon, socialMediaAppName: 'Bandcamp' },
    { id: 5, icon: GithubLogoIcon, socialMediaAppName: 'GitHub' },
    { id: 6, icon: SteamLogoIcon, socialMediaAppName: 'Steam' },
];
