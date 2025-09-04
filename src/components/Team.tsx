import React from "react";

interface TeamMember {
  name: string;
  role: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "John Doe", role: "Student Representative" },
    { name: "Jane Smith", role: "Vice President" },
    { name: "Michael Brown", role: "Secretary" },
    { name: "Emily Davis", role: "Treasurer" },
  ];

  return (
    <section
      id="team"
      className="bg-gray-50 py-20 px-6"
      style={{
        backgroundColor: "#f9fafb",
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
          Meet the Team
        </h2>

        <div
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "72rem",
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                textAlign: "center",
                padding: "1.5rem",
                backgroundColor: "white",
                borderRadius: "1rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }}
            >
              {/* Profile Image Placeholder */}
              <div
                className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  width: "8rem",
                  height: "8rem",
                  backgroundColor: "#d1d5db",
                  borderRadius: "50%",
                  margin: "0 auto 1.5rem auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #93c5fd, #3b82f6)",
                }}
              >
                <svg
                  className="w-16 h-16 text-gray-500"
                  fill="white"
                  viewBox="0 0 20 20"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    color: "white",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h3
                className="text-lg font-bold text-gray-800 mb-2"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "0.5rem",
                }}
              >
                {member.name}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  color: "#4b5563",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
