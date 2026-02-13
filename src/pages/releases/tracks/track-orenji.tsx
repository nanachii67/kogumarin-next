import ReleaseLayout from '@/layouts/ReleaseLayout';
import { ChevronRight } from 'lucide-react';

export default function TRACK_Orenji() {
    return (
        <ReleaseLayout>
            <div className="relative z-0">
                <div className="relative z-1 flex flex-col mx-auto text-koguma-text-light max-w-6xl font-inter text-center justify-center h-screen">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center space-y-8 font-inter py-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 w-5xl xl:w-6xl">
                                    <div className="cols-span-1 space-y-2 md:justify-items-start justify-items-center">
                                        <iframe
                                            className="w-auto aspect-square font-inter rounded-xl shadow-2xl shadow-koguma-fonts/20"
                                            src="https://bandcamp.com/EmbeddedPlayer/track=3230518554/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/"
                                            seamless
                                        >
                                            <a href="https://kogumarin.bandcamp.com/track/orenji">
                                                orenji by kogumarin
                                            </a>
                                        </iframe>
                                        <div className="flex flex-col w-sm my-10 text-wrap md:text-start text-center self-end md:items-start items-center">
                                            <p>Koguma Rin</p>
                                            <p className="text-4xl flex items-center font-inter-display line-clamp-1">
                                                Orenji
                                            </p>
                                            <p className="opacity-50">
                                                ℗ 2025 Kogs, on behalf of
                                                Kogumarin
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cols-span-1">
                                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-5">
                                            <div className="col-span-1 justify-items-start space-y-5">
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        WRITER
                                                    </p>
                                                    <p className="flex items-center">
                                                        Koguma Rin
                                                        <span className="inline-flex">
                                                            <ChevronRight />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Drum Programming
                                                    </p>
                                                    <p className="flex items-center">
                                                        Koguma Rin
                                                        <span className="inline-flex">
                                                            <ChevronRight />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1 justify-items-start space-y-5">
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Track
                                                    </p>
                                                    <p>Orenji</p>
                                                </div>
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Synthesizer
                                                    </p>
                                                    <p className="flex items-center">
                                                        Koguma Rin
                                                        <span className="inline-flex">
                                                            <ChevronRight />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-2 justify-items-start space-y-5">
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Album
                                                    </p>
                                                    <p className="flex items-center">
                                                        Rin&apos;s Silly Tunes
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1 justify-items-start space-y-5">
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Record Label
                                                    </p>
                                                    <p className="flex items-center">
                                                        KOGS
                                                    </p>
                                                </div>
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Producer, Recording
                                                        Engineer
                                                    </p>
                                                    <p className="flex items-center">
                                                        Koguma Rin
                                                    </p>
                                                </div>
                                                {/* <div className="flex flex-col text-start">
                          <p className="text-xs text-koguma-fonts uppercase opacity-75">
                            Recording Engineer
                          </p>
                          <p className="flex items-center">
                            Koguma Rin
                          </p>
                        </div> */}
                                                {/* <div className="flex flex-col text-start">
                          <p className="text-xs text-koguma-fonts uppercase opacity-75">
                            Assistant Recording Engineer
                          </p>
                          <p className="flex items-center">
                            Koguma Rin
                          </p>
                        </div> */}
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Mixing Engineer,
                                                        Mastering Engineer
                                                    </p>
                                                    <p className="flex items-center">
                                                        Hotarusento Ei
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1 justify-items-start space-y-5">
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Released
                                                    </p>
                                                    <p>20 March 2025</p>
                                                </div>
                                                <div className="flex flex-col text-start">
                                                    <p className="text-xs text-koguma-fonts uppercase opacity-75">
                                                        Executive Producer
                                                    </p>
                                                    <p className="flex items-center">
                                                        Jane Cerys
                                                    </p>
                                                </div>
                                                {/* <div className="flex flex-col text-start">
                          <p className="text-xs text-koguma-fonts uppercase opacity-75">
                            Recording Engineer
                          </p>
                          <p className="flex items-center">
                            Koguma Rin
                          </p>
                        </div>
                        <div className="flex flex-col text-start">
                          <p className="text-xs text-koguma-fonts uppercase opacity-75">
                            Assistant Recording Engineer
                          </p>
                          <p className="flex items-center">
                            Koguma Rin
                          </p>
                        </div>
                        <div className="flex flex-col text-start">
                          <p className="text-xs text-koguma-fonts uppercase opacity-75">
                            Assistant Recording Engineer
                          </p>
                          <p className="flex items-center">
                            Koguma Rin
                          </p>
                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReleaseLayout>
    );
}
