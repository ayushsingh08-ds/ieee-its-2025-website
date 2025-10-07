import { useState, useEffect } from 'react';
import './styles/Hero.css';

const Hero = () => {
  const [activeTooltip, setActiveTooltip] = useState(0);

  const tooltips = [
    "Sarah Chen just joined the chapter",
    "Live Workshop starting in 15 minutes",
    "New project collaboration available",
    "Weekly reading group tomorrow"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTooltip((prev) => (prev + 1) % tooltips.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tooltips.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Connect. Collaborate. Code.
            </h1>
            
            <p className="hero-description">
              Join a vibrant community of innovators at the IEEE ITSoc Student Chapter. 
              We turn theory into practice through collaborative workshops, reading groups, 
              and hands-on projects.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Join the Community</button>
              <button className="btn-secondary">Watch Lectures</button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="illustration-container">
              <div className="coding-environment">
                <div className="code-header">
                  <div className="code-buttons">
                    <span className="code-btn red"></span>
                    <span className="code-btn yellow"></span>
                    <span className="code-btn green"></span>
                  </div>
                  <span className="code-title">Collaborative Coding Environment</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-text">function <span className="keyword">buildCommunity</span>() {"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-text">  const students = <span className="string">'passionate learners'</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text">  const knowledge = <span className="string">'shared experiences'</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text">  return students + knowledge;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating Tooltips */}
              {tooltips.map((tooltip, index) => (
                <div 
                  key={index}
                  className={`floating-tooltip tooltip-${index + 1} ${
                    activeTooltip === index ? 'active' : ''
                  }`}
                >
                  <div className="tooltip-content">
                    <div className="tooltip-avatar"></div>
                    <span className="tooltip-text">{tooltip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;