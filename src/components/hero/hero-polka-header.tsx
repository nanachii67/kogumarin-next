import DotGrid from '@/components/react-bits/dot-grid';

interface PageHeaderProps {
    pageTitle?: string;
    pageDescription?: string;
}

export function HeroPolkaRevHeader({
    pageTitle,
    pageDescription,
}: PageHeaderProps) {
    return (
        <div className="relative z-1 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-40 pt-35 md:pt-30 pb-20 md:pb-14">
            <div className="absolute inset-0 w-full opacity-50">
                <DotGrid
                    dotSize={5}
                    gap={30}
                    baseColor="#1e1b4b"
                    activeColor="#1e1b4b"
                    proximity={50}
                    shockRadius={50}
                    shockStrength={1}
                    resistance={2000}
                    returnDuration={2.5}
                />
            </div>
            <div className="container max-w-9xl mx-auto z-10 px-10 md:px-0">
                <div className="flex flex-col text-koguma-text-light mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                        <div className="col-span-1 justify-self-center md:justify-self-start">
                            <h1 className="text-4xl font-koguma pt-5 -translate-y-4">
                                {pageTitle}
                            </h1>
                        </div>
                        <div className="col-span-1 justify-self-center md:justify-self-end text-center md:text-right">
                            <h2 className="text-lg font-inter leading-6 w-96">
                                {pageDescription}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
