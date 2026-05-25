import React from 'react';
import Sidebar from './Sidebar';
import Story from './Story';
import Peed from './Peed';
import RightBar from './RightBar'; 
import { useTheme } from './ThemeContext'; // themecontext 추가

function App() {
  const { isDarkMode } = useTheme(); // 다크모드 추가

  return (
    // isDarkMode에 따라 배경색 바꾸기
    <div className={`flex min-h-screen justify-center transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Sidebar />
  
      <main className="flex ml-[70px] pt-4">
 
        <div className="flex flex-col items-center">
          <Story />
          <Peed />
        </div>

        <RightBar />

      </main>
    </div>
  );
}

export default App;