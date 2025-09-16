import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AwwwardsLoaderProps {
  onComplete: () => void;
}

const AwwwardsLoader: React.FC<AwwwardsLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Initializing Experience",
    "Loading Interactions",
    "Preparing Visuals",
    "Almost Ready",
    "Welcome",
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        const phase = Math.floor(newProgress / 20);
        setCurrentPhase(Math.min(phase, phases.length - 1));

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, phases.length]);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 1,
        ease: "easeInOut" as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: `
              linear-gradient(-45deg, #0f0f23, #1a1a3a, #2d2d5f, #1e3a8a, #2563eb, #3b82f6),
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "400% 400%, 100% 100%, 100% 100%",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Animated Background Shapes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-screen"
                style={{
                  background: `linear-gradient(${45 + i * 18}deg, 
                    rgba(59, 130, 246, 0.1) 0%, 
                    rgba(147, 51, 234, 0.1) 50%, 
                    rgba(236, 72, 153, 0.1) 100%)`,
                  width: `${20 + i * 10}px`,
                  height: `${20 + i * 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-lg mx-auto px-8">
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
              initial="hidden"
              animate={progress < 100 ? "visible" : "pulse"}
            >
              <div
                className="inline-block text-8xl font-black mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
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
                  filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
                }}
              >
                IEEE
              </div>
              <div className="text-white/80 text-xl font-medium">
                Student Branch
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <motion.div
                  className="text-white/60 text-sm font-medium"
                  key={currentPhase}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {phases[currentPhase]}
                </motion.div>
                <div className="text-white/60 text-sm font-mono">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>

            {/* Loading Animation */}
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Completion Message */}
            <AnimatePresence>
              {progress >= 100 && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-white">
                    Welcome to the Future
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Particle System */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -100],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AwwwardsLoader;
