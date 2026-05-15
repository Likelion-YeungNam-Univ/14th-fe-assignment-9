import React from "react";
import "./LongForm.css";
import catImage from "./image/cat.jpg";
import profileImage from "./image/profile.jpeg";

const longList = [
  {
    id: 1,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다@@@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
  {
    id: 2,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 구성해보기 리액트",
    channel: "김정운",
    views: "200만회",
    uploaded: "30분 전",
  },
  {
    id: 3,
    thumbnail: catImage,
    profile: profileImage,
    title: "리액트 구성 배워보기 실습과제",
    channel: "임태현",
    views: "300만회",
    uploaded: "2일 전",
  },
  {
    id: 4,
    thumbnail: catImage,
    profile: profileImage,
    title: "리액트 과제 해보기222",
    channel: "류승현",
    views: "150만회",
    uploaded: "12일 전",
  },
  {
    id: 5,
    thumbnail: catImage,
    profile: profileImage,
    title: "과제 하는 중입니다~!@",
    channel: "조민서",
    views: "110만회",
    uploaded: "3일 전",
  },
  {
    id: 6,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다~!@~!@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
  {
    id: 7,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다~!@~!@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
  {
    id: 8,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다~!@~!@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
  {
    id: 9,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다~!@~!@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
  {
    id: 10,
    thumbnail: catImage,
    profile: profileImage,
    title: "롱폼 제목입니다~!@~!@",
    channel: "강보성",
    views: "100만회",
    uploaded: "1일 전",
  },
];

const LongForm = () => {
  return (
    <div className="longform-container">
      {longList.map((long) => (
        <div key={long.id} className="longform-card">
          <div className="longform-thumbnail">
            <img src={long.thumbnail} className="thumbnail-image" />
          </div>

          <div className="longform-info">
            <div className="longform-profile">
              <img src={long.profile} className="profile-image" />
            </div>
            <div className="longform-details">
              <h3 className="longform-title">{long.title}</h3>
              <p className="longform-channel">{long.channel}</p>
              <p className="longform-stats">
                {long.views} · {long.uploaded}
              </p>
            </div>
            <button className="long-menu-inner-btn">⋮</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LongForm;
