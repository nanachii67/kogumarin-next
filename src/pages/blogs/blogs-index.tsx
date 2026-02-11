import { BlogNavigationData } from "@/utils/blog-entries";
import { Link } from "react-router-dom";
import {
  ArrowUpRightIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "@/lib/formatDate";
import { useState, useMemo } from "react";
import NotesLayout from "@/layouts/NotesLayout";

const ENTRIES_PER_PAGE = 10;

export default function BlogsIndexPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BlogNavigationData.length / ENTRIES_PER_PAGE);

  const paginatedEntries = useMemo(() => {
    const start = (currentPage - 1) * ENTRIES_PER_PAGE;
    return BlogNavigationData.slice(start, start + ENTRIES_PER_PAGE);
  }, [currentPage]);

  const globalStartIndex = (currentPage - 1) * ENTRIES_PER_PAGE;

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /** Build the visible page numbers with ellipsis gaps */
  function getPageNumbers(): (number | "...")[] {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [];

    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }

    return pages;
  }

  const pageNumbers = getPageNumbers();

  return (
    <NotesLayout
      pageTitle="notes"
      pageDescription="Koguma Rin's Journal Entries"
    >
      <div className="relative z-0 flex flex-col flex-1">
        <div className="relative z-[1] flex flex-col flex-1 mx-auto pt-5 pb-10 md:px-10 lg:px-0 text-koguma-text-light md:max-w-5xl font-inter w-full">
          {/* Entry List */}
          <div className="flex flex-col mb-8 gap-0 w-full flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.9625 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9625 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                className="flex flex-col w-full"
              >
                {paginatedEntries.map((entry, index) => (
                  <motion.div
                    whileHover={{ scale: 1.00625 }}
                    whileTap={{ scale: 0.9625 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    key={entry.brandlink}
                    className="w-full"
                  >
                    <Link to={entry.brandlink} className="block w-full">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 lg:gap-4 lg:min-w-5xl py-3">
                        {/* Global index */}
                        <span className="text-sm opacity-80 md:w-24 shrink-0">
                          Entry #{globalStartIndex + index + 1}
                        </span>

                        {/* Title */}
                        <span className="flex-1 text-2xl md:text-3xl font-notes font-bold tracking-tight leading-7">
                          {entry.title}
                        </span>

                        {/* Date */}
                        <span className="text-sm font-inter opacity-80 shrink-0">
                          {formatDate(entry.entryDate)}
                        </span>

                        {/* Read length + arrow */}
                        <span className="text-sm md:text font-inter opacity-80 shrink-0">
                          <span className="flex flex-row items-center gap-1">
                            {entry.entryLength}
                            <ArrowUpRightIcon />
                          </span>
                        </span>
                      </div>

                      <Separator className="opacity-50 hidden md:block" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination — only rendered when there is more than one page */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-3 mb-12">
              <div className="flex items-center gap-2">
                {/* Prev */}
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  className="flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 disabled:opacity-30 transition-opacity cursor-pointer"
                >
                  <CaretLeftIcon size={14} weight="bold" />
                  Prev
                </Button>

                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {pageNumbers.map((page, i) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="w-8 text-center text-sm opacity-40 select-none"
                      >
                        …
                      </span>
                    ) : (
                      <motion.button
                        key={page}
                        onClick={() => goToPage(page)}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={[
                          "w-8 h-8 rounded-md text-sm font-inter transition-all cursor-pointer",
                          currentPage === page
                            ? "bg-koguma-card text-koguma-bg font-semibold opacity-100"
                            : "opacity-50 hover:opacity-90 hover:bg-koguma-text-hover",
                        ].join(" ")}
                      >
                        {page}
                      </motion.button>
                    ),
                  )}
                </div>

                {/* Next */}
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  className="flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 disabled:opacity-30 transition-opacity cursor-pointer"
                >
                  Next
                  <CaretRightIcon size={14} weight="bold" />
                </Button>
              </div>

              {/* Page counter */}
              <p className="text-xs opacity-40 font-inter select-none">
                Page {currentPage} of {totalPages} &mdash;{" "}
                {BlogNavigationData.length} entries total
              </p>
            </div>
          )}
        </div>
      </div>
    </NotesLayout>
  );
}
