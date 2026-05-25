import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function LongForm() {
  const { language } = useContext(LanguageContext);

  const longFormList = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/400x250",
      profile: "https://via.placeholder.com/40",
      title: { en: "Focus Music", ko: "집중 음악" },
      user: "Focus Channel",
      views: "124만",
      date: { en: "1 year ago", ko: "1년 전" },
      runtime: "1:13:21"
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/400x250",
      profile: "https://via.placeholder.com/40",
      title: { en: "Daily Vlog", ko: "일상 브이로그" },
      user: "Dami",
      views: "4만",
      date: { en: "4 hours ago", ko: "4시간 전" },
      runtime: "23:08"
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/400x250",
      profile: "https://via.placeholder.com/40",
      title: { en: "Travel Story", ko: "여행 이야기" },
      user: "Minyeong",
      views: "35만",
      date: { en: "1 month ago", ko: "1개월 전" },
      runtime: "5:11"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-4">

      {longFormList.map((v) => (
        <div key={v.id} className="flex flex-col">

          {/* thumbnail */}
          <div className="relative">
            <img
              src={v.thumbnail}
              className="w-full rounded-xl"
            />

            <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
              {v.runtime}
            </span>
          </div>

          {/* info */}
          <div className="flex gap-3 mt-2">

            <img
              src={v.profile}
              className="w-10 h-10 rounded-full"
            />

            <div className="text-sm">

              <p className="font-semibold">
                {language === "EN" ? v.title.en : v.title.ko}
              </p>

              <p className="text-gray-500">
                {v.user}
              </p>

              <p className="text-gray-400 text-xs">
                {language === "EN"
                  ? `${v.views} views · ${v.date.en}`
                  : `조회수 ${v.views} · ${v.date.ko}`}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}