import { useTranslation } from 'react-i18next';
import '../assets/css/index.css'
import '../assets/css/nav.css'

const toggleLanguageMenu  = () => {
  const LanguageMenu = document.querySelector("header > nav > div")

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
            <button onClick={toggleLanguageMenu}>
              <img src="../../public/img/icon-language.svg" alt="A language icon, represented by a globe." />
              <p>{t("LNG")}</p>
              <img src="../../public/img/icon-expand.svg" alt="An expand icon, represent as a triangle facing down." />
            </button>
          </li>
        </ul>

        {/* Language menu */}
        <div>
          <img src="../../public/img/arrow.png" />
          <ul>
            <li><button onClick={() => i18n.changeLanguage('en')}>English</button></li>
            <li><button onClick={() => i18n.changeLanguage('nl')}>Nederlands</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;