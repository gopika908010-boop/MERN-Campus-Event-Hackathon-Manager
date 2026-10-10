
import { useEffect, useState } from "react";

function ManageTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/teams")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load teams");
        }
        return response.json();
      })
      .then((data) => setTeams(data))
      .catch((error) => console.error("Unable to load teams:", error));
  }, []);

  return (
    <section className="events-section">
      <h2>Manage Hackathon Teams</h2>

      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <div className="events-grid">
          {teams.map((team) => (
            <div className="event-card" key={team._id}>
              <h3>{team.teamName}</h3>
              <p><strong>Hackathon:</strong> {team.hackathonName || "Not specified"}</p>
              <p><strong>Members:</strong> {team.members?.length || 0}</p>
              <p><strong>Status:</strong> {team.status || "Active"}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ManageTeams;