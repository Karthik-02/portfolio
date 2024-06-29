// src/components/ContactCss.jsx
import React, { useState } from 'react';
import '../styles/contact.css';

const ContactCss = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const subject = formData.get('subject');
    const body = formData.get('message');

    const mailtoLink = `mailto:karthik04siva@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log("mail sent");
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="socials">
        <h2>Reach Out Via Socials</h2>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:karthik04siva@gmail.com">karthik04siva@gmail.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Karthik-02/" target="_blank" rel="noopener noreferrer">Karthik-02</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthik-sivagnanam-140a581b9/" target="_blank" rel="noopener noreferrer">Karthik S</a></li>
        </ul>
      </div>
      <div className="separator"></div> {/* Vertical line */}
      <div className="form">
        <h2>Or Fill Out This Form</h2>
        {submitted ? (
          <p className="submission-message">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactCss;
