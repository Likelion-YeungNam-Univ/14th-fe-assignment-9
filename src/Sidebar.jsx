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

const Sidebar = () => {
  return (
    <div className="w-[70px] h-screen border-r border-gray-200 flex flex-col items-center py-5 fixed left-0 top-0 bg-white">
      
      <div className="cursor-pointer p-2 mb-10 hover:scale-110 transition-transform">
        <img src={icon1} alt="logo" className="w-7 h-7 object-contain" />
      </div>


      <div className="flex flex-col items-center gap-1">
        {[icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9].map((img, index) => (
          <div key={index} className="cursor-pointer hover:bg-gray-100 p-1 rounded-lg transition-all">
            <img src={img} alt="menu" className="w-7 h-7 object-contain" />
          </div>
        ))}
      </div>

    
      <div className="mt-auto flex flex-col items-center gap-1">
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
          <img src={icon11} alt="extra" className="w-7 h-7 object-contain" />
        </div>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
          <img src={icon10} alt="more" className="w-7 h-7 object-contain" />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;