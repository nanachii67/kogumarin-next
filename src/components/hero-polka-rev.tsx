import AnimatedContent from "./react-bits/animated-content";
import { NewRelease } from "@/utils/new-release";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import IconHero from "./kogs_records_logo_hero";
import GradualBlur from "./react-bits/gradual-blur";

export function HeroPolkaRev() {
  return (
    <div className="relative z-0 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-screen">
      {/*<div className="absolute inset-0 w-full hero-background" />*/}
      <div className="relative container max-w-9xl h-2/4 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full about-background z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-700 z-0" />
      </div>
      <div className="relative z-1 mx-auto px-6 items-center">
        {/*<div className="mx-auto max-w-5xl text-center koguma-hero-offset">
          <AnimatedContent
            distance={0}
            direction="vertical"
            reverse={false}
            duration={2.0}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0}
            delay={0}
          >
            <div className="flex mx-auto justify-center items-center text-center gap-5">
              <IconHero />
              <p className="text-5xl font-koguma mr-5">|</p>
              <p className="text-5xl font-koguma">kogumarin</p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={25}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0}
            delay={1}
          >
            <div className="flex mx-auto justify-center items-center text-center gap-5">
              <p className="text-4xl font-inter-display">New Release</p>
            </div>
          </AnimatedContent>
          {NewRelease.map((item) => (
            <AnimatedContent
              distance={25}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0}
              delay={1}
            >
              <div className="flex flex-col mx-auto justify-center items-center text-center">
                <Link to={item.releaselink}>
                  <p className="flex text-5xl md:text-8xl font-inter-display items-center">
                    {item.title}

                    <span>
                      <ChevronRight size={65} />
                    </span>
                  </p>
                </Link>
                <p className="text-xl font-inter">{item.subtitle}</p>
              </div>
            </AnimatedContent>
          ))}

          {NewRelease.map((item) => (
            <AnimatedContent
              distance={25}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0}
              delay={1.8}
            >
              <div className="relative z-0 flex mx-auto justify-center items-center text-center mt-10 koguma-hero-offset-image">
                <img
                  src={item.releasecover}
                  className="w-200 aspect-square rounded-xl object-cover justify-center items-center"
                />
              </div>
            </AnimatedContent>
          ))}
        </div>*/}
      </div>
    </div>
  );
}
