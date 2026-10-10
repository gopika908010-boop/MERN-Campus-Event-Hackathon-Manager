
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../services/api";
import "../styles/Auth.css";

function AddEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    category: "",
    organizer: "",
    registrationDeadline: "",
    maxParticipants: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      await addEvent({
        ...form,
        maxParticipants: Number(form.maxParticipants)
      });

      alert("Event added successfully!");
      navigate("/events");
    } catch (error) {
      setMessage(error.message || "Failed to add event.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Add New Event</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <label>Event Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="venue"
          placeholder="Venue"
          value={form.venue}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Workshop">Workshop</option>
          <option value="Technical">Technical Event</option>
          <option value="Cultural">Cultural Event</option>
          <option value="hackathon">Hackathon</option>
          <option value="Sports">Sports</option>
        </select>

        <input
          name="organizer"
          placeholder="Organizer Name"
          value={form.organizer}
          onChange={handleChange}
          required
        />

        <label>Registration Deadline</label>
        <input
          type="date"
          name="registrationDeadline"
          value={form.registrationDeadline}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="maxParticipants"
          placeholder="Maximum Participants"
          min="1"
          value={form.maxParticipants}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Event</button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default AddEvent;