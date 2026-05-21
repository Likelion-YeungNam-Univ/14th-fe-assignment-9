import React, { useState } from 'react'
import Container from './container'
import Header from './header'
import ThemeContext from "./ThemeContext";

const App = () => {

  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark((e) => !e)
  }

  return (
    <ThemeContext.Provider value={{isDark, changeTheme}}>

    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <Container />
    </div>

    </ThemeContext.Provider>
  )
}

export default App