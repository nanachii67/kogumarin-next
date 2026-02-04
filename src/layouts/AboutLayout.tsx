import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import { SiteMap } from "@/components/site-map";

import '@/assets/kogs_records_logo_indigo_rotate.svg';

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="relative flex flex-col select-none mx-0">
        <NavigationBar />
        <div className="absolute inset-0 w-full about-background"/>
        <main className="flex flex-col mx-auto pt-20">{children}</main>
        <SiteMap />
        <Footer />
      </div>
    );
  }