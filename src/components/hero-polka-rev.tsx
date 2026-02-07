import AnimatedContent from "./react-bits/animated-content";
import DotGrid from "./react-bits/dot-grid";

export function HeroPolkaRev() {
  return (
    <div className="relative z-0 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-screen">
      <div className="absolute inset-0 w-full opacity-50">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#1e1b4b"
          activeColor="#6366f1"
          proximity={50}
          shockRadius={50}
          shockStrength={1}
          resistance={2000}
          returnDuration={2.5}
        />
      </div>
      <div className="container max-w-9xl mx-auto z-10 md:px-10 xl:px-0">
        <div className="relative h-128 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full hero-background z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-koguma-card z-0" />
        </div>
        <div className="flex flex-col text-koguma-text-light mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
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
                <p className="text-5xl font-koguma pt-5">kogumarin</p>
                <p className="font-inter text-xs">EST. 2024</p>
              </AnimatedContent>
            </div>
            <div className="col-span-1 justify-self-end text-right">
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
                <p className="text-5xl font-koguma py-5">hi there.</p>
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
                <p className="text-xl font-inter leading-6 w-96">
                  A musician, a gamer, and a frontend developer, and here is my
                  repository of personal projects!
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
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
