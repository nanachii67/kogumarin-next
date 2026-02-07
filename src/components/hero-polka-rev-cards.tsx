import { SocialCards } from "@/utils/social-cards";
import AnimatedContent from "./react-bits/animated-content";
import DotGrid from "./react-bits/dot-grid";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import useCursor from "@/hooks/useCursor";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { ArrowCircleUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export function HeroPolkaRevCards() {
  const cursor = useCursor(({ instance }) => instance);

  return (
    <div className="relative z-0 bg-indigo-900 flex flex-col justify-center text-indigo-950 h-screen">
      <div className="absolute inset-0 w-full opacity-50">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#1e1b4b"
          activeColor="#6366f1"
          proximity={50}
          shockRadius={50}
          shockStrength={1}
          resistance={2000}
          returnDuration={2.5}
        />
      </div>
      <div className="container max-w-9xl mx-auto z-10 md:px-10 xl:px-0">
        <div className="relative h-180 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full hero-background z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-koguma-card z-0" />

          <div className="absolute z-20 inset-0 p-4">
            <div className="grid grid-cols-3 gap-4 h-full">
              {SocialCards.map((item, index) => (
                <div
                  className="col-span-1 relative overflow-hidden rounded-lg"
                  key={index}
                >
                  {/*<div className="absolute inset-0 hero-background z-0" />*/}
                  <Link
                    to={item.socialMediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      className="cursor-pointer h-full bg-indigo-600 hover:bg-koguma-text text-koguma-text-light border-0 shadow-xl rounded-lg transition-all active:scale-95 relative z-10"
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
                      <CardHeader className="-space-y-2">
                        <CardTitle className="font-inter-display text-3xl">
                          {item.socialMediaAppName}
                        </CardTitle>
                        <CardDescription className="font-inter text-xl opacity-80">
                          @{item.socialMediaHandler}
                        </CardDescription>
                        <CardAction>
                          <ArrowCircleUpRightIcon weight="fill" size={24} />
                        </CardAction>
                      </CardHeader>
                      <CardContent>
                        <Avatar>
                          <AvatarImage
                            src={item.socialMediaCurrentAvatar}
                          ></AvatarImage>
                        </Avatar>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-koguma-text-light mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.2}
              >
                <p className="text-5xl font-koguma pt-5">kogumarin</p>
                <p className="font-inter text-xs">EST. 2024</p>
              </AnimatedContent>
            </div>
            <div className="col-span-1 justify-self-end text-right">
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.4}
              >
                <p className="text-5xl font-koguma py-5">socials</p>
              </AnimatedContent>
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={true}
                duration={2.0}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={0.6}
              >
                <p className="text-xl font-inter leading-6 w-96">
                  Feel free to look at these platforms, and consider giving a
                  follow!~
                </p>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
