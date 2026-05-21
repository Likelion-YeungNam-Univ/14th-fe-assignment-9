import React, { useState } from 'react'
import ThemeContext from './ThemeContext';
import Goto from "./image/goto.png";
import Pay from "./image/pay.png";
import Alarm from "./image/alarm.png";
import Shop from "./image/shopping.png";
import Icon from "./image/subbutton.png";
import SeeMore from "./image/seemore.png";


const Header = () => {

    const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>

    <div id="header" className="bg-white">
      <div id = "toparea" className="flex justify-between items-center px-10 pt-1">
        <div id="toplf" className="flex">
          <div className="w-15 h-15 flex justify-center items-center">
            <img src={Goto} className="w-9 h-9"/>
          </div>
          <div className="w-15 h-15 flex justify-center items-center">
            <img src={Pay} className="w-13 h-11"/>
          </div>
        </div>
        
        <div id="toprf" className="flex">
          <div className="w-15 h-15 flex justify-center items-center">
            <img src={Alarm} className="w-9 h-9"/>
          </div>
          <div className="w-15 h-15 flex justify-center items-center">
            <img src={Shop} className="w-9 h-9"/>
          </div>
        </div>
        
      </div>
      <div id = "searchbar" className="max-w-[750px] mx-auto py-3">
        <div className="h-[60px] border-2 border-green-500 rounded-full flex items-center px-6">
          <div className="text-3xl font-black text-green-500 mr-4">N</div>
          <div className="text-lg text-gray-400">검색어를 입력해 주세요</div>
        </div>

      <div id="goingButton" className="max-w-[750px] flex justify-center gap-6 mt-6">
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={Icon} className="w-9 h-9"/>
        </div>
        <div className="w-11 h-11 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <img src={SeeMore} className="w-8 h-8"/>
        </div>
        
        
      </div>
      </div>
    </div>

    </ThemeContext.Provider>
  )
}

export default Header