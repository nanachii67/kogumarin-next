import { InspirationCards } from "@/components/inspiration-cards";
import IconHero from "@/components/kogs_records_logo_hero";
import AboutLayout from "@/layouts/AboutLayout";

export default function AboutPage() {
  return (
    <AboutLayout>
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto pt-5 pb-10 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
          <div className="flex mx-auto justify-center items-center text-center gap-5">
            <IconHero />
            <p className="text-5xl font-koguma mr-5">|</p>
            <p className="text-5xl font-koguma">kogumarin</p>
          </div>
          <p className="text-5xl font-koguma"></p>
          <h1 id="next-section" className="text-7xl font-inter-display">
            About
          </h1>
          <div className="flex flex-col opacity-75">
            <p>Revised 14th December 2024</p>
          </div>
          <div className="flex flex-col my-30 gap-6 text-3xl justify-center text-center w-4xl mx-auto">
            <p>Hello! I'm Koguma Rin, and I make music, nice to meet you!~</p>
            <p>
              For 10 years in music production, I've wanted to start a personal
              page to document my venture through music, although I'm not always
              blessed with time. So I finally took the shot to make one! The styles I've decided to work under this title will focus on
              synthpop, much like{" "}
              <a
                href="https://open.spotify.com/artist/29O9ZebFa65aIEvMaW5pQY"
                className="no-underline hover:underline font-medium"
              >
                Snail's House
              </a>
              ,{" "}
              <a
                href="https://open.spotify.com/artist/4YqfXU53VVYBunSuvrDZYO"
                className="no-underline hover:underline font-medium"
              >
                Synthion
              </a>
              ,{" "}
              <a
                href="https://open.spotify.com/artist/2RssKQtZRWjMjZT0Eu9a2Q"
                className="no-underline hover:underline font-medium"
              >
                Stessie
              </a>
              ,{" "}
              <a
                href="https://open.spotify.com/artist/0cdpFI2dZC34peIkjI1rLs"
                className="no-underline hover:underline font-medium"
              >
                Mitsukiyo
              </a>
              , or something akin to the aesthetics of their genre. Sometimes
              I'd like to deviate from my writing and be interested in J-Rock
              and orchestral pieces.
            </p>
            <p>
              With that being my introduction, I will be looking forward to
              write more music this 2025 with you!~
            </p>
          </div>
          <div className="flex flex-col opacity-75">
            <p>Koguma Rin's</p>
          </div>
          <h1 id="next-section" className="text-7xl font-inter-display">
            Inspirations
          </h1>
          <div>
            <InspirationCards />
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
