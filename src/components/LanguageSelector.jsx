import { useLanguage } from "../context/LanguageContext";
import { text } from "../traslation_text.js";

const LanguageSelector = () => {
  const { lang, toggleLang } = useLanguage();
  const styles = {
    button: "w-full py-5 text-xl font-extrabold rounded-2xl bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-xl hover:scale-105 transition-all duration-200",
  };

  return (
    <button
      onClick={toggleLang}
      className={styles.button}>
      {text[lang].language}: {lang === "ko" ? "KO" : "EN"}
    </button>
  );
};

export default LanguageSelector;