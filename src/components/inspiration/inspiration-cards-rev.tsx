'use client';

import { InspirationData } from '@/utils/inspiration-cards';
import { InspirationCardSeperate } from './inspiration-cards-separate';

export function InspirationCardsRev() {
    return (
        <div className="relative flex flex-col mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl my-5 md:px-10 lg:px-0">
                {InspirationData.map((item, index) => (
                    <InspirationCardSeperate key={item.id}
                    item={item}
                    index={index} />
                ))}
            </div>
        </div>
    );
}
