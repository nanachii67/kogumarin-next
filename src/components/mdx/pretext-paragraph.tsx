'use client';

import { layout, prepare } from '@chenglou/pretext';
import {
    isValidElement,
    startTransition,
    useEffect,
    useEffectEvent,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
    type CSSProperties,
    type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

type PretextParagraphProps = ComponentPropsWithoutRef<'p'> & {
    showMetrics?: boolean;
};

type PretextMetrics = {
    height: number;
    lineCount: number;
};

const getTextContent = (node: ReactNode): string => {
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
    }

    if (isValidElement<{ children?: ReactNode }>(node)) {
        return getTextContent(node.props.children);
    }

    return '';
};

const parseLineHeight = (lineHeight: string, fontSize: string) => {
    if (lineHeight !== 'normal') {
        return Number.parseFloat(lineHeight);
    }

    return Number.parseFloat(fontSize) * 1.2;
};

export default function PretextParagraph({
    children,
    className,
    showMetrics = false,
    style,
    ...props
}: PretextParagraphProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const [metrics, setMetrics] = useState<PretextMetrics | null>(null);
    const textContent = getTextContent(children).replace(/\s+/g, ' ').trim();

    const measure = useEffectEvent(() => {
        const node = ref.current;

        if (!node || !textContent) {
            return;
        }

        const width = node.clientWidth;

        if (!width) {
            return;
        }

        const computedStyle = window.getComputedStyle(node);
        const lineHeight = parseLineHeight(
            computedStyle.lineHeight,
            computedStyle.fontSize,
        );
        const prepared = prepare(textContent, computedStyle.font);
        const nextMetrics = layout(prepared, width, lineHeight);

        startTransition(() => {
            setMetrics((previousMetrics) => {
                if (
                    previousMetrics?.height === nextMetrics.height &&
                    previousMetrics?.lineCount === nextMetrics.lineCount
                ) {
                    return previousMetrics;
                }

                return nextMetrics;
            });
        });
    });

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return;
        }

        measure();

        const resizeObserver = new ResizeObserver(() => {
            measure();
        });

        resizeObserver.observe(node);

        let cancelled = false;

        // Re-measure once the web font has finished loading.
        document.fonts.ready.then(() => {
            if (!cancelled) {
                measure();
            }
        });

        return () => {
            cancelled = true;
            resizeObserver.disconnect();
        };
    }, [textContent]);

    const pretextStyle = {
        ...style,
        ...(metrics
            ? {
                  '--pretext-height': `${metrics.height}px`,
                  '--pretext-lines': `${metrics.lineCount}`,
                  minHeight: `${metrics.height}px`,
              }
            : null),
    } as CSSProperties;

    return (
        <p
            ref={ref}
            className={cn(className)}
            data-pretext-height={metrics?.height}
            data-pretext-lines={metrics?.lineCount}
            style={pretextStyle}
            {...props}
        >
            {children}
            {showMetrics && metrics ? (
                <span className="not-prose mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-koguma-text-light/50">
                    {metrics.lineCount} lines / {Math.round(metrics.height)}px
                </span>
            ) : null}
        </p>
    );
}
