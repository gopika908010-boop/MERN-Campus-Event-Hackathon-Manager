
import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/api";
import { Link } from "react-router-dom";

function ManageEvents() {
  const [events, setEvents] = useState([]);

  function loadEvents() {
    getEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error("Unable to load events:", error));
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEvent(id);
      loadEvents();
    } catch (error) {
      console.error("Unable to delete event:", error);
    }
  }

  return (
    <section className="events-section">
      <h2>Manage Events</h2>

      <Link to="/admin/add-event">Add New Event</Link>

      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.venue}</p>

              <button onClick={() => handleDelete(event._id)}>
                Delete Event
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ManageEvents;