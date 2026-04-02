import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const shorelinesFont = readFile(
    join(process.cwd(), 'public/fonts/shorelines_script_bold.ttf'),
);

const instrumentSansFont = readFile(
    join(process.cwd(), 'public/fonts/InstrumentSans-Medium.ttf'),
);

export async function loadOgFonts() {
    const [shorelinesScript, instrumentSans] = await Promise.all([
        shorelinesFont,
        instrumentSansFont,
    ]);

    return [
        {
            name: 'Shorelines Script',
            data: shorelinesScript,
            style: 'normal' as const,
        },
        {
            name: 'Instrument Sans',
            data: instrumentSans,
            style: 'normal' as const,
        },
    ];
}
