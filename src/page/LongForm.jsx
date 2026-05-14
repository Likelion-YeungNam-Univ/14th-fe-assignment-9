import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const videoItem = {
  thumbnailImg: (
    <img
      alt=""
      src="https://i.ytimg.com/vi/7fZxBvmKcN4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&amp;rs=AOn4CLBPrLo1xXC9hHuHG71tc3DuHLwm5g"
      className="rounded-[10px] w-full"
    ></img>
  ),
  youtuberLogo: (
    <img
      alt=""
      src="https://yt3.ggpht.com/rcMDJZguhdzs3MdJu6hZegHQXrCp2tb1IbjyPzdWrWPLFgJtCYAalVwbtmj2rykGbsehpHLhyw=s88-c-k-c0x00ffffff-no-rj"
      className="w-[36px] h-[36px] rounded-full overflow-hidden"
    ></img>
  ),
  name: '𝗽𝗹𝗮𝘆𝗹𝗶𝘀𝘁 [Cafe] “우연히 들었는데, 너무 좋아서 검색해본 음악들” | 틀어 놓기만 해도 기분 좋아지는 노동요 | 하루숲 플리 👫💗',
  youtuberName: 'HaruSoupe',
  subInfo: {
    view: 293,
    date: 7,
  },
};

const LongForm = () => {
  const { theme } = useContext(ThemeContext);
  const videoItems = Array.from({ length: 4 }, (_, i) => ({
    ...videoItem,
    id: i,
  }));

  return (
    <div
      id="video-container"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
    >
      {videoItems.map((item) => (
        <a
          id="video"
          key={item.id}
          className={`p-2 transition-colors duration-300 rounded-[12px] cursor-pointer ${
            theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
          }`}
        >
          <div id="thumbnail" className="aspect-video overflow-hidden mb-3">
            {item.thumbnailImg}
          </div>
          <div id="description" className="flex gap-3">
            <div className="flex-shrink-0">{item.youtuberLogo}</div>
            <div className="flex flex-col flex-1 overflow-hidden">
              <h3 className="text-sm font-bold line-clamp-2 mb-1">
                {item.name}
              </h3>
              <div className="text-[12px] text-gray-500">
                <p>{item.youtuberName}</p>
                <p>
                  조회수 {item.subInfo.view}만회 • {item.subInfo.date}개월 전
                </p>
              </div>
            </div>
            <button
              className={`h-8 w-8 flex items-center justify-center rounded-full ${theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`}
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
        </a>
      ))}
    </div>
  );
};

export default LongForm;
