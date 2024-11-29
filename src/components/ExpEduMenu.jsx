import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import Experience from "./Experience.jsx"
import Education from "./Education.jsx"
import "../assets/css/index.css"
import "../assets/css/exp-edu.css"
import "../assets/css/exp-edu-menu.css"

const ExpEduMenu = ({ setActiveSection }) => {
	const { t } = useTranslation()
	const [showing, setShowing] = React.useState("experience")

	const ShowExperience = () => {
		setShowing("experience")
		setActiveSection("experience")
	}

	const ShowEducation = () => {
		setShowing("education")
		setActiveSection("education")
	}

	return (
		<section>
			<div>
				<button
					onClick={ShowExperience}
					className={showing === "experience" ? "active" : ""}
				>
					{t("Experience")}
				</button>
				<button
					onClick={ShowEducation}
					className={showing === "education" ? "active" : ""}
				>
					{t("Education")}
				</button>
			</div>
			{showing === "experience" && <Experience />}
			{showing === "education" && <Education />}
		</section>
	)
}

ExpEduMenu.propTypes = {
	setActiveSection: PropTypes.string,
}

export default ExpEduMenu
