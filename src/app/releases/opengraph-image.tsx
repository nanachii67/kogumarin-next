import { createOgImage } from '@/components/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default async function OgImage() {
    return createOgImage({
        section: 'releases',
        description: 'All major music releases of Koguma Rin!',
    });
}
