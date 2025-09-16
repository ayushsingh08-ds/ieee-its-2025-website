import React, { useState, useEffect } from "react";
import "./components.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all-smooth ${
        isScrolled
          ? "bg-black/20 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.2)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: isScrolled
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Enhanced IEEE Logo */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group relative"
          onClick={() => scrollToSection("home")}
        >
          <div className="text-heading transition-all-smooth">
            <span
              className="bg-white/95 text-blue-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-all-smooth border border-white/20"
              style={{
                fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                fontWeight: "800",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.02em",
              }}
            >
              IEEE
            </span>
          </div>
          <div className="text-white font-medium hidden xs:block sm:block">
            <span
              className="text-body opacity-90"
              style={{
                fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                fontFamily: "var(--font-body)",
              }}
            >
              Student Branch
            </span>
          </div>
        </div>

        {/* Enhanced Navigation Menu */}
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Events", id: "events" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <li
              key={item.id}
              className="animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 font-medium hover:text-white transition-all-smooth relative group px-3 lg:px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "500",
                  fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
                  background: "none",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
                {/* Animated underline */}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2 rounded-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-white p-3 rounded-xl transition-all-smooth backdrop-blur-sm border ${
              isMobileMenuOpen
                ? "bg-white/15 border-white/20 scale-95"
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105"
            }`}
            style={{
              minHeight: "44px",
              minWidth: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              className="w-6 h-6 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                transform: isMobileMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          {[
            { name: "Home", id: "home", icon: "🏠" },
            { name: "About", id: "about", icon: "ℹ️" },
            { name: "Events", id: "events", icon: "📅" },
            { name: "Team", id: "team", icon: "👥" },
            { name: "Contact", id: "contact", icon: "📞" },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center w-full text-left text-white font-medium py-3 px-4 rounded-xl hover:bg-white/15 transition-all-smooth backdrop-blur-sm border border-white/10 hover:border-white/20 group"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "500",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                animationDelay: `${index * 50}ms`,
                minHeight: "52px",
              }}
            >
              <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {item.name}
              </span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
