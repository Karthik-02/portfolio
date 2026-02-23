// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <div className="technologies">
          {project.technologies.map((tech, i) => (
            <span className="technology" key={i}>{tech}</span>
          ))}
        </div>
        <a
          href={project.repository}
          className="source-code-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
