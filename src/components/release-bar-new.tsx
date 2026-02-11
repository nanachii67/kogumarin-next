import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { ReleaseData } from "@/utils/release-cards";
import { motion } from "framer-motion";

export default function ReleaseDiscographyBar() {
  return (
    <div className="relative bg-koguma-background py-5 px-10">
      <div className="container max-w-9xl mx-auto">
        <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 text-koguma-text">
          <p>Releases</p>
        </div>

        <div className="relative flex flex-col mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-9xl mb-5">
            {ReleaseData.slice()
              .reverse()
              .map((item, index) => (
                <Link to={item.brandlink} key={index} prefetch="viewport">
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
                          className="w-full aspect-square rounded-xl hover:bg-koguma-text-hover hover:opacity-90 shadow-xl"
                        ></img>
                        <div className="flex flex-col mt-2 space-y-[-2px] text-koguma-text">
                          <p className="text-xs opacity-80 font-inter">
                            {item.catalogtype} • {item.releaseyear}
                          </p>
                          <p className="font-inter-display text-xl leading-6">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedContent>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
