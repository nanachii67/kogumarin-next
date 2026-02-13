import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/utils/site";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "mouse-follower/dist/mouse-follower.min.css";
import MouseFollower from "mouse-follower";
import useCursor from "@/hooks/useCursor";

import { AnimatePresence } from "framer-motion";
import { NavigationBar } from "./components/navigation-bar";
import { ScrollToTop } from "./components/scroll-to-top";

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import IndexPage from "./pages";
import AboutPage from "./pages/about";
import SocialCardsPage from "./pages/social-cards";

import ReleasesPage from "./pages/releases";
import TRACK_Slug from "./pages/releases/tracks/track-slug";

import BlogsIndexPage from "./pages/blogs/blogs-index";
import BLOGS_Slug from "./pages/blogs/blogs-slug";
import MDXTesting from "./pages/mdx-testing";

function App() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

  const key = location.state?._refresh || location.pathname;

  useEffect(() => {
    const cursor = new MouseFollower({
      textClassName: "mf-cursor-text text-koguma-text-light",
    });
    useCursor.setState({ instance: cursor });
  }, []);

  useEffect(() => {
    const pathName = location.pathname;
    const page = siteConfig.pages.find((i) => i.href === pathName);
    document.title = siteConfig.title(page?.label);
  }, [location]);

  useEffect(() => {
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <NavigationBar />

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (smootherRef.current) {
            smootherRef.current.scrollTo(0, false);
            requestAnimationFrame(() => ScrollTrigger.refresh());
          } else {
            window.scrollTo(0, 0);
          }
        }}
      >
        <Routes location={location} key={key}>
          <Route element={<IndexPage />} path="/" />
          <Route element={<AboutPage />} path="/about/" />
          <Route element={<SocialCardsPage />} path="/socials" />

          <Route element={<ReleasesPage />} path="/releases" />
          <Route element={<TRACK_Slug />} path="/releases/:trackId" />

          <Route element={<BlogsIndexPage />} path="/notes" />
          <Route element={<BLOGS_Slug />} path="/notes/:blogId" />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
