import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext.jsx'; // themecontext 추가
import { LanguageProvider } from './contexts/LanguageContext.jsx'; // languagecontext 추가

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 다크/화이트 모드, 안에 번역 모드 감싸기 */}
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)