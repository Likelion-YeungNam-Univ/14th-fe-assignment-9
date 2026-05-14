import React from 'react';

const categoryItems = [
  {
    id: 1,
    text: '전체',
  },
  {
    id: 2,
    text: '뉴스',
  },
  {
    id: 3,
    text: '음악',
  },
  {
    id: 4,
    text: '게임',
  },
  {
    id: 5,
    text: '라이브',
  },
  {
    id: 6,
    text: '팟캐스트',
  },
  {
    id: 7,
    text: '야구',
  },
  {
    id: 8,
    text: '축구',
  },
  {
    id: 9,
    text: '관광',
  },
  {
    id: 10,
    text: '요리',
  },
  {
    id: 11,
    text: '액션 어드벤쳐 게임',
  },
  {
    id: 12,
    text: '애니메이션',
  },
  {
    id: 13,
    text: '최근에 업로드된 동영상',
  },
];

const Category = () => {
  return (
    <nav className="flex w-full h-[40px] gap-4">
      {categoryItems.map((item) => (
        <button
          key={item.id}
          className="flex h-[30px] items-center px-2 bg-gray-100 text-[12px] rounded-[10px]"
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
};

export default Category;
