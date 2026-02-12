import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { ReleaseData } from "@/utils/release-cards";
import * as motion from "motion/react-client";

export function ReleaseCards() {
  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl my-5 md:px-10 lg:px-0">
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
                threshold={0.1}
                delay={item.id * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.975 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="flex flex-col">
                    <img
                      src={item.imagelink}
                      className="max-w-96 aspect-square rounded-xl hover:bg-koguma-text-hover hover:opacity-90 shadow-xl"
                    ></img>
                    <div className="flex flex-col mt-2 space-y-[-2px]">
                      <p className="text-xs opacity-80 font-inter">
                        {item.catalogtype} • {item.releaseyear}
                      </p>
                      <p className="font-inter-display text-xl leading-6">
                        {item.title}{" "}
                        <span className="font-inter">{item?.subtitle}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedContent>
            </Link>
          ))}
      </div>
    </div>
  );
}
