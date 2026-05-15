import React from "react";
import "./Category.css";

const categoryList = [
  { id: 1, category: "전체" },
  { id: 2, category: "스포츠" },
  { id: 3, category: "음악" },
  { id: 4, category: "믹스" },
  { id: 5, category: "게임" },
  { id: 6, category: "라이브" },
  { id: 7, category: "최근에 업로드된 동영상" },
  { id: 8, category: "인기 동영상" },
  { id: 9, category: "맞춤 동영상" },
];

const Category = () => {
  return (
    <div className="category-container">
      {categoryList.map((item) => (
        <div key={item.id} className="category-item">
          {item.category}
        </div>
      ))}
    </div>
  );
};

export default Category;
