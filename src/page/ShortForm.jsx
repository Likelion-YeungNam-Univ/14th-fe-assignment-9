import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const videoItem = {
  thumbnail: (
    <img
      alt=""
      src="https://i.ytimg.com/vi/Bc3Ra5pA09Q/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&amp;rs=AOn4CLBbHExzVOs0WFiet8mQY61aY-q0HQ&amp;usqp=CCk"
      className="w-full aspect-[9/16] object-cover rounded-[12px]"
    ></img>
  ),
  name: '전주만 나왔을 뿐인데 모두가 기절한 레전드 무대!',
  subInfo: { view: 1051 },
};

const ShortForm = () => {
  const { theme } = useContext(ThemeContext);
  const videoItems = Array.from({ length: 6 }, (_, i) => ({
    ...videoItem,
    id: i,
  }));

  return (
    <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
      <div className="flex items-center gap-2 mb-4 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
            fill="#f03"
          ></path>
          <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
        </svg>
        <p
          className={`text-lg font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          Shorts
        </p>
      </div>

      <div
        id="video-container"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
      >
        {videoItems.map((item) => (
          <div
            id="video"
            key={item.id}
            className={`p-2 transition-colors duration-300 rounded-[12px] cursor-pointer ${
              theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
            }`}
          >
            <div id="thumbnail" className="mb-2">
              {item.thumbnail}
            </div>
            <div
              id="description"
              className="flex justify-between items-start gap-1"
            >
              <div
                id="name"
                className={`text-sm font-bold line-clamp-2 leading-snug ${theme === 'light' ? 'text-black' : 'text-white'}`}
              >
                {item.name}
              </div>
              <button
                className={`h-8 w-8 flex items-center justify-center rounded-full flex-shrink-0 ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 ${theme === 'light' ? 'fill-black' : 'fill-white'}`}
                >
                  <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z"></path>
                </svg>
              </button>
            </div>
            <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
              조회수 {item.subInfo.view}만회
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortForm;
