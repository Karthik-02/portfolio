// src/components/HomeJava.jsx
import React from 'react';
import '../styles/home.css';

const profiles = [
  {
    name: 'GeeksforGeeks',
    logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
    desc: 'Data structures, algorithms, and coding challenges.',
    url: 'https://auth.geeksforgeeks.org/user/karthik04siva',
    color: '#4ade80',
  },
  {
    name: 'LeetCode',
    logo: 'https://cdn.iconscout.com/icon/free/png-512/leetcode-3628885-3030025.png',
    desc: 'Competitive programming and interview prep problems.',
    url: 'https://leetcode.com/u/Karthik-02/',
    color: '#fbbf24',
  },
  {
    name: 'GitHub',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    desc: 'Open-source contributions and personal projects.',
    url: 'https://github.com/Karthik-02',
    color: '#a78bfa',
  },
];

const HomeJava = () => {
  return (
    <div className="home-container">
      <div className="code-comment">
        <div>{'/**'}</div>
        <div>{'  * @author  '}<span>Karthik Sivagnanam</span></div>
        <div>{'  * @version 2.0'}</div>
        <div>{'  * Welcome to my coding profiles.'}</div>
        <div>{'  * Click a card to explore.'}</div>
        <div>{'  */'}</div>
      </div>

      <div className="home-section-title">// coding profiles</div>

      <div className="profile-cards">
        {profiles.map(p => (
          <a
            href={p.url}
            key={p.name}
            className="profile-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={p.logo} alt={p.name} className="profile-card-logo" />
            <div className="profile-card-name" style={{ color: p.color }}>{p.name}</div>
            <div className="profile-card-desc">{p.desc}</div>
            <div className="profile-card-arrow">→ visit profile</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeJava;
