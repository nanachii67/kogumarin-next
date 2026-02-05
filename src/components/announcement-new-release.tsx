import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function AnnouncementNewRelease() {
  return (
    <div className="relative bg-koguma-card py-5 px-10">
      <div className="container max-w-9xl mx-auto">
        <div className="grid grid-cols-2 text-koguma-text-light">
          <div className="col-span-1 -space-y-2">
            <div className="flex flex-row gap-2 items-center font-inter text-koguma-text-light/90">
              <p>New Release</p>
              <p>•</p>
              <p>RELEASE_DATE</p>
            </div>
            <p className="font-inter-display text-3xl">Rin's Small Tunes</p>
          </div>
          <div className="col-span-1 justify-self-end flex items-center">
            <Button className="bg-koguma-text text-koguma-text-light rounded-full">
              Listen <ExternalLink />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
