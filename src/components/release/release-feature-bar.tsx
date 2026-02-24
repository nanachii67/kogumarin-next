import { InspirationCardSeperate } from '../inspiration/inspiration-cards-separate';
import { FeatureData } from '@/utils/appears-on-feature';

export default function FeatureDiscographyBar() {
    return (
        <div className="relative">
            <div className="container max-w-9xl mx-auto">
                <div className="flex flex-row gap-2 items-center text-3xl font-koguma mb-6 text-koguma-text-light">
                    <h2>appears on</h2>
                </div>

                <div className="relative flex flex-col mx-auto">
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-5">
                        {FeatureData.slice()
                            .reverse()
                            .map((item, index) => (
                                <InspirationCardSeperate
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
