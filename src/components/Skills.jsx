import { useTranslation } from 'react-i18next';
import '../assets/css/index.css'
import '../assets/css/skills.css'

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h2>{t("Current Skills")}</h2>
    </section>
  )
}

export default Skills;