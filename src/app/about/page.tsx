import { InspirationCards } from "@/components/inspiration-cards";
import AboutLayout from "@/layouts/AboutLayout";

export default function AboutPage() {
  return (
    <AboutLayout pageTitle="about" pageDescription="Revised 5th February 2026">
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto pt-5 pb-10 text-koguma-text-light max-w-5xl font-inter text-center justify-center">
          <div className="flex flex-col mb-20 gap-6 md:text-2xl justify-center text-left mx-auto opacity-90">
            <p>Hewwo! I&apos;m Koguma Rin, and I make music, nice to meet you!~</p>
            <p>
              For 11 years in music production, I&apos;ve wanted to start a personal
              page to document my venture through music, although I&apos;m not always
              blessed with time. So I finally took the shot to make one! The
              styles I&apos;ve decided to work under this title will focus on
              synthpop, much like{" "}
              <span className="font-inter-display  decoration-koguma-text-light/50 font-medium">
                <a
                  href="https://open.spotify.com/artist/29O9ZebFa65aIEvMaW5pQY"
                  className="hover:underline underline-offset-2"
                >
                  Snail&apos;s House
                </a>
                ,{" "}
                <a
                  href="https://open.spotify.com/artist/4YqfXU53VVYBunSuvrDZYO"
                  className="hover:underline underline-offset-2"
                >
                  Synthion
                </a>
                ,{" "}
                <a
                  href="https://open.spotify.com/artist/2RssKQtZRWjMjZT0Eu9a2Q"
                  className="hover:underline underline-offset-2"
                >
                  Stessie
                </a>
                ,{" "}
                <a
                  href="https://open.spotify.com/artist/0cdpFI2dZC34peIkjI1rLs"
                  className="hover:underline underline-offset-2"
                >
                  Mitsukiyo
                </a>
                ,{" "}
                <a
                  href="https://music.apple.com/ph/artist/kotomi/1702107932"
                  className="hover:underline underline-offset-2"
                >
                  Kotomi
                </a>
              </span>
              , or something akin to the aesthetics of their genre. Sometimes
              I&apos;d like to deviate from my writing and be interested in J-Rock
              and orchestral pieces.
            </p>
            <p>
              With that being my introduction, I will be looking forward to
              write more music with you!~
            </p>
          </div>
          <div className="flex flex-col opacity-75">
            <p>Koguma Rin&apos;s</p>
          </div>
          <div className="flex mx-auto gap-2">
            <h1 className="text-5xl md:text-7xl font-koguma py-10">
              Inspirations
            </h1>
            <p className="font-inter opacity-75 translate-y-10">*</p>
          </div>
          <div className="flex opacity-75 gap-2">
            <p className="font-inter-display">*</p>
            <p className="text-xs font-inter text-start">
              Interacting with these cards redirects to Apple Music and Apple
              Music Classical.{" "}
              <span className="opacity-80">
                Apple Music is a trademark of Apple Inc.
              </span>{" "}
              <span className="opacity-80">
                Apple Music Classical is a trademark of Apple Inc.
              </span>
            </p>
          </div>
          <div>
            <InspirationCards />
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
