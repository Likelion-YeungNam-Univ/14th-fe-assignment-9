import React from 'react'
import pfIcon from './assets/likelionlogo.png'
import postImg from './assets/peed.png'
import { useTheme } from './ThemeContext'; // themecontext 추가

const Peed = () => {
  const { isDarkMode } = useTheme(); // 테마 추가

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 테두리선 색을 테마에 맞춰 동적 지정 */}
      <div className={`w-full max-w-[470px] mt-4 mb-12 border-b pb-10 pl-{100px} ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      
        <div className="flex items-center gap-3 mb-3 px-1">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={pfIcon} alt="profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-sm">yu_like_lion</span>
        </div>

        <div className="rounded-sm overflow-hidden">
          <img src={postImg} alt="post content" className="w-full" />
        </div>

        <div className="mt-3 px-1">
          <div className="flex gap-4 mb-2 text-2xl">
            <button className="hover:opacity-50">❤️</button> 
            <button className="hover:opacity-50">💬</button>
            <button className="hover:opacity-50">📨</button>
          </div>
          <p className="text-xs font-bold">좋아요 125개</p>
        </div>
      </div>

    </div>
  );
};

export default Peed;