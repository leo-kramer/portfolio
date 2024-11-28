import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import '../assets/css/index.css'
import '../assets/css/skills.css'

const SkillCard = ({ logo, name, description }) => {
  return (
    <div className="skill-card">
    <div>
      <img src={logo} alt=""/>
      <p>{name}</p>
    </div>
    <div>
      <p>{description}</p>
    </div>
    </div>
  )
}

SkillCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      logo: "/public/img/logo-html.png",
      name: "HTML",
      description: t("HTML description"),
    },
  ]

  return (
    <section id="skills">
      <h2>{t("Skills title")}</h2>
      <p>{t("Skills introduction")}</p>
      <div>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            logo={skill.logo}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills;