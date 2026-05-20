import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import ChangeTheme from './ChangeTheme'
import {useState, useEffect, createContext, useContext} from 'react'

export const darkModeContext = createContext(true); 
//Context API는 따로 export 해주어야 다른 컴포넌트에서 import 해서 사용할 수 있다.
// 함수 컴포넌트 밖에 만들어야 하고, 다른 파일로 보낼려면 export를 해줘야 함
const App = () => {
  
  const [darkMode, setDarkMode] = useState(true);
  if(darkMode !== true) {
    return (
      <darkModeContext.Provider value= {{darkMode, setDarkMode}}>
        <div className="flex flex-col h-screen bg-[#FFFFFF] text-gray-300">
          <Header /> 
          <MainContent />
          <ChangeTheme />
          <Footer />
        </div>
      </darkModeContext.Provider>  
    );
  }
  return (
    <darkModeContext.Provider value= {{darkMode, setDarkMode}}>
      <div className="flex flex-col h-screen bg-[#1f2125] text-gray-300">
        <Header /> 
        <MainContent />
        <ChangeTheme />
        <Footer />
      </div>
    </darkModeContext.Provider>  
  );  
};


export default App
