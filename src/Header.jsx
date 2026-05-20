import React from 'react'
import { useContext } from 'react'
import { darkModeContext } from './App';


const Header = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  if(darkMode !== true) {
    return (
      <div className="flex justify-between items-center h-16 p-4 gap-4">
        <div className="justify-start items-center flex gap-4">
          <a className="text-black hover:underline justify-start text-[13px]">Google 정보</a>
          <a className="text-black hover:underline justify-start text-[13px]">스토어</a>
        </div>
        <div className="justify-end items-center flex gap-3">
          <a className="text-black hover:underline justify-start text-[13px]">Gmail</a>
          <a className="text-black hover:underline justify-start text-[13px]">이미지</a>
          <button className="p-2.5 text-black hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 11.33L18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.35-.81z" />
            </svg>
          </button> 
          <button className="p-2.5 text-black hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </button> 
          <button className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
            O
          </button>
        </div>  
      </div>
    );
  } 
  return (
    <div className="flex justify-between items-center h-16 p-4 gap-4">
        <div className="justify-start items-center flex gap-4">
          <a className="hover:underline justify-start text-[13px]">Google 정보</a>
          <a className="hover:underline justify-start text-[13px]">스토어</a>
        </div>
        <div className="justify-end items-center flex gap-3">
          <a className="hover:underline justify-start text-[13px]">Gmail</a>
          <a className="hover:underline justify-start text-[13px]">이미지</a>
          <button className="p-2.5 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 11.33L18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.35-.81z" />
            </svg>
          </button> 
          <button className="p-2.5 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </button> 
          <button className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
            O
          </button>
        </div>  
      </div>
  );
};

export default Header;