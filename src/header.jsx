import React, { useContext, useState } from 'react'

import Icon from "./image/subbutton.png";
import ThemeContext from './ThemeContext';

import { FiMenu } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosMailOpen } from "react-icons/io";
import { FaCoffee } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { ImHome3 } from "react-icons/im";
import { PiMapPinFill } from "react-icons/pi";
import { SiWebtoon } from "react-icons/si";
import { CgMoreAlt } from "react-icons/cg";



const Header = () => {

    const { isDark, changeTheme } = useContext(ThemeContext)

    const goingButton_Style = `w-11 h-11 rounded-2xl shadow-sm flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-white'}`
    const goingButtonTxt_Style = `text-sm ${isDark ? 'text-white' : 'text-black'}`

  return (

    <div id="header" className={isDark ? 'bg-black' : 'bg-white'}>
      <div id = "toparea" className="flex justify-between items-center px-10 pt-1">
        <div id="toplf" className="flex">
          <div className="w-15 h-15 flex justify-center items-center">
            <FiMenu className={`text-4xl ${isDark ? 'text-white' : 'text-black'}`} />
          </div>
          <div className="w-15 h-15 flex justify-center items-center">
            <BsWallet2 className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`}/>
          </div>
        </div>
        
        <div id="toprf" className="flex gap-2">
          <div className="w-15 h-15 flex justify-center items-center">
            <FaRegBell className={`text-4xl ${isDark ? 'text-white' : 'text-black'}`}/>
          </div>
          <div className="w-15 h-15 flex justify-center items-center">
            <HiOutlineShoppingBag className={`text-5xl ${isDark ? 'text-white' : 'text-black'}`}/>
          </div>

          <button onClick={changeTheme} className={`border px-3 py-1 rounded-xl text-sm ${isDark ? 'text-white' : 'text-black'}`}>
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
        
      </div>
      <div id = "searchbar" className="max-w-[750px] mx-auto py-3">
        <div className="h-[60px] border-2 border-green-500 rounded-full flex items-center px-6">
          <div className="text-3xl font-black text-green-500 mr-4">N</div>
          <div className="text-lg text-gray-400">검색어를 입력해 주세요</div>
        </div>

      <div id="goingButton" className="max-w-[750px] flex justify-center gap-6 mt-6">
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <IoIosMailOpen className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>메일</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <FaCoffee className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>카페</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <img src={Icon} className="w-9 h-9"/>
            </div>
            <div className={goingButtonTxt_Style}>블로그</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <RiShoppingBag4Fill className='text-3xl text-blue-700'/>
            </div>
            <div className={goingButtonTxt_Style}>쇼핑</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <FaNewspaper className='text-3xl text-blue-700'/>
            </div>
            <div className={goingButtonTxt_Style}>뉴스</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <PiChartLineUpBold className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>증권</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <ImHome3 className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>부동산</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <PiMapPinFill className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>지도</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <SiWebtoon className='text-3xl text-green-600'/>
            </div>
            <div className={goingButtonTxt_Style}>웹툰</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className={goingButton_Style}>
                <img src={Icon} className="w-9 h-9"/>
            </div>
            <div className={goingButtonTxt_Style}>치지직</div>
        </div>
        <div className={goingButton_Style}>
          <CgMoreAlt className={`text-3xl ${isDark ? 'text-white' : 'text-black'}`}/>
        </div>
        
        
      </div>
      </div>
    </div>

  )
}

export default Header