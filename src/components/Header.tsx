import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <span className="logo-text">IEEE ITSoc</span>
          <span className="logo-subtitle">Student Chapter</span>
        </div>

        {/* Navigation Links */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <a href="#events" className="nav-link">
                Events
              </a>
            </li>
            <li>
              <a href="#resources" className="nav-link">
                Resources
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Sign In Button */}
        <div className="header-actions">
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
