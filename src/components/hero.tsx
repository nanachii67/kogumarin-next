import AnimatedContent from "./react-bits/animated-content";
import FloatingButton from "./floating-button";
import Squares from "./react-bits/squares";
import { NewRelease } from "@/utils/new-release";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import IconHero from "./kogs_records_logo_hero";

export function Hero() {
  return (
    <div className="relative z-0 bg-pink-300 flex flex-col justify-center text-indigo-950 h-screen">
      <div className="absolute inset-0 w-full">
        <Squares
          speed={0.1}
          squareSize={80}
          direction="down"
          borderColor="#f472b6"
          hoverFillColor="#f472b6"
        />
      </div>
      <div className="relative mx-auto px-6 items-center">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedContent
            distance={0}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.2}
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
            threshold={0.2}
            delay={0.3}
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
              threshold={0.2}
              delay={0.6}
            >
              <div className="flex flex-col mx-auto justify-center items-center text-center">
                <p className="flex text-5xl md:text-7xl font-title items-center">
                  {item.title}
                  <Link to={item.releaselink}>
                    <span>
                      <ChevronRight size={50} />
                    </span>
                  </Link>
                </p>
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
              threshold={0.2}
              delay={0.8}
            >
              <div className="flex mx-auto justify-center items-center text-center mt-10">
                <img
                  src={item.releasecover}
                  style={{
                    animation: "floatEmphasis 5s ease-in-out infinite",
                  }}
                  className="w-80 xl:w-170 aspect-square rounded-xl object-cover justify-center items-center"
                />

                <style>
                  {`
                    @keyframes floatEmphasis {
                      0%, 100% {
                        transform: translateY(0px);
                      }
                      50% {
                        transform: translateY(0.1px);
                      }
                    }

                    .animate-bounce-gentle {
                      animation: floatEmphasis 5s ease-in-out infinite;
                    }
                    `}
                </style>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
      <div className="absolute flex flex-col gap-3 bottom-8 left-1/2 transform -translate-x-1/2 justify-center items-center font-inter">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.0}
          animateOpacity
          threshold={0}
          delay={0.8}
        >
          <p>SCROLL </p>
        </AnimatedContent>
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.0}
          animateOpacity
          threshold={0}
          delay={1}
        >
          <FloatingButton />
        </AnimatedContent>
      </div>
    </div>
  );
}
