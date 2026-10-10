
function HackathonCard({ hackathon }) {
  return (
    <div className="event-card">
      <h3>{hackathon.title}</h3>

      <p>{hackathon.description}</p>

      <p>
        <strong>Date:</strong> {hackathon.date}
      </p>

      <p>
        <strong>Venue:</strong> {hackathon.venue}
      </p>

      <p>
        <strong>Team Size:</strong> {hackathon.teamSize || "Not specified"}
      </p>

      <p>
        <strong>Prize:</strong> {hackathon.prize || "Not specified"}
      </p>

      <button type="button">View Details</button>
    </div>
  );
}

export default HackathonCard;