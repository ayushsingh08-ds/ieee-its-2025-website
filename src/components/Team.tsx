import React, { useState } from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Vedeshwari Nakate", role: "Chair", image: "pics/image.jpeg" },
    { name: "Jeevitha A M", role: "Vice-Chair", image: "pics/jeevitha.jpg" },
    { name: "Lakshmi", role: "Secretary", image: "pics/lakshmi.jpg" },
    { name: "Sai Krishna", role: "Treasurer", image: "pics/sai.jpg" },
    { name: "Ayush Singh", role: "Web Master", image: "pics/ayush.jpg" },
    { name: "Mansi Sharma", role: "Web Master", image: "pics/mansi.jpg" },
    { name: "Anuja Shinde", role: "Web Master", image: "pics/anuja.jpg" },
    { name: "Sadgi Jaiswal", role: "Membership Chair", image: "pics/sadgi.jpg" },
    { name: "Soumya Smriti", role: "Sponsorship Chair", image: "pics/soumya.jpg" },
    { name: "Prabhu Shiva", role: "Event Coordinator", image: "pics/prabhu.jpg" },
    { name: "Hemanth Hariteja", role: "Event Coordinator", image: "pics/hemanth.jpg" },
    { name: "Kanchi Joshitha", role: "Event Coordinator", image: "pics/kanchi.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  // 🎯 3D Tilt Effect
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    card: HTMLDivElement | null
  ) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (card: HTMLDivElement | null) => {
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="team" className="bg-[#f2f5f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Meet the Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 perspective-1000">
          {visibleMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // staggered fade
              className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 flex flex-col"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out",
              }}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
                handleMouseMove(e, e.currentTarget as HTMLDivElement)
              }
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
                resetTilt(e.currentTarget as HTMLDivElement)
              }
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <span className="bg-blue-900 text-white text-base font-semibold px-4 py-1.5 rounded-full shadow-md">
                  {member.name}
                </span>
                <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full shadow-md">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-full shadow-md hover:bg-blue-800 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
