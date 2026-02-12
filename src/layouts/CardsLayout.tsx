import { HeroPolkaRevCards } from "@/components/hero-polka-rev-cards";

import { Easing, motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, filter: "blur(2px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(3px)" },
};

const transition = {
  duration: 0.25,
  ease: "easeOut" as Easing,
};

export default function CardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative flex flex-col select-none mx-0 scroll-gutter"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <HeroPolkaRevCards />
      {/*<NavigationBar />*/}
      {/*<div className="absolute inset-0 w-full about-background h-screen" />*/}
      <div className="relative z-1 bg-koguma-text-hover mx-auto"></div>
      <main>{children}</main>
    </motion.div>
  );
}
