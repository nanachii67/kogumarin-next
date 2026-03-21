'use client';

import { motion } from 'framer-motion';

import { useMemo } from 'react';

// Seeded PRNG — same seed = same sequence, every time
const seededRandom = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
};

const round = (n: number, decimals = 4) =>
    Math.round(n * 10 ** decimals) / 10 ** decimals;

const getChars = (text: string) =>
    text
        .split('')
        .map((char, i) => ({
            char,
            x: round((seededRandom(i * 3) - 0.5) * 1),
            y: round((seededRandom(i * 3 + 1) - 0.5) * 10),
            rotate: round((seededRandom(i * 3 + 2) - 0.5) * 50),
        }));

export const AnimatedTitle = ({ text = 'scattered' }) => {
    const chars = useMemo(() => getChars(text), [text]);

    return (
        <div className="w-full flex justify-center items-center">
            <h1 className="flex text-7xl md:text-9xl font-gaegu font-bold text-koguma-text-light">
                {chars.map(({ char, x, y, rotate }, i) => (
                    <motion.span
                        key={i}
                        className="inline-block cursor-default"
                        initial={{ x, y, rotate }}
                        animate={{ x, y, rotate }}
                        whileHover={{ x: 0, y: 0, rotate: 0, scale: 1.1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 12,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
};
