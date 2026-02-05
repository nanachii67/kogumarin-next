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
    <div className="relative z-1 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-40 pt-30 pb-10">
      <div className="absolute inset-0 w-full opacity-50">
        {/*<PixelBlast
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
        />*/}
      </div>
      <div className="container max-w-9xl mx-auto z-10 md:px-10 xl:px-0">
        <div className="flex flex-col text-koguma-text-light mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <p className="text-4xl font-koguma pt-5 -translate-y-4">
                {pageTitle}
              </p>
            </div>
            <div className="col-span-1 justify-self-end text-right">
              <p className="text-lg font-inter leading-6 w-96">
                {pageDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
