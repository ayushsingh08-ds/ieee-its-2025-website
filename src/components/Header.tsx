import React, { useState } from "react";
import { Search, Menu, X, User, ChevronDown } from "lucide-react";
import "./styles/Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Events", href: "#events" },
    { name: "Research", href: "#research" },
    { name: "Resources", href: "#resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Branding */}
        <div className="header-logo">
          <div className="logo-icon">
            <span className="logo-text">IEEE</span>
          </div>
          <div className="logo-details">
            <h1 className="logo-title">IEEE ITSoc</h1>
            <p className="logo-subtitle">Student Chapter</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <ul className="nav-list">
            {navigationLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar and Profile */}
        <div className="header-actions">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-container">
            <button
              className="profile-button"
              onClick={toggleProfile}
              aria-expanded={isProfileOpen}
            >
              <User className="profile-icon" />
              <ChevronDown className="profile-arrow" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="profile-menu">
                  <a href="#profile" className="profile-menu-item">
                    View Profile
                  </a>
                  <a href="#settings" className="profile-menu-item">
                    Settings
                  </a>
                  <a href="#logout" className="profile-menu-item">
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navigationLinks.map((link) => (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
