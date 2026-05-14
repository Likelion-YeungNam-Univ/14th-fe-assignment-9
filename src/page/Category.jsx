import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const categoryItems = [
  { id: 1, text: '전체' },
  { id: 2, text: '뉴스' },
  { id: 3, text: '음악' },
  { id: 4, text: '게임' },
  { id: 5, text: '라이브' },
  { id: 6, text: '팟캐스트' },
  { id: 7, text: '야구' },
  { id: 8, text: '축구' },
  { id: 9, text: '관광' },
  { id: 10, text: '요리' },
  { id: 11, text: '액션 어드벤쳐 게임' },
  { id: 12, text: '애니메이션' },
  { id: 13, text: '최근에 업로드된 동영상' },
];

const Category = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="flex w-full h-[50px] items-center gap-3 overflow-x-auto scrollbar-hide">
      {categoryItems.map((item) => (
        <button
          key={item.id}
          className={`flex h-[32px] whitespace-nowrap items-center px-3 text-[14px] font-medium rounded-[8px] transition-colors ${
            theme === 'light'
              ? 'bg-gray-100 hover:bg-gray-200 text-black'
              : 'bg-gray-800 hover:bg-gray-700 text-white'
          }`}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
};

export default Category;
