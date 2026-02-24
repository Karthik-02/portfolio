// src/App.jsx
import React, { useState, useEffect } from 'react';
import EditorLayout from './components/EditorLayout';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  // Initialise from localStorage, fallback to dark
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'light'
  );

  // Apply data-theme attribute whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app">
      <Footer theme={theme} />
      <EditorLayout theme={theme} onThemeToggle={toggleTheme} />
    </div>
  );
};

export default App;
