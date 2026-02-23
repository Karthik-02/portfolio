// src/components/ContactCss.jsx
import React, { useState } from 'react';
import '../styles/contact.css';

const socials = [
  {
    icon: '📧',
    name: 'Email',
    handle: 'karthik04siva@gmail.com',
    url: 'mailto:karthik04siva@gmail.com',
  },
  {
    icon: '🐙',
    name: 'GitHub',
    handle: 'Karthik-02',
    url: 'https://github.com/Karthik-02/',
  },
  {
    icon: '💼',
    name: 'LinkedIn',
    handle: 'Karthik Sivagnanam',
    url: 'https://www.linkedin.com/in/karthik-sivagnanam-140a581b9/',
  },
];

const ContactCss = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = formData.get('subject');
    const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
    window.location.href = `mailto:karthik04siva@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>// reach out — I'm always open to interesting conversations</p>
      </div>

      <div className="contact-grid">
        {/* Social links */}
        <div className="socials">
          <h3>// Find me on</h3>
          <div className="social-links">
            {socials.map(s => (
              <a href={s.url} key={s.name} className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">{s.icon}</span>
                <div className="social-info">
                  <div className="social-name">{s.name}</div>
                  <div className="social-handle">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h3>// Or drop a message</h3>
          {submitted ? (
            <p className="submission-message">✓ Message sent! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Let's collaborate!" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="form-submit">
                Send Message 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCss;
