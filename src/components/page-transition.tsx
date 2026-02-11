import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Pure fade + subtle scale — no directional sliding
const variants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.01, filter: "blur(2px)" },
};

const transition = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

interface PageTransitionProps {
  children: ReactNode;
}

// Wrap each page's content in this component
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
