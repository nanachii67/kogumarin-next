import { KogsAlbum } from "@/utils/kogs-albums";
import { KogsSingleEP } from "@/utils/kogs-single-ep";
import { Link } from "react-router-dom";

const generalLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Notes", path: "/notes" },
  { label: "Socials", path: "/socials" },
];

export function SiteMap() {
  return (
    <>
      <div className="relative bg-indigo-600 text-koguma-text-light py-5 px-10 md:px-0">
        <div className="container max-w-5xl mx-auto px-10 md:px-0">
          <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 ">
            <p>site map</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-inter">
            <div className="flex flex-col mb-4">
              <p className="font-title">General</p>
              {generalLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <p className="text-sm opacity-90 hover:underline underline-offset-2 decoration-0">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-4">
              <p className="font-title">Singles</p>
              {KogsSingleEP.map((item) => (
                <Link to={item.link}>
                  <p className="text-sm opacity-90 hover:underline underline-offset-2 decoration-0">
                    {item.title} {item?.subtitle}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-4">
              <p className="font-title">Albums and EPs</p>
              {KogsAlbum.map((item) => (
                <Link to={item.link}>
                  <p className="text-sm opacity-90 hover:underline underline-offset-2 decoration-0">
                    {item.title} {item?.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
