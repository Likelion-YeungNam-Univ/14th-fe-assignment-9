import React from 'react';
import pfIcon from './assets/pf.png'; 

const RightBar = () => {
  const recommendations = [
    { id: 1, name: 'user1', info: 'id1님 외 30명이 팔로우함' },
    { id: 2, name: 'user2', info: 'id2님 외 30명이 팔로우함' },
    { id: 3, name: 'user3', info: 'id3님 외 8명이 팔로우함' },
    { id: 4, name: 'user4', info: 'id4님 외 8명이 팔로우함' },
    { id: 5, name: 'user5', info: 'id5님 외 2명이 팔로우함' },
  ];

  return (
    <div className="hidden lg:block w-[320px] pt-10 pr-4 ml-10">
      
 
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={pfIcon} alt="my profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold">my_id</p>
            <p className="text-sm text-gray-500">내 이름</p>
          </div>
        </div>
        <button className="text-xs font-bold text-blue-500 hover:text-black">전환</button>
      </div>

   
      <div className="flex justify-between py-2 mb-2">
        <span className="text-sm font-bold text-gray-500">회원님을 위한 추천</span>
        <button className="text-xs font-bold hover:opacity-50">모두 보기</button>
      </div>

    
      <div className="flex flex-col gap-3">
        {recommendations.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src={pfIcon} alt="user" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">{user.name}</span>
                <span className="text-[11px] text-gray-400 truncate w-[160px]">{user.info}</span>
              </div>
            </div>
            <button className="text-xs font-bold text-blue-500 hover:text-black">팔로우</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;