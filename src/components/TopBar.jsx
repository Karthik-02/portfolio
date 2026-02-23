// src/components/TopBar.jsx
import React from 'react';
import '../styles/editor.css';

const TopBar = ({ onHamburger }) => {
  return (
    <div className="top-bar">
      {/* Mobile hamburger */}
      <button
        className="hamburger-btn"
        onClick={onHamburger}
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        <span /><span /><span />
      </button>

      <div className="window-controls">
        <span className="window-dot close" />
        <span className="window-dot min" />
        <span className="window-dot max" />
      </div>
      <span className="top-bar-logo">⚡ karthik.dev</span>
      <div className="menu-items">
        {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map(item => (
          <div className="menu-item" key={item}>{item}</div>
        ))}
      </div>
      <span className="top-bar-title">Karthik Sivagnanam — Portfolio</span>
    </div>
  );
};

export default TopBar;
