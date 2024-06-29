// src/components/ProjectJs.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
      title: "Crowd-Fund-Chain",
      image: "https://github.com/Karthik-02/crowdfundchain/assets/81423983/b1cf6255-7c9e-4929-b481-329ba2752629",
      technologies: ["React", "ViteJS", "TailwindCSS", "Thirdweb.js", "Metamask", "Sepolia Etherium"],
      repository: "https://github.com/Karthik-02/crowdfundchain"
    },
    {
      title: "Plagiarism Detector",
      image: "https://private-user-images.githubusercontent.com/81423983/329983276-68ab81eb-da46-4180-b25e-5cd88a609da9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkwNzEyOTgsIm5iZiI6MTcxOTA3MDk5OCwicGF0aCI6Ii84MTQyMzk4My8zMjk5ODMyNzYtNjhhYjgxZWItZGE0Ni00MTgwLWIyNWUtNWNkODhhNjA5ZGE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjIyVDE1NDMxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5MTliNGY2YjkxNGYxNGY1ZDg5OTkxMDNmZWY5OTA1ZGU1OWJhYzlkODdlOGJkYzAwM2ZiMjRkYjIzMjlmZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.GA4gVPO9pefjahPHYmJyyLQwLUzbmwNHy6f9pYwlJME",
      technologies: ["NLP", "Web Scraping", "Data Visualization"],
      repository: "https://github.com/Karthik-02/plagiarism-detection"
    },
    {
      title: "Immersive Spatial Simulator",
      image: "https://cdn2.unrealengine.com/hlod-water-support-in-unreal-engine-5-1-1920x1080-e402b5c30a87.jpg?resize=1&w=1920",
      technologies: ["Arduino IDE", "Unreal Engine"],
      repository: "https://github.com/username/immersive-spatial-simulator"
    },
    {
      title: "RASA Basic math bot",
      image: "https://user-images.githubusercontent.com/81423983/221856242-c5c7bfa9-ec2e-4f24-b645-b8f2c9dc4445.png",
      technologies: ["RASA", "ngrok", "twilio", "WhatsApp Bot"],
      repository: "https://github.com/Karthik-02/rasa_math_bot"
    },
    {
      title: "Indian House Rent Estimator",
      image: "https://user-images.githubusercontent.com/81423983/213903728-55cd2099-8d14-4ec4-af2f-9bce73130f32.JPG",
      technologies: ["Django", "Long Short-Term Neural Network (LSTM)"],
      repository: "https://github.com/Karthik-02/rent_project"
    },
    {
      title: "NIFTY-50 Stock Market Predictor",
      image: "https://user-images.githubusercontent.com/81423983/209104923-30f85182-7412-41fd-a2c8-dc55f22e3fca.png",
      technologies: ["Flask", "ARIMA"],
      repository: "https://github.com/Karthik-02/nifty-50-MLproject"
    }
];


const ProjectJs = () => {
    return (
        <div className="projects-container">
          <div className="projects-wrapper"> {/* Wrap the projects in a wrapper div */}
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      );
};

export default ProjectJs;
