
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents, deleteEvent } from "../services/api";
import "../styles/Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEvents = async () => {
    try {
      setError("");
      const data = await getEvents();
      setEvents(data);
    } catch (err) {
      setError("Events load aagala. Backend server check pannu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Indha event-a delete pannalama?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEvent(id);
      setEvents((previousEvents) =>
        previousEvents.filter((event) => event._id !== id)
      );
    } catch (err) {
      alert("Event delete panna mudiyala.");
    }
  };

  const filteredEvents = events.filter((event) =>
    `${event.title} ${event.category} ${event.venue}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="events-page">
      <h1>College Events</h1>
      <p>Discover workshops, technical events and hackathons.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="button" onClick={() => setSearch("")}>
          Clear
        </button>
      </div>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link to="/admin/events/add">Add Event</Link>
      </div>

      {loading ? (
        <p>Loading events...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredEvents.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Organizer:</strong> {event.organizer}</p>

              <Link to={`/events/${event._id}`}>
                View Details
              </Link>

              <div style={{ marginTop: "12px" }}>
                <button
                  type="button"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete Event
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Events;