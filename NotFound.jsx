
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "60px", color: "#2563eb" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;