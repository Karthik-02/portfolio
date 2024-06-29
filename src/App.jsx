// src/App.jsx
import React from 'react';
import EditorLayout from './components/EditorLayout';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  return (
    <div className="app">
      <Footer />
      <EditorLayout />
    </div>
  );
};

export default App;
