import React from "react";
import { ArrowRight, Play } from "lucide-react";
import ModelViewer from "./ModelViewer";
import ErrorBoundary from "./ErrorBoundary";
import "./styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* 3D Model Background */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <ErrorBoundary>
          <ModelViewer className="hero-model-viewer" />
        </ErrorBoundary>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Title */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-line">BIG STATEMENT</span>
              <span className="hero-title-line hero-title-accent">
                GOES HERE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Driving innovation in Intelligent Transportation Systems through
              cutting-edge research, collaborative projects, and advancing the
              future of smart mobility solutions.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="hero-actions">
              <button className="hero-btn hero-btn-primary">
                <span>Learn More</span>
                <ArrowRight className="hero-btn-icon" />
              </button>

              <button className="hero-btn hero-btn-secondary">
                <Play className="hero-btn-icon" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Hero Stats/Features */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Members</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Awards</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">25+</div>
              <div className="hero-stat-label">Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line"></div>
        <div className="hero-scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
