import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const shorelinesFont = readFile(
    join(process.cwd(), 'public/fonts/shorelines_script_bold.ttf'),
);

const sunghyunSansFont = readFile(
    join(process.cwd(), 'public/fonts/SunghyunSansDisambiguated-Medium.ttf'),
);

export async function loadOgFonts() {
    const [shorelinesScript, sunghyunSans] = await Promise.all([
        shorelinesFont,
        sunghyunSansFont,
    ]);

    return [
        {
            name: 'Shorelines Script',
            data: shorelinesScript,
            style: 'normal' as const,
        },
        {
            name: 'Sunghyun Sans Disambiguated',
            data: sunghyunSans,
            style: 'normal' as const,
        },
    ];
}
