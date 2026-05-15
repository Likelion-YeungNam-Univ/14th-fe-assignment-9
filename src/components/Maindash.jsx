import React from 'react'


const MainHeader = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-white">
      <h1 className="text-3xl ml-3 font-medium text-gray-700">대시보드</h1>
      
      <button className="text-gray-400 text-xl hover:text-gray-600">⋮</button>
    </header>
  );
};

export default MainHeader;