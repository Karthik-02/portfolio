// src/components/TopBar.jsx
import React from 'react';
import '../styles/editor.css';

const TopBar = ({ onHamburger, theme, onThemeToggle }) => {
  const isDark = theme === 'dark';

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

      {/* Theme toggle */}
      <button
        style={{ backgroundColor: isDark ? '#f1f5f9' : '#0d1117', color: isDark ? '#0d1117' : '#f1f5f9' }}
        className="theme-toggle-btn"
        onClick={onThemeToggle}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="theme-toggle-icon">{isDark ? '☀️' : '🌙'}</span>
        <span className="theme-toggle-label">{isDark ? ' Light' : ' Dark'}</span>
      </button>
    </div>
  );
};

export default TopBar;
