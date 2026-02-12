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
      <div className="relative bg-indigo-600 text-koguma-text-light py-5 px-10 lg:px-0">
        <div className="container max-w-5xl mx-auto px-10 lg:px-0">
          <div className="flex flex-row gap-2 items-center text-3xl font-koguma my-4 ">
            <p>site map</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 font-inter">
            <div className="col-span-1 flex flex-col mb-4">
              <p className="font-inter-display">General</p>
              {generalLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <p className="text-sm opacity-90 hover:underline underline-offset-2 decoration-0">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Link
                  to={"/releases"}
                  className="col-span-1 md:col-span-2 font-inter-display"
                >
                  <p>Releases</p>
                </Link>

                <div className="col-span-1 flex flex-col mb-4">
                  <p className="font-inter-display">Singles</p>
                  {KogsSingleEP.map((item) => (
                    <Link to={item.link}>
                      <p className="text-sm opacity-90 hover:underline underline-offset-2 decoration-0">
                        {item.title} {item?.subtitle}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="col-span-1 flex flex-col mb-4">
                  <p className="font-inter-display">Albums and EPs</p>
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
        </div>
      </div>
    </>
  );
}
