import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Redefining Food Delivery</h1>
        <p className="hero-subtext">
          We're not just delivering meals - we're creating moments of joy,
          one order at a time.
        </p>
      </section>

      {/* Value Proposition */}
      <section className="value-props">
        <div className="prop-card">
          <div className="prop-icon">🚀</div>
          <h3>Lightning Fast</h3>
          <p>
            Average delivery in under 30 minutes thanks to our optimized
            logistics network and AI-powered routing.
          </p>
        </div>
        <div className="prop-card">
          <div className="prop-icon">🌱</div>
          <h3>Sustainable Choices</h3>
          <p>
            Our partners use 100% biodegradable packaging, and we offset
            all delivery emissions.
          </p>
        </div>
        <div className="prop-card">
          <div className="prop-icon">🌟</div>
          <h3>Curated Quality</h3>
          <p>
            Every restaurant undergoes a 25-point quality check before
            joining our platform.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">2023</div>
            <div className="timeline-content">
              <h3>Founded in Bangalore</h3>
              <p>Started with just 10 restaurant partners in Koramangala.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2024</div>
            <div className="timeline-content">
              <h3>Expanded Citywide</h3>
              <p>Covered all major Bangalore neighborhoods with 200+ partners.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">Now</div>
            <div className="timeline-content">
              <h3>Serving You Better</h3>
              <p>Delivering 10,000+ meals daily with 98% satisfaction rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Hungry for Change?</h2>
        <p>
          Join thousands of happy customers enjoying hassle-free food
          delivery today.
        </p>
        <button className="cta-button">Start Exploring Restaurants</button>
      </section>
    </div>
  );
};

export default About;