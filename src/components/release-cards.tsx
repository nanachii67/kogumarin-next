import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { ReleaseData } from "@/utils/release-cards";
import useCursor from "@/hooks/useCursor";
import { DelayedLink } from "./delayed-link";

export function ReleaseCards() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl my-5">
        {ReleaseData.slice()
          .reverse()
          .map((item, index) => (
            <DelayedLink to={item.brandlink} key={index} delay={100}>
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
  );
}
