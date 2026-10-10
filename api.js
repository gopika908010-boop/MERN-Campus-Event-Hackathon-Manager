
const API_URL = "http://localhost:5000/api";

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

// Events
export const getEvents = () =>
  request(`${API_URL}/events`);

export const addEvent = (eventData) =>
  request(`${API_URL}/events`, {
    method: "POST",
    body: JSON.stringify(eventData)
  });

export const deleteEvent = (id) =>
  request(`${API_URL}/events/${id}`, {
    method: "DELETE"
  });

// Registrations
export const getRegistrations = () =>
  request(`${API_URL}/registrations`);

export const registerForEvent = (registrationData) =>
  request(`${API_URL}/registrations`, {
    method: "POST",
    body: JSON.stringify(registrationData)
  });

// Teams
export const getTeams = () =>
  request(`${API_URL}/teams`);

export const addTeam = (teamData) =>
  request(`${API_URL}/teams`, {
    method: "POST",
    body: JSON.stringify(teamData)
  });

export const deleteTeam = (id) =>
  request(`${API_URL}/teams/${id}`, {
    method: "DELETE"
  });