import { NavigationData } from "@/utils/navigation-cards";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedContent from "./react-bits/animated-content";
import useCursor from "@/hooks/useCursor";

import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function NavigationCards() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 max-w-9xl my-5">
        {NavigationData.map((item, index) => (
          <Link to={item.brandlink} key={index} className="w-full">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={item.id * 0.1}
            >
              <div className="w-full h-full">
                <div className="absolute inset-0 pointer-events-none rounded-xl"></div>
                <Card
                  className="cursor-pointer w-full h-75 bg-koguma-card hover:bg-koguma-text font-ceribri text-koguma-text-light border-0 shadow-xl rounded-lg transition-all active:scale-95 flex flex-col"
                  key={index}
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
                  <CardHeader>
                    <CardDescription className="font-inter z-1 opacity-80">
                      <p>{item.entry}</p>
                    </CardDescription>
                    <CardTitle className="text-5xl font-koguma mt-6 z-1">
                      {item.title}
                    </CardTitle>
                    <CardAction>
                      <ArrowCircleUpRightIcon weight="fill" size={24} />
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="font-inter items-end text-xs opacity-90 mt-auto">
                    {item.description}
                  </CardFooter>
                </Card>
              </div>
            </AnimatedContent>
          </Link>
        ))}
      </div>
    </div>
  );
}
