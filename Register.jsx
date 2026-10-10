import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <div className="auth-container">
      <h1>CampusConnect</h1>
      <h2>Create Account</h2>

      <p>Join your campus community today!</p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <label>Email Address</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <label>College Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your college name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />

        <br /><br />

        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>

      <p>
        <a href="/">Back to Home</a>
      </p>
    </div>
  );
}

export default Register;