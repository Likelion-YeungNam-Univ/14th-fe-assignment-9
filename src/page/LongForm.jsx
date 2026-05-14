import React from 'react';

const videoItem = {
  thumbnailImg: (
    <img
      alt=""
      src="https://i.ytimg.com/vi/7fZxBvmKcN4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBPrLo1xXC9hHuHG71tc3DuHLwm5g"
      className="rounded-[10px]"
    ></img>
  ),
  youtuberLogo: (
    <img
      alt=""
      src="https://yt3.ggpht.com/rcMDJZguhdzs3MdJu6hZegHQXrCp2tb1IbjyPzdWrWPLFgJtCYAalVwbtmj2rykGbsehpHLhyw=s88-c-k-c0x00ffffff-no-rj"
      className="w-[30px] h-[30px] rounded-full overflow-hidden"
    ></img>
  ),
  name: '𝗽𝗹𝗮𝘆𝗹𝗶𝘀𝘁 [Cafe] “우연히 들었는데, 너무 좋아서 검색해본 음악들” | 틀어 놓기만 해도 기분 좋아지는 노동요 | 하루숲 플리 👫💗',
  youtuberName: 'HaruSoupe',
  subInfo: {
    view: 293, // 만 단위
    date: 7, // 개월 단위
  },
};

const LongForm = () => {
  // videoItem 을 크기가 4인 배열(videoItems)로 복사.
  const videoItems = Array.from({ length: 4 }, (_, i) => ({
    ...videoItem,
    id: i,
  }));

  return (
    <div
      id="video-container"
      className="flex w-full h-[280px] justify-start gap-2"
    >
      {videoItems.map((item) => (
        <a
          id="video"
          key={item.id}
          className="w-[350px] px-5 py-2 hover:bg-gray-200 transition-colors duration-500 rounded-[20px]"
        >
          <div id="thumbnail">{item.thumbnailImg}</div>
          <div id="description" className="flex gap-1 mt-1">
            {item.youtuberLogo}
            <div className="w-[250px] h-[38px] text-[12px] line-clamp-2 overflow-hidden">
              {item.name}
            </div>
            <button id="settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[24px] h-[24px]"
              >
                <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z"></path>
              </svg>
            </button>
          </div>

          <div
            id="youtuber-name"
            className="ml-8 text-[10px] text-gray-500 font-bold"
          >
            {item.youtuberName}
          </div>
          <div
            id="sub-info"
            className="ml-8 text-[10px] text-gray-500 font-bold"
          >
            <p>
              조회수 {item.subInfo.view}만회 {item.subInfo.date}개월 전
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LongForm;
