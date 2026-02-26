'use client';

import { InspirationCardSeperate } from './inspiration-cards-separate';
import { InspirationData } from '@/utils/inspiration-cards';

export function InspirationCardsRev() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl my-5">
                {InspirationData.map((item, index) => (
                    <InspirationCardSeperate
                        key={item.id}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
