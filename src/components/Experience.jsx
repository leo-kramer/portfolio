import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { SkillTag, DeliverableLi } from './Cards.jsx';
import '../assets/css/index.css'
import '../assets/css/exp-edu.css'

const ExperienceCard = ({ logo, job, company, location, date, deliverables, skills }) => {
  return (
    <div className="experience-card">
      <div>
        <img src={logo} />
        <div>
          <h5>{job}</h5>
          <p>{company} - {location}</p>
          <p>{date}</p>
        </div>
      </div>
      <ul>
        {deliverables.map((deliverable, index) => (
          <DeliverableLi
            key={index}
            deliverable={deliverable}
          />
        ))}
      </ul>
      <ul>
        {skills.map((skill, index) => (
          <SkillTag
            key={index}
            skill={skill}
          />
        ))}
      </ul>
    </div>
  )
}

ExperienceCard.propTypes = {
  logo: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deliverables: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      logo: "/portfolio/img/logo-chesterfield.png",
      job: t("Chesterfield job"),
      company: "Chesterfield Media",
      location: "Groningen",
      date: t("Chesterfield date"),
      deliverables: t("Chesterfield deliverables", { returnObjects: true }),
      skills: [ "Google Apps Script", "JavaScript", "REST APIs" ],
    },
    {
      logo: "/portfolio/img/logo-lyceo.png",
      job: t("Lyceo job"),
      company: "Lyceo",
      location: "Leiden",
      date: t("Lyceo date"),
      deliverables: t("Lyceo deliverables", { returnObjects: true }),
      skills: [ "HTML", "CSS", "Teaching" ],
    },
  ]

  return (
    <section id="experience">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          logo={experience.logo}
          job={experience.job}
          company={experience.company}
          location={experience.location}
          date={experience.date}
          deliverables={experience.deliverables}
          skills={experience.skills}
        />
      ))}
    </section>
  )
}

export default Experience;