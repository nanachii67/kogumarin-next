import { NavigationBar } from "@/components/navigation-bar";

export default function CardsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="relative flex flex-col select-none mx-0">
        <NavigationBar />
        <div className="absolute inset-0 w-full about-background h-screen"/>
        <main className="flex flex-col mx-auto">{children}</main>
      </div>
    );
  }