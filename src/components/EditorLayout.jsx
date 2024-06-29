// src/components/EditorLayout.jsx
import React, { useState } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import '../styles/editor.css';
import DefaultComponent from './DefaultComponent';
import HomeJava from './HomeJava';
import AboutHtml from './AboutHtml';
import ContactCss from './ContactCss';
import ProjectJs from './ProjectJs';
import ExperienceJson from './ExperienceJson';
import GithubMd from './GithubMd';
import javaIcon from '../assets/java-icon.jpg';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import jsonIcon from '../assets/json-icon.png';
import mdIcon from '../assets/md-icon.png';

const fileComponents = {
  'home.java': { component: HomeJava, icon: javaIcon },
  'about.html': { component: AboutHtml, icon: htmlIcon },
  'contact.css': { component: ContactCss, icon: cssIcon },
  'project.js': { component: ProjectJs, icon: jsIcon },
  'experience.json': { component: ExperienceJson, icon: jsonIcon },
  'github.md': { component: GithubMd, icon: mdIcon },
};

const EditorLayout = () => {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const handleFileClick = (file) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  const handleCloseFile = (file) => {
    setOpenFiles(openFiles.filter(f => f !== file));
    if (activeFile === file) {
      setActiveFile(openFiles.length > 1 ? openFiles.find(f => f !== file) : null);
    }
  };

  const renderActiveFile = () => {
    if (activeFile) {
      const Component = fileComponents[activeFile].component;
      return <Component />;
    }
    return <DefaultComponent />;
  };

  return (
    <div className="editor-layout">
      <TopBar />
      <div className="main-content">
        <Sidebar openFiles={openFiles} onFileClick={handleFileClick} />
        <div className="editor">
          <div className="tabs">
            {openFiles.map(file => (
              <div className={`tab ${file === activeFile ? 'active' : ''}`} key={file}>
                <img src={fileComponents[file].icon} alt="File Icon" />
                <span onClick={() => setActiveFile(file)}>{file}</span>
                <button onClick={() => handleCloseFile(file)}>X</button>
              </div>
            ))}
          </div>
          <div className="tab-content">
            {renderActiveFile()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
