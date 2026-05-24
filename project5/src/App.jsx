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
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-zinc-900 text-gray-100"
          }`}
        >
          <Navbar />
          <MainPage></MainPage>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
