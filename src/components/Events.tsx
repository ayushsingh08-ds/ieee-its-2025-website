import React, { useState, useEffect } from "react";
import "./components.css";
import AestheticEventCard from "./AestheticEventCard";

interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
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

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "workshops" | "hackathons" | "talks"
  >("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const events: Event[] = [
    {
      id: "ai-workshop",
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on session exploring the fundamentals of AI and machine learning with practical projects.",
      fullDescription:
        "Join us for an intensive workshop covering artificial intelligence and machine learning fundamentals. You'll work with real datasets, build predictive models, and learn industry best practices. Perfect for beginners and intermediate developers looking to expand their AI knowledge.",
      category: "workshops",
      date: "2025-10-15",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Hub - Room 401",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 45,
      maxAttendees: 60,
      tags: ["AI", "Python", "TensorFlow", "Data Science"],
      speaker: "Dr. Sarah Chen - AI Research Lead",
    },
    {
      id: "web-dev-workshop",
      title: "Full-Stack Web Development",
      description:
        "Complete guide to modern web development using React, Node.js, and MongoDB.",
      fullDescription:
        "A comprehensive workshop covering both frontend and backend development. Learn React for dynamic UIs, Node.js for server-side logic, and MongoDB for data storage. Includes hands-on projects and deployment strategies.",
      category: "workshops",
      date: "2025-10-22",
      time: "10:00 AM - 5:00 PM",
      location: "Innovation Center - Lab 2",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 32,
      maxAttendees: 40,
      tags: ["React", "Node.js", "MongoDB", "JavaScript"],
      speaker: "Mark Rodriguez - Senior Developer",
    },
    {
      id: "cybersecurity-talk",
      title: "Cybersecurity in the Modern World",
      description:
        "Expert insights on current cybersecurity threats and defense strategies.",
      fullDescription:
        "Join cybersecurity experts as they discuss the latest threats facing organizations today. Learn about advanced persistent threats, zero-day vulnerabilities, and cutting-edge defense mechanisms. Essential for anyone involved in IT security.",
      category: "talks",
      date: "2025-10-28",
      time: "3:00 PM - 4:30 PM",
      location: "Main Auditorium",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 120,
      maxAttendees: 200,
      tags: ["Security", "Networking", "Risk Management"],
      speaker: "Jennifer Park - Security Consultant",
    },
    {
      id: "blockchain-hackathon",
      title: "Blockchain Innovation Hackathon",
      description:
        "48-hour hackathon focused on building innovative blockchain solutions.",
      fullDescription:
        "Join developers worldwide for an intensive 48-hour hackathon focused on blockchain technology. Build decentralized applications, smart contracts, and innovative solutions using cutting-edge blockchain platforms. Prizes and mentorship available.",
      category: "hackathons",
      date: "2025-11-05",
      time: "9:00 AM - Nov 7, 9:00 AM",
      location: "Startup Incubator",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 85,
      maxAttendees: 100,
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
      prize: "$10,000 Total Prize Pool",
    },
    {
      id: "cloud-computing-workshop",
      title: "Cloud Computing Fundamentals",
      description:
        "Introduction to cloud platforms, services, and deployment strategies.",
      fullDescription:
        "Explore the fundamentals of cloud computing with hands-on experience using AWS, Azure, and Google Cloud Platform. Learn about scalability, cost optimization, and best practices for cloud deployment.",
      category: "workshops",
      date: "2025-11-12",
      time: "1:00 PM - 6:00 PM",
      location: "Cloud Lab - Building C",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 28,
      maxAttendees: 35,
      tags: ["AWS", "Azure", "GCP", "DevOps"],
      speaker: "Alex Thompson - Cloud Architect",
    },
    {
      id: "mobile-dev-hackathon",
      title: "Mobile App Development Sprint",
      description: "24-hour sprint to create innovative mobile applications.",
      fullDescription:
        "Fast-paced 24-hour hackathon focused on mobile app development. Create innovative iOS and Android applications using React Native, Flutter, or native development. Mentorship and resources provided throughout the event.",
      category: "hackathons",
      date: "2025-11-18",
      time: "10:00 AM - Nov 19, 10:00 AM",
      location: "Mobile Dev Lab",
      status: "upcoming",
      image: "/api/placeholder/400/250",
      attendees: 60,
      maxAttendees: 80,
      tags: ["React Native", "Flutter", "iOS", "Android"],
      prize: "$5,000 Prize Pool",
    },
  ];

  // Filter categories
  const filterCategories = [
    { id: "all", label: "All Events", icon: "🎯" },
    { id: "workshops", label: "Workshops", icon: "🛠️" },
    { id: "hackathons", label: "Hackathons", icon: "💻" },
    { id: "talks", label: "Talks", icon: "🎤" },
  ];

  // Filter events based on active filter
  useEffect(() => {
    const filtered =
      activeFilter === "all"
        ? events
        : events.filter((event) => event.category === activeFilter);
    setFilteredEvents(filtered);
  }, [activeFilter]);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Observe all event cards
    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredEvents]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workshops":
        return "from-blue-500 to-indigo-600";
      case "hackathons":
        return "from-purple-500 to-pink-600";
      case "talks":
        return "from-emerald-500 to-teal-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <>
      <section
        id="events"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundColor: "#0a0a0f",
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
            <h2
              className="text-heading font-black text-white mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                fontFamily: "var(--font-heading)",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              Upcoming Events
            </h2>
            <p
              className="text-body text-blue-200 max-w-3xl mx-auto text-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Join our vibrant community of innovators, learners, and
              changemakers. From hands-on workshops to competitive hackathons,
              discover events that will expand your skills and network.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setActiveFilter(
                    category.id as "all" | "workshops" | "hackathons" | "talks"
                  )
                }
                className={`px-6 py-3 rounded-full font-semibold transition-all-smooth border backdrop-blur-md ${
                  activeFilter === category.id
                    ? "bg-white text-blue-900 border-white shadow-xl"
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                }`}
                style={{
                  backdropFilter: "blur(20px)",
                }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <AestheticEventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

// Event Modal Component
interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workshops":
        return "from-blue-500 to-indigo-600";
      case "hackathons":
        return "from-purple-500 to-pink-600";
      case "talks":
        return "from-emerald-500 to-teal-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`bg-gradient-to-r ${getCategoryColor(
            event.category
          )} p-6 text-white rounded-t-2xl`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                {event.category.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-2">{event.title}</h3>
              <p className="text-white/90">{event.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Event Details
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">📅</span>
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">🕒</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
                {event.speaker && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">👤</span>
                    <span>{event.speaker}</span>
                  </div>
                )}
                {event.prize && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">🏆</span>
                    <span>{event.prize}</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Attendance</h4>
              <div className="text-sm text-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span>Registered:</span>
                  <span className="font-medium">
                    {event.attendees}/{event.maxAttendees}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${getCategoryColor(
                      event.category
                    )} h-2 rounded-full`}
                    style={{
                      width: `${(event.attendees / event.maxAttendees) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              About This Event
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className={`flex-1 bg-gradient-to-r ${getCategoryColor(
                event.category
              )} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all-smooth`}
            >
              Register Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
