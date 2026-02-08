import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { ReleaseData } from "@/utils/release-cards";
import useCursor from "@/hooks/useCursor";
import { DelayedLink } from "./delayed-link";

export default function ReleaseDiscographyBar() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative bg-koguma-background py-5 px-10">
      <div className="container max-w-9xl mx-auto">
        <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 text-koguma-text">
          <p>Releases</p>
        </div>

        <div className="relative flex flex-col mx-auto">
          <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-9xl mb-5">
            {ReleaseData.slice()
              .reverse()
              .map((item, index) => (
                <DelayedLink
                  to={item.brandlink}
                  key={index}
                  delay={100}
                  refresh={true}
                >
                  <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={true}
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.0}
                    threshold={0.1}
                    delay={item.id * 0.1}
                  >
                    <div data-magnetic>
                      <div className="flex flex-col">
                        <img
                          src={item.imagelink}
                          className="w-full aspect-square rounded-xl hover:bg-koguma-text-hover hover:opacity-90 shadow-xl"
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
                        ></img>
                        <div className="flex flex-col mt-2 space-y-[-2px]">
                          <p className="text-xs opacity-80 font-inter">
                            {item.catalogtype} • {item.releaseyear}
                          </p>
                          <p className="font-inter-display text-xl leading-6">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                </DelayedLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
