import "./styles/WhatWeDo.css";

const WhatWeDo = () => {
  const activities = [
    {
      id: 1,
      title: "Interactive Workshops",
      description:
        "Immersive sessions on cutting-edge technologies — learn by building, not just listening.",
      icon: "�",
    },
    {
      id: 2,
      title: "Research & Reading Circles",
      description:
        "Decode research papers and exchange insights in collaborative study groups",
      icon: "�",
    },
    {
      id: 3,
      title: "Innovation Projects",
      description:
        "Turn ideas into impact through real-world engineering challenges",
      icon: "🚀",
    },
  ];

  return (
    <section className="what-we-do" id="activities">
      <div className="what-we-do-container">
        <div className="content-grid">
          <div className="text-content">
            <div className="section-header">
              <h2 className="section-title">What We Do</h2>
              <p className="section-subtitle">
                We create an ecosystem where knowledge meets innovation. From
                hands-on workshops to collaborative research and real-world
                projects, the IEEE ITSoc Student Chapter turns learning into
                impact.
              </p>
            </div>

            <div className="activities-grid">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-icon">
                    <span className="icon-emoji">{activity.icon}</span>
                  </div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>

            <div className="cta-section">
              <button className="explore-btn">Explore All Activities</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
