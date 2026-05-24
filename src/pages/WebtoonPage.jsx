import React from 'react'
import WebtoonSection from '../components/WebtoonSection'
import Category from '../components/Category'
import Header from '../components/Header'
import ThemeContext from '../ThemeContext'

const WebtoonPage = () => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
            }`}><Header />
            <Category />
            <WebtoonSection />
        </div>
    )
}

export default WebtoonPage