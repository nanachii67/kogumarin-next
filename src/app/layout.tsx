import type { Metadata } from 'next';
import {
    Gaegu,
    Instrument_Sans,
    Inter_Tight,
    JetBrains_Mono,
} from 'next/font/google';

import Client from '@/app/client';
import useMetadata from '@/hooks/metadata';
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
const instrument = Instrument_Sans({
    variable: '--font-instrument-sans',
    subsets: ['latin'],
    axes: ['wdth'],
});

export const metadata: Metadata = useMetadata.getState().metadata;

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
                          ${instrument.variable}
                          antialiased
                      `}
            >
                <Client>{children}</Client>
            </body>
        </html>
    );
}
