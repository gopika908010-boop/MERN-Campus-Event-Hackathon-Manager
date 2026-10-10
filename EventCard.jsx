function EventCard({ event, onDelete }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>

      <p>
        <strong>Category:</strong> {event.category}
      </p>

      <p>
        <strong>Venue:</strong> {event.venue}
      </p>

      <p>
        <strong>Organizer:</strong> {event.organizer}
      </p>

      <button onClick={() => onDelete(event._id)}>
        Delete Event
      </button>
    </div>
  );
}

export default EventCard;