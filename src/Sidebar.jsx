import React from 'react';
import icon1 from './assets/insta_icon.png'
import icon2 from './assets/home_icon.png'
import icon3 from './assets/reels_icon.png'
import icon4 from './assets/dm_icon.png'
import icon5 from './assets/search_icon.png'
import icon6 from './assets/icon.png'
import icon7 from './assets/like_icon.png'
import icon8 from './assets/plus_icon.png'
import icon9 from './assets/pf.png'
import icon10 from './assets/3line_icon.png'
import icon11 from './assets/3rect_icon.png'

import {useTheme} from './ThemeContext';

const Sidebar = () => {
  const {isDarkMode} = useTheme(); //테마 추가
 return (
    // 테마에 맞춰 배경색, 테두리선 변경
    <div className={`w-[70px] h-screen border-r flex flex-col items-center py-5 fixed left-0 top-0 transition-colors duration-300 ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
      
      <div className="cursor-pointer p-2 mb-10 hover:scale-110 transition-transform">
        <img src={icon1} alt="logo" className={`w-7 h-7 object-contain ${isDarkMode ? 'invert' : ''}`} />
      </div>

      <div className="flex flex-col items-center gap-1">
        {[icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9].map((img, index) => (
          // 다크 모드일 때 스크롤시 배경 회색
          <div key={index} className={`cursor-pointer p-1 rounded-lg transition-all ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
            <img src={img} alt="menu" className={`w-7 h-7 object-contain ${isDarkMode && index !== 7 ? 'invert' : ''}`} />
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center gap-1">
        <div className={`cursor-pointer p-2 rounded-lg transition-all ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
          <img src={icon11} alt="extra" className={`w-7 h-7 object-contain ${isDarkMode ? 'invert' : ''}`} />
        </div>
        <div className={`cursor-pointer p-2 rounded-lg transition-all ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
          <img src={icon10} alt="more" className={`w-7 h-7 object-contain ${isDarkMode ? 'invert' : ''}`} />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;