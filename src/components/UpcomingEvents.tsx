import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import "./styles/UpcomingEvents.css";

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Autonomous Vehicle Workshop",
      description:
        "Join us for an intensive workshop on autonomous vehicle technologies, featuring hands-on experience with simulation tools and real-world case studies.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "2025-11-15",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Room 301",
      attendees: 45,
      category: "Workshop",
    },
    {
      id: 2,
      title: "Smart City Infrastructure Seminar",
      description:
        "Explore the latest developments in smart city infrastructure and how IoT technologies are reshaping urban transportation systems.",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "2025-11-22",
      time: "10:00 AM - 12:00 PM",
      location: "Virtual Event",
      attendees: 120,
      category: "Seminar",
    },
    {
      id: 3,
      title: "IEEE ITS Competition 2025",
      description:
        "Annual student competition focusing on innovative solutions for intelligent transportation challenges. Cash prizes and internship opportunities available.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "2025-12-08",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      attendees: 200,
      category: "Competition",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="upcoming-events">
      <div className="upcoming-events-container">
        {/* Section Header */}
        <div className="upcoming-events-header">
          <div className="upcoming-events-badge">
            <Calendar className="badge-icon" />
            Upcoming Events
          </div>
          <h2 className="upcoming-events-title">
            Don't Miss Out on Our
            <span className="title-accent"> Latest Events</span>
          </h2>
          <p className="upcoming-events-description">
            Join us for exciting workshops, seminars, and competitions that will
            enhance your knowledge and skills in intelligent transportation
            systems.
          </p>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <div className="event-category-badge">{event.category}</div>
                <div className="event-date-badge">
                  <Calendar className="date-icon" />
                  {formatDate(event.date)}
                </div>
              </div>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <Clock className="detail-icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <MapPin className="detail-icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <Users className="detail-icon" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <div className="event-actions">
                  <button className="event-btn event-btn-primary">
                    Register Now
                    <ArrowRight className="btn-icon" />
                  </button>
                  <button className="event-btn event-btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="upcoming-events-footer">
          <button className="view-all-btn">
            <span>View All Events</span>
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
