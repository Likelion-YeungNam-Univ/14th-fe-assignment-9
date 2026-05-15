import React from "react";
import Category from "./Category";
import LongForm from "./LongForm";
import ShortForm from "./ShortForm";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { isLight } = useTheme();
  return (
    <div className={`app-container ${isLight ? "light-mode" : ""}`}>
      <Header />

      <div className="body-container">
        <Sidebar />

        <main className="main-content">
          <Category />
          <ShortForm />
          <LongForm />
        </main>
      </div>
    </div>
  );
};

export default App;
