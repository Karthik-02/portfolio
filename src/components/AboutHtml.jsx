// src/components/AboutHtml.jsx
import React from 'react';
import '../styles/about.css';

const skills = [
  { name: 'JavaScript', dot: '#fbbf24' },
  { name: 'Node.js', dot: '#4ade80' },
  { name: 'React', dot: '#38bdf8' },
  { name: 'Golang', dot: '#f87171' },
  { name: 'Jetpack Compose -Kotlin', dot: '#fbbf24' },
  { name: 'MERN Stack', dot: '#38bdf8' },
  { name: 'SQL', dot: '#38bdf8' },
  { name: 'Java', dot: '#f97316' },
  { name: 'C / C++', dot: '#a78bfa' },
  { name: 'MongoDB', dot: '#4ade80' },
  { name: 'Git', dot: '#f97316' },
];

const education = [
  {
    year: '2020 – 2025',
    institution: 'Coimbatore Institute of Technology',
    degree: 'M.Sc. Software Systems',
    location: 'Coimbatore, Tamil Nadu',
    grade: 'CGPA 8.72',
  },
  {
    year: '2019 – 2020',
    institution: 'Bharath Vidhya Bhavan',
    degree: 'Higher Secondary (XII)',
    location: 'Palani, Tamil Nadu',
    grade: '84.5%',
  },
];

const AboutHtml = () => {
  return (
    <div className="about-container">
      {/* About */}
      <section>
        <div className="about-section-header">
          <h2>About Me</h2>
          <span className="about-tag">about.html</span>
        </div>
        <div className="about-bio">
          <p>
            👋 Hello! I'm <strong>Karthik S</strong>, a passionate software developer and M.Sc. Software Systems
            graduate from <strong>Coimbatore Institute of Technology</strong>. I love building products that sit at
            the intersection of clean code and great user experience.
          </p>
          <p>
            I am currently working as a <strong>Junior Developer at Justo Global</strong>, During my <strong> intern, I worked on a donation management admin panel</strong>. Later I have also worked on
            <strong> Permission Based Access Control In-House Project that used to manage cloud resources like Amazon Web Services using Golang as backend</strong>.
            I have also learned <strong>Native Android Development</strong> using <strong> Kotlin Jetpack Compose Framework</strong>. I have also done features in
            a Christianity Based Social Media App called <strong> The Ark </strong>.
          </p>
          <p>
            I've worked as a <strong>Software Developer at ExertSense Solutions</strong>, where I built an event
            management application using the MERN Stack. I'm also an active open-source contributor — I've contributed
            to <strong>IBM's Qiskit</strong> translation project, helping make quantum computing accessible in regional languages.
          </p>
          <p>
            Outside of coding I enjoy mentoring — I served as a <strong>Mentor at FOSS Club, CIT</strong> where I
            facilitated problem-solving workshops and C programming sessions. I'm always looking for the next
            challenge. 🚀
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="about-section-header">
          <h2>Skills</h2>
          <span className="about-tag">tech stack</span>
        </div>
        <div className="skills-grid">
          {skills.map(s => (
            <span className="skill-chip" key={s.name}>
              <span className="chip-dot" style={{ background: s.dot }} />
              {s.name}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="about-section-header">
          <h2>Education</h2>
          <span className="about-tag">academic</span>
        </div>
        <div className="education-cards">
          {education.map(e => (
            <div className="edu-card" key={e.institution}>
              <div className="edu-year">{e.year}</div>
              <div className="edu-details">
                <div className="edu-institution">{e.institution}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-location">📍 {e.location}</div>
                <span className="edu-grade">{e.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutHtml;
