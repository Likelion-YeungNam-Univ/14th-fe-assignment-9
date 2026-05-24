import { useContext } from "react";
import Theme from "./context/Theme";
import thumbnail from "./assets/4e4edfd1-1e58-46f6-ad4a-30b7883b4f61.webp";
import more_vertical from "./assets/dots.png";

const longFormList = [
  {
    id: 1,
    thumbnail: thumbnail,
    runtime: "1:13:21",
    profile: thumbnail,
    title: "밴드 음악",
    user: "담이네",
    views: "44만회",
    date: "1년전",
  },
  {
    id: 2,
    thumbnail: thumbnail,
    runtime: "1:13:21",
    profile: thumbnail,
    title: "록 음악",
    user: "담이네",
    views: "4만회",
    date: "1년전",
  },
  {
    id: 3,
    thumbnail: thumbnail,
    runtime: "1:13:21",
    profile: thumbnail,
    title: "발라드",
    user: "담이네",
    views: "35만회",
    date: "1년전",
  },
  {
    id: 4,
    thumbnail: thumbnail,
    runtime: "48:12",
    profile: thumbnail,
    title: "재즈 라이브",
    user: "담이네",
    views: "12만회",
    date: "3개월전",
  },
  {
    id: 5,
    thumbnail: thumbnail,
    runtime: "32:05",
    profile: thumbnail,
    title: "클래식 피아노",
    user: "담이네",
    views: "8만회",
    date: "2주전",
  },
  {
    id: 6,
    thumbnail: thumbnail,
    runtime: "1:02:44",
    profile: thumbnail,
    title: "인디 음악 모음",
    user: "담이네",
    views: "21만회",
    date: "6개월전",
  },
];

const LongForm = () => {
  const { isDark } = useContext(Theme);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 py-4">
      {longFormList.map((form) => (
        <div key={form.id} className={`${isDark ? 'bg-[#0f0f0f]' : 'bg-[#ffffff]'} cursor-pointer group`}>
          <div className="relative">
            <img
              className="w-full aspect-video object-cover rounded-xl group-hover:rounded-none transition-all"
              src={form.thumbnail}
              alt={form.title}
            />
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              {form.runtime}
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <img
              className="rounded-full w-9 h-9 flex-shrink-0 mt-0.5"
              src={form.profile}
              alt={form.user}
            />
            <div className="flex-1 min-w-0">
              <div className={`font-medium text-sm leading-snug line-clamp-2 pr-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {form.title}
              </div>
              <div className="text-gray-400 text-sm mt-1">{form.user}</div>
              <div className="text-gray-400 text-sm">
                조회수 {form.views} · {form.date}
              </div>
            </div>
            <img
              src={more_vertical}
              alt="more"
              className="w-5 h-5 invert flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LongForm;