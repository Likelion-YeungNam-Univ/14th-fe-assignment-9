import React, { createContext, useContext, useState } from "react";

// 1. Context 생성
const LanguageContext = createContext();

// 2. Provider (전역 상태 제공자)
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ko");

  const toggleLang = () => {
    setLang((prev) => (prev === "ko" ? "en" : "ko"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. useContext를 쉽게 쓰기 위한 커스텀 훅
export const useLanguage = () => {
  return useContext(LanguageContext);
};