// src/components/DefaultComponent.jsx
import React, { useState, useEffect } from 'react';
import '../styles/default.css';
import image from '../assets/image.jpeg';

const roles = [
  'Software Developer',
  'Full-Stack Engineer',
  'Open Source Contributor',
  'Problem Solver',
];

const DefaultComponent = ({ onFileClick }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <div className="default-component">
      {/* Text column */}
      <div className="hero-text">
        <div className="hero-greeting">Hello, world!</div>
        <h1 className="hero-name">Karthik<br />Sivagnanam</h1>
        <div className="hero-role">
          <span className="typed-text">{displayed}</span>
          <span className="cursor-blink" />
        </div>
        <p className="hero-desc">
          M.Sc. Software Systems graduate from CIT · Passionate builder of web apps,
          ML tools, and open-source projects · Always learning something new.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => onFileClick('project.js')}>
            🚀 View Projects
          </button>
          <a className="btn-secondary" href="mailto:karthik04siva@gmail.com">
            📧 Get in Touch
          </a>
        </div>
        <div className="hero-tech">
          <span className="hero-tech-label">// stack:</span>
          {['Nodejs', 'Reactjs', 'MERN', 'Golang', 'Jetpack Compose'].map(t => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Image column */}
      <div className="hero-image">
        <div className="profile-ring">
          <img src={image} alt="Karthik Sivagnanam" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default DefaultComponent;
