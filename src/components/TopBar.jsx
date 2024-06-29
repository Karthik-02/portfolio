// src/components/TopBar.jsx
import React from 'react';
import sublimeIcon from '../assets/sublime-text-icon.png';
import '../styles/editor.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="sublime-icon">
        <img src={sublimeIcon} alt="Sublime Text Icon" />
      </div>
      <div className="menu-items">
        <div className="menu-item">File</div>
        <div className="menu-item">Edit</div>
        <div className="menu-item">View</div>
        <div className="menu-item">Go</div>
        <div className="menu-item">Run</div>
        <div className="menu-item">Terminal</div>
        <div className="menu-item">Help</div>
      </div>
      <div className="top-bar-title">Karthik S - Sublime Text</div>
    </div>
  );
};

export default TopBar;
