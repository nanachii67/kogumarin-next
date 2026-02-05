import { NavigationData } from "@/utils/navigation-cards";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";

export function NavigationCards() {
  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl my-5">
        {NavigationData.map((item, index) => (
          <Link to={item.brandlink} key={index}>
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
              <div>
                <div className="absolute inset-0 pointer-events-none rounded-xl"></div>
                <Card
                  className="cursor-pointer md:aspect-square bg-koguma-card hover:bg-koguma-text font-ceribri text-koguma-text-light border-0 shadow-xl rounded-lg transition-all active:scale-95"
                  key={index}
                >
                  <CardHeader>
                    <CardDescription className="font-inter z-1">
                      {item.entry}
                    </CardDescription>
                    <CardTitle className="text-4xl font-inter-display z-1">
                      {item.title}
                    </CardTitle>
                    <CardAction>
                      <SquareArrowOutUpRight />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-inter z-1 text-xl">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </AnimatedContent>
          </Link>
        ))}
      </div>
    </div>
  );
}
