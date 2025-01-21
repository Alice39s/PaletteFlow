import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '../consts';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches;
      setIsDark(newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme ? 'dark' : 'light');
      return newTheme;
    });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, toggleTheme };
} 