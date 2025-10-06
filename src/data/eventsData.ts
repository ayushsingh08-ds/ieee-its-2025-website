// Event categories for consistent categorization
export const EVENT_CATEGORIES = {
  WORKSHOP: 'Workshop',
  SEMINAR: 'Seminar', 
  CONFERENCE: 'Conference',
  PANEL: 'Panel',
  WEBINAR: 'Webinar',
  COMPETITION: 'Competition',
  LECTURE: 'Lecture'
} as const;

// Event interface for type safety
export interface EventData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string; // Format: "YYYY-MM-DD"
  time: string;
  location: string;
  attendees: number;
  category: keyof typeof EVENT_CATEGORIES;
  // Optional fields for future expansion
  speakers?: string[];
  registrationUrl?: string;
  tags?: string[];
  isFeatured?: boolean;
  isVirtual?: boolean;
}

// ===== EVENTS DATA =====
// TO ADD NEW EVENT: Copy an existing event object, change the id, and update the details
// TO EDIT EVENT: Find the event by title and modify the fields
// TO REMOVE EVENT: Delete the entire event object

export const EVENTS_DATA: EventData[] = [
  {
    id: 1,
    title: "IEEE Information Theory Society Day",
    description: "Join us for a special day celebrating information theory with keynote presentations, research showcases, and networking opportunities. Learn about the latest advances in coding theory, machine learning applications, and quantum information.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "2025-11-15",
    time: "9:00 AM - 6:00 PM",
    location: "IEEE Conference Center, Hall A",
    attendees: 120,
    category: "CONFERENCE",
    speakers: ["Distinguished IEEE Fellows", "Leading Researchers"],
    isFeatured: true,
    tags: ["IEEE", "Information Theory", "Networking"],
  },
  
  {
    id: 2,
    title: "Stay Tuned for More Events!",
    description: "We're planning exciting workshops, seminars, and conferences for the coming months. Keep checking back for updates on new learning opportunities, research presentations, and community events.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "2025-12-31",
    time: "Coming Soon",
    location: "Various Locations",
    attendees: 0,
    category: "CONFERENCE",
    tags: ["Announcements", "Updates", "Future Events"],
  },

  // ===== ADD NEW EVENTS HERE =====
  // Copy the template below and modify:
  /*
  {
    id: 3, // INCREMENT THIS NUMBER
    title: "Your Event Title",
    description: "Detailed description of your event...",
    image: "https://images.unsplash.com/photo-YOUR-IMAGE-ID",
    date: "2025-MM-DD", // Use YYYY-MM-DD format
    time: "HH:MM AM/PM - HH:MM AM/PM",
    location: "Your venue or 'Virtual Event'",
    attendees: 0, // Expected number
    category: "WORKSHOP", // Use one from EVENT_CATEGORIES above
    // Optional fields:
    speakers: ["Speaker 1", "Speaker 2"],
    tags: ["Tag1", "Tag2"],
    isFeatured: false,
    isVirtual: false,
  },
  */
];

// Helper functions for event management
export const getEventsByCategory = (category: keyof typeof EVENT_CATEGORIES) => {
  return EVENTS_DATA.filter(event => event.category === category);
};

export const getFeaturedEvents = () => {
  return EVENTS_DATA.filter(event => event.isFeatured);
};

export const getUpcomingEvents = () => {
  const today = new Date();
  return EVENTS_DATA.filter(event => new Date(event.date) >= today)
                   .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = () => {
  const today = new Date();
  return EVENTS_DATA.filter(event => new Date(event.date) < today)
                   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};