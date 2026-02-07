import ReleaseLayout from "@/layouts/ReleaseLayout";
import { useParams, Navigate } from "react-router-dom";
import releases from "@/utils/releases.json";

interface ReleasesSlug {
  iframe: {
    src: string;
    href: string;
    label: string;
  };
  title: string;
  subtitle?: string;
  artist: string;
  releaseDate: string;
  releaseYear: string;
  coverCopyright?: string;
  releaseLabel: string;
  releaseType: string;
  coverImage: string;
  streamingLinks: {
    bandcamp: string;
  };
  tracklist?: {
    trackNumber: number;
    title: string;
    subtitle?: string;
    duration: string;
  }[];
}

export default function TRACK_Slug() {
  const { trackId } = useParams();

  const track: ReleasesSlug | undefined = trackId
    ? releases[trackId as keyof typeof releases]
    : undefined;

  if (!track) {
    return <Navigate to="/releases" replace />;
  }

  return (
    <ReleaseLayout>
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto text-koguma-text-light max-w-7xl font-inter text-center justify-center h-screen">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center space-y-8 font-inter py-5">
                <div className="flex flex-col">
                  <div className="space-y-2 justify-center">
                    <iframe
                      className="w-xl aspect-square font-inter rounded-xl shadow-2xl shadow-koguma-fonts/20"
                      src={track.iframe.src}
                      seamless
                    >
                      <a href={track.iframe.href}>{track.iframe.label}</a>
                    </iframe>
                    <div className="flex flex-col my-5 text-start">
                      <p>{track.artist}</p>
                      <p className="text-4xl font-inter-display">
                        {track.title}{" "}
                        <span className="font-inter">{track.subtitle}</span>
                      </p>
                      <p className="opacity-80">{track.releaseType}</p>
                    </div>
                  </div>
                  {track.tracklist && (
                    <div className="tracklist">
                      <div className="flex flex-col text-start mt-5 mb-2">
                        <p>Featured Works</p>
                      </div>
                      {track.tracklist.map((track) => (
                        <div key={track.trackNumber}>
                          <div className="flex flex-row text-start items-center justify-between">
                            <div className="flex flex-row gap-3 items-center">
                              <p className="opacity-75">{track.trackNumber}</p>
                              <p className="text-2xl font-inter-display items-center">
                                {track.title}{" "}
                                <span className="font-inter opacity-75">
                                  {track.subtitle}
                                </span>
                              </p>
                            </div>
                            <p className="opacity-75">{track.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReleaseLayout>
  );
}

// <iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/track=3870354194/size=large/bgcol=333333/linkcol=9a64ff/minimal=true/transparent=true/" seamless><a href="https://kogumarin.bandcamp.com/track/kirakira-adrenaline-rashu-ver">kirakira -adrenaline rashu ver- by kogumarin</a></iframe>

// <div className="cols-span-1">
//   <div className="grid grid-cols-2 gap-y-5">
//     <div className="col-span-1 justify-items-start space-y-5">
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           WRITER
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//           <span className="inline-flex">
//             <ChevronRight />
//           </span>
//         </p>
//       </div>
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Drum Programming
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//           <span className="inline-flex">
//             <ChevronRight />
//           </span>
//         </p>
//       </div>
//     </div>
//     <div className="col-span-1 justify-items-start space-y-5">
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Track
//         </p>
//         <p>Kirakira -Adrenaline Rashu Ver-</p>
//       </div>
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Synthesizer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//           <span className="inline-flex">
//             <ChevronRight />
//           </span>
//         </p>
//       </div>
//     </div>
//     <div className="col-span-2 justify-items-start space-y-5">
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Album
//         </p>
//         <p className="flex items-center">Rin's Silly Tunes</p>
//       </div>
//     </div>
//     <div className="col-span-1 justify-items-start space-y-5">
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Record Label
//         </p>
//         <p className="flex items-center">KOGS</p>
//       </div>
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Producer, Recording Engineer
//         </p>
//         <p className="flex items-center">Koguma Rin</p>
//       </div>
//       {/* <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Recording Engineer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//         </p>
//       </div> */}
//       {/* <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Assistant Recording Engineer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//         </p>
//       </div> */}
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Mixing Engineer, Mastering Engineer
//         </p>
//         <p className="flex items-center">Hotarusento Ei</p>
//       </div>
//     </div>
//     <div className="col-span-1 justify-items-start space-y-5">
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Released
//         </p>
//         <p>5 July 2025</p>
//       </div>
//       {/* <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Executive Producer
//         </p>
//         <p className="flex items-center">Jane Cerys</p>
//       </div> */}
//       {/* <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Recording Engineer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//         </p>
//       </div>
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Assistant Recording Engineer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//         </p>
//       </div>
//       <div className="flex flex-col text-start">
//         <p className="text-xs text-koguma-fonts uppercase opacity-75 tracking-wide">
//           Assistant Recording Engineer
//         </p>
//         <p className="flex items-center">
//           Koguma Rin
//         </p>
//       </div> */}
//     </div>
//   </div>
// </div>
