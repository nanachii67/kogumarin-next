import IconHero from "@/components/kogs_records_logo_hero";
import CardsLayout from "@/layouts/CardsLayout";

export default function SocialCardsPage() {
  return (
    <CardsLayout>
      <div className="relative z-0">
        <div className="relative z-1 flex flex-col mx-auto mh-auto pt-5 pb-10 text-koguma-text-light max-w-5xl h-screen font-inter text-center justify-center">
          {/* <div className="flex mx-auto mh-auto justify-center items-center text-center gap-5">
            <IconHero />
            <p className="text-5xl font-koguma mr-5">|</p>
            <p className="text-5xl font-koguma">kogumarin</p>
          </div>
          <p className="text-5xl font-koguma"></p> */}
          <div className="p-10 bg-blue-800 opacity-80 backdrop-blur-2xl rounded-xl mx-auto text-center">
            <div className="grid grid-cols-2 p-10 gap-10 max-w-3xl">
              <div className="col-span-1">
                <p>Kekw</p>
              </div>
              <div className="col-span-1">
                <p>Kekw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardsLayout>
  );
}
