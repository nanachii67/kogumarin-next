import '@/styles/globals.css';
import '@/styles/fonts.css';

import type { Metadata } from 'next';
import { Inter, Gaegu, JetBrains_Mono } from 'next/font/google';

import Client from '@/app/client';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
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
                className={`${inter.variable} ${gaegu.variable} ${mono.variable} antialiased`}
            >
                <Client>{children}</Client>
            </body>
        </html>
    );
}
