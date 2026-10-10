import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="auth-container">
      <h1>CampusConnect</h1>
      <h2>Login</h2>

      <p>Welcome back! Please login to your account.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <a href="/register">Register</a>
      </p>

      <p>
        <a href="/">Back to Home</a>
      </p>
    </div>
  );
}

export default Login;