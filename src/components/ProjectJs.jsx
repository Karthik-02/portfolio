// src/components/ProjectJs.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const projects = [
  {
    title: 'Crowd-Fund-Chain',
    image: 'https://github.com/Karthik-02/crowdfundchain/assets/81423983/b1cf6255-7c9e-4929-b481-329ba2752629',
    technologies: ['React', 'ViteJS', 'TailwindCSS', 'Thirdweb.js', 'Metamask', 'Sepolia Ethereum'],
    repository: 'https://github.com/Karthik-02/crowdfundchain',
  },
  {
    title: 'Plagiarism Detector',
    image: 'https://github.com/Karthik-02/plagiarism-detection/assets/81423983/68ab81eb-da46-4180-b25e-5cd88a609da9',
    technologies: ['NLP', 'Web Scraping', 'Data Visualization'],
    repository: 'https://github.com/Karthik-02/plagiarism-detection',
  },
  {
    title: 'Immersive Spatial Simulator',
    image: 'https://cdn2.unrealengine.com/hlod-water-support-in-unreal-engine-5-1-1920x1080-e402b5c30a87.jpg',
    technologies: ['Arduino IDE', 'Unreal Engine'],
    repository: 'https://github.com/Karthik-02',
  },
  {
    title: 'RASA Math Bot',
    image: 'https://user-images.githubusercontent.com/81423983/221856242-c5c7bfa9-ec2e-4f24-b645-b8f2c9dc4445.png',
    technologies: ['RASA', 'ngrok', 'Twilio', 'WhatsApp Bot'],
    repository: 'https://github.com/Karthik-02/rasa_math_bot',
  },
  {
    title: 'Indian House Rent Estimator',
    image: 'https://user-images.githubusercontent.com/81423983/213903728-55cd2099-8d14-4ec4-af2f-9bce73130f32.JPG',
    technologies: ['Django', 'LSTM Neural Network'],
    repository: 'https://github.com/Karthik-02/rent_project',
  },
  {
    title: 'NIFTY-50 Stock Predictor',
    image: 'https://user-images.githubusercontent.com/81423983/209104923-30f85182-7412-41fd-a2c8-dc55f22e3fca.png',
    technologies: ['Flask', 'ARIMA'],
    repository: 'https://github.com/Karthik-02/nifty-50-MLproject',
  },
];

const ProjectJs = () => (
  <div className="projects-container">
    <div className="projects-header">
      <h2>Projects</h2>
      <p>// {projects.length} repositories · click a card to explore</p>
    </div>
    <div className="projects-wrapper">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectJs;
