import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-cursor], .cursor-hover, input, textarea"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("hover"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });

      const textElements = document.querySelectorAll("h1, h2, h3, p, span");
      textElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("text"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });

      const imageElements = document.querySelectorAll("img, .image-hover");
      imageElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("image"));
        el.addEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100);

    // Re-add listeners when content changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "2px solid rgba(59, 130, 246, 0.5)",
      backdropFilter: "blur(10px)",
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      border: "2px solid rgba(59, 130, 246, 0.8)",
      backdropFilter: "blur(15px)",
    },
    text: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.5,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(99, 102, 241, 0.6)",
      backdropFilter: "blur(5px)",
    },
    image: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      border: "3px solid rgba(168, 85, 247, 0.6)",
      backdropFilter: "blur(20px)",
    },
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: "32px",
          height: "32px",
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "rgba(59, 130, 246, 0.6)",
          filter: "blur(1px)",
        }}
      />
    </>
  );
};

export default CustomCursor;
