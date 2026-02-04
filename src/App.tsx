import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { siteConfig } from "@/utils/site";

import IndexPage from "./pages";
import AboutPage from "./pages/about";
import SocialCardsPage from "./pages/social-cards";
import ReleasesPage from "./pages/releases";
import TRACK_Orenji from "./pages/releases/tracks/track-orenji";
import TRACK_Kirakira from "./pages/releases/tracks/track-kirakira";

function App() {
  const location = useLocation();
  // const isLandingPage = location.pathname === "/";
  // const OrenjiPage = location.pathname === "/releases/orenji/";

  useEffect(() => {
    const pathName = location.pathname;
    const page = siteConfig.pages.find((i) => i.href === pathName);

    document.title = siteConfig.title(page?.label);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // useEffect(() => {
  //   if (isLandingPage) {
  //     document.documentElement.style.setProperty('--primary-color', '#1e1b4b')
  //     document.documentElement.style.setProperty('--bg-color', '#f9a8d4')
  //   } else {
  //     document.documentElement.style.setProperty('--primary-color', '#fbcfe8')
  //     document.documentElement.style.setProperty('--bg-color', '#312e81')
  //   }
  // }, [isLandingPage])

  return (
    <div>
      <Routes location={location}>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about/" />
        <Route element={<SocialCardsPage />} path="/cards" />

        <Route element={<ReleasesPage />} path="/releases" />

        <Route element={<TRACK_Orenji />} path="/releases/orenji" />
        <Route element={<TRACK_Kirakira />} path="/releases/kirakira/" />
      </Routes>
    </div>
  );
}

export default App;

//document.documentElement.style.setProperty('--primary-color', '#1e1b4b')
//document.documentElement.style.setProperty('--bg-color', '#f9a8d4')
