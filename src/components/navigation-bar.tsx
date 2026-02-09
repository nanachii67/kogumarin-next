import { Link } from "react-router-dom";

import Icon from "./kogs_records_logo_var";
import BubbleMenu from "./react-bits/bubble-menu";

const items = [
  {
    label: "home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#fda4af", textColor: "#312e81" },
  },
  {
    label: "about",
    href: "/about",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#fda4af", textColor: "#312e81" },
  },
  {
    label: "releases",
    href: "/releases",
    ariaLabel: "Releases",
    rotation: 8,
    hoverStyles: { bgColor: "#fda4af", textColor: "#312e81" },
  },
  // {
  //   label: "blog",
  //   href: "#",
  //   ariaLabel: "Blog",
  //   rotation: 8,
  //   hoverStyles: { bgColor: "#fda4af", textColor: "#312e81" },
  // },
  {
    label: "socials",
    href: "/cards",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#fda4af", textColor: "#312e81" },
  },
];

export const NavigationBar = () => (
  <>
    <div className="font-koguma text-sm">
      <BubbleMenu
        logo={
          <Link to="/" className="opacity-75 hover:opacity-100">
            <Icon />
          </Link>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#4f46e5"
        menuContentColor="#fecdd3"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </div>
  </>
);
