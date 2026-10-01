import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/themeContext.tsx'
import { LanguageProvider } from './context/languageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
