import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import { SiteMap } from "@/components/site-map";

import "@/assets/kogs_records_logo_indigo_rotate.svg";
import { HeroPolkaRevHeader } from "@/components/hero-polka-header";

export default function AboutLayout({
  children,
  pageTitle,
  pageDescription,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0">
      <HeroPolkaRevHeader
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
      <NavigationBar />
      <div className="absolute inset-0 w-full about-background z-0" />
      <main className="flex flex-col mx-auto pt-10">{children}</main>
      <SiteMap />
      <Footer />
    </div>
  );
}
