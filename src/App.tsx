import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DynamicAbout from "./components/DynamicAbout";
import Events from "./components/Events";
import ModernTeam from "./components/ModernTeam";
import Contact from "./components/Contact";
import EventDetails from "./components/EventDetails";
import AwwwardsLoader from "./components/AwwwardsLoader";
import CustomCursor from "./components/CustomCursor";
import AwwwardsNav from "./components/AwwwardsNav";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";

    // Set up intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");

          // Update current section for navigation
          if (entry.target.id) {
            setCurrentSection(entry.target.id);
          }
        }
      });
    }, observerOptions);

    // Observe all main sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    // Loading screen - extended for better Awwwards experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Loading screen component
  if (isLoading) {
    return <AwwwardsLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div
        className="min-h-screen bg-gray-50 w-full overflow-x-hidden"
        style={{
          backgroundColor: "#f9fafb",
          fontFamily: "var(--font-body)",
        }}
      >
        <CustomCursor />
        <AwwwardsNav currentSection={currentSection} />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="overflow-x-hidden w-full">
                <Hero />
                <div className="space-y-0 w-full">
                  <DynamicAbout />
                  <Events />
                  <ModernTeam />
                  <Contact />
                </div>
              </main>
            }
          />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>

        {/* Back to top button */}
        <BackToTopButton />
      </div>
    </Router>
  );
}

// Back to top button component
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all-smooth hover:bg-blue-700 hover:scale-110 z-40 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "clamp(0.5rem, 2vw, 0.75rem)",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        bottom: "clamp(1rem, 4vw, 2rem)",
        right: "clamp(1rem, 4vw, 2rem)",
        zIndex: 40,
      }}
      aria-label="Back to top"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default App;
