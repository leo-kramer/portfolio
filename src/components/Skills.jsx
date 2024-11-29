import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import "../assets/css/index.css"
import "../assets/css/skills.css"

const toggleDescription = (e) => {
	const Button = e.target
	const Parent = Button.closest("div")
	const Description = Parent.querySelector("div")
	Description.classList.toggle("show")

	if (Description.classList.contains("show")) {
		Button.classList.add("button-border-radius-description")
	} else {
		Button.classList.remove("button-border-radius-description")
	}
}

const SkillCard = ({ logo, name, description }) => {
	return (
		<div className="skill-card">
			<button onClick={toggleDescription}>
				<img src={logo} alt="" />
				<p>{name}</p>
			</button>
			<div>
				<p>{description}</p>
			</div>
		</div>
	)
}

SkillCard.propTypes = {
	logo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

const Skills = () => {
	const { t } = useTranslation()

	const skills = [
		{
			logo: "/portfolio/img/logo-html.png",
			name: "HTML",
			description: t("HTML description"),
		},
		{
			logo: "/portfolio/img/logo-css.png",
			name: "CSS",
			description: t("CSS description"),
		},
		{
			logo: "/portfolio/img/logo-js.png",
			name: "JavaScript",
			description: t("JavaScript description"),
		},
		{
			logo: "/portfolio/img/logo-react.png",
			name: "React",
			description: t("React description"),
		},
		{
			logo: "/portfolio/img/logo-git.png",
			name: "Git",
			description: t("Git description"),
		},
		{
			logo: "/portfolio/img/logo-figma.png",
			name: "Figma",
			description: t("Figma description"),
		},
		{
			logo: "/portfolio/img/logo-nodejs.png",
			name: "Node.JS",
			description: t("Node.JS description"),
		},
		{
			logo: "/portfolio/img/logo-gas.png",
			name: "Google Apps Script",
			description: t("Google Apps Script description"),
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

export default Skills
