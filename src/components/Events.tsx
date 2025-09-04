import React from "react";

interface Event {
  title: string;
  description: string;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      title: "Workshop on AI",
      description: "Hands on session",
    },
    {
      title: "Hackathon",
      description: "Build sky cyber device",
    },
    {
      title: "Tech Talk",
      description: "Interactive pretend",
    },
  ];

  return (
    <section
      id="events"
      className="bg-white py-20 px-6"
      style={{
        backgroundColor: "white",
        padding: "5rem 1.5rem",
        minHeight: "80vh",
      }}
    >
      <div
        className="container mx-auto"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            textAlign: "center",
            marginBottom: "4rem",
            lineHeight: "1.2",
          }}
        >
          Our Events
        </h2>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg card-shadow p-8 border border-gray-100 hover:border-blue-200 transition-all"
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "2rem",
                border: "1px solid #f3f4f6",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }}
            >
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "1rem",
                }}
              >
                {event.title}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
