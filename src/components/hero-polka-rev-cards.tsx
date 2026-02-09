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

import { Avatar, AvatarImage } from "./ui/avatar";
import {
  ArrowCircleUpRightIcon,
  CopyIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";

export function HeroPolkaRevCards() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (text: string, id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative z-0 bg-indigo-700 flex flex-col justify-center text-indigo-950 min-h-screen py-10 px-10">
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
      <div className="container max-w-9xl mx-auto z-10 md:px-10 mt-20 lg:mt-0 lg:px-0">
        <div className="flex flex-col text-koguma-text-light mb-5">
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
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 lg:mb-0">
            {SocialCards.map((item) => (
              <AnimatedContent
                key={item.id}
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.0}
                threshold={0}
                delay={item.id * 0.1}
              >
                <Card className="group cursor-pointer h-full lg:min-h-[350px] min-h-[275px] bg-indigo-500 hover:bg-indigo-600 text-koguma-text-light border-0 shadow-2xl shadow-koguma-text/50 rounded-lg transition-all active:scale-95 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full about-background z-0" />
                  <div className="relative z-10 flex flex-col h-full">
                    <CardHeader className="-space-y-2">
                      <div className="flex flex-row items-center gap-2 mb-1">
                        <item.SocialMediaIcon />
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={item.socialMediaCurrentAvatar} />
                        </Avatar>
                      </div>
                      <CardTitle className="font-title text-3xl">
                        {item.socialMediaAppName}
                      </CardTitle>
                      <CardDescription className="font-inter text-lg opacity-80 -space-y-1">
                        <p className="font-inter-display">
                          {item.socialMediaHandlerFullName}
                        </p>
                        <p className="flex flex-row items-center gap-2">
                          @{item.socialMediaHandler}
                          <Tooltip
                            open={copiedId === item.id ? true : undefined}
                          >
                            <TooltipTrigger asChild className="bg-koguma-card">
                              <Button
                                size="icon-xs"
                                variant="link"
                                aria-label="Copy username"
                                className="text-koguma-text-light opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) =>
                                  handleCopy(
                                    item.socialMediaHandler,
                                    item.id,
                                    e,
                                  )
                                }
                              >
                                <CopyIcon weight="fill" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              className=" text-koguma-text-light select-none shadow"
                            >
                              <p>{copiedId === item.id ? "Copied!" : "Copy"}</p>
                            </TooltipContent>
                          </Tooltip>
                        </p>
                      </CardDescription>
                      <CardAction>
                        <Button
                          size="icon"
                          className="text-koguma-text-light bg-koguma-card/75 rounded-full hover:bg-koguma-card"
                          aria-label="Open externally"
                          title="Open externally"
                          asChild
                        >
                          <div>
                            <ArrowCircleUpRightIcon
                              weight="fill"
                              className="w-6 h-6"
                            />
                          </div>
                        </Button>
                      </CardAction>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-end">
                      {item.relevantLinks &&
                        item.relevantLinks.map((link) => (
                          <div key={link.relevantLinkId}>
                            <p className="text-sm opacity-80">Also check out</p>
                            <a
                              href={link.relevantLinkReferral}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-inter-display text-xl leading-6 flex items-center gap-1 underline underline-offset-3 hover:text-rose-200 transition-colors"
                              aria-label={link.relevantLinkName}
                              title={`${link.relevantLinkName} - ${link.relevantLinkAppName}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {link.relevantLinkName}
                              <ArrowUpRightIcon className="w-5 h-5" />
                            </a>
                            <p className="text-sm opacity-80">
                              {link.relevantLinkAppName}
                            </p>
                          </div>
                        ))}
                    </CardContent>
                  </div>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </TooltipProvider>
      </div>
      <div className="absolute flex flex-col gap-3 bottom-8 left-1/2 transform -translate-x-1/2 justify-center items-center font-inter text-koguma-text-light/40">
        <AnimatedContent
          distance={12.5}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.0}
          animateOpacity
          threshold={0}
          delay={0.8}
        >
          <p className="text-xs md:text-base">
            © {new Date().getFullYear()}{" "}
            <span>Kogs, on behalf of Kogumarin.</span>{" "}
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
}
