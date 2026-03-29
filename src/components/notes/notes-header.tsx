import Link from 'next/link';

import { ArrowLeftIcon } from '@phosphor-icons/react';

interface PageHeaderProps {
    pageIndex?: string;
    pageTitle?: string;
    pageDescription?: string;
}

export function NotesHeader({
    pageIndex,
    pageTitle,
    pageDescription,
}: PageHeaderProps) {
    return (
        <div className="relative z-1 bg-indigo-900 flex flex-col justify-center text-indigo-950">
            <div className="container max-w-9xl mx-auto z-10 px-10 md:px-0">
                <div className="flex flex-col text-koguma-text-light">
                    <div className="flex flex-row mb-2 justify-start items-center gap-2 text-koguma-text-light/80">
                        <ArrowLeftIcon />
                        <Link href="/notes">
                            <div className="flex flex-row gap-2 items-center">
                                <p className="hover:underline underline-offset-2 decoration-0">
                                    Notes <span></span>
                                </p>
                                <p>•</p>
                                <p>{pageIndex}</p>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5 mt-5 md:mt-0">
                        <div className="col-span-1 justify-self-center md:justify-self-start self-center">
                            <h1 className="text-5xl font-inter font-semibold leading-13 text-center md:text-left">
                                {pageTitle}
                            </h1>
                        </div>
                        <div className="col-span-1 justify-self-center mt-3 md:mt-0 md:justify-self-end tracking-wide text-center md:text-right">
                            {pageDescription && (
                                <h2 className="text-lg font-inter font-medium leading-6">
                                    {pageDescription}
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
