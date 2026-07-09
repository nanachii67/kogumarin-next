import type { Metadata } from 'next';
import {
    Gaegu,
    Google_Sans_Flex,
    Inter_Tight,
    JetBrains_Mono,
} from 'next/font/google';

import Client from '@/app/client';
import { defaultMetadata } from '@/hooks/metadata';
import '@/styles/fonts.css';
import '@/styles/globals.css';

const inter = Inter_Tight({ variable: '--font-inter', subsets: ['latin'] });
const gaegu = Gaegu({
    variable: '--font-gaegu',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});
const mono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});
const googleSans = Google_Sans_Flex({
    variable: '--font-google-sans',
    subsets: ['latin'],
    axes: ['wdth', 'ROND'],
    fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`
                          ${inter.variable}
                          ${gaegu.variable}
                          ${mono.variable}
                          ${googleSans.variable}
                          antialiased
                      `}
            >
                <Client>{children}</Client>
            </body>
        </html>
    );
}
