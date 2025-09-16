import React, { useState, useEffect } from "react";
import "./components.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Track mouse movement for advanced parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("contact")?.getBoundingClientRect();
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const isFieldFilled = (fieldName: keyof FormData) => {
    return formData[fieldName].length > 0;
  };

  return (
    <section
      id="contact"
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
        padding: "6rem 0",
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
        className="absolute bottom-20 right-20 w-80 h-80 animate-morphing-blob-delayed opacity-8"
        style={{
          background: "linear-gradient(-45deg, #ec4899, #f59e0b, #10b981)",
          filter: "blur(30px)",
          transform: `translate(${-mousePosition.x * 15}px, ${
            -mousePosition.y * 15
          }px)`,
          transition: "transform 0.7s ease-out",
          animationDelay: "2s",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <div
            className="w-2 h-2 bg-white rounded-full"
            style={{
              filter: "blur(1px)",
              transform: `translate(${mousePosition.x * (5 + i * 2)}px, ${
                mousePosition.y * (5 + i * 2)
              }px)`,
              transition: "transform 0.8s ease-out",
            }}
          />
        </div>
      ))}

      <div className="section-container relative z-10">
        {/* Modern Header with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="glass-card inline-block px-6 py-3 mb-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-full">
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              💬 Let's Connect
            </span>
          </div>

          <h2
            className="text-6xl font-black mb-6 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            Get In Touch
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to join our community or have questions? We'd love to hear
            from you and build the future of technology together.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 delay-300 ${
            isLoaded
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          {/* Modern Glasmorphic Contact Form */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl relative group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              boxShadow:
                "0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Animated Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <h3
                  className="text-3xl font-black text-white"
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.2)",
                  }}
                >
                  Send us a message
                </h3>
              </div>
              <p className="text-white/70 text-lg">
                We'll get back to you within 24 hours ⚡
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 text-white placeholder-transparent focus:border-blue-400 focus:outline-none focus:ring-0 transition-all duration-500 hover:bg-white/15 backdrop-blur-sm group-hover:shadow-lg"
                  placeholder="Your Name"
                  style={{
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 30px rgba(59, 130, 246, 0.3)"
                        : "none",
                  }}
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-500 pointer-events-none font-medium ${
                    focusedField === "name" || isFieldFilled("name")
                      ? "-top-3 text-sm text-blue-400 bg-gradient-to-r from-slate-900 to-slate-800 px-3 rounded-full"
                      : "top-5 text-white/60"
                  }`}
                  style={{
                    textShadow:
                      focusedField === "name"
                        ? "0 0 10px rgba(59, 130, 246, 0.5)"
                        : "none",
                  }}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 text-white placeholder-transparent focus:border-purple-400 focus:outline-none focus:ring-0 transition-all duration-500 hover:bg-white/15 backdrop-blur-sm group-hover:shadow-lg"
                  placeholder="Your Email"
                  style={{
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 30px rgba(147, 51, 234, 0.3)"
                        : "none",
                  }}
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-500 pointer-events-none font-medium ${
                    focusedField === "email" || isFieldFilled("email")
                      ? "-top-3 text-sm text-purple-400 bg-gradient-to-r from-slate-900 to-slate-800 px-3 rounded-full"
                      : "top-5 text-white/60"
                  }`}
                  style={{
                    textShadow:
                      focusedField === "email"
                        ? "0 0 10px rgba(147, 51, 234, 0.5)"
                        : "none",
                  }}
                >
                  Your Email
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none focus:ring-0 transition-all duration-500 hover:bg-white/15 backdrop-blur-sm group-hover:shadow-lg"
                  placeholder="Subject"
                  style={{
                    boxShadow:
                      focusedField === "subject"
                        ? "0 0 30px rgba(34, 211, 238, 0.3)"
                        : "none",
                  }}
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-500 pointer-events-none font-medium ${
                    focusedField === "subject" || isFieldFilled("subject")
                      ? "-top-3 text-sm text-cyan-400 bg-gradient-to-r from-slate-900 to-slate-800 px-3 rounded-full"
                      : "top-5 text-white/60"
                  }`}
                  style={{
                    textShadow:
                      focusedField === "subject"
                        ? "0 0 10px rgba(34, 211, 238, 0.5)"
                        : "none",
                  }}
                >
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 text-white placeholder-transparent focus:border-emerald-400 focus:outline-none focus:ring-0 transition-all duration-500 hover:bg-white/15 backdrop-blur-sm group-hover:shadow-lg resize-none"
                  placeholder="Your Message"
                  style={{
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 30px rgba(16, 185, 129, 0.3)"
                        : "none",
                  }}
                  required
                />
                <label
                  className={`absolute left-6 transition-all duration-500 pointer-events-none font-medium ${
                    focusedField === "message" || isFieldFilled("message")
                      ? "-top-3 text-sm text-emerald-400 bg-gradient-to-r from-slate-900 to-slate-800 px-3 rounded-full"
                      : "top-5 text-white/60"
                  }`}
                  style={{
                    textShadow:
                      focusedField === "message"
                        ? "0 0 10px rgba(16, 185, 129, 0.5)"
                        : "none",
                  }}
                >
                  Your Message
                </label>
              </div>

              {/* Modern Animated Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`relative w-full py-6 rounded-2xl font-black text-lg transition-all duration-500 transform group overflow-hidden ${
                  isSuccess
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500"
                } text-white hover:scale-105 focus:outline-none focus:ring-0 disabled:cursor-not-allowed shadow-2xl`}
                style={{
                  boxShadow: isSuccess
                    ? "0 0 40px rgba(16, 185, 129, 0.4)"
                    : "0 0 40px rgba(59, 130, 246, 0.3)",
                  backgroundSize: "200% 200%",
                  animation:
                    !isSubmitting && !isSuccess
                      ? "gradient-shift 3s ease infinite"
                      : "none",
                }}
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 rounded-2xl blur-lg"></div>

                <div className="relative flex items-center justify-center gap-4">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span
                        style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
                      >
                        Sending Message...
                      </span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg
                        className="w-7 h-7 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
                      >
                        Message Sent Successfully! ✨
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
                      >
                        Send Message
                      </span>
                      <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>

          {/* Modern Contact Information Sidebar */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {/* Contact Info Card */}
            <div
              className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl relative group hover-lift"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  <h3
                    className="text-3xl font-black text-white"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.2)",
                    }}
                  >
                    Let's Connect
                  </h3>
                </div>
                <p className="text-white/70 text-lg">
                  Multiple ways to reach us 🚀
                </p>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-6 group/item">
                  <div
                    className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">
                      Our Campus
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      REVA University, Bangalore
                      <br />
                      <span className="text-white/60">
                        Kattigenahalli, Karnataka 560064
                      </span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group/item">
                  <div
                    className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">
                      Email Us
                    </h4>
                    <a
                      href="mailto:ieee@reva.edu.in"
                      className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-lg hover:scale-105 inline-block"
                      style={{
                        textShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
                      }}
                    >
                      ieee@reva.edu.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 group/item">
                  <div
                    className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">
                      Call Us
                    </h4>
                    <a
                      href="tel:+918045187555"
                      className="text-white/80 hover:text-orange-400 transition-all duration-300 text-lg hover:scale-105 inline-block"
                      style={{
                        textShadow: "0 0 10px rgba(251, 146, 60, 0.3)",
                      }}
                    >
                      +91 80451 87555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Social Media Card */}
            <div
              className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl relative group hover-lift"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                  <h3
                    className="text-3xl font-black text-white"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.2)",
                    }}
                  >
                    Follow Our Journey
                  </h3>
                </div>
                <p className="text-white/70 text-lg">
                  Stay connected across all platforms 🌐
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ieee_reva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #E1306C 0%, #C13584 50%, #833AB4 100%)",
                    boxShadow: "0 10px 30px rgba(225, 48, 108, 0.3)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.004 5.367 18.641.001 12.017.001zm5.568 16.791c-.704.083-2.794-.016-3.57-.016-1.32 0-2.871.099-3.612.016-.741-.083-1.237-.349-1.669-.788-.432-.431-.622-.923-.705-1.622-.083-.699.015-2.306.015-3.622s-.098-2.931-.015-3.63c.083-.699.273-1.191.705-1.622.432-.431.928-.622 1.669-.705.741-.083 2.292.016 3.612.016.777 0 2.866-.099 3.57-.016.704.083 1.237.274 1.669.705.432.431.622.923.705 1.622.083.699-.015 2.314-.015 3.63s.098 2.923.015 3.622c-.083.699-.273 1.191-.705 1.622-.432.431-.965.622-1.669.705zM12 7.15c-2.68 0-4.85 2.17-4.85 4.85s2.17 4.85 4.85 4.85 4.85-2.17 4.85-4.85S14.68 7.15 12 7.15zm0 8.011c-1.744 0-3.161-1.417-3.161-3.161S10.256 8.839 12 8.839s3.161 1.417 3.161 3.161S13.744 15.161 12 15.161zm6.192-8.839c-.627 0-1.134-.507-1.134-1.134s.507-1.134 1.134-1.134 1.134.507 1.134 1.134-.507 1.134-1.134 1.134z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        Instagram
                      </div>
                      <div className="text-white/80">
                        Follow our daily updates
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/60 ml-auto group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/ieee-reva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold">LinkedIn</div>
                      <div className="text-blue-100 text-sm">IEEE REVA</div>
                    </div>
                  </div>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:ieee@reva.edu.in"
                  className="group bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.045L12 8.773l6.545-4.907v-.045h3.819c.904 0 1.636.732 1.636 1.636z" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-red-100 text-sm">
                        ieee@reva.edu.in
                      </div>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918045187555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold">WhatsApp</div>
                      <div className="text-green-100 text-sm">
                        +91 80451 87555
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">
            © 2025 IEEE Student Branch - DSU. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Empowering tomorrow's engineers and technologists
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
