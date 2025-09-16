import React, { useEffect, useState } from "react";
import "./components.css";

const About: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const items = document.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("about")?.getBoundingClientRect();
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

  const visionData = [
    {
      icon: "🚀",
      title: "Innovation First",
      description:
        "We believe in pushing boundaries and exploring cutting-edge technologies that shape the future of humanity.",
      features: [
        "AI & Machine Learning",
        "IoT Solutions",
        "Blockchain",
        "Quantum Computing",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🌟",
      title: "Community Impact",
      description:
        "Building meaningful connections and creating solutions that make a real difference in our local and global communities.",
      features: [
        "Open Source Projects",
        "Tech Workshops",
        "Mentorship Programs",
        "Industry Partnerships",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "💡",
      title: "Knowledge Sharing",
      description:
        "Fostering a culture of continuous learning where ideas flourish and expertise is shared across all levels.",
      features: [
        "Research Publications",
        "Tech Talks",
        "Coding Bootcamps",
        "Innovation Labs",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const achievements = [
    { label: "Active Members", value: "500+", icon: "👥" },
    { label: "Projects Completed", value: "50+", icon: "🛠️" },
    { label: "Workshops Conducted", value: "100+", icon: "📚" },
    { label: "Industry Partners", value: "25+", icon: "🤝" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden text-white py-24 px-6 min-h-screen animate-gradient-shift"
      style={{
        background: `
          linear-gradient(-45deg, #0f0f23, #1a1a3a, #2d2d5f, #1e3a8a, #2563eb, #3b82f6),
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 197, 253, 0.2) 0%, transparent 50%)
        `,
        backgroundSize: "400% 400%, 100% 100%, 100% 100%",
      }}
    >
      {/* Dynamic Mouse-Following Gradient */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(circle 600px at ${50 + mousePosition.x * 20}% ${
            50 + mousePosition.y * 20
          }%, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(59, 130, 246, 0.08) 25%, 
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
          transform: `translate(${mousePosition.x * 15}px, ${
            mousePosition.y * 15
          }px)`,
          transition: "transform 0.5s ease-out",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute bottom-32 right-16 w-80 h-80 animate-morphing-blob opacity-15"
        style={{
          background: "linear-gradient(-45deg, #f59e0b, #ef4444, #ec4899)",
          filter: "blur(60px)",
          animationDelay: "5s",
          transform: `translate(${-mousePosition.x * 10}px, ${
            -mousePosition.y * 10
          }px)`,
          transition: "transform 0.5s ease-out",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 animate-morphing-blob opacity-8"
        style={{
          background: "linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)",
          filter: "blur(80px)",
          animationDelay: "10s",
          transform: `translate(${mousePosition.x * 8}px, ${
            mousePosition.y * 8
          }px)`,
          transition: "transform 0.5s ease-out",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className="text-heading font-black mb-6 animate-fade-in-up animate-text-glow"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontFamily: "var(--font-heading)",
              fontWeight: "900",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
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
            }}
          >
            Our Vision & Impact
          </h2>
          <p
            className="text-body max-w-4xl mx-auto animate-fade-in-up"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              fontFamily: "var(--font-body)",
              lineHeight: "1.7",
              animationDelay: "0.2s",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            We're not just another tech community. We're innovators, creators,
            and dreamers building the future through cutting-edge technology and
            meaningful collaboration.
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {visionData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 overflow-hidden cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:bg-white/15 hover:border-white/30 ${
                visibleItems.has(index)
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-16"
              }`}
              style={{
                backdropFilter: "blur(20px)",
                transitionDelay: `${index * 0.2}s`,
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Icon with Gradient Background */}
              <div
                className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
              >
                <span className="text-3xl filter drop-shadow-lg">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-heading font-bold text-white mb-4 group-hover:text-blue-300 transition-colors"
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontFamily: "var(--font-heading)",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-body text-white/80 mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
              >
                {item.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`}
                    />
                    <span className="text-white/70 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div
          data-index={3}
          className={`transition-all duration-1000 mb-20 ${
            visibleItems.has(3)
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-16"
          }`}
        >
          <div className="text-center mb-12">
            <h3
              className="text-heading font-bold text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontFamily: "var(--font-heading)",
                lineHeight: "1.2",
              }}
            >
              Our Impact in Numbers
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              These achievements represent our commitment to building a vibrant
              tech community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div
                  className="text-3xl font-black text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {achievement.value}
                </div>
                <div className="text-white/60 text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          data-index={4}
          className={`text-center transition-all duration-1000 ${
            visibleItems.has(4)
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-16"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20 max-w-4xl mx-auto hover:bg-white/15 transition-all duration-500 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
              🚀
            </div>
            <h3
              className="text-heading font-bold text-white mb-6"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "var(--font-heading)",
                fontWeight: "700",
              }}
            >
              Ready to Shape the Future?
            </h3>
            <p
              className="text-body text-white/80 mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: "1.2rem",
                fontFamily: "var(--font-body)",
                lineHeight: "1.6",
              }}
            >
              Join our community of innovators, creators, and changemakers.
              Together, we're not just learning technology – we're building
              tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all-smooth shadow-lg hover:shadow-blue-500/25 border border-white/20"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Join Our Community
              </button>
              <button
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all-smooth border border-white/30 hover:bg-white/20"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
                onClick={() =>
                  document
                    .getElementById("events")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
