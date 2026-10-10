
import { useState } from "react";
import { addEvent } from "../services/api";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    category: "Hackathon",
    organizer: "",
    registrationDeadline: "",
    maxParticipants: 50,
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addEvent({
        ...formData,
        maxParticipants: Number(formData.maxParticipants),
      });

      setMessage("Event added successfully!");

      setFormData({
        title: "",
        description: "",
        date: "",
        venue: "",
        category: "Hackathon",
        organizer: "",
        registrationDeadline: "",
        maxParticipants: 50,
      });
    } catch (error) {
      setMessage("Unable to add event. Please try again.");
    }
  }

  return (
    <section className="form-section">
      <h2>Add New Event</h2>

      <form className="event-form" onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input name="title" value={formData.title} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Venue</label>
        <input name="venue" value={formData.venue} onChange={handleChange} required />

        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Hackathon">Hackathon</option>
          <option value="Technical">Technical Event</option>
          <option value="Cultural">Cultural Event</option>
          <option value="Workshop">Workshop</option>
        </select>

        <label>Organizer</label>
        <input name="organizer" value={formData.organizer} onChange={handleChange} required />

        <label>Registration Deadline</label>
        <input type="date" name="registrationDeadline" value={formData.registrationDeadline} onChange={handleChange} />

        <label>Maximum Participants</label>
        <input type="number" name="maxParticipants" min="1" value={formData.maxParticipants} onChange={handleChange} required />

        <button type="submit">Add Event</button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
}

export default AddEvent;