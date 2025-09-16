import React, { useEffect, useState } from "react";
import "./components.css";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Track mouse movement for advanced parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("home")?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden text-white animate-gradient-shift"
      style={{
        background: `
          linear-gradient(-45deg, #0f0f23, #1a1a3a, #2d2d5f, #1e3a8a, #2563eb, #3b82f6),
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147, 197, 253, 0.3) 0%, transparent 50%)
        `,
        backgroundSize: "400% 400%, 100% 100%, 100% 100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Dynamic Mouse-Following Gradient */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(circle 800px at ${50 + mousePosition.x * 25}% ${
            50 + mousePosition.y * 25
          }%, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            transparent 70%)
          `,
        }}
      />

      {/* Abstract Morphing Shapes */}
      <div
        className="absolute top-20 left-20 w-96 h-96 animate-morphing-blob opacity-10"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
          filter: "blur(40px)",
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <div
        className="absolute bottom-32 right-16 w-80 h-80 animate-morphing-blob opacity-15"
        style={{
          background: "linear-gradient(-45deg, #f59e0b, #ef4444, #ec4899)",
          filter: "blur(60px)",
          animationDelay: "5s",
          transform: `translate(${-mousePosition.x * 15}px, ${
            -mousePosition.y * 15
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 animate-morphing-blob opacity-8"
        style={{
          background: "linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)",
          filter: "blur(80px)",
          animationDelay: "10s",
          transform: `translate(${mousePosition.x * 10}px, ${
            mousePosition.y * 10
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-white rounded-full animate-floating-orb opacity-60" />
      <div
        className="absolute bottom-40 left-1/4 w-6 h-6 bg-blue-300 rounded-full animate-floating-orb opacity-40"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/3 right-20 w-3 h-3 bg-purple-300 rounded-full animate-floating-orb opacity-50"
        style={{ animationDelay: "6s" }}
      />

      {/* Animated Particles */}
      <div className="absolute top-24 left-1/3 w-1 h-1 bg-white rounded-full animate-particle-float opacity-70" />
      <div
        className="absolute bottom-56 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-particle-float opacity-60"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-2/3 left-20 w-1 h-1 bg-purple-200 rounded-full animate-particle-float opacity-80"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-32 right-32 w-1 h-1 bg-cyan-200 rounded-full animate-particle-float opacity-50"
        style={{ animationDelay: "7s" }}
      />

      <div
        className="container mx-auto px-8 py-20 text-center max-w-7xl relative z-10"
        style={{ maxWidth: "80rem", margin: "0 auto" }}
      >
        {/* Main Heading */}
        <h1
          className={`text-heading font-black mb-12 leading-none transition-all-smooth animate-text-glow ${
            isLoaded
              ? "animate-slide-in-up opacity-100"
              : "opacity-0 translate-y-[50px]"
          }`}
          style={{
            fontSize: "clamp(4rem, 12vw, 10rem)",
            fontFamily: "var(--font-heading)",
            fontWeight: "900",
            marginBottom: "3rem",
            lineHeight: "0.85",
            letterSpacing: "-0.04em",
            background: `
              linear-gradient(135deg, 
                #ffffff 0%, 
                #f0f9ff 25%, 
                #e0e7ff 50%, 
                #c7d2fe 75%, 
                #a5b4fc 100%
              )
            `,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textAlign: "center",
            transform: isLoaded
              ? `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
              : "none",
            transition: "transform 0.3s ease-out",
          }}
        >
          IEEE
          <br />
          <span
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              background:
                "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Student Branch
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-body font-semibold mb-8 transition-all-smooth ${
            isLoaded
              ? "animate-slide-in-up opacity-100"
              : "opacity-0 translate-y-[30px]"
          }`}
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontFamily: "var(--font-body)",
            fontWeight: "600",
            marginBottom: "2rem",
            color: "#f1f5f9",
            maxWidth: "50rem",
            margin: "0 auto 2rem auto",
            lineHeight: "1.3",
            animationDelay: "0.3s",
            textAlign: "center",
            letterSpacing: "-0.01em",
          }}
        >
          Advancing Technology for Humanity
        </p>

        {/* Description */}
        <p
          className={`text-body mb-16 transition-all-smooth ${
            isLoaded
              ? "animate-slide-in-up opacity-100"
              : "opacity-0 translate-y-[20px]"
          }`}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontFamily: "var(--font-body)",
            fontWeight: "400",
            marginBottom: "4rem",
            color: "#e2e8f0",
            maxWidth: "45rem",
            margin: "0 auto 4rem auto",
            lineHeight: "1.7",
            animationDelay: "0.6s",
            textAlign: "center",
            opacity: "0.9",
          }}
        >
          Join our community of innovators, researchers, and technology
          enthusiasts. Explore cutting-edge projects, attend workshops, and
          network with industry professionals in the most dynamic tech
          ecosystem.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all-smooth ${
            isLoaded
              ? "animate-slide-in-up opacity-100"
              : "opacity-0 translate-y-[40px]"
          }`}
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={scrollToEvents}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold transition-all-smooth hover:transform hover:scale-110 text-body animate-button-pulse overflow-hidden"
            style={{
              backgroundColor: "white",
              color: "#1e3a8a",
              padding: "1.25rem 2.5rem",
              borderRadius: "1rem",
              fontSize: "1.2rem",
              fontFamily: "var(--font-body)",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              position: "relative",
              letterSpacing: "-0.01em",
              transform: isHovered ? "scale(1.1) translateY(-2px)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Events
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>

            {/* Animated background effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
              style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)",
                borderRadius: "1rem",
              }}
            />

            {/* Ripple effect */}
            <div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
              }}
            />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-semibold transition-all-smooth hover:bg-white/10 hover:border-white hover:transform hover:scale-105 text-body backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "white",
              padding: "1.25rem 2.5rem",
              borderRadius: "1rem",
              fontSize: "1.2rem",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-16 left-16 text-white/10 text-8xl font-black pointer-events-none select-none">
          IEEE
        </div>
        <div className="absolute bottom-16 right-16 text-white/5 text-6xl font-black pointer-events-none select-none transform rotate-12">
          2025
        </div>
      </div>
    </section>
  );
};

export default Hero;
