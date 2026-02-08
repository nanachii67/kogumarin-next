import AnnouncementNewRelease from "@/components/announcement-new-release";
import { Footer } from "@/components/footer";
import { HeroPolkaRev } from "@/components/hero-polka-rev";
import { NavigationBar } from "@/components/navigation-bar";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0 tracking-wide">
      <HeroPolkaRev />
      <AnnouncementNewRelease />
      <NavigationBar />
      <div className="relative z-1 bg-koguma-text-hover mx-auto">
        <main className="flex mx-auto pt-10 px-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
