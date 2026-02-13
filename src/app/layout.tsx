// import './globals.css';
import '@/styles/globals.css'
import '@/styles/fonts.css'

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavigationBar } from '@/components/navigation/navigation-bar';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kogumarin',
    description: 'Kogumarin',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <NavigationBar />
                {children}
            </body>
        </html>
    );
}
