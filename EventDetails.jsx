
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEvents } from "../services/api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvents()
      .then((events) => {
        const selectedEvent = events.find(
          (item) => item._id === id
        );
        setEvent(selectedEvent || null);
      })
      .catch((error) => {
        console.error("Unable to load event:", error);
      });
  }, [id]);

  if (!event) {
    return <p className="loading-container">Loading event details...</p>;
  }

  return (
    <section className="form-section">
      <h2>{event.title}</h2>

      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>

      <Link to="/events">Back to Events</Link>
    </section>
  );
}

export default EventDetails;