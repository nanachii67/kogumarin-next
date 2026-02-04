import { NavigationCards } from "@/components/navigation-cards";
import IndexLayout from "@/layouts/IndexLayout";

export default function IndexPage() {
  return (
    <IndexLayout>
      <div className="flex flex-col pt-5 pb-10 text-koguma-text-light text-center">
        <h1 id="next-section" className="text-4xl font-inter-display">
          Introduction
        </h1>
        <p className="font-inter text-lg max-w-150 mx-auto mt-5 mb-10 leading-6">
          Greetings! My name is Koguma Rin, a musician, a gamer, and here is my
          repository of personal projects!
        </p>
        <h1 className="text-2xl font-inter">
          Pick a card to explore my profile!
        </h1>
        <div className="text-start">
          <NavigationCards />
        </div>
      </div>
    </IndexLayout>
  );
}
