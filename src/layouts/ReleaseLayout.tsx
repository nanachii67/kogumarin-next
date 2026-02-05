import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import PixelBlast from "@/components/react-bits/pixel-blast";
import { ReleaseBar } from "@/components/release-bar";

export default function ReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0">
      <NavigationBar />
      <div className="absolute inset-0 w-full z-0 opacity-50">
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
          edgeFade={0}
        />*/}
      </div>
      <main className="flex flex-col mx-auto">{children}</main>
      <ReleaseBar />
      <Footer />
    </div>
  );
}
