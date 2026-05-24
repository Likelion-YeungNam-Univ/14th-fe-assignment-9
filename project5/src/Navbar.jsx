import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

// 1. 데이터의 오타(namme -> name) 수정

const list = [
  { id: 1, name: "one" },
  { id: 2, name: "💬" },
  { id: 3, name: "🔔" },
  { id: 4, name: "📱" },
  { id: 5, name: "☰" },
];

const Icon = () => {
  return (
    <>
      {list.map((item) => (
        // item.name으로 정확히 매칭
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="items-center border-b border-gray-200 flex flex-row justify-between mt-2.5 mb-2.5 ml-20 mr-20">
        {/* 로고 영역 */}
        <div className="flex flex-row gap-3">
          <span className="inline-block w-6 h-6 text-center text-white font-bold bg-black rounded-2xl">
            N
          </span>
          <h2 className="font-bold">blog</h2>
        </div>

        {/* 검색 영역 */}
        <div className="flex flex-row justify-center ">
          <div className="p-2 flex border-2 border-gray-300 rounded-3xl  ">
            {/* selected가 아니라 select 태그입니다 */}
            <select>
              <option>글</option>
              <option>블로그</option>
              <option>별명.아이디</option>
            </select>
            {/* placeholder 속성을 바깥으로 뺍니다 */}
            <input placeholder="검색어를 입력하세요" />
          </div>
          <button className="p-2 border-2 border-gray-300 rounded-3xl">
            통합검색
          </button>
        </div>

        {/* 아이콘 영역 */}
        <div className="flex flex-row items-center gap-4">
          <Icon />
        </div>
        {/* 다크 라이트 */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-3 py-1 border-2 border-gray-300 rounded-full text-sm font-bold
                   hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </>
  );
};
