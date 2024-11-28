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
              <div className="svg-mask language"></div>
              <p>{t("LNG")}</p>
              <div className="svg-mask expand"></div>
              </button>
          </li>
        </ul>

        {/* Language menu */}
        <div>
          <img src="../../public/arrow.png" />
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