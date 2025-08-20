import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>We're Here to Help</h1>
        <p className="hero-subtext">
          Have questions, feedback, or special requests? Our team is ready to assist you 24/7.
        </p>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <p className="timing">24/7 Customer Support</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <p>support@foodexpress.com</p>
          <p className="timing">Response within 2 hours</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <h3>Live Chat</h3>
          <p>Available in app</p>
          <p className="timing">9AM - 11PM daily</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option value="">Select a topic</option>
                <option value="order">Order Issue</option>
                <option value="delivery">Delivery Concern</option>
                <option value="feedback">Feedback</option>
                <option value="partner">Partner with Us</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Our Headquarters</h3>
          <p className="address">
            123 Food Street, Koramangala<br />
            Bangalore, Karnataka 560034<br />
            India
          </p>
          
          <h3>Business Hours</h3>
          <p className="hours">
            Monday - Friday: 9AM - 9PM<br />
            Saturday - Sunday: 10AM - 11PM
          </p>
          
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">📱</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">🐦</a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h3>How do I track my order?</h3>
            <p>You can track your order in real-time through our app or website using your order ID.</p>
          </div>
          <div className="faq-item">
            <h3>What if I received the wrong order?</h3>
            <p>Contact us immediately through any channel and we'll resolve it within 30 minutes.</p>
          </div>
        </div>
        <button className="view-all-faq">View All FAQs →</button>
      </section>
    </div>
  );
};

export default Contact;