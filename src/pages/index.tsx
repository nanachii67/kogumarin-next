import { NavigationCards } from "@/components/navigation-cards";
import IndexLayout from "@/layouts/IndexLayout";

export default function IndexPage() {
  return (
    <IndexLayout>
      <div className="flex flex-col pt-5 pb-10 text-koguma-text-light text-center">
        <div className="z-10">
          <h1 className="text-2xl font-inter">
            Pick a card to explore my repository!
          </h1>
          <div className="text-start">
            <NavigationCards />
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
