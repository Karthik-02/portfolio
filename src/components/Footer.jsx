// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="status-bar">
        <div className="status-item">
          <i className="fas fa-code"></i>
          JavaScript
        </div>
        <div className="status-item">
          <i className="fas fa-align-left"></i>
          Ln 10, Col 5
        </div>
        <div className="status-item">
          <i className="fas fa-space-shuttle"></i>
          Spaces: 2
        </div>
        <div className="status-item">
          <i className="fas fa-font"></i>
          UTF-8
        </div>
        <div className="status-item">
          <i className="fas fa-check"></i>
          Prettier
        </div>
      </div>
    </div>
  );
};

export default Footer;
