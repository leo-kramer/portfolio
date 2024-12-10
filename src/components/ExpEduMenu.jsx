import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import Experience from "./Experience.jsx"
import Education from "./Education.jsx"
import "../assets/css/index.css"
import "../assets/css/exp-edu.css"
import "../assets/css/exp-edu-menu.css"

const ExpEduMenu = ({ setActiveSection }) => {
	const { t } = useTranslation()
	const [showing, setShowing] = useState("experience")
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 35 * 16) {
				// 35em in pixels
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		handleResize() // Check initial size
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	})

	const ShowExperience = () => {
		setShowing("experience")
		setActiveSection("experience")
	}

	const ShowEducation = () => {
		setShowing("education")
		setActiveSection("education")
	}

	const toggleSection = () => {
		if (showing === "experience") {
			ShowEducation()
		} else if (showing === "education") {
			ShowExperience()
		}
	}

	return (
		<section id="exp-edu">
			<div>
				{isMobile ? (
					<div>
						<h2>{showing === "experience" ? t("Experience") : t("Education")}</h2>
						<button onClick={toggleSection}>
							<div
								style={{
									transform: `translateX(${showing === "experience" ? 0 : 1.5}em)`, // Adjust position based on index
									transition: "transform 300ms ease-in-out",
								}}
							></div>
						</button>
					</div>
				) : (
					<div>
						{" "}
						{/* For the background */}
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
				)}
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
