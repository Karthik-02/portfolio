// src/components/EditorLayout.jsx
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import '../styles/editor.css';
import DefaultComponent from './DefaultComponent';
import HomeJava from './HomeJava';
import AboutHtml from './AboutHtml';
import ContactCss from './ContactCss';
import ProjectJs from './ProjectJs';
import ExperienceJson from './ExperienceJson';

const filesMeta = {
  'home.java': { dot: '#f97316', lang: 'Java' },
  'about.html': { dot: '#e34c26', lang: 'HTML' },
  'contact.css': { dot: '#38bdf8', lang: 'CSS' },
  'project.js': { dot: '#fbbf24', lang: 'JavaScript' },
  'experience.json': { dot: '#4ade80', lang: 'JSON' },
};

const fileComponents = {
  'home.java': HomeJava,
  'about.html': AboutHtml,
  'contact.css': ContactCss,
  'project.js': ProjectJs,
  'experience.json': ExperienceJson,
};

const LineGutter = ({ count = 60 }) => (
  <div className="line-gutter" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <span key={i + 1}>{i + 1}</span>
    ))}
  </div>
);

const EditorLayout = ({ theme, onThemeToggle }) => {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  // desktop: sidebar starts open; on mobile it starts closed
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Close sidebar by default on small screens
  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  const handleFileClick = (file) => {
    if (!openFiles.includes(file)) setOpenFiles([...openFiles, file]);
    setActiveFile(file);
  };

  const handleCloseFile = (e, file) => {
    e.stopPropagation();
    const remaining = openFiles.filter(f => f !== file);
    setOpenFiles(remaining);
    if (activeFile === file) {
      setActiveFile(remaining.length > 0 ? remaining[remaining.length - 1] : null);
    }
  };

  const toggleSidebar = () => setSidebarOpen(v => !v);

  const ActiveComponent = activeFile ? fileComponents[activeFile] : null;

  return (
    <div className="editor-layout">
      <TopBar onHamburger={toggleSidebar} theme={theme} onThemeToggle={onThemeToggle} />
      <div className="main-content">
        <Sidebar
          onFileClick={handleFileClick}
          activeFile={activeFile}
          sidebarOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />

        <div className="editor">
          {/* Tab bar */}
          <div className="tabs">
            {openFiles.length === 0 && (
              <div className="tabs-empty">
                <span>← Select a file to begin</span>
              </div>
            )}
            {openFiles.map(file => (
              <div
                className={`tab ${file === activeFile ? 'active' : ''}`}
                key={file}
                onClick={() => setActiveFile(file)}
              >
                <span className="file-dot" style={{ background: filesMeta[file]?.dot }} />
                <span>{file}</span>
                <button onClick={(e) => handleCloseFile(e, file)} title="Close tab">×</button>
              </div>
            ))}
          </div>

          {/* Editor body: gutter + content */}
          <div className="editor-body">
            <LineGutter />
            <div className="tab-content">
              {ActiveComponent ? (
                <ActiveComponent />
              ) : (
                <DefaultComponent onFileClick={handleFileClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
