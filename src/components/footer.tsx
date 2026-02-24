'use client';

import {
    DiscordLogoIcon,
    EnvelopeIcon,
    FacebookLogoIcon,
    GithubLogoIcon,
    InstagramLogoIcon,
    SteamLogoIcon,
} from '@phosphor-icons/react';

export function Footer() {
    return (
        <div className="relative flex flex-col justify-center bg-koguma-text text-koguma-text-light h-86">
            <div className="relative mx-auto px-6 items-center w-full">
                <div className="flex flex-col gap-3 mx-auto max-w-xl text-center">
                    <div className="flex flex-col pt-6">
                        <h1 className="text-5xl md:text-8xl font-koguma pb-10 lg:pb-0">
                            kogumarin.
                        </h1>
                        <div className="flex flex-row justify-center md:justify-end gap-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:rinkoguma313@gmail.com"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Mail"
                                title="Mail"
                            >
                                <EnvelopeIcon weight="fill" size={24} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/nanachii67"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <GithubLogoIcon weight="fill" size={24} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/nanachii67"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Facebook"
                                title="Facebook"
                            >
                                <FacebookLogoIcon weight="fill" size={24} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/nanachii67_/"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Instagram"
                                title="Instagram"
                            >
                                <InstagramLogoIcon weight="fill" size={24} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://discord.com/users/1254241295652880458"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Discord"
                                title="Discord"
                            >
                                <DiscordLogoIcon weight="fill" size={24} />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://steamcommunity.com/id/nanachii67/"
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Steam"
                                title="Steam"
                            >
                                <SteamLogoIcon weight="fill" size={24} />
                            </a>
                        </div>
                        <p className="text-xs mt-2 text-center font-inter font-medium md:text-end">
                            © {new Date().getFullYear()}{' '}
                            <span>Kogs, on behalf of Kogumarin.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
