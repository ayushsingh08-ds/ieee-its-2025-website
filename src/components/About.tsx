import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 px-6"
      style={{
        backgroundColor: "#f9fafb",
        padding: "5rem 1.5rem",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container mx-auto text-center max-w-4xl"
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          className="text-4xl font-bold text-gray-800 mb-8"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "2rem",
            lineHeight: "1.2",
          }}
        >
          About Us
        </h2>
        <p
          className="text-lg text-gray-600 leading-relaxed"
          style={{
            fontSize: "1.125rem",
            color: "#4b5563",
            lineHeight: "1.75",
            maxWidth: "42rem",
            margin: "0 auto",
          }}
        >
          We are the IEEE Student Branch of (Your College). Our mission is to
          promote innovation, technical skills and professional growth among
          students through workshops, hackathons, and research-driven
          activities.
        </p>
      </div>
    </section>
  );
};

export default About;
