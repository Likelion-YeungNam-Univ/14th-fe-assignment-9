import React from 'react'
import ThemeContext from '../ThemeContext';

const sortList = [
  { id: 1, name: "인기순" },
  { id: 2, name: "업데이트순" },
  { id: 3, name: "조회순" },
  { id: 4, name: "별점순" },
];

const SectionHeader = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="flex items-center mb-5 gap-6">
      <div className="flex items-center gap-4">
        <h2 className={`text-3xl font-bold ${theme === "light" ? "text-black" : "text-white"
          }`}>
          목요웹툰
        </h2>

        <div className={`flex gap-3 text-base ${theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
          {sortList.map((item, index) => (
            <span key={item.id}
              className={`cursor-pointer ${theme === "light" ? "hover:text-black" : "hover:text-white"
                }`}>
              {item.name}
              {index !== sortList.length - 1 && (
                <span className={`mx-2 ${theme === "light" ? "text-gray-300" : "text-gray-600"
                  }`}>
                  •
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionHeader