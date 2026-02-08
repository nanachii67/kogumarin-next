// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
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
          <span>
            <Icon />
          </span>
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

    {/*<div className="relative z-10">
      <div className="fixed top-0 right-0 left-0 pt-4 bg-indigo-900/50 text-rose-50 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:h-13 max-w-7xl items-center place-content-between px-10 py-2 md:py-0">
          <h1 className="col-span-1 place-self-center md:justify-self-start md:place-self-center">
            <Link to={"/"}>
              <div className="flex flex-row gap-2 items-center md:my-0 my-1">
                <Icon />
              </div>
            </Link>
          </h1>
          <Separator className="bg-neutral-800 md:hidden" />
          <div className="col-span-1 place-self-center md:place-self-end font-inter py-2 md:py-0">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to={"/releases/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Releases
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={"/about/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={"/cards/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Cards
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={"/blogs"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>*/}
  </>
);
