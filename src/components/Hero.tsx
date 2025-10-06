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
              <span className="hero-title-line">
                IEEE Information Theory Society
              </span>
              <span className="hero-title-line hero-title-accent">
                Student Chapter
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Empowering the next generation of information theorists. The IEEE
              Information Theory Society (ITSoc) is the global hub for research
              and innovation in coding, communication, and information theory.
              As a Student Chapter, we aim to bring theory closer to students
              through workshops, reading groups, and hands-on projects.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="hero-actions">
              <button className="hero-btn hero-btn-primary">
                <span>Join Us</span>
                <ArrowRight className="hero-btn-icon" />
              </button>

              <button className="hero-btn hero-btn-secondary">
                <Play className="hero-btn-icon" />
                <span>Watch Lectures</span>
              </button>
            </div>
          </div>

          {/* Hero Stats/Features */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">1951</div>
              <div className="hero-stat-label">Founded</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-label">Members</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">25+</div>
              <div className="hero-stat-label">Workshops</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Awards</div>
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
