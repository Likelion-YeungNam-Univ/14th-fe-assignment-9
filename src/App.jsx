import React, { useState } from 'react';
import Header from './page/Header';
import GuideRenderer from './page/GuideRenderer';
import Category from './page/Category';
import LongForm from './page/LongForm';
import ShortForm from './page/ShortForm';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`flex flex-col h-screen overflow-hidden transition-colors ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
      >
        <Header />

        <div id="main-container" className="flex flex-1 overflow-hidden">
          <GuideRenderer />
          <div id="contents" className="flex-1 overflow-y-auto px-5">
            <div
              className={`sticky top-0 z-20 transition-colors ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}
            >
              <Category />
            </div>

            <LongForm />
            <ShortForm />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
