import React from "react";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import "./styles/Introduction.css";

const Introduction: React.FC = () => {
  const features = [
    {
      icon: <Users />,
      title: "Collaborative Community",
      description:
        "Join a vibrant network of students passionate about intelligent transportation",
    },
    {
      icon: <Target />,
      title: "Research Excellence",
      description:
        "Engage in cutting-edge research projects and academic publications",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation Hub",
      description:
        "Develop innovative solutions for real-world transportation challenges",
    },
  ];

  const achievements = [
    "Leading research in autonomous vehicle systems",
    "Published 50+ research papers in top-tier journals",
    "Collaborated with industry leaders like Tesla, Google, and Uber",
    "Won multiple international competition awards",
  ];

  return (
    <section className="introduction">
      <div className="introduction-container">
        <div className="introduction-content">
          {/* Left Column: Text Content */}
          <div className="introduction-text">
            <div className="introduction-header">
              <span className="introduction-badge">About IEEE ITS</span>
              <h2 className="introduction-title">
                Shaping the Future of
                <span className="introduction-title-accent">
                  {" "}
                  Smart Transportation
                </span>
              </h2>
              <p className="introduction-description">
                Our IEEE Intelligent Transportation Systems Student Chapter is
                dedicated to advancing the field of smart mobility through
                innovative research, collaborative projects, and cutting-edge
                technology development.
              </p>
            </div>

            {/* Features Grid */}
            <div className="introduction-features">
              {features.map((feature, index) => (
                <div key={index} className="introduction-feature">
                  <div className="introduction-feature-icon">
                    {feature.icon}
                  </div>
                  <div className="introduction-feature-content">
                    <h3 className="introduction-feature-title">
                      {feature.title}
                    </h3>
                    <p className="introduction-feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements List */}
            <div className="introduction-achievements">
              <h3 className="introduction-achievements-title">
                Key Achievements
              </h3>
              <ul className="introduction-achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index} className="introduction-achievement-item">
                    <CheckCircle className="introduction-achievement-icon" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Supporting Image */}
          <div className="introduction-visual">
            <div className="introduction-image-container">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Smart Transportation Technology"
                className="introduction-image"
              />
              <div className="introduction-image-overlay">
                <div className="introduction-stats-card">
                  <div className="introduction-stat">
                    <div className="introduction-stat-number">15+</div>
                    <div className="introduction-stat-label">Years Active</div>
                  </div>
                  <div className="introduction-stat">
                    <div className="introduction-stat-number">500+</div>
                    <div className="introduction-stat-label">Members</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="introduction-floating-elements">
              <div className="floating-element floating-element-1">
                <div className="floating-icon">
                  <Users />
                </div>
              </div>
              <div className="floating-element floating-element-2">
                <div className="floating-icon">
                  <Target />
                </div>
              </div>
              <div className="floating-element floating-element-3">
                <div className="floating-icon">
                  <Lightbulb />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
