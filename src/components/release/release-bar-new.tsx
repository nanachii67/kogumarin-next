import { ReleaseCard } from './release-card-separate';
import { ReleaseData } from '@/utils/release-cards';

export default function ReleaseDiscographyBar() {
    return (
        <div className="relative bg-koguma-background py-5 px-10">
            <div className="container max-w-9xl mx-auto">
                <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 text-koguma-text">
                    <h2>Releases</h2>
                </div>

                <div className="relative flex flex-col mx-auto">
                    <div className="relative grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-9xl mb-5">
                        {ReleaseData.slice()
                            .reverse()
                            .map((item, index) => (
                                <ReleaseCard
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
