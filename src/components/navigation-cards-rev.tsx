import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";

import * as motion from "motion/react-client";
import { NavigationData } from "@/utils/navigation-cards";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export function NavigationCardsRev() {
  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-9xl my-5 md:px-10 lg:px-0">
        {NavigationData.map((item, index) => (
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
                  <div className="flex flex-row md:min-w-92 aspect-square rounded-2xl bg-koguma-text shadow-2xl p-6">
                    <div className="flex flex-col font-inter grow">
                      <p className="font-inter-display">{item.entry}</p>
                      <p className="text-5xl font-koguma py-8 grow w-40">{item.title}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
                    <div>
                      <ArrowUpRightIcon />
                    </div>
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
