import React from 'react';
import './styles/JoinCommunity.css';

const JoinCommunity = () => {
  const features = [
    {
      id: 1,
      title: "Connect",
      description: "Network with like-minded students, industry professionals, and researchers.",
      icon: "🤝"
    },
    {
      id: 2,
      title: "Collaborate",
      description: "Work together on projects, hackathons, and open-source initiatives.",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Code",
      description: "Enhance your skills through workshops, coding challenges, and mentorship.",
      icon: "💻"
    }
  ];

  return (
    <section className="join-community" id="community">
      <div className="join-community-container">
        <div className="section-header">
          <h2 className="section-title">Why Join Our Community?</h2>
          <p className="section-subtitle">
            Discover the opportunities that await you in our collaborative learning environment.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <span className="icon-emoji">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;