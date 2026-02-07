import { HeroPolkaRevCards } from "@/components/hero-polka-rev-cards";
import { NavigationBar } from "@/components/navigation-bar";

export default function CardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0">
      <HeroPolkaRevCards />
      <NavigationBar />
      {/*<div className="absolute inset-0 w-full about-background h-screen" />*/}
      <div className="relative z-1 bg-koguma-text-hover mx-auto"></div>
      <main>{children}</main>
    </div>
  );
}
