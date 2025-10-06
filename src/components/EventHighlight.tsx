import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight, Star } from "lucide-react";
import "./styles/EventHighlight.css";

const EventHighlight: React.FC = () => {
  const featuredEvent = {
    title: "IEEE ITS Global Conference 2025",
    description:
      "The premier international conference bringing together researchers, industry experts, and students to discuss the latest advancements in intelligent transportation systems.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2025-12-15",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, Hall A",
    attendees: 500,
    speakers: [
      { name: "Dr. Sarah Johnson", title: "AI Research Director, Tesla" },
      { name: "Prof. Michael Chen", title: "MIT Transportation Lab" },
      { name: "Alex Rodriguez", title: "Senior Engineer, Waymo" },
    ],
    highlights: [
      "Keynote presentations from industry leaders",
      "Live demonstrations of autonomous vehicles",
      "Networking sessions with top researchers",
      "Student competition with cash prizes",
    ],
  };

  const upcomingEventsList = [
    {
      id: 1,
      title: "Machine Learning in Transportation",
      date: "2025-11-08",
      time: "2:00 PM",
      type: "Workshop",
      attendees: 35,
    },
    {
      id: 2,
      title: "Smart Traffic Management Systems",
      date: "2025-11-12",
      time: "10:00 AM",
      type: "Seminar",
      attendees: 80,
    },
    {
      id: 3,
      title: "Connected Vehicle Technologies",
      date: "2025-11-18",
      time: "3:30 PM",
      type: "Webinar",
      attendees: 150,
    },
    {
      id: 4,
      title: "Sustainable Transportation Solutions",
      date: "2025-11-25",
      time: "11:00 AM",
      type: "Panel",
      attendees: 65,
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="event-highlight">
      <div className="event-highlight-container">
        <div className="event-highlight-content">
          {/* Featured Event (Left Side) */}
          <div className="featured-event">
            <div className="featured-event-image-container">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="featured-event-image"
              />
              <div className="featured-event-overlay">
                <div className="featured-badge">
                  <Star className="badge-icon" />
                  Featured Event
                </div>
              </div>
            </div>

            <div className="featured-event-details">
              <h2 className="featured-event-title">{featuredEvent.title}</h2>
              <p className="featured-event-description">
                {featuredEvent.description}
              </p>

              <div className="featured-event-meta">
                <div className="event-meta-item">
                  <Calendar className="meta-icon" />
                  <span>{formatDate(featuredEvent.date)}</span>
                </div>
                <div className="event-meta-item">
                  <Clock className="meta-icon" />
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="event-meta-item">
                  <MapPin className="meta-icon" />
                  <span>{featuredEvent.location}</span>
                </div>
                <div className="event-meta-item">
                  <Users className="meta-icon" />
                  <span>{featuredEvent.attendees}+ attendees</span>
                </div>
              </div>

              <div className="featured-event-highlights">
                <h3 className="highlights-title">Event Highlights</h3>
                <ul className="highlights-list">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <Star className="highlight-icon" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="featured-event-speakers">
                <h3 className="speakers-title">Featured Speakers</h3>
                <div className="speakers-grid">
                  {featuredEvent.speakers.map((speaker, index) => (
                    <div key={index} className="speaker-card">
                      <div className="speaker-name">{speaker.name}</div>
                      <div className="speaker-title">{speaker.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="featured-event-btn">
                Register Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>

          {/* Upcoming Events List (Right Side) */}
          <div className="upcoming-events-sidebar">
            <div className="sidebar-header">
              <h3 className="sidebar-title">Upcoming Events List</h3>
              <div className="sidebar-subtitle">
                Don't miss these upcoming sessions
              </div>
            </div>

            <div className="events-list">
              {upcomingEventsList.map((event) => (
                <div key={event.id} className="event-list-item">
                  <div className="event-date-circle">
                    <div className="event-date">{formatDate(event.date)}</div>
                  </div>
                  <div className="event-info">
                    <div className="event-type-badge">{event.type}</div>
                    <h4 className="event-list-title">{event.title}</h4>
                    <div className="event-list-meta">
                      <span className="event-time">
                        <Clock className="time-icon" />
                        {event.time}
                      </span>
                      <span className="event-attendees">
                        <Users className="attendees-icon" />
                        {event.attendees}
                      </span>
                    </div>
                  </div>
                  <button className="event-list-btn">
                    <ArrowRight className="list-btn-icon" />
                  </button>
                </div>
              ))}
            </div>

            <div className="sidebar-footer">
              <button className="view-calendar-btn">
                <Calendar className="calendar-icon" />
                View Full Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
