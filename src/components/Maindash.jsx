import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import { text } from "../traslation_text.js";

const MainHeader = () => {
  const { lang } = useLanguage();
  const styles = {
    header: "flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-white",
    title: "flex-1 text-3xl ml-3 font-medium text-gray-700 truncate",
    menuButton: "text-gray-400 text-xl hover:text-gray-600",
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{text[lang].dashboard}</h1>

      <button className={styles.menuButton} aria-label="메뉴">
        ⋮
      </button>
    </header>
  );
};

export default MainHeader;