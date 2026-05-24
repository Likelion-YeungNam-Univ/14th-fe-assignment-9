import React, { useState } from 'react'
import WebtoonPage from './pages/WebtoonPage'
import ThemeContext from './ThemeContext';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div><WebtoonPage /></div>
    </ThemeContext.Provider>
  )
}

export default App