import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./components.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  achievements: string[];
  joinDate: string;
}

const ModernTeamCard: React.FC<{ member: TeamMember; index: number }> = ({
  member,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { name: "linkedin", url: member.linkedin, icon: "💼", color: "#0077B5" },
    { name: "github", url: member.github, icon: "🐙", color: "#333" },
    { name: "twitter", url: member.twitter, icon: "🐦", color: "#1DA1F2" },
  ].filter((social) => social.url);

  const getRoleColor = (role: string) => {
    const colors = {
      Chair: "#8B5CF6",
      "Vice-Chair": "#3B82F6",
      Secretary: "#10B981",
      Treasurer: "#F59E0B",
      "Web Master": "#EC4899",
      "Membership Chair": "#6366F1",
      "Sponsorship Chair": "#EF4444",
      "Event Coordinator": "#14B8A6",
    };
    return colors[role as keyof typeof colors] || "#6B7280";
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-80 h-96 mx-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Card */}
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.08) 100%
            )
          `,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 50px ${getRoleColor(
                member.role
              )}30`
            : "0 15px 35px -5px rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Portrait with zoom effect */}
        <div className="relative w-full h-48 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                member.name
              )}&size=400&background=random&color=fff&format=png`;
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Role badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
            style={{
              background: `linear-gradient(135deg, ${getRoleColor(
                member.role
              )}E6, ${getRoleColor(member.role)}B3)`,
              backdropFilter: "blur(10px)",
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {member.role}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Name - Bold Serif */}
          <motion.h3
            className="text-2xl font-bold text-white leading-tight"
            style={{
              fontFamily: '"Merriweather", "Georgia", serif',
              textShadow: isHovered
                ? `0 0 20px ${getRoleColor(member.role)}60`
                : "none",
            }}
            animate={{
              color: isHovered ? "#ffffff" : "#f3f4f6",
            }}
            transition={{ duration: 0.3 }}
          >
            {member.name}
          </motion.h3>

          {/* Role - Clean Sans-serif */}
          <motion.p
            className="text-base font-medium tracking-wide"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              color: getRoleColor(member.role),
            }}
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {member.role}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-sm text-gray-300 leading-relaxed line-clamp-3"
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            {member.bio}
          </motion.p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {member.skills.slice(0, 3).map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-2 py-1 text-xs font-medium rounded-full"
                style={{
                  background: `${getRoleColor(member.role)}20`,
                  color: getRoleColor(member.role),
                  border: `1px solid ${getRoleColor(member.role)}40`,
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Social Media Icons - Fade in on hover */}
        <AnimatePresence>
          {isHovered && socialIcons.length > 0 && (
            <motion.div
              className="absolute bottom-6 left-6 right-6 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={`https://${social.name}.com/${social.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${social.color}E6, ${social.color}B3)`,
                    backdropFilter: "blur(10px)",
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    y: -3,
                    boxShadow: `0 10px 25px ${social.color}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      name: "Vedeshwari Nakate",
      role: "Chair",
      image: "pics/image.jpeg",
      bio: "Leading the IEEE Student Branch with a passion for innovation and community building. Specializes in AI research and project management.",
      skills: ["Leadership", "AI/ML", "Project Management", "Research"],
      email: "vedeshwari@ieee.org",
      linkedin: "vedeshwari-nakate",
      github: "vedeshwari-nakate",
      achievements: ["Best Student Leader 2024", "Published 3 Research Papers"],
      joinDate: "2023-01-15",
    },
    {
      name: "Jeevitha A M",
      role: "Vice-Chair",
      image: "pics/jeevitha.jpg",
      bio: "Supporting branch operations and driving technical excellence. Expert in full-stack development and community engagement.",
      skills: ["Full-Stack Development", "Team Management", "Event Planning"],
      email: "jeevitha@ieee.org",
      linkedin: "jeevitha-am",
      achievements: ["Outstanding Vice-Chair Award", "Led 5 Major Workshops"],
      joinDate: "2023-02-01",
    },
    {
      name: "Lakshmi",
      role: "Secretary",
      image: "pics/lakshmi.jpg",
      bio: "Ensuring smooth operations and maintaining excellent communication across all branch activities.",
      skills: ["Documentation", "Communication", "Organization", "Design"],
      email: "lakshmi@ieee.org",
      achievements: ["Excellence in Documentation", "Member Engagement Award"],
      joinDate: "2023-03-10",
    },
    {
      name: "Harini",
      role: "Treasurer",
      image: "pics/harini.jpg",
      bio: "Managing financial operations and ensuring fiscal responsibility across all branch initiatives.",
      skills: ["Financial Management", "Budgeting", "Analytics", "Planning"],
      email: "harini@ieee.org",
      achievements: ["Financial Excellence Award", "Cost Optimization Leader"],
      joinDate: "2023-04-05",
    },
    {
      name: "Ayush Singh",
      role: "Web Master",
      image: "pics/ayush.jpg",
      bio: "Crafting digital experiences and maintaining the technological backbone of our branch operations.",
      skills: ["Web Development", "UI/UX Design", "DevOps", "Innovation"],
      email: "ayush@ieee.org",
      linkedin: "ayush-singh-dev",
      github: "ayushsingh08-ds",
      twitter: "ayush_dev",
      achievements: ["Best Web Developer 2024", "Innovation Award Winner"],
      joinDate: "2023-05-20",
    },
    {
      name: "Priya Sharma",
      role: "Membership Chair",
      image: "pics/priya.jpg",
      bio: "Building and nurturing our community of tech enthusiasts and future innovators.",
      skills: ["Community Building", "Outreach", "Marketing", "Engagement"],
      email: "priya@ieee.org",
      linkedin: "priya-sharma-ieee",
      achievements: ["Member Growth Champion", "Community Builder Award"],
      joinDate: "2023-06-15",
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const cardWidth = 320 + 32; // card width + margin
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    setIsScrolling(true);
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      id="team"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 197, 253, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-heading font-black text-white mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontFamily: '"Merriweather", "Georgia", serif',
              textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Our Creative Team
          </motion.h2>
          <motion.p
            className="text-body text-blue-200 max-w-3xl mx-auto text-lg leading-relaxed"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Passionate innovators and leaders driving the future of technology.
            Meet the dedicated individuals behind our success.
          </motion.p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.6))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onClick={() => scrollTo("left")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.6))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onClick={() => scrollTo("right")}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-8 px-8"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              maskImage:
                "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)",
            }}
          >
            {teamMembers.map((member, index) => (
              <div key={member.name} style={{ scrollSnapAlign: "center" }}>
                <ModernTeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS to components.css for scrollbar styles */}
    </section>
  );
};

export default Team;
