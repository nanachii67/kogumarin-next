import PixelBlast from "./react-bits/pixel-blast";

interface PageHeaderProps {
  pageTitle?: string;
  pageDescription?: string;
}

export function HeroPolkaRevHeader({
  pageTitle,
  pageDescription,
}: PageHeaderProps) {
  return (
    <div className="relative z-1 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-56 pt-30 pb-10">
      <div className="absolute inset-0 w-full">
        <PixelBlast
          enableRipples={false}
          variant="square"
          pixelSize={5}
          color="#4338ca"
          patternScale={8}
          patternDensity={1}
          pixelSizeJitter={1}
          rippleSpeed={1}
          rippleThickness={0.2}
          rippleIntensityScale={0.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.25}
          edgeFade={0.1}
        />
      </div>
      <div className="container max-w-9xl mx-auto z-10 md:px-10 xl:px-0">
        <div className="flex flex-col text-koguma-text-light mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <p className="text-5xl font-koguma pt-5 -translate-y-4">
                {pageTitle}
              </p>
            </div>
            <div className="col-span-1 justify-self-end text-right">
              <p className="text-xl font-inter leading-6 w-96">
                {pageDescription}
              </p>
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
