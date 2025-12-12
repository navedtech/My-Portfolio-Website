// src/hooks/useThemeToggle.js

import { useState, useEffect } from 'react';

const useThemeToggle = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
  
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  
  return { theme, toggleTheme }; 
};

export default useThemeToggle;