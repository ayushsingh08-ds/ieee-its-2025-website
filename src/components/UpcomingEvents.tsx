import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { EVENT_CATEGORIES, getUpcomingEvents } from "../data/eventsData";
import "./styles/UpcomingEvents.css";

const UpcomingEvents: React.FC = () => {
  // Get only upcoming events (you can also use EVENTS_DATA directly to show all)
  const events = getUpcomingEvents();

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
            Featured Programs &
            <span className="title-accent"> Learning Opportunities</span>
          </h2>
          <p className="upcoming-events-description">
            Participate in workshops, mentoring panels, and conferences that
            will deepen your understanding of information theory, coding, and
            communication systems.
          </p>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-card ${
                event.title.includes("Stay Tuned") ? "stay-tuned-card" : ""
              }`}
            >
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <div className="event-category-badge">
                  {event.title.includes("Stay Tuned")
                    ? "Coming Soon"
                    : EVENT_CATEGORIES[event.category]}
                </div>
                {!event.title.includes("Stay Tuned") && (
                  <div className="event-date-badge">
                    <Calendar className="date-icon" />
                    {formatDate(event.date)}
                  </div>
                )}
              </div>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                {!event.title.includes("Stay Tuned") && (
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
                )}

                <div className="event-actions">
                  {event.title.includes("Stay Tuned") ? (
                    <button className="event-btn event-btn-secondary">
                      Get Notified
                      <ArrowRight className="btn-icon" />
                    </button>
                  ) : (
                    <>
                      <button className="event-btn event-btn-primary">
                        Register Now
                        <ArrowRight className="btn-icon" />
                      </button>
                      <button className="event-btn event-btn-secondary">
                        Learn More
                      </button>
                    </>
                  )}
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
