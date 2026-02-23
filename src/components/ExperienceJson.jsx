// src/components/ExperienceJson.jsx
import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    date: '06/2023 – 11/2023',
    location: 'Chennai, Tamil Nadu',
    company: 'ExertSense Solutions',
    role: 'Software Developer (Hybrid)',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQGpBKjtkJE60w/company-logo_100_100/0/1715777706194/exertsense_solutions_logo?e=1727308800&v=beta&t=XmZGEpneXgr64J_T_faqd8JN2oO_clG-UNFq9keiiFo',
    details: [
      'Built and shipped an event management application using the MERN Stack.',
      'Developed RESTful APIs with Node.js and Express; integrated MongoDB Atlas.',
      'Collaborated in an Agile team with bi-weekly sprints and code reviews.',
    ],
  },
  {
    date: '12/2022 – 04/2023',
    location: 'Coimbatore, Tamil Nadu',
    company: 'FOSS Club, CIT',
    role: 'Mentor',
    logo: 'https://media.licdn.com/dms/image/C510BAQHp5eXRydX-Sg/company-logo_100_100/0/1630574497498',
    details: [
      'Mentored a 12-week workshop "The Coding Season" for junior students.',
      'Facilitated weekly problem-solving sessions in C Language.',
      'Lectured on fundamental programming concepts and algorithms.',
    ],
  },
  {
    date: '2020 – 2021',
    location: 'Remote',
    company: 'IBM Qiskit',
    role: 'Localization Contributor',
    logo: 'https://media.licdn.com/dms/image/C4D0BAQFf2TGbOzTf_g/company-logo_100_100/0/1641761732232/qiskit_logo',
    details: [
      'Contributed to the translation of IBM\'s quantum computing textbook to regional Indian languages.',
      'Made quantum computing content accessible to a wider, non-English-speaking audience.',
    ],
  },
];

const ExperienceJson = () => (
  <div className="experience-container">
    <div className="experience-header">
      <h2>Experience</h2>
      <p>// {experiences.length} roles · hover a card for details</p>
    </div>
    <div className="timeline">
      {experiences.map((exp, i) => (
        <div className="event" key={i}>
          <div className="event-top">
            <div className="event-meta">
              <div className="event-company">{exp.company}</div>
              <div className="event-role">{exp.role}</div>
              <div className="event-date-loc">
                <span>📅 {exp.date}</span>
                <span>📍 {exp.location}</span>
              </div>
            </div>
            <img
              src={exp.logo}
              alt={exp.company}
              className="event-image"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="event-details">
            <ul>
              {exp.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceJson;
