// src/App.js

import React from 'react';
// ✅ Bootstrap CSS को यहाँ से हटा दें और इसे src/index.js में मूव करें

// Import Custom CSS
import './App.css'; 

// Import all Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import the custom hooks
import useSmoothScroll from './hooks/useSmoothScroll';
import useRevealAnimation from './hooks/useRevealAnimation';
import useThemeToggle from './hooks/useThemeToggle'; // ✅ Theme Toggle Hook

function App() {
  
  // 1. Theme Hook को Initialize करें और values प्राप्त करें
  const { theme, toggleTheme } = useThemeToggle();
  
  // Theme के आधार पर CSS क्लास बनाएँ: यदि theme 'light' है, तो 'light' क्लास string में जोड़ें।
  const themeClass = theme === 'light' ? 'light' : ''; 

  // Initialize other custom hooks for global functionality
  useSmoothScroll(); 
  useRevealAnimation(); 
  // Note: useThemeToggle को अब ऊपर de-structure कर लिया गया है, इसलिए यहाँ कॉल करने की आवश्यकता नहीं है।

  return (
    // ✅ KEY FIX: 'App' और थीम क्लास को यहाँ लागू करें
    <div className={`App ${themeClass}`}> 
      
      {/* 2. Header Component को थीम लॉजिक पास करें */}
      <Header 
        currentTheme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;