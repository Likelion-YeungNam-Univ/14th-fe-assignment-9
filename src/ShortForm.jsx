import { useContext } from "react";
import Theme from "./context/Theme";
import thumbnail from "./assets/4e4edfd1-1e58-46f6-ad4a-30b7883b4f61.webp";
import more_vertical from "./assets/dots.png";

const shortFormList = [
  { id: 1, thumbnail: thumbnail, title: "제목입니다", views: "33만회" },
  { id: 2, thumbnail: thumbnail, title: "제목입니다", views: "33만회" },
  { id: 3, thumbnail: thumbnail, title: "제목입니다", views: "33만회" },
  { id: 4, thumbnail: thumbnail, title: "제목입니다", views: "33만회" },
  { id: 5, thumbnail: thumbnail, title: "제목입니다", views: "33만회" },
];

function ShortForm() {
  const {isDark} = useContext(Theme);

  return (
    <div className={`${isDark ? 'bg-[#0f0f0f]' : 'bg-[#ffffff]'} px-4 py-4 border-t border-gray-800`}>
      <div className="flex items-center gap-2 mb-4">
        <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Shorts</span>
      </div>
      <div className="flex gap-3 overflow-x-hidden">
        {shortFormList.map((sf) => (
          <div key={sf.id} className="w-[calc(33.333%-8px)] lg:w-[calc(20%-10px)] flex-shrink-0">
            <div className="relative group">
              <img
                src={sf.thumbnail}
                className="w-full aspect-[9/16] object-cover rounded-xl"
                alt={sf.title}
              />
              <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-black/60 rounded-full">
                <img src={more_vertical} alt="more" className="w-4 h-4 invert" />
              </button>
            </div>
            <div className="mt-2 px-1">
              <div className={`text-sm font-medium line-clamp-2 leading-snug ${isDark ? 'text-white' : 'text-black'}`}>
                {sf.title}
              </div>
              <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {sf.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortForm;