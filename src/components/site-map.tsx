import { KogsAlbum } from "@/utils/kogs-albums";
import { KogsSingleEP } from "@/utils/kogs-single-ep";
import { Link } from "react-router-dom";

const generalLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Releases", path: "/releases" },
  { label: "Socials", path: "/cards" },
];

export function SiteMap() {
  return (
    <>
      <div className="relative bg-koguma-background py-5 px-10">
        <div className="container max-w-5xl mx-auto px-10">
          <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 text-koguma-text">
            <p>site map</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col mb-4">
              <p className="font-title">General</p>
              {generalLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-4">
              <p className="font-title">Singles</p>
              {KogsSingleEP.map((item) => (
                <Link to={item.link}>
                  <p>
                    {item.title} {item?.subtitle}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-4">
              <p className="font-title">Albums and EPs</p>
              {KogsAlbum.map((item) => (
                <Link to={item.link}>
                  <p>
                    {item.title} {item?.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/*<div className="flex flex-row gap-2 items-center font-title text-koguma-text">
            <p>General </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-koguma-text mb-4">
            {generalLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-2 items-center font-title text-koguma-text">
            <p>Releases: Single </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-koguma-text mb-4">
            {KogsSingleEP.map((item) => (
              <Link to={item.link}>
                <p>
                  {item.title} {item?.subtitle}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-2 items-center font-title text-koguma-text">
            <p>Releases: Album and EP </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-koguma-text mb-4">
            {KogsAlbum.map((item) => (
              <Link to={item.link}>
                <p>
                  {item.title} {item?.subtitle}
                </p>
              </Link>
            ))}
          </div>*/}
        </div>
      </div>
      {/*<div className="relative bg-koguma-background flex flex-col justify-center text-koguma-text h-100">
        <div className="flex flex-col px-10 py-5 my-5 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 items-start justify-center max-w-5xl font-inter">
            <div className="flex flex-col">
              <p className="flex items-center text-4xl font-koguma my-4">
                site map{" "}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="uppercase text-sm font-title">General</p>
              <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                <p className="col-span-1">Home</p>
                <p className="col-span-1">About</p>
                <p className="col-span-1">Contact</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-5xl">
                <div className="col-span-1">
                  <p className="font-title text-sm">GENERAL</p>
                </div>
                <div className="col-span-2">
                  <Link to="/releases/">
                    <p className="font-title text-sm">RELEASES</p>
                  </Link>
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <p className="font-inter-display text-sm">TRACKS</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-inter-display text-sm">ALBUMS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-5xl">
                <div className="col-span-1">
                  <div className="grid grid-cols-1">
                    <Link to="/">
                      <p>Home</p>
                    </Link>
                    <Link to="/about/">
                      <p>About</p>
                    </Link>
                    <Link to="/cards/">
                      <p>Social Cards</p>
                    </Link>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <div className="grid grid-cols-1">
                        {KogsSingleEP.map((item) => (
                          <Link to={item.link}>
                            <p>
                              {item.title} {item?.subtitle}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="grid grid-cols-1">
                        {KogsAlbum.map((item) => (
                          <Link to={item.link}>
                            <p>
                              {item.title} {item?.subtitle}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
}
