import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticCursorProps {
  children: React.ReactNode;
}

const MagneticCursor: React.FC<MagneticCursorProps> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isHovering) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isHovering]);

  useEffect(() => {
    const magneticElements = document.querySelectorAll("[data-magnetic]");

    const handleMouseEnter = (element: Element) => {
      setIsHovering(true);

      const updatePosition = () => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        cursorX.set(centerX);
        cursorY.set(centerY);
      };

      // Update position immediately on enter
      updatePosition();

      // Continue updating on scroll and mousemove
      const handleUpdate = () => {
        if (element.matches(":hover")) {
          updatePosition();
        }
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        window.removeEventListener("scroll", handleUpdate, true);
        element.removeEventListener("mousemove", handleUpdate);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };

      window.addEventListener("scroll", handleUpdate, true);
      element.addEventListener("mousemove", handleUpdate);
      element.addEventListener("mouseleave", handleMouseLeave);
    };

    magneticElements.forEach((element) => {
      element.addEventListener("mouseenter", () => handleMouseEnter(element));
    });

    return () => {
      magneticElements.forEach((element) => {
        element.removeEventListener("mouseenter", () =>
          handleMouseEnter(element),
        );
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          borderRadius: "50%",
          backgroundColor: isHovering
            ? "rgba(59, 130, 246, 0.3)"
            : "rgba(59, 130, 246, 0.8)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          border: "2px solid rgba(59, 130, 246, 0.8)",
          transition:
            "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
        }}
      />
      <div>{children}</div>
    </>
  );
};

export default MagneticCursor;
