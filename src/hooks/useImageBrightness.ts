// hooks/useImageBrightness.ts
import { RefObject, useEffect, useState } from 'react';

export type ImageAnalysis = {
    brightness: 'dark' | 'light';
    dominantColor: string; // e.g. "rgb(120, 80, 160)"
    dominantColorDark: string; // darkened version for scrim
};

export function useImageBrightness(
    imageRef: RefObject<HTMLImageElement | null>,
    sampleRegion: 'bottom' | 'top' | 'full' = 'bottom',
): ImageAnalysis | null {
    const [analysis, setAnalysis] = useState<ImageAnalysis | null>(null);

    useEffect(() => {
        const img = imageRef.current;
        if (!img) return;

        const analyse = () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                ctx.drawImage(img, 0, 0);

                const regionHeight = Math.floor(canvas.height * 0.25);
                const startY =
                    sampleRegion === 'bottom'
                        ? canvas.height - regionHeight
                        : sampleRegion === 'top'
                          ? 0
                          : 0;
                const sampleH =
                    sampleRegion === 'full' ? canvas.height : regionHeight;

                const { data } = ctx.getImageData(
                    0,
                    startY,
                    canvas.width,
                    sampleH,
                );

                let r = 0,
                    g = 0,
                    b = 0,
                    count = 0;
                for (let i = 0; i < data.length; i += 4 * 10) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }

                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);

                // Perceived luminance
                const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                const isDark = luminance < 128;

                // Saturate the color slightly for a more vivid scrim
                const avg = (r + g + b) / 3;
                const saturationBoost = 2;
                const sr = Math.min(
                    255,
                    Math.round(avg + (r - avg) * saturationBoost),
                );
                const sg = Math.min(
                    255,
                    Math.round(avg + (g - avg) * saturationBoost),
                );
                const sb = Math.min(
                    255,
                    Math.round(avg + (b - avg) * saturationBoost),
                );

                // Darken significantly so text is always legible
                const blendFactor = isDark ? 0.45 : 2.2;
                const dr = Math.min(255, Math.round(sr * blendFactor));
                const dg = Math.min(255, Math.round(sg * blendFactor));
                const db = Math.min(255, Math.round(sb * blendFactor));

                setAnalysis({
                    brightness: isDark ? 'dark' : 'light',
                    dominantColor: `rgb(${sr}, ${sg}, ${sb})`,
                    dominantColorDark: `rgb(${dr}, ${dg}, ${db})`,
                });
            } catch {
                setAnalysis({
                    brightness: 'dark',
                    dominantColor: 'rgb(0, 0, 0)',
                    dominantColorDark: 'rgb(0, 0, 0)',
                });
            }
        };

        if (img.complete) {
            analyse();
        } else {
            img.addEventListener('load', analyse);
            return () => img.removeEventListener('load', analyse);
        }
    }, [imageRef, sampleRegion]);

    return analysis;
}
