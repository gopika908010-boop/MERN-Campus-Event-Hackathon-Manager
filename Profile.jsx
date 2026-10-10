
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = (event) => {
    event.preventDefault();

    const updatedUser = { ...user, name, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile saved!");
  };

  return (
    <div className="auth-container">
      <h2>My Profile</h2>

      <form className="auth-form" onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Save Profile</button>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </form>
    </div>
  );
}

export default Profile;