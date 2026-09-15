'use client';

import {
    DiscordLogoIcon,
    EnvelopeIcon,
    FacebookLogoIcon,
    GithubLogoIcon,
    InstagramLogoIcon,
    SteamLogoIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';

export function Footer() {
    return (
        <div className="relative flex flex-col justify-center bg-koguma-text text-koguma-text-light h-86">
            <div className="relative mx-auto px-6 items-center w-full">
                <div className="flex flex-col gap-3 mx-auto max-w-xl text-center">
                    <div className="flex flex-col pt-6">
                        <Image
                            src="/assets/gogs-new-logo-new-site-fix.svg"
                            alt="kogumarin logo"
                            width={480}
                            height={160}
                className="w-full"
                loading='eager'
              />
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="flex flex-row justify-center md:justify-start gap-4">
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
                    <span>KOGS, on behalf of Kogumarin.</span>
                </p>
            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
