import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import { text } from "../traslation_text.js";

const MainHeader = () => {
  const { lang } = useLanguage();

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-white">
      <h1 className="text-3xl ml-3 font-medium text-gray-700">{text[lang].dashboard}</h1>

      <button className="text-gray-400 text-xl hover:text-gray-600">⋮</button>
    </header>
  );
};

export default MainHeader;