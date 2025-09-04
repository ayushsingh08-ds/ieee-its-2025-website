import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-32 px-6"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
        color: "white",
        padding: "8rem 1.5rem",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container mx-auto text-left max-w-4xl"
        style={{ maxWidth: "56rem", margin: "0 auto" }}
      >
        <h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            lineHeight: "1.1",
          }}
        >
          IEEE Student Branch
        </h1>
        <p
          className="text-xl md:text-2xl mb-12 text-blue-100 font-light"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            marginBottom: "3rem",
            opacity: "0.9",
            fontWeight: "300",
          }}
        >
          Advancing Technology for Humanity
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            fontSize: "1.125rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Explore Events
        </button>
      </div>
    </section>
  );
};

export default Hero;
