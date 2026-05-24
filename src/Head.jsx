import React, { useState, useContext } from "react";
import Theme from "./context/Theme";
import icon from "./assets/image.png";
import mic from "./assets/mic.png";
import searchIcon from "./assets/readGlass.png";
import menubar from "./assets/menubar.png";

const categoryList = [
  { id: 1, category: "전체" },
  { id: 2, category: "뉴스" },
  { id: 3, category: "게임" },
  { id: 4, category: "음악" },
  { id: 5, category: "팟캐스트" },
  { id: 6, category: "라이브" },
  { id: 7, category: "야구" },
  { id: 8, category: "축구" },
  { id: 9, category: "관광" },
  { id: 10, category: "만화 영화" },
  { id: 11, category: "액션 어드벤처 게임" },
  { id: 12, category: "요리" },
  { id: 13, category: "최근에 업로드된 동영상" },
];


const Head = () => {

  const { isDark, setIsDark } = useContext(Theme);

  return (
          <div className={`sticky top-0 z-50 ${isDark ? 'bg-[#0f0f0f]/90' : 'bg-[#ffffff]/90'} backdrop-blur-md flex flex-col`}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3 mt-2">
          <img src={menubar} alt="menubar" className="w-5 h-5 ${isDark ? 'invert' : ''}" />
        <div className="flex items-center">
          <img src={icon} alt="logo" className="w-9 h-9" />
          <h1 className="text-xl font-bold ${isDark ? 'text-white' : 'text-black'}">YouTube</h1>
        </div>
        </div>
     

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 mt-3">
          <div className="flex items-center border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded-full overflow-hidden w-[35vw]">
            <input
              type="text"
              placeholder="검색"
              className="px-4 py-1 w-full outline-none bg-transparent ${isDark ? 'text-white' : 'text-black'}"
            />
            <button className="px-4 py-1 ${isDark ? 'bg-[#2d2d2d]' : 'bg-gray-600 border-gray-300'} rounded-full border-l">
              <img src={searchIcon} alt="search" className="w-7 h-7 ${isDark ? 'invert' : ''}" />
            </button>
          </div>
          <div className="p-2 ${isDark ? 'bg-[#2d2d2d]' : 'bg-gray-100 border-gray-300'} rounded-full cursor-pointer">
            <img src={mic} alt="mic" className="w-7 h-7 ${isDark ? 'invert' : ''}" />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <button onclick={() => setIsDark(!isDark)} className="text-white font-bold rounded-full bg-dark border-white text-sm px-2">
            {isDark ? "dark" : "light"}
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-content cursor-pointer overflow-hidden">
            <span className="text-white text-sm font-bold w-full text-center">U</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 px-4 py-2 overflow-x-auto scrollbar-hide mt-1">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className={`${isDark ? 'bg-[#2d2d2d] text-white hover:bg-[#3d3d3d]' : 'bg-gray-100 text-black hover:bg-gray-200'} font-bold py-1 px-4 text-sm rounded-lg whitespace-nowrap cursor-pointer transition-colors`}
          >
            {category.category}
          </div>
        ))}
      </div>
    </div>

  );
};

export default Head;