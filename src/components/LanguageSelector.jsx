import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage(); // Context에서 가져오기

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors"
    >
      Language: {language}
    </button>
  );
}