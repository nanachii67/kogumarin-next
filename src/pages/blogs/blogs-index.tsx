import { BlogNavigationData } from "@/utils/blog-entries";
import AboutLayout from "@/layouts/AboutLayout";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/formatDate";

export default function BlogsIndexPage() {
  return (
    <AboutLayout
      pageTitle="notes"
      pageDescription="Koguma Rin's Journal Entries"
    >
      <div className="relative z-0">
        <div className="relative z-[1] flex flex-col mx-auto pt-5 pb-10 md:px-10 lg:px-0 text-koguma-text-light md:max-w-5xl font-inter">
          <div className="flex flex-col mb-20 gap-0 w-full">
            {BlogNavigationData.map((entry, index) => (
              <motion.div
                whileHover={{ scale: 1.00625 }}
                whileTap={{ scale: 0.9625 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={index}
                className="w-full"
              >
                <Link to={entry.brandlink} className="block w-full">
                  {/* Row: stacks vertically on mobile, horizontal on md+ */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 md:min-w-5xl py-3">
                    {/* Index */}
                    <span className="text-sm opacity-80 md:w-24 shrink-0">
                      Entry #{index + 1}
                    </span>

                    {/* Title — grows to fill available space */}
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
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
