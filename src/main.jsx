import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from './ThemeContext.jsx' //themecontext 추가


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* 앱 감싸기: 타메 적용을 어플 전체에 공유하기 위해서! */}
    <App />
    </ThemeProvider>
  </StrictMode>,

)
