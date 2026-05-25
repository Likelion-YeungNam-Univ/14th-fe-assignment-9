import React from 'react';
import Sidebar from './Sidebar';
import Story from './Story';
import Peed from './Peed';
import RightBar from './RightBar'; 
import { useTheme } from './ThemeContext'; // themecontext 추가


import LanguageSelector from './components/LanguageSelector';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const { isDarkMode } = useTheme(); // 다크모드 가져오기

  return (
    // 다크모드에 따라 배경색과 글자색 바꾸기
    <div className={`flex min-h-screen justify-center transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Sidebar />
  
      <main className="flex ml-[70px] pt-4">
 
        <div className="flex flex-col items-center">
          
          {/* 언어 전환 기능 Story 위에 추가 */}
          <div className="flex flex-col items-center mb-8 space-y-3 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
            <WelcomeMessage />
            <LanguageSelector />
          </div>

          <Story />
          <Peed />
        </div>

        <RightBar />

      </main>
    </div>
  );
}

export default App;