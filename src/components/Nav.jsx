import { useTranslation } from 'react-i18next';

const languageSelection = () => {
  console.log("languageSelection");
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
          <li><button onClick={languageSelection}>{t("LNG")}</button>
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