import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AwwwardsNavProps {
  currentSection: string;
}

const AwwwardsNav: React.FC<AwwwardsNavProps> = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sections = [
    { name: "Home", id: "home", icon: "◉" },
    { name: "Vision", id: "about", icon: "◈" },
    { name: "Events", id: "events", icon: "◇" },
    { name: "Team", id: "team", icon: "◎" },
    { name: "Contact", id: "contact", icon: "◐" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalHeight) * 100;

      setScrollProgress(progress);
      setIsScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    open: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />

      {/* Floating Navigation Trigger */}
      <motion.button
        className="fixed top-6 right-6 w-16 h-16 bg-black/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center z-50 cursor-hover"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        animate={{
          y: isScrollingDown && lastScrollY > 100 ? -100 : 0,
          opacity: isScrollingDown && lastScrollY > 100 ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18m-9-9v18" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className="w-3 h-3 rounded-full border-2 border-white/40 backdrop-blur-sm cursor-hover relative group"
            onClick={() => scrollToSection(section.id)}
            animate={{
              backgroundColor:
                currentSection === section.id
                  ? "rgba(255, 255, 255, 0.8)"
                  : "transparent",
              scale: currentSection === section.id ? 1.2 : 1,
            }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
          >
            {/* Tooltip */}
            <motion.div
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {section.name}
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-8"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="max-w-2xl w-full">
                {/* Menu Title */}
                <motion.h2
                  className="text-6xl font-black text-white mb-12 text-center"
                  variants={itemVariants}
                  style={{
                    fontFamily: "var(--font-heading)",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Navigate
                </motion.h2>

                {/* Menu Items */}
                <div className="space-y-6">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      className="w-full text-left group cursor-hover"
                      variants={itemVariants}
                      onClick={() => scrollToSection(section.id)}
                      whileHover={{ x: 20 }}
                    >
                      <div className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <motion.div
                          className="text-3xl text-blue-400"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          {section.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {section.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {index === 0 && "Return to beginning"}
                            {index === 1 && "Discover our mission"}
                            {index === 2 && "Upcoming experiences"}
                            {index === 3 && "Meet the innovators"}
                            {index === 4 && "Get in touch"}
                          </p>
                        </div>
                        <motion.div
                          className="text-white/40 text-xl"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Close Button */}
                <motion.button
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-hover"
                  variants={itemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                >
                  ✕
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AwwwardsNav;
