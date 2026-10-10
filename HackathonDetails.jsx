
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEvents } from "../services/api";

function HackathonDetails() {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    getEvents()
      .then((events) => {
        const selected = events.find(
          (event) =>
            event._id === id &&
            event.category?.toLowerCase() === "hackathon"
        );

        setHackathon(selected || null);
      })
      .catch((error) => {
        console.error("Unable to load hackathon:", error);
      });
  }, [id]);

  if (!hackathon) {
    return <p className="loading-container">Loading hackathon details...</p>;
  }

  return (
    <section className="form-section">
      <h2>{hackathon.title}</h2>

      <p><strong>Description:</strong> {hackathon.description}</p>
      <p><strong>Date:</strong> {hackathon.date}</p>
      <p><strong>Venue:</strong> {hackathon.venue}</p>
      <p><strong>Organizer:</strong> {hackathon.organizer}</p>
      <p>
        <strong>Registration Deadline:</strong>{" "}
        {hackathon.registrationDeadline || "Not specified"}
      </p>

      <Link to="/hackathons">Back to Hackathons</Link>
    </section>
  );
}

export default HackathonDetails;