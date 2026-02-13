import { ArrowDownIcon } from "@phosphor-icons/react";
import AnimatedContent from "./react-bits/animated-content";
import DotGrid from "./react-bits/dot-grid";
import { motion } from "framer-motion";

export function HeroPolkaRev() {
  return (
    <div className="relative z-0 bg-indigo-700 flex flex-col justify-center text-indigo-950 h-screen">
      <div className="absolute inset-0 w-full opacity-50">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#312e81"
          activeColor="#312e81"
          proximity={50}
          shockRadius={50}
          shockStrength={1}
          resistance={2000}
          returnDuration={2.5}
        />
      </div>
      <div className="container max-w-9xl mx-auto z-10 my-10 lg:my-0 px-10 xl:px-0">
        <div className="relative h-110 md:h-128 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full about-background z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 z-0" />
        </div>
        <div className="flex flex-col text-koguma-text-light mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-1 text-left md:justify-self-start md:text-left">
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.2}
              >
                <h1 className="text-5xl font-koguma pt-5">kogumarin</h1>
                <p className="font-inter text-xs">EST. 2024</p>
              </AnimatedContent>
            </div>
            <div className="col-span-1 text-left md:justify-self-end md:text-right">
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.4}
              >
                <h1 className="text-5xl font-koguma py-5">hi there.</h1>
              </AnimatedContent>
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.6}
              >
                <p className="text-xl font-inter leading-6 w-96 mx-auto">
                  A musician, a gamer, and a frontend developer, and here is my
                  repository of personal projects!
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col gap-3 bottom-8 right-8 justify-center items-center font-inter text-koguma-text-light/50">
        <AnimatedContent
          distance={12.5}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.0}
          animateOpacity
          threshold={0}
          delay={1}
        >
          <div className="p-2 bg-indigo-800 rounded-full">
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-row gap-1"
            >
              <ArrowDownIcon size={25} />
            </motion.div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}
