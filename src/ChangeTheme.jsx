import React from 'react'
import { createContext, useContext } from 'react'
import { darkModeContext } from './App';

const ChangeTheme = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  if(darkMode !== true){
    return(
      <div className =" flex justify-center items-center mb-[100px]">
      <button className="bg-gray-100 text-black px-4 py-2 rounded-md hover:border-[1px]" 
      onClick={() => {
        setDarkMode(!darkMode);
      }}>
        Dark Mode
      </button>
    </div>
    )
  }
  return (
    <div className =" flex justify-center items-center mb-[100px]">
      <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600" 
      onClick={() => {
        setDarkMode(!darkMode);
      }}>
        White Mode
      </button>
    </div>
  )
}

export default ChangeTheme