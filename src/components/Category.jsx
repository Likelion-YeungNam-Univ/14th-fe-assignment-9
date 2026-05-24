import React from 'react'
import ThemeContext from '../ThemeContext'

const categoryList = [
    { id: 1, category: "홈" },
    { id: 2, category: "웹툰" },
    { id: 3, category: "컷츠" },
    { id: 4, category: "베스트도전" },
    { id: 5, category: "도전만화" },
    { id: 6, category: "마이페이지" }
]

const Category = () => {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div
            className={`flex items-center h-14 border-y px-10 text-1xl ${theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-900 border-gray-700"
                }`}
        >
            {categoryList.map((category) => (
                <div
                    key={category.id}
                    className={`px-3 h-full flex items-center justify-center ${category.category === "홈"
                            ? "bg-green-500 text-white w-13"
                            : theme === "light"
                                ? "text-black"
                                : "text-gray-300"
                        }`}
                >
                    {category.category}
                </div>
            ))}
        </div>
    )
}

export default Category