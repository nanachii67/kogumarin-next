import { Footer } from "@/components/footer";
import { SiteMap } from "@/components/site-map";

import "@/assets/kogs_records_logo_indigo_rotate.svg";
import { HeroPolkaRevHeader } from "@/components/hero-polka-header";
import { NotesHeader } from "@/components/notes-header";
import { Easing, motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, filter: "blur(1px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(1px)" },
};

const transition = {
  duration: 0.25,
  ease: "easeOut" as Easing,
};

export default function AboutLayout({
  children,
  pageTitle,
  pageDescription,
  noteIndex,
  noteTitle,
  noteDescription,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  noteIndex?: string;
  noteTitle?: string;
  noteDescription?: string;
}) {
  return (
    <motion.div
      className="relative flex flex-col select-none mx-0"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <HeroPolkaRevHeader
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
      {noteIndex && noteTitle && noteDescription && (
        <NotesHeader
          pageIndex={noteIndex}
          pageTitle={noteTitle}
          pageDescription={noteDescription}
        />
      )}
      {/*<NavigationBar />*/}
      <div className="absolute inset-0 w-full about-background z-0" />
      <main className="flex flex-col mx-auto pt-10 px-10 min-h-[calc(100vh-50vh)]">
        {children}
      </main>
      <SiteMap />
      <Footer />
    </motion.div>
  );
}
