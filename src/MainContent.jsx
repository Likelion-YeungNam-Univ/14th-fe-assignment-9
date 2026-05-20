import React from 'react'
import {useContext} from 'react'
import { darkModeContext } from './App';

const MainContent = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);
    if(darkMode !== true) {
      return (
        <div className="flex-1 flex flex-col items-center p-4 justify-center gap-6">
         {/* 구글 */}
        <div className="text-7xl font-bold mb-4 flex justify-center items-center">
          <a className ="text-[#4285F4]">G</a>
          <a className="text-[#EA4335]">o</a>
          <a className="text-[#FBBC04]">o</a>
          <a className="text-[#4285F4]">g</a>
          <a className="text-[#34A853]">l</a>
          <a className="text-[#EA4335]">e</a> 
        </div>
         {/* 검색창 */}
         <div className="shadow-sm flex items-center w-full max-w-2xl bg-[#ffffff] rounded-full p-2 gap-2 border-[1px] border-gray-300 hover:shadow-lg transition-shadowfocus-within:border-slate-600 focus-within:shadow-lg transition-colors">
          {/* +버튼 */}
          <button className="justify-center items-center w-8 h-9 text-black flex text-[30px] hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            +
          </button>
         
          <input 
              type="text" 
              className="flex-1 h-[30px] w-[500px] bg-gray-300 bg-transparent text-black outline-none text-base"
          />

          {/* 가상 키보드  */}
          <button className="p-2 text-gray-800 hover:text-gray-500 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
            </svg>
          </button>

          {/* 마이크 버튼 */}
          <button className="p-2 text-gray-800 hover:text-gray-500 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5 " fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
            </svg>
          </button>

          
          {/* 렌즈 아이콘 */}
          <button className="p-2 text-gray-800 hover:text-gray-500 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>

          {/* AI mode버튼 */}
          <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4285f4,#ea4335,#fbbc04,#34a853,#4285f4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
            <span className="relative flex items-center gap-1.5 px-4 py-1.5 bg-gray-300 rounded-full transition-colors z-10 text-gray-200">
  
              <svg className="size-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" />
                <path d="M16 6l1 1 1-1-1-1-1 1z" fill="currentColor" stroke="none" />
              </svg>
              <span className=" text-black text-sm font-bold">AI 모드</span>
            </span>

          </button>
        </div>  
        
         {/* 검색창 밑에 버튼 2개 */}
        <div className='m-[2px]'>
           {/* google Search 버튼 */}
          <button className='m-[8px] bg-gray-100 text-black border border-transparent hover:border-[#5f6368] px-4 py-1.5 rounded-md text-sm transition-colors'>
            Google 검색
          </button>
           {/* I'm Feeling Lucky 버튼 */}
          <button className='m-[8px] bg-gray-100 text-black text-[14px] py-1.5 px-4 rounded-[6px] hover:border-[#5f6368] border border-transparent'>
            I'm Feeling Lucky
          </button>
        </div>
      </div>
      )
    }  
  return (
      <div className="flex-1 flex flex-col items-center p-4 justify-center gap-6">
         {/* 구글 */}
        <div className="text-white text-7xl font-bold mb-4">
          Google 
        </div>
         {/* 검색창 */}
         <div className="flex items-center w-full max-w-2xl bg-[#4f5256] rounded-full p-2 gap-2 border border-transparent focus-within:border-slate-600 focus-within:shadow-lg focus-within:bg-[#1a1b1e] hover:bg-gray-700 transition-colors">
          {/* +버튼 */}
          <button className="justify-center items-center w-8 h-9 text-white flex text-[30px] hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            +
          </button>
         
          <input 
              type="text" 
              className="flex-1 h-[30px] w-[500px] bg-gray-300 bg-transparent text-white outline-none text-base"
          />

          {/* 가상 키보드  */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
            </svg>
          </button>

          {/* 마이크 버튼 */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
            </svg>
          </button>

          
          {/* 렌즈 아이콘 */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>

          {/* AI mode버튼 */}
          <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4285f4,#ea4335,#fbbc04,#34a853,#4285f4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
            <span className="relative flex items-center gap-1.5 px-4 py-1.5 bg-[#303134] rounded-full transition-colors z-10 text-gray-200">
  
              <svg className="size-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" />
                <path d="M16 6l1 1 1-1-1-1-1 1z" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-sm font-medium">AI 모드</span>
            </span>

          </button>
        </div>  
        
         {/* 검색창 밑에 버튼 2개 */}
        <div className='m-[2px]'>
           {/* google Search 버튼 */}
          <button className='m-[8px] bg-[#303134] text-[#e8eaed] border border-transparent hover:border-gray-200 px-4 py-1.5 rounded-md text-sm transition-colors hover:shadow-sm transition-colors'>
            Google 검색
          </button>
           {/* I'm Feeling Lucky 버튼 */}
          <button className='m-[8px] bg-[#303134] text-white text-[14px] py-1.5 px-4 rounded-[6px] hover:border-gray-200 border border-transparent hover:shadow-sm transition-colors'>
            I'm Feeling Lucky
          </button>
        </div>
      </div>
  );
};

export default MainContent;