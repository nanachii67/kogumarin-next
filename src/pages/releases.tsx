import { ReleaseCards } from "@/components/release-cards";
import AboutLayout from "@/layouts/AboutLayout";

export default function ReleasesPage() {
  return (
    <AboutLayout
      pageTitle="releases"
      pageDescription="All major music releases of Koguma Rin!"
    >
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto pt-5 pb-10 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
          {/*<div className="flex mx-auto justify-center items-center text-center gap-5">
            <IconHero />
            <p className="text-5xl font-koguma mr-5">|</p>
            <p className="text-5xl font-koguma">kogumarin</p>
          </div>
          <p className="text-5xl font-koguma"></p>
          <h1 id="next-section" className="text-7xl font-inter-display">
            Releases
          </h1>
          <div className="flex flex-col pt-5 mb-10 text-3xl justify-center text-center max-w-5xl mx-auto font-inter">
            <p>All major music releases of Koguma Rin!</p>
          </div>*/}
          <div>
            <ReleaseCards />
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
