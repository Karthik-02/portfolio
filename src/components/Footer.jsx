// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (t) =>
    t.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="footer">
      <div className="footer-left">
        <span className="footer-item footer-branch">⎇ main</span>
        <span className="footer-item">✓ No problems</span>
      </div>
      <div className="footer-right">
        <span className="footer-item">JavaScript</span>
        <span className="footer-sep" />
        <span className="footer-item">UTF-8</span>
        <span className="footer-sep" />
        <span className="footer-item">Spaces: 2</span>
        <span className="footer-sep" />
        <span className="footer-item footer-time">{fmt(time)}</span>
      </div>
    </div>
  );
};

export default Footer;
