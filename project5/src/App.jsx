// App.js
import "./App.css";
import { Navbar } from "./Navbar.jsx";
import { MainPage } from "./MainPage.jsx";
import ThemeContext from "./ThemeContext.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <MainPage></MainPage>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
