import type { Metadata } from 'next';
import { Gaegu, Inter_Tight, JetBrains_Mono } from 'next/font/google';

import Client from '@/app/client';
import '@/styles/fonts.css';
import '@/styles/globals.css';

const interMedium = Inter_Tight({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: '500',
});
const interExtraBold = Inter_Tight({
    variable: '--font-inter-title',
    subsets: ['latin'],
    weight: '800',
});
const interBlack = Inter_Tight({
    variable: '--font-inter-black',
    subsets: ['latin'],
    weight: '900',
});
const gaegu = Gaegu({
    variable: '--font-gaegu',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});
const mono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kogumarin',
    description: 'Kogumarin',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`
                          ${interMedium.variable}
                          ${interExtraBold.variable}
                          ${interBlack.variable}
                          ${gaegu.variable}
                          ${mono.variable}
                          antialiased
                      `}
            >
                <Client>{children}</Client>
            </body>
        </html>
    );
}
