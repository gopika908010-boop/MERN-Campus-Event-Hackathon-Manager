
import { useEffect, useState } from "react";

function ManageRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/registrations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load registrations");
        }
        return response.json();
      })
      .then((data) => setRegistrations(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="events-section">
      <h2>Manage Registrations</h2>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <div className="events-grid">
          {registrations.map((item) => (
            <div className="event-card" key={item._id}>
              <h3>{item.studentName}</h3>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Department:</strong> {item.department}</p>
              <p><strong>College:</strong> {item.collegeName}</p>
              <p><strong>Team:</strong> {item.teamName || "Individual"}</p>
              <p><strong>Status:</strong> {item.status}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ManageRegistrations;