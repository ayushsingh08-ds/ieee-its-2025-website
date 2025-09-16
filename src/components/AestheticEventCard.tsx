import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  category: "workshops" | "hackathons" | "talks";
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  image: string;
  attendees: number;
  maxAttendees: number;
  tags: string[];
  speaker?: string;
  prize?: string;
}

interface AestheticEventCardProps {
  event: Event;
  onClick: () => void;
  index: number;
}

const AestheticEventCard: React.FC<AestheticEventCardProps> = ({
  event,
  onClick,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for light effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
    };
  };

  const dateObj = formatDate(event.date);

  // Category colors
  const getCategoryColor = () => {
    switch (event.category) {
      case "workshops":
        return "#00ff88";
      case "hackathons":
        return "#ff0080";
      case "talks":
        return "#0080ff";
      default:
        return "#00ff88";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -20,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glowing outline on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-10"
        style={{
          background: `linear-gradient(135deg, ${getCategoryColor()}40, ${getCategoryColor()}20, transparent)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main card */}
      <motion.div
        className="relative w-full h-[480px] rounded-2xl overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.1) 0%, 
              transparent 50%
            ),
            linear-gradient(135deg, 
              #0a0a0a 0%, 
              #1a1a1a 50%, 
              #0f0f0f 100%
            )
          `,
          border: `1px solid ${
            isHovered ? getCategoryColor() + "40" : "rgba(255, 255, 255, 0.1)"
          }`,
          boxShadow: isHovered
            ? `0 25px 50px -12px ${getCategoryColor()}20, 0 0 100px ${getCategoryColor()}10`
            : "0 10px 30px rgba(0, 0, 0, 0.5)",
        }}
        animate={{
          borderColor: isHovered
            ? getCategoryColor() + "40"
            : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated light source */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}% ${
              mousePosition.y
            }%, ${getCategoryColor()}30 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Image section with video transformation */}
        <div className="relative w-full h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Abstract graphic placeholder */}
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
              {/* Animated geometric shapes */}
              <motion.div
                className="absolute w-32 h-32 border-2 rotate-45"
                style={{ borderColor: getCategoryColor() }}
                animate={{
                  rotate: isHovered ? 225 : 45,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.div
                className="absolute w-16 h-16 rounded-full"
                style={{ backgroundColor: getCategoryColor() + "40" }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
                }}
                transition={{
                  duration: isHovered ? 2 : 0.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />

              {/* Category badge */}
              <motion.div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: getCategoryColor() + "20",
                  color: getCategoryColor(),
                  border: `1px solid ${getCategoryColor()}40`,
                }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  y: isHovered ? -5 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {event.category}
              </motion.div>
            </div>

            {/* Cinematic overlay on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="relative p-6 h-56 flex flex-col justify-between">
          {/* Date badge */}
          <div className="absolute -top-6 left-6">
            <motion.div
              className="bg-white text-black rounded-lg p-3 text-center min-w-[60px] shadow-xl"
              animate={{
                y: isHovered ? -5 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-2xl font-black leading-none">
                {dateObj.day}
              </div>
              <div className="text-xs font-bold mt-1">{dateObj.month}</div>
            </motion.div>
          </div>

          {/* Title with glitch effect */}
          <div className="mt-8 mb-4">
            <motion.h3
              className="text-2xl font-black text-white leading-tight relative"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.02em",
                textShadow: isHovered
                  ? `0 0 20px ${getCategoryColor()}60`
                  : "none",
              }}
            >
              <motion.span
                className="relative inline-block"
                animate={{
                  textShadow: isHovered
                    ? [
                        `2px 0 ${getCategoryColor()}, -2px 0 #ff0040`,
                        `4px 0 ${getCategoryColor()}, -4px 0 #ff0040`,
                        `2px 0 ${getCategoryColor()}, -2px 0 #ff0040`,
                      ]
                    : "none",
                }}
                transition={{
                  duration: 0.3,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                }}
              >
                {event.title}
              </motion.span>
            </motion.h3>
          </div>

          {/* Event details */}
          <div className="space-y-2 text-gray-300">
            <motion.div
              className="flex items-center text-sm"
              animate={{
                x: isHovered ? 5 : 0,
                color: isHovered ? "#ffffff" : "#d1d5db",
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {event.location}
            </motion.div>

            <motion.div
              className="flex items-center text-sm"
              animate={{
                x: isHovered ? 5 : 0,
                color: isHovered ? "#ffffff" : "#d1d5db",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              {event.time}
            </motion.div>

            {event.speaker && (
              <motion.div
                className="flex items-center text-sm"
                animate={{
                  x: isHovered ? 5 : 0,
                  color: isHovered ? getCategoryColor() : "#d1d5db",
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {event.speaker}
              </motion.div>
            )}
          </div>

          {/* Hover CTA */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: getCategoryColor(),
                    color: "#000000",
                  }}
                >
                  Explore
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AestheticEventCard;
