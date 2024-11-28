import { useTranslation } from 'react-i18next';
import '../assets/css/index.css'
import '../assets/css/about.css'

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <section>
        <section>
          <div>
            <img src='' />
            <div>
              <p>Leo Kramer</p>
              <p>Front-end Developer</p>
            </div>
          </div>
          <p>📍 {t("Location")}</p>
        </section>

        <p>{t("Tagline")}</p>

        <ul>
          <li><button>Download CV</button></li>
          <li><link><img src='' /></link></li>
          <li><link><img src='' /></link></li>
        </ul>

      </section>
        <p>{t("Contact")}</p>
        <table>
          <tr>
            <td>{t("E-mail")}</td>
            <td><a>leokramer17@gmail.com</a></td>
          </tr>
          <tr>
            <td>{t("Phone")}</td>
            <td><a>06 45 92 10 49</a></td>
          </tr>
        </table>
      <section>

      </section>
    </section>
  );
};

export default About;