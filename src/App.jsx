import { useTranslation } from 'react-i18next';
import './App.css'

function App() {
  const { t, i18n } = useTranslation();
  return (
    <header>
      <h1>{t("Welcome")}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>Switch to English</button>
      <button onClick={() => i18n.changeLanguage('nl')}>Switch to Dutch</button>
    </header>
  );
}

export default App
