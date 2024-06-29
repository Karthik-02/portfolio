// src/components/HomeJava.jsx
import React from 'react';
import '../styles/home.css';

const HomeJava = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to My Portfolio</h1>
      <p className="subtitle">Check out my profiles:</p>
      <div className="profile-container">
        <a href="https://auth.geeksforgeeks.org/user/karthik04siva" className="profile-button" target="_blank" rel="noopener noreferrer">
          <img src="https://geeksforgeeks.zohorecruit.in/recruit/viewCareerImage.do?type=meta&page_id=61093000000211152&file_name=GG_Logo.png" alt="GeeksforGeeks" className="profile-logo" />
          GeeksforGeeks Profile
        </a>
        <a href="https://leetcode.com/u/Karthik-02/" className="profile-button" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/free/png-512/leetcode-3628885-3030025.png" alt="LeetCode" className="profile-logo" />
          LeetCode Profile
        </a>
      </div>
    </div>
  );
};

export default HomeJava;
