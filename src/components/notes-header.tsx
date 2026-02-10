import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  pageIndex?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export function NotesHeader({
  pageIndex,
  pageTitle,
  pageDescription,
}: PageHeaderProps) {
  return (
    <div className="relative z-1 bg-indigo-900 flex flex-col justify-center text-indigo-950">
      <div className="container max-w-9xl mx-auto z-10 px-10 md:px-0">
        <div className="flex flex-col text-koguma-text-light">
          <div className="flex flex-row mb-2 justify-start items-center gap-2 text-koguma-text-light/80">
            <ArrowLeftIcon />
            <Link to="/notes">
              <div className="flex flex-row gap-2 items-center">
                <p className="underline underline-offset-3 decoration-0">
                  Notes <span></span>
                </p>
                <p>•</p>
                <p>{pageIndex}</p>
              </div>
            </Link>
          </div>

          <p className="text-center md:text-start"></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
            <div className="col-span-1 justify-self-center md:justify-self-start self-center">
              <p className="text-5xl font-notes font-bold leading-11 text-center md:text-left">
                {pageTitle}
              </p>
            </div>
            <div className="col-span-1 justify-self-center md:justify-self-end text-center md:text-right">
              <p className="text-lg font-inter leading-6">{pageDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
