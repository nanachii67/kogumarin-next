import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="relative flex flex-col justify-center bg-koguma-text text-koguma-text-light h-86 overflow-hidden">
      <div className="relative mx-auto px-6 items-center">
        <div className="flex flex-col gap-3 mx-auto max-w-5xl text-center">
          <div className="flex font-inter justify-end gap-5">
            <Link to={"/releases"}>
              <p>GitHub</p>
            </Link>
            <p>•</p>
            <Link to={"/about/"}>
              <p>Facebook</p>
            </Link>
            <p>•</p>
            <Link to={"/social-cards"}>
              <p>Discord</p>
            </Link>
          </div>
          {/* <Separator /> */}
          <div className="flex flex-col">
            <p className="text-8xl font-koguma inset-0">kogumarin.</p>
            <div className="flex flex-row justify-end text-xs font-inter">
              {/* <div className="flex flex-row items-center gap-1">
                <Link to={'https://discord.gg/M6upQzKuJ5'} rel="noreferrer" target="blank">
                  <p className="hover:bg-pink-900 py-1 px-2 rounded-lg">Bandcamp</p>
                </Link>
                <p>•</p>
                <Link to={'https://discord.gg/M6upQzKuJ5'} rel="noreferrer" target="blank">
                  <p className="hover:bg-pink-900 py-1 px-2 rounded-lg">Facebook</p>
                </Link>
              </div> */}
              <p className="text-end">
                © {new Date().getFullYear()}{" "}
                <span>Kogs, on behalf of Kogumarin.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
