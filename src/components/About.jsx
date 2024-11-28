import { useTranslation } from 'react-i18next';
import '../assets/css/index.css'
import '../assets/css/about.css'

const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <section>
        <section>
          <div>
            <img src="/portfolio/img/pfp-1.jpg" alt="" />
            <div>
              <h1>Leo Kramer</h1>
              <h3>Front-end Developer</h3>
            </div>
          </div>
          <p>📍 {t("Location")}</p>
        </section>

        <p>{t("Tagline")}</p>

        <ul>
          <li><button className='primary'>Download CV</button></li>
          <li>
            <a target="_blank">
              <div className="svg-mask github"></div>
            </a>
            <a target="_blank">
              <div className="svg-mask linkedin"></div>
            </a>
          </li>
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