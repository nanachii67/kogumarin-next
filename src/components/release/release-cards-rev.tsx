'use client';

import { ReleaseCard } from './release-card-separate';
import { ReleaseData } from '@/utils/release-cards';

export function ReleaseCardsRev() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-12">
                {ReleaseData.slice()
                    .reverse()
                    .map((item, index) => (
                        <ReleaseCard key={item.id} item={item} index={index} />
                    ))}
            </div>
        </div>
    );
}
