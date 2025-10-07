import React from 'react';
import './styles/WhatWeDo.css';

const WhatWeDo = () => {
  const activities = [
    {
      id: 1,
      title: "Interactive Workshops",
      description: "Hands-on learning with the latest technologies.",
      icon: "🛠️"
    },
    {
      id: 2,
      title: "Reading Groups",
      description: "Collaborative study sessions exploring research papers.",
      icon: "📚"
    },
    {
      id: 3,
      title: "Hands-on Projects",
      description: "Real-world projects bridging theory and practice.",
      icon: "🚀"
    }
  ];

  return (
    <section className="what-we-do" id="activities">
      <div className="what-we-do-container">
        <div className="content-grid">
          <div className="text-content">
            <div className="section-header">
              <h2 className="section-title">What We Do</h2>
              <p className="section-subtitle">
                From workshops to reading groups, we offer diverse opportunities 
                for learning and growth.
              </p>
            </div>

            <div className="activities-list">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <span className="icon-emoji">{activity.icon}</span>
                  </div>
                  <div className="activity-content">
                    <h3 className="activity-title">{activity.title}</h3>
                    <p className="activity-description">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <button className="explore-btn">Explore All Activities</button>
            </div>
          </div>

          <div className="illustration-content">
            <div className="collaboration-scene">
              <div className="scene-header">
                <h4 className="scene-title">Community Collaboration</h4>
                <div className="online-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">12 members online</span>
                </div>
              </div>
              
              <div className="collaboration-grid">
                <div className="member-card active">
                  <div className="member-avatar avatar-1"></div>
                  <div className="member-info">
                    <span className="member-name">Alex Chen</span>
                    <span className="member-status">Working on AI project</span>
                  </div>
                </div>
                
                <div className="member-card">
                  <div className="member-avatar avatar-2"></div>
                  <div className="member-info">
                    <span className="member-name">Sarah Kim</span>
                    <span className="member-status">Reading ML paper</span>
                  </div>
                </div>
                
                <div className="member-card">
                  <div className="member-avatar avatar-3"></div>
                  <div className="member-info">
                    <span className="member-name">Mike Johnson</span>
                    <span className="member-status">In workshop</span>
                  </div>
                </div>
                
                <div className="member-card active">
                  <div className="member-avatar avatar-4"></div>
                  <div className="member-info">
                    <span className="member-name">Emma Davis</span>
                    <span className="member-status">Code review</span>
                  </div>
                </div>
              </div>
              
              <div className="activity-feed">
                <div className="feed-item">
                  <span className="feed-icon">💡</span>
                  <span className="feed-text">New idea shared in #general</span>
                </div>
                <div className="feed-item">
                  <span className="feed-icon">🔥</span>
                  <span className="feed-text">Workshop starts in 30 mins</span>
                </div>
                <div className="feed-item">
                  <span className="feed-icon">✅</span>
                  <span className="feed-text">Project milestone completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;