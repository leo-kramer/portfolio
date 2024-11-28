import { useTranslation } from 'react-i18next';
import '../assets/css/index.css'
import '../assets/css/nav.css'

const LanguageSelection = () => {
  const LanguageMenu = document.querySelector("header > nav > ul > li > div")

  LanguageMenu.classList.toggle("show")
}

const Nav = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#root">{t("Home")}</a></li>
          <li><a href="#skills">{t("Skills")}</a></li>
          <li><a href="#projects">{t("Projects")}</a></li>
          <li><a href="#experience">{t("Experience")}</a></li>
          <li>
            <button onClick={LanguageSelection}>
              <img src="../../public/img/icon-language.svg" alt="A language icon, represented by a globe." />
              {t("LNG")}
              <img src="../../public/img/icon-expand.svg" alt="An expand icon, represent as a triangle facing down." />
            </button>
            <div>
              <button onClick={() => i18n.changeLanguage('en')}>Switch to English</button>
              <button onClick={() => i18n.changeLanguage('nl')}>Switch to Dutch</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;