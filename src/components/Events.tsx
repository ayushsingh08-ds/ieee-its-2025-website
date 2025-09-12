import React from "react";
import { useNavigate } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  description: string;
}

const Events: React.FC = () => {
  const navigate = useNavigate();

  const events: Event[] = [
    {
      id: "ai",
      title: "Workshop on AI",
      description: "Hands-on session on AI",
    },
    {
      id: "hackathon",
      title: "Hackathon",
      description: "Build innovative projects",
    },
    {
      id: "techtalk",
      title: "Tech Talk",
      description: "Interactive tech discussions",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Our Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/events/${event.id}`)}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
