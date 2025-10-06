import React from "react";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import "./styles/Introduction.css";

const Introduction: React.FC = () => {
  const features = [
    {
      icon: <Users />,
      title: "Shannon Theory & Fundamental Limits",
      description:
        "Explore the mathematical foundations of information and communication theory",
    },
    {
      icon: <Target />,
      title: "Coding & Source Compression",
      description:
        "Study error-correcting codes, data compression, and efficient encoding methods",
    },
    {
      icon: <Lightbulb />,
      title: "Machine Learning Applications",
      description:
        "Apply information theory principles to ML, biology, and data science",
    },
  ];

  const achievements = [
    "Access to IEEE Transactions on Information Theory",
    "Participation in workshops, tutorials, and conferences",
    "Networking with researchers, faculty, and professionals",
    "Travel grants, awards, and student competitions",
    "Digital archives, resources, and lecture materials",
  ];

  return (
    <section className="introduction">
      <div className="introduction-container">
        <div className="introduction-content">
          {/* Left Column: Text Content */}
          <div className="introduction-text">
            <div className="introduction-header">
              <span className="introduction-badge">About IEEE ITSoc</span>
              <h2 className="introduction-title">
                Advancing the Mathematical
                <span className="introduction-title-accent">
                  {" "}
                  Foundations of Information
                </span>
              </h2>
              <p className="introduction-description">
                Our mission is to foster interest and education in information
                theory among students, provide networking opportunities, and
                facilitate learning through events, tutorials, and publications.
                The IEEE Information Theory Society is dedicated to advancing
                the mathematical foundations of information technology,
                including the processing, transmission, storage, and use of
                information.
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
                Membership Benefits
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
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Information Theory and Data Science"
                className="introduction-image"
              />
              <div className="introduction-image-overlay">
                <div className="introduction-stats-card">
                  <div className="introduction-stat">
                    <div className="introduction-stat-number">70+</div>
                    <div className="introduction-stat-label">Years Active</div>
                  </div>
                  <div className="introduction-stat">
                    <div className="introduction-stat-number">100+</div>
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
