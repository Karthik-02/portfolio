// src/components/Sidebar.jsx
import React, { useState } from 'react';
import javaIcon from '../assets/java-icon.jpg';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import jsonIcon from '../assets/json-icon.png';
import mdIcon from '../assets/md-icon.png';
import toggleIcon from '../assets/toggle-icon.png'; // Add a toggle icon
import '../styles/editor.css';



const Sidebar = ({ onFileClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`sidebar ${isVisible ? '' : 'collapsed'}`}>
      <ul>
        <li onClick={() => onFileClick('home.java')}>
          <img src={javaIcon} alt="File Icon" />
          <span>home.java</span>
        </li>
        <li onClick={() => onFileClick('about.html')}>
          <img src={htmlIcon} alt="File Icon" />
          <span>about.html</span>
        </li>
        <li onClick={() => onFileClick('contact.css')}>
          <img src={cssIcon} alt="File Icon" />
          <span>contact.css</span>
        </li>
        <li onClick={() => onFileClick('project.js')}>
          <img src={jsIcon} alt="File Icon" />
          <span>project.js</span>
        </li>
        <li onClick={() => onFileClick('experience.json')}>
          <img src={jsonIcon} alt="File Icon" />
          <span>experience.json</span>
        </li>
      </ul>
      <button className="toggle-button" onClick={toggleSidebar}>
        <img src={toggleIcon} alt="Toggle Icon" />
      </button>
    </div>
  );
};

export default Sidebar;
