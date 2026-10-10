
import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

function MyRegistrations() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error loading events:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="events-section">
      <h2>My Registrations</h2>

      {loading ? (
        <p>Loading...</p>
      ) : events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Category:</strong> {event.category}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyRegistrations;