import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Check if user has a preference in localStorage or prefers dark mode
  const getInitialTheme = (): boolean => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPref = window.localStorage.getItem('dark-mode');
      if (typeof storedPref === 'string') {
        return storedPref === 'true';
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return true;
      }
    }

    // Default to light mode
    return false;
  };

  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save user preference
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dark-mode', darkMode.toString());
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};