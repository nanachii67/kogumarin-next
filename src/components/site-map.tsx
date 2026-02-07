import { KogsAlbum } from "@/utils/kogs-albums";
import { KogsSingleEP } from "@/utils/kogs-single-ep";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DelayedLink } from "./delayed-link";

export function SiteMap() {
  return (
    <div className="relative bg-koguma-background flex flex-col justify-center text-koguma-text h-100">
      <div className="flex flex-col px-10 py-5 my-5 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center max-w-5xl font-inter">
          <div className="flex flex-col">
            {/*<p className="text-lg">Koguma Rin</p>*/}
            <p className="flex items-center text-4xl font-koguma my-4">
              site map{" "}
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
                <DelayedLink to="/releases/" delay={100}>
                  <p className="font-title text-sm">RELEASES</p>
                </DelayedLink>
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
                  <DelayedLink to="/" delay={100}>
                    <p>Home</p>
                  </DelayedLink>
                  <DelayedLink to="/about/" delay={100}>
                    <p>About</p>
                  </DelayedLink>
                  <DelayedLink to="/cards/" delay={100}>
                    <p>Social Cards</p>
                  </DelayedLink>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="grid grid-cols-1">
                      {KogsSingleEP.map((item) => (
                        <DelayedLink to={item.link} delay={100}>
                          <p>
                            {item.title} {item?.subtitle}
                          </p>
                        </DelayedLink>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1">
                      {KogsAlbum.map((item) => (
                        <DelayedLink to={item.link} delay={100}>
                          <p>
                            {item.title} {item?.subtitle}
                          </p>
                        </DelayedLink>
                      ))}
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
