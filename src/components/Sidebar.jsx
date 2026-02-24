// src/components/Sidebar.jsx
import React from 'react';
import '../styles/editor.css';

const files = [
  { name: 'home.java', dot: '#f97316', label: 'home.java' },
  { name: 'about.html', dot: '#e34c26', label: 'about.html' },
  { name: 'contact.css', dot: '#38bdf8', label: 'contact.css' },
  { name: 'project.js', dot: '#fbbf24', label: 'project.js' },
  { name: 'experience.json', dot: '#4ade80', label: 'experience.json' },
];

const Sidebar = ({ onFileClick, activeFile, sidebarOpen, onToggle }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={onToggle} />
      )}

      <div className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        {/* Header row — always visible so user can collapse */}
        <div className="sidebar-header">
          <span className="sidebar-header-label">Explorer</span>
          <button
            className="sidebar-toggle-btn"
            title="Collapse sidebar"
            onClick={onToggle}
            aria-label="Collapse sidebar"
          >
            ‹
          </button>
        </div>

        {/* File list — only shown when open */}
        <ul className="sidebar-list">
          {files.map(f => (
            <li
              key={f.name}
              onClick={() => { onFileClick(f.name); if (window.innerWidth < 768) onToggle(); }}
              className={activeFile === f.name ? 'active' : ''}
            >
              <span className="file-dot" style={{ background: f.dot }} />
              <span className="file-name">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsed rail — the expand affordance */}
      {!sidebarOpen && (
        <div
          className="sidebar-rail"
          onClick={onToggle}
          title="Open Explorer"
          role="button"
          aria-label="Open sidebar"
        >
          <span className="sidebar-rail-icon">›</span>
          <span className="sidebar-rail-label">Explorer</span>
        </div>
      )}
    </>
  );
};

export default Sidebar;
