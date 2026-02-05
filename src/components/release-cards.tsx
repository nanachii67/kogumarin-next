import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { ReleaseData } from "@/utils/release-cards";

export function ReleaseCards() {
  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl my-5">
        {ReleaseData.slice()
          .reverse()
          .map((item, index) => (
            <Link to={item.brandlink} key={index}>
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0.2}
                delay={item.id * 0.1}
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
                      <p className="font-inter-display text-xl">{item.title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </Link>
          ))}
      </div>
    </div>
  );
}
