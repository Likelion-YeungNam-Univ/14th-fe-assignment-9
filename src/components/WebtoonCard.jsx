import React from 'react'
import ThemeContext from '../ThemeContext'

const WebtoonCard = ({ image, title, author }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className="w-full">
            <img
                src={image}
                alt={title}
                className="h-125 w-full rounded-md object-cover" />

            <h3 className={`mt-3 text-lg font-bold ${theme === "light" ? "text-black" : "text-white"}`}>
                <span className="mr-1 rounded border border-red-400 px-1 text-sm text-red-500">
                    UP
                </span>
                {title}
            </h3>

            <p className={`mt-1 text-base ${theme === "light" ? "text-black" : "text-gray-300"}`}>
                {author}
            </p>
        </div>
    )
}

export default WebtoonCard