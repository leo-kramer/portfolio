import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import "../assets/css/index.css"
import "../assets/css/skills.css"

const toggleDescription = (event) => {
	const Button = event.currentTarget
	const Logo = Button.querySelector("img")
	const Parent = Button.closest("div")
	const Description = Parent.querySelector("div")
	Description.classList.toggle("show")

	if (Description.classList.contains("show")) {
		Logo.classList.add("no-filter")
		Button.classList.add("button-border-radius-description")
	} else {
		Logo.classList.remove("no-filter")
		Button.classList.remove("button-border-radius-description")
	}
}

const SkillCard = ({ logo, name, description }) => {
	const { t } = useTranslation()

	return (
		<div className="skill-card">
			<button onClick={toggleDescription}>
				<img src={logo} alt={`${t("Logo alt text")} ${name}.`} />
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
