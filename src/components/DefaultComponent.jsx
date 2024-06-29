// src/components/DefaultComponent.jsx
import React from 'react';
import ProjectJs from './ProjectJs';
import ContactCss from './ContactCss';
import '../styles/default.css';
import image from '../assets/image.jpeg';

const DefaultComponent = () => {
    const handleViewWorkClick = () => {
        window.open('https://github.com/Karthik-02', '_blank');
      };
    
      const handleGetMeCaffeineClick = () => {
        window.location.href = 'mailto:karthik04siva@gamil.com';
      };

  return (
    <div className="default-component">
      <div className="image-container">
        <img src={image} alt="Profile" className="profile-image" />
      </div>
      <div className="text-container">
        <h1 className="name">Karthik Sivagnanam</h1>
        <h2 className="role">Software Developer<span className="cursor">|</span></h2>
        <div className="button-container">
          <button className="work-button" onClick={handleViewWorkClick}>View Work 🚀</button>
          <button className="caffeine-button" onClick={handleGetMeCaffeineClick}>Get me Caffeine ☕</button>
        </div>
      </div>
    </div>
  );
};

export default DefaultComponent;
