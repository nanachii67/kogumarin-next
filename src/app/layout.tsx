import type { Metadata } from 'next';
import { Gaegu, Inter_Tight, JetBrains_Mono } from 'next/font/google';

import Client from '@/app/client';
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

export const metadata: Metadata = {
    title: 'Koguma Rin',
    description: 'The Official Portfolio of Koguma Rin.',
};

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
                          antialiased
                      `}
            >
                <Client>{children}</Client>
            </body>
        </html>
    );
}
