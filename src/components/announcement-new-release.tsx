import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { NewRelease } from "@/utils/new-release";
import useCursor from "@/hooks/useCursor";
import { DelayedLink } from "./delayed-link";

export default function AnnouncementNewRelease() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative bg-koguma-card py-5 px-10">
      <div className="container max-w-9xl mx-auto">
        {NewRelease.map((item) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 text-koguma-text-light gap-2 lg:gap-0">
            <div className="col-span-1 -space-y-2">
              <div className="flex flex-row gap-2 items-center font-inter text-koguma-text-light/80">
                <p>New Release</p>
                <p>•</p>
                <p>{item.releasedate}</p>
              </div>
              <p className="font-inter-display text-3xl">
                {item.title}{" "}
                <span className="font-inter opacity-90">{item.subtitle}</span>
              </p>
            </div>
            <div className="col-span-1 justify-self-center lg:justify-self-end flex items-center">
              <DelayedLink to={item.releaselink} delay={100}>
                <Button
                  className="bg-koguma-text hover:bg-koguma-text-hover active:scale-95 text-koguma-text-light font-inter rounded-full"
                  onMouseEnter={(e) => {
                    if (cursor) {
                      cursor.setStick(e.currentTarget);
                      cursor.addState("-scale");
                    }
                  }}
                  onMouseLeave={() => {
                    if (cursor) {
                      cursor.removeState("-scale");
                      cursor.removeStick();
                    }
                  }}
                >
                  Listen <ExternalLink />
                </Button>
              </DelayedLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
