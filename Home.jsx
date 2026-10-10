function Home() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <h2>🎓 CampusConnect</h2>

        <div className="nav-buttons">
          <a href="/">Home</a>
          <a href="#events">Events</a>
          <a href="#community">Community</a>
          <a href="/login" className="login-btn">
            Login
          </a>
          <a href="/register" className="register-btn">
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🎓 Your Campus, Your Community</p>

          <h1>
            Discover Events.
            <br />
            Build Your Future.
          </h1>

          <p className="hero-description">
            Explore college events, join exciting hackathons,
            participate in workshops, and connect with talented students.
          </p>

          <div className="hero-buttons">
            <a href="#events" className="explore-btn">
              Explore Events →
            </a>

            <a href="/register" className="join-btn">
              Join CampusConnect
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="features" id="events">
        <div className="section-heading">
          <p>WHAT YOU CAN DO</p>
          <h2>Everything Happening on Campus</h2>
          <p>
            Find opportunities to learn, compete, collaborate,
            and grow throughout your college journey.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎉</div>
            <h3>Events</h3>
            <p>
              Discover college events, cultural festivals,
              workshops, and exciting activities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Hackathons</h3>
            <p>
              Discover opportunities to build projects,
              solve problems, and showcase your skills.
            </p>
          </div>

          <div className="feature-card" id="community">
            <div className="feature-icon">👥</div>
            <h3>Community</h3>
            <p>
              Connect with students, share ideas,
              make friends, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Your Campus Journey Starts Here!</h2>
        <p>
          Join CampusConnect and never miss an opportunity.
        </p>

        <a href="/register" className="register-btn">
          Get Started →
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>🎓 CampusConnect</h3>
        <p>Connect. Explore. Grow.</p>
        <p>© 2026 CampusConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;