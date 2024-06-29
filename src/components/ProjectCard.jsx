// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import '../styles/projects.css';

const ProjectCard = ({ project }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`project-card ${isSelected ? 'project-selected' : ''}`} onClick={toggleSelected}>
      {/* Card content */}
      <img src={project.image} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <div key={index} className="technology">{tech}</div>
        ))}
      </div>
      <a href={project.repository} className="source-code-button" target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  );
};

export default ProjectCard;
