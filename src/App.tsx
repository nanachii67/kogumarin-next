import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/utils/site";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "mouse-follower/dist/mouse-follower.min.css";
import MouseFollower from "mouse-follower";
import useCursor from "@/hooks/useCursor";

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import IndexPage from "./pages";
import AboutPage from "./pages/about";
import SocialCardsPage from "./pages/social-cards";
import ReleasesPage from "./pages/releases";
import TRACK_Slug from "./pages/releases/tracks/track-slug";

function App() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

  const key = location.state?._refresh || location.pathname;

  // Initialize cursor once
  useEffect(() => {
    const cursor = new MouseFollower({
      textClassName: "mf-cursor-text text-koguma-text-light",
    });
    useCursor.setState({ instance: cursor });
  }, []);

  // Update document title on route change
  useEffect(() => {
    const pathName = location.pathname;
    const page = siteConfig.pages.find((i) => i.href === pathName);
    document.title = siteConfig.title(page?.label);
  }, [location]);

  // Initialize ScrollSmoother once
  useEffect(() => {
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    return () => {
      // Cleanup on unmount
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  // Handle scroll reset on route change - CONSOLIDATED
  useEffect(() => {
    const smoother = smootherRef.current;

    if (smoother) {
      // Instantly scroll to top without animation
      smoother.scrollTo(0, false);

      // Small delay to ensure DOM is ready, then refresh ScrollTrigger
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    } else {
      // Fallback if smoother isn't ready yet
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div>
      <Routes location={location} key={key}>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about/" />
        <Route element={<SocialCardsPage />} path="/cards" />
        <Route element={<ReleasesPage />} path="/releases" />
        <Route element={<TRACK_Slug />} path="/releases/:trackId" />
      </Routes>
    </div>
  );
}

export default App;
