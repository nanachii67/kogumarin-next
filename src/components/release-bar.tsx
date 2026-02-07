import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { ReleaseData } from "@/utils/release-cards";
import { DelayedLink } from "./delayed-link";
import useCursor from "@/hooks/useCursor";

export function ReleaseBar() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative bg-koguma-background flex flex-col justify-center text-koguma-text h-150">
      <div className="flex flex-col py-5 my-5 max-w-9xl mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center max-w-5xl font-inter">
          <div className="flex flex-col">
            {/*<p className="text-lg">Koguma Rin</p>*/}
            <p className="flex items-center text-3xl font-koguma my-4">
              Discography{" "}
              <span>
                <ChevronRight />
              </span>
            </p>
          </div>
          <div className="flex flex-col mx-auto items-center justify-center space-y-8 font-inter">
            <div>
              <div>
                <Carousel className="flex flex-col">
                  <CarouselContent>
                    {ReleaseData.slice()
                      .reverse()
                      .map((item, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-1/3 xl:basis-1/4"
                          onMouseEnter={(e) => {
                            if (cursor) {
                              cursor.setStick(e.currentTarget);
                              cursor.addState("-scale");
                            }
                          }}
                          onMouseLeave={() => {
                            if (cursor) {
                              cursor.removeState("-scale");
                              cursor.removeStick();
                            }
                          }}
                        >
                          <DelayedLink
                            to={item.brandlink}
                            key={index}
                            delay={200}
                            refresh
                          >
                            <div>
                              <div className="flex flex-col">
                                <img
                                  src={item.imagelink}
                                  className="w-full aspect-square rounded-xl hover:bg-koguma-text-hover hover:opacity-90 shadow-xl"
                                ></img>
                                <div className="flex flex-col mt-2 space-y-[-2px]">
                                  <p className="text-xs opacity-80">
                                    {item.catalogtype} • {item.releaseyear}
                                  </p>
                                  <p className="font-inter-display text-xl">
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </DelayedLink>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <div className="sr-only md:not-sr-only">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
