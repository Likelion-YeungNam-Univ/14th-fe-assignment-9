import React from "react";
import "./ShortForm.css";
import catImage from "./image/cat.jpg";

const shortList = [
  {
    id: 1,
    thumbnail: catImage,
    title: "고양이 모음집",
    views: "100만회",
  },
  { id: 2, thumbnail: catImage, title: "리액트 기초", views: "50만회" },
  {
    id: 3,
    thumbnail: catImage,
    title: "리액트 배우기",
    views: "12만회",
  },
  {
    id: 4,
    thumbnail: catImage,
    title: "리액트 구성배우기",
    views: "88만회",
  },
];

const ShortForm = () => {
  return (
    <section className="shorts-section">
      <h2 className="shorts-header">Shorts</h2>

      <div className="shorts-form-list">
        {shortList.map((shorts) => (
          <div key={shorts.id} className="shorts-card">
            <div className="shorts-thumbnail">
              <img src={shorts.thumbnail} alt={shorts.title} />
              <button className="shorts-menu-inner-btn">⋮</button>
              <div className="shorts-info-overlay">
                <h6 className="shorts-title">{shorts.title}</h6>
                <p className="shorts-views">{shorts.views}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortForm;
