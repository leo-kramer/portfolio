import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { SkillTag, DeliverableLi } from "./Cards.jsx"
import "../assets/css/index.css"
import "../assets/css/projects.css"

const ProjectCard = ({
	img,
	imgAlt,
	name,
	deliverables,
	skills,
	code,
	demo,
}) => {
	const { t } = useTranslation()

	return (
		<div className="project-card">
			<img src={img} alt={imgAlt} />
			<div>
				<h5>{name}</h5>
				<ul>
					{deliverables.map((deliverable, index) => (
						<DeliverableLi key={index} deliverable={deliverable} />
					))}
				</ul>
				<ul>
					{skills.map((skill, index) => (
						<SkillTag key={index} skill={skill} />
					))}
				</ul>
				<ul>
					{code && code.trim() !== "" && (
						<li>
							<a href={code} target="_blank">
								<div className="svg-mask github"></div>
								{t("View code")}
							</a>
						</li>
					)}
					{demo && demo.trim() !== "" && (
						<li>
							<a href={demo} target="_blank">
								<div className="svg-mask share"></div>
								{t("Live demo")}
							</a>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	deliverables: PropTypes.array.isRequired,
	skills: PropTypes.array.isRequired,
	code: PropTypes.string,
	demo: PropTypes.string,
}

const Projects = () => {
	const { t } = useTranslation()

	const projects = [
		{
			img: "/portfolio/img/project-sandscript.png",
			imgAlt: t("SandScript alt text"),
			name: "SandScript",
			deliverables: t("SandScript deliverables", { returnObjects: true }),
			skills: ["HTML", "CSS", "JavaScript", "Git", "Node.JS"],
			code: "https://github.com/leo-kramer/SandScript",
			demo: "",
		},
		{
			img: "/portfolio/img/project-avatar.png",
			imgAlt: t("Avatar alt text"),
			name: "Avatar: The Game",
			deliverables: t("Avatar deliverables", { returnObjects: true }),
			skills: ["HTML", "CSS", "JavaScript"],
			code: "https://github.com/leo-kramer/avatar-game",
			demo: "https://leo-kramer.github.io/avatar-game/",
		},
	]

	return (
		<section id="projects">
			<h2>{t("Projects title")}</h2>
			<div>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						img={project.img}
						imgAlt={project.imgAlt}
						name={project.name}
						deliverables={project.deliverables}
						skills={project.skills}
						code={project.code}
						demo={project.demo}
					/>
				))}
			</div>
		</section>
	)
}

export default Projects
