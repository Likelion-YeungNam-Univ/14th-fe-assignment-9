import React from 'react';

const videoItem = {
  thumbnail: (
    <img
      alt=""
      src="https://i.ytimg.com/vi/Bc3Ra5pA09Q/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&amp;rs=AOn4CLBbHExzVOs0WFiet8mQY61aY-q0HQ&amp;usqp=CCk"
      className="w-[200px] rounded-[10px]"
    ></img>
  ),
  name: '전주만 나왔을 뿐인데 모두가 기절한 레전드 무대!',
  subInfo: { view: 1051 }, // 만 단위,
};

const ShortForm = () => {
  const videoItems = Array.from({ length: 6 }, (_, i) => ({
    ...videoItem,
    id: i,
  }));
  return (
    <>
      <div className="flex w-full mt-5 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[24px] h-[24px]"
        >
          <path
            d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
            fill="#f03"
          ></path>
          <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
        </svg>
        <p id="logo" className="text-12px font-bold">
          {' '}
          Shorts
        </p>
      </div>

      <a
        id="video-container"
        className="flex w-full h-[420px] mt-2 justify-between"
      >
        {videoItems.map((item) => (
          <div
            id="video"
            key={item.id}
            className="px-4 py-1 hover:bg-gray-200 transition-colors duration-500 rounded-[20px]"
          >
            <div id="thumbnail">{item.thumbnail}</div>
            <div id="description" className="flex">
              <div
                id="name"
                className="text-[12px] w-[180px] mt-2 line-clamp-2 overflow-hidden"
              >
                {item.name}
              </div>
              <div id="settings" className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[24px] h-[24px]"
                >
                  <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z"></path>
                </svg>
              </div>
            </div>
            <div id="sub-info" className="text-gray-500 text-[10px] mt-[2px]">
              조회수 {item.subInfo.view}만회
            </div>
          </div>
        ))}
      </a>
    </>
  );
};

export default ShortForm;
