import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function SiteMap() {
  return (
    <div className="relative bg-koguma-background flex flex-col justify-center text-koguma-text h-100">
      <div className="flex flex-col px-10 py-5 my-5 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center max-w-5xl font-inter">
          <div className="flex flex-col">
            <p className="text-lg">Koguma Rin</p>
            <p className="flex items-center text-3xl font-title">
              Site Map{" "}
              <span>
                <ChevronRight />
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-3 gap-5 w-5xl">
              <div className="col-span-1">
                <p className="font-title text-sm">GENERAL</p>
              </div>
              <div className="col-span-2">
                <Link to="/releases/">
                  <p className="font-title text-sm">RELEASES</p>
                </Link>
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <p className="font-inter-display text-sm">TRACKS</p>
                  </div>
                  <div className="col-span-1">
                    <p className="font-inter-display text-sm">ALBUMS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-5xl">
              <div className="col-span-1">
                <div className="grid grid-cols-1">
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                  <Link to="/about/">
                    <p>About</p>
                  </Link>
                  <Link to="/cards/">
                    <p>Cards</p>
                  </Link>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="grid grid-cols-1">
                      <p>Kirakira -Adrenaline Rashu Ver.-</p>
                      <p>Orenji</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1">
                      <p>Rin's Silly Tunes</p>
                      <p>Macarons and Energy Drinks</p>
                      <p>BA Drum Covers 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
