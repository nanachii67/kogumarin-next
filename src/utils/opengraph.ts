import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const shorelinesFont = readFile(
    join(process.cwd(), 'public/fonts/shorelines_script_bold.ttf'),
);

const googleSansFont = readFile(
    join(process.cwd(), 'public/fonts/GoogleSansFlex-Medium.ttf'),
);

export async function loadOgFonts() {
    const [shorelinesScript, googleSans] = await Promise.all([
        shorelinesFont,
        googleSansFont,
    ]);

    return [
        {
            name: 'Shorelines Script',
            data: shorelinesScript,
            style: 'normal' as const,
        },
        {
            name: 'Google Sans Flex',
            data: googleSans,
            style: 'normal' as const,
        },
    ];
}
