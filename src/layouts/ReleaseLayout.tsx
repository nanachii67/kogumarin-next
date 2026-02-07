import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import DotGrid from "@/components/react-bits/dot-grid";
import { ReleaseBar } from "@/components/release-bar";
import ReleaseProductionCredits from "@/components/release-production-credits";

export default function ReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0">
      <NavigationBar />
      <div className="absolute inset-0 w-full z-0 opacity-50">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#1e1b4b"
          activeColor="#1e1b4b"
          proximity={50}
          shockRadius={50}
          shockStrength={1}
          resistance={2000}
          returnDuration={2.5}
        />
      </div>
      <main className="flex flex-col mx-auto">{children}</main>
      <ReleaseProductionCredits />
      <ReleaseBar />
      <Footer />
    </div>
  );
}
