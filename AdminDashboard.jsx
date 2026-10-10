
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <section className="events-section">
      <h2>Admin Dashboard</h2>
      <p>Welcome to CampusConnect administration.</p>

      <div className="events-grid">
        <div className="event-card">
          <h3>Manage Events</h3>
          <p>Add, update, and delete college events.</p>
          <Link to="/admin/events">Manage Events</Link>
        </div>

        <div className="event-card">
          <h3>Registrations</h3>
          <p>View student event registrations.</p>
          <Link to="/admin/registrations">
            Manage Registrations
          </Link>
        </div>

        <div className="event-card">
          <h3>Manage Teams</h3>
          <p>View and manage hackathon teams.</p>
          <Link to="/admin/teams">Manage Teams</Link>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;