import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Provider 컴포넌트 생성
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 다른 컴포넌트에서 쉽게 쓰기 위해서!!
export const useTheme = () => useContext(ThemeContext);