import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";
import { ReleaseBar } from "@/components/release-bar";

export default function ReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col select-none mx-0">
      <NavigationBar />
      <div className="absolute inset-0 w-full about-background z-0" />
      <main className="flex flex-col mx-auto">{children}</main>
      <ReleaseBar />
      <Footer />
    </div>
  );
}
