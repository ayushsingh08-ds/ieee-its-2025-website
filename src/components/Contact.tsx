import React from "react";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-blue-900 text-white py-16 px-6"
      style={{
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: "4rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div
        className="container mx-auto"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          className="text-center mb-8"
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            className="text-3xl font-bold mb-8"
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              lineHeight: "1.2",
            }}
          >
            Contact Us
          </h2>

          {/* 🔹 Social Media Icons */}
          <div
            className="flex justify-center space-x-6 mb-8"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4A5.25 5.25 0 1 1 6.75 12a5.25 5.25 0 0 1 5.25-4.5zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 9zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 5.75z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.4H3.6V9h3.5v11.4zM5.3 7.6c-1.1 0-2-.9-2-2s.9-2 2-2c1.1 0 2 .9 2 2s-.9 2-2 2zM20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9v5.7h-3.5V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.5 4.4 5.7v6z" />
              </svg>
            </a>

            {/* Gmail */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=yourname@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-300 transition-colors"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12.713 0 5.25V19.5A1.5 1.5 0 0 0 1.5 21h21a1.5 1.5 0 0 0 1.5-1.5V5.25l-12 7.463zm11.25-9.963A1.5 1.5 0 0 0 21.75 3h-19.5a1.5 1.5 0 0 0-1.5 1.75l11.25 7 11.25-7z" />
  </svg>
</a>

          </div>
        </div>

        {/* Footer Text */}
        <div
          className="text-center text-blue-200"
          style={{
            textAlign: "center",
            color: "#93c5fd",
            fontSize: "0.875rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "1.5rem",
          }}
        >
          
        </div>
      </div>
    </footer>
  );
};

export default Contact;
