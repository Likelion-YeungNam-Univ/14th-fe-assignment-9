import { useLanguage } from '../contexts/LanguageContext';

export default function WelcomeMessage() {
  const { language } = useLanguage(); // Context에서 현재 언어 상태만 가져오기

  return (
    <h1 className="text-3xl font-bold mt-6 text-gray-800 dark:text-white">
      {language === 'EN' ? 'Welcome!' : '환영합니다!'}
    </h1>
  );
}