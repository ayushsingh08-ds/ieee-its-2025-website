import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./components.css";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const DynamicAbout: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0, visible: false });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const particlesY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);

  // Initialize cosmic particles
  useEffect(() => {
    const createParticle = (): ParticleProps => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
      color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"][
        Math.floor(Math.random() * 4)
      ],
    });

    const initialParticles = Array.from({ length: 80 }, createParticle);
    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x:
            particle.x + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.5,
          ...(particle.y < -10 && { y: window.innerHeight + 10 }),
        }))
      );
    };

    const particleAnimation = setInterval(animateParticles, 50);
    return () => clearInterval(particleAnimation);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePosition({ x, y });
        setCursorGlow({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          visible: true,
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorGlow((prev) => ({ ...prev, visible: false }));
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const visionMissionData = [
    {
      type: "vision",
      title: "Our Vision",
      content:
        "To be the catalyst for technological innovation that bridges the gap between academic excellence and industry leadership, fostering a community where brilliant minds converge to shape the future of intelligent transportation systems and beyond.",
      highlights: ["Innovation", "Excellence", "Leadership", "Future"],
      icon: "🌟",
      gradient: "from-blue-400 via-purple-500 to-pink-500",
    },
    {
      type: "mission",
      title: "Our Mission",
      content:
        "We empower students and professionals through cutting-edge research, hands-on learning experiences, and collaborative projects that push the boundaries of what's possible in transportation technology, artificial intelligence, and sustainable engineering solutions.",
      highlights: ["Empower", "Research", "Innovation", "Sustainability"],
      icon: "🚀",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f172a 100%)
        `,
      }}
    >
      {/* Animated Cosmic Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-40"
      >
        {/* Nebula Effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at ${
                50 + mousePosition.x * 15
              }% ${50 + mousePosition.y * 15}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(139, 92, 246, 0.1) 30%, 
                transparent 70%),
              radial-gradient(ellipse 600px 400px at ${
                30 - mousePosition.x * 10
              }% ${70 - mousePosition.y * 10}%, 
                rgba(16, 185, 129, 0.12) 0%, 
                rgba(6, 182, 212, 0.08) 40%, 
                transparent 70%)
            `,
            transition: "all 0.8s ease-out",
          }}
        />

        {/* Moving Light Streaks */}
        <div
          className="absolute top-1/4 left-0 w-full h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #3b82f6, transparent)",
            transform: `translateX(${mousePosition.x * 50}px)`,
            transition: "transform 1s ease-out",
            boxShadow: "0 0 20px #3b82f6",
          }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px opacity-15"
          style={{
            background:
              "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
            transform: `translateX(${-mousePosition.x * 30}px)`,
            transition: "transform 1.2s ease-out",
            boxShadow: "0 0 15px #8b5cf6",
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <motion.div style={{ y: particlesY }} className="absolute inset-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </motion.div>

      {/* Custom Cursor Glow */}
      {cursorGlow.visible && (
        <div
          className="absolute pointer-events-none z-20"
          style={{
            left: cursorGlow.x - 100,
            top: cursorGlow.y - 100,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Hero Title with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.h1
            className="font-black mb-8 leading-tight tracking-tight"
            style={{
              y: textY,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontFamily: '"Merriweather", "Georgia", serif',
              background: `
                linear-gradient(135deg, 
                  #ffffff 0%, 
                  #e0e7ff 25%, 
                  #c7d2fe 50%, 
                  #a5b4fc 75%, 
                  #8b5cf6 100%
                )
              `,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
            }}
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed max-w-4xl mx-auto"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: "1.8",
              letterSpacing: "0.02em",
            }}
          >
            We are the IEEE Intelligent Transportation Systems Student Branch, a
            dynamic community of innovators, researchers, and visionaries
            dedicated to revolutionizing how the world moves.
          </motion.p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {visionMissionData.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div
                className="relative p-8 rounded-3xl backdrop-blur-20 border border-white/20 overflow-hidden transition-all duration-500 hover:scale-102 hover:border-white/30"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.1) 0%,
                      rgba(255, 255, 255, 0.05) 100%
                    )
                  `,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6 inline-block"
                  style={{
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Interactive Heading */}
                <motion.h2
                  whileHover={{
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
                    scale: 1.05,
                  }}
                  className="text-4xl font-bold mb-6 cursor-pointer relative overflow-hidden"
                  style={{
                    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                    color: "#ffffff",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}

                  {/* Expanding Underline Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.gradient
                        .replace("from-", "")
                        .replace("via-", ", ")
                        .replace("to-", ", ")})`,
                    }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.h2>

                {/* Content with Highlighted Keywords */}
                <div className="text-lg leading-relaxed mb-6">
                  {item.content.split(" ").map((word, wordIndex) => {
                    const isHighlight = item.highlights.some((highlight) =>
                      word.toLowerCase().includes(highlight.toLowerCase())
                    );

                    return (
                      <motion.span
                        key={wordIndex}
                        whileHover={
                          isHighlight
                            ? {
                                color: "#60a5fa",
                                textShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                                scale: 1.05,
                              }
                            : {}
                        }
                        className={
                          isHighlight ? "cursor-pointer font-semibold" : ""
                        }
                        style={{
                          fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                          color: isHighlight
                            ? "#a5b4fc"
                            : "rgba(255, 255, 255, 0.85)",
                          display: "inline-block",
                          transition: "all 0.2s ease",
                          marginRight: "0.25rem",
                          lineHeight: "1.7",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </div>

                {/* Gradient Border Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradient})`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                  }}
                />

                {/* Floating Highlight Keywords */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <motion.span
                      key={hIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      }}
                      transition={{
                        duration: 0.3,
                        delay: hIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="px-3 py-1 text-sm font-medium rounded-full cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${item.gradient
                          .replace("from-", "")
                          .replace("via-", ", ")
                          .replace("to-", ", ")})20`,
                        border: `1px solid ${
                          item.gradient.includes("blue")
                            ? "#3b82f6"
                            : item.gradient.includes("purple")
                            ? "#8b5cf6"
                            : "#10b981"
                        }40`,
                        color: item.gradient.includes("blue")
                          ? "#60a5fa"
                          : item.gradient.includes("purple")
                          ? "#a78bfa"
                          : "#34d399",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with Parallax */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="inline-block p-8 rounded-3xl backdrop-blur-20 border border-white/20"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08) 0%,
                  rgba(255, 255, 255, 0.04) 100%
                )
              `,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <motion.p
              className="text-2xl mb-6 font-semibold"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                background: "linear-gradient(135deg, #ffffff, #a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ready to be part of the future?
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                background:
                  "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb, #7c3aed, #0891b2)",
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              Join Our Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Section Transition Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10, 10, 15, 0.8))",
        }}
      />
    </section>
  );
};

export default DynamicAbout;
