// src/components/ExperienceJson.jsx
import React from 'react';
import '../styles/experience.css';

const ExperienceJson = () => {
  return (
    <div className="experience-container">
      <div className="timeline">
        <div className="line"></div>
        <div className="events">
          <div className="event">
            <div className="date">06/2023 – 11/2023</div>
            <div className="location">Chennai, Tamil Nadu.</div>
            <div className="company">ExertSense Solutions, Software Developer (Hybrid)</div>
            <img src="https://media.licdn.com/dms/image/D4D0BAQGpBKjtkJE60w/company-logo_100_100/0/1715777706194/exertsense_solutions_logo?e=1727308800&v=beta&t=XmZGEpneXgr64J_T_faqd8JN2oO_clG-UNFq9keiiFo" alt="Sample" className="event-image" /> {/* Add the image */}
            <div className="details">
              <ul>
                <li>Worked in the development of an event management application.</li>
                <li>Learned developing applications using MERN Stack.</li>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="date">12/2022 – 04/2023</div>
            <div className="location">Chennai, Tamil Nadu.</div>
            <div className="company">Mentor, FOSS CLUB, CIT</div>
            <img src="https://media.licdn.com/dms/image/C510BAQHp5eXRydX-Sg/company-logo_100_100/0/1630574497498?e=1727308800&v=beta&t=HA8XR510e__ZgBXf7f0zJWzlLbd6J3kGnZ-D7Yjr0EY" alt="Sample" className="event-image" /> {/* Add the image */}
            <div className="details">
              <ul>
                <li>Worked as a mentor in a 12-week workshop "The Coding Season".</li>
                <li>Handled Problem Solving Sessions using C Language.</li>
                <li>Lectured concepts of C programming Language.</li>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="date">2020 – 2021</div>
            <div className="location">Chennai, Tamil Nadu.</div>
            <div className="company">Qiskit Localization Contributor, IBM</div>
            <img src="https://media.licdn.com/dms/image/C4D0BAQFf2TGbOzTf_g/company-logo_100_100/0/1641761732232/qiskit_logo?e=1727308800&v=beta&t=A_8OXrjcBH1w1aS_eS5ck8SPow_AR7BocsSNROoSjaw" alt="Sample" className="event-image" /> {/* Add the image */}
            <div className="details">
              <ul>
                <li>Contributed to the translation of IBM quantum computing guidebook to the Indian regional languages.</li>
              </ul>
            </div>
          </div>
          {/* Add more events as needed */}
        </div>
      </div>
    </div>
  );
};

export default ExperienceJson;
