'use client';

import Link from 'next/link';

import StaggeredMenu from '../react-bits/staggered-menu';
import Icon from '@/components/kogs_records_logo_var';
import BubbleMenu from '@/components/react-bits/bubble-menu';

// this is the constant for the BubbleMenu component.
// since I have put StaggeredMenu component, I will be using a new set constant.

const items = [
    {
        label: 'home',
        href: '/',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#fda4af', textColor: '#312e81' },
    },
    {
        label: 'about',
        href: '/about',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: { bgColor: '#fda4af', textColor: '#312e81' },
    },
    {
        label: 'releases',
        href: '/releases',
        ariaLabel: 'Releases',
        rotation: -8,
        hoverStyles: { bgColor: '#fda4af', textColor: '#312e81' },
    },
    {
        label: 'notes',
        href: '/notes',
        ariaLabel: 'Blog',
        rotation: 8,
        hoverStyles: { bgColor: '#fda4af', textColor: '#312e81' },
    },
    {
        label: 'socials',
        href: '/socials',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: { bgColor: '#fda4af', textColor: '#312e81' },
    },
];

// const menuItems = [
//     { label: 'Home', ariaLabel: 'Home', link: '/' },
//     { label: 'About', ariaLabel: 'About', link: '/about' },
//     { label: 'Releases', ariaLabel: 'Releases', link: '/releases' },
//     { label: 'Notes', ariaLabel: 'Notes', link: '/notes' },
//     { label: 'Socials', ariaLabel: 'Socials', link: '/socials' },
// ];

// const socialItems = [{ label: 'Twitter', link: 'https://twitter.com' }];

export const NavigationBar = () => (
    <>
        <div className="font-koguma text-sm">
            <BubbleMenu
                logo={
                    <Link href="/" className="opacity-75 hover:opacity-100">
                        <Icon />
                        <p className="hidden">Home</p>
                    </Link>
                }
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#4f46e5"
                menuContentColor="#fecdd3"
                useFixedPosition={false}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />
        </div>

        {/*<div className="h-screen fixed inset-0 z-10 pointer-events-none">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffe4e6"
                openMenuButtonColor="#ffe4e6"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoElement={<Icon />}
                accentColor="#1e1b4b"
            />
        </div>*/}
    </>
);
