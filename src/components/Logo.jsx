import React from 'react'
import logo from '../images/YU_LikeLion.png'


const Logo = () => {
  return (
    <div className="flex justify-center p-2 mt-4">
      <img
        src={logo} 
        alt="영남대학교" 
        className="w-12 h-12 object-contain" 
      />
      <div className="ml-2 text-2xl flex flex-col">
        <span className="text-2xl tracking-wide font-extrabold text-blue-900">영남대학교</span>
        <span className="text-blue-800 text-xs font-serif">Yeungnam University</span>
      </div>
    </div>
  )
}

export default Logo