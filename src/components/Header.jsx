import React from 'react'
import Icon from '../assets/icon.jpg'
import ThemeContext from '../ThemeContext';

const menuList = [
    { id: 1, name: "웹툰" },
    { id: 2, name: "웹소설" },
    { id: 3, name: "시리즈" },
];

const Header = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <header
            className={`flex items-center justify-between px-10 py-4 ${theme === "light" ? "bg-white" : "bg-gray-900"
                }`}
        >
            <div className="flex items-center gap-8">
                <h1
                    className={`text-2xl font-extrabold ${theme === "light" ? "text-black" : "text-white"
                        }`}
                >
                    NAVER
                </h1>

                <nav className="flex gap-5">
                    {menuList.map((menu) => (
                        <span
                            key={menu.id}
                            className={`cursor-pointer ${menu.name === "웹툰"
                                ? `text-3xl font-bold ${theme === "light" ? "text-black" : "text-white"
                                }`
                                : `text-base ${theme === "light" ? "text-gray-500" : "text-gray-400"
                                }`
                                }`}
                        >
                            {menu.name}
                        </span>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="제목 / 작가로 검색할 수 있습니다."
                        className={`border px-4 pr-10 h-10 text-sm w-72 rounded ${theme === "light"
                            ? "bg-white border-gray-300 text-black"
                            : "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                            }`} />

                    <img
                        src={Icon}
                        alt="search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                </div>

                <button
                    className={`text-sm border w-15 h-8 ${theme === "light"
                        ? "text-gray-700 border-gray-300 bg-white"
                        : "text-white border-gray-600 bg-gray-800"
                        }`}>
                    로그인
                </button>

                <button
                    onClick={toggleTheme}
                    className={`text-sm border px-3 h-8 ${theme === "light"
                        ? "text-gray-700 border-gray-300 bg-white"
                        : "text-white border-gray-600 bg-gray-800"
                        }`}>
                    {theme === "light" ? "다크" : "라이트"}
                </button>
            </div>
        </header>
    )
}

export default Header