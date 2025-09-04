import React from "react";

const Header: React.FC = () => {
  return (
    <nav
      className="bg-blue-900 text-white px-6 py-4"
      style={{
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: "1rem 1.5rem",
      }}
    >
      <div
        className="container mx-auto flex justify-between items-center"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* IEEE Logo */}
        <div
          className="flex items-center space-x-2"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="text-2xl font-bold"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            <span
              className="bg-white text-blue-900 px-2 py-1"
              style={{
                backgroundColor: "white",
                color: "#1e3a8a",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
              }}
            >
              IEEE
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul
          className="hidden md:flex space-x-8"
          style={{
            display: "flex",
            listStyle: "none",
            margin: "0",
            padding: "0",
            gap: "2rem",
          }}
        >
          <li>
            <a
              href="#home"
              className="hover:text-blue-300 transition-colors"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="hover:text-blue-300 transition-colors"
              style={{ color: "white", textDecoration: "none" }}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="hover:text-blue-300 transition-colors"
              style={{ color: "white", textDecoration: "none" }}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
