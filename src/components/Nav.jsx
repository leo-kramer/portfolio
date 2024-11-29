import { useRef, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import "../assets/css/index.css"
import "../assets/css/nav.css"

const Nav = ({ activeSection }) => {
	const { t, i18n } = useTranslation()
	const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
	const languageMenuRef = useRef(null)

	const toggleLanguageMenu = () => {
		setIsLanguageMenuOpen(true)
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			const LanguageMenu = languageMenuRef.current

			if (LanguageMenu && !LanguageMenu.contains(event.target)) {
				setIsLanguageMenuOpen(false)
			}
		}

		// Delay useEffect operations to allow setIsLanguageMenuOpen to update
		const timeoutId = setTimeout(() => {
			if (isLanguageMenuOpen) {
				document.addEventListener("click", handleClickOutside)
			} else {
				document.removeEventListener("click", handleClickOutside)
			}
		}, 50)

		return () => {
			clearTimeout(timeoutId)
			document.removeEventListener("click", handleClickOutside)
		}
	}, [isLanguageMenuOpen])

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng)
		const LanguageMenu = languageMenuRef.current
		LanguageMenu.classList.remove("show-flex")
	}

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#top">{t("Home")}</a>
					</li>
					<li>
						<a href="#skills">{t("Skills")}</a>
					</li>
					<li>
						<a href="#projects">{t("Projects")}</a>
					</li>
					{/* <li>
						<a href="#experience">{t("Experience")}</a>
					</li> */}
					<li>
						<a href={`#${activeSection}`}>
							{activeSection === "experience" ? t("Experience") : t("Education")}
						</a>
					</li>
					<li>
						<button onClick={toggleLanguageMenu}>
							<div className="svg-mask language"></div>
							<p>{t("LNG")}</p>
							<div className="svg-mask expand"></div>
						</button>
					</li>
				</ul>

				{/* Language menu */}
				<div
					ref={languageMenuRef}
					className={isLanguageMenuOpen ? "show-flex" : ""}
				>
					<img src="/portfolio/img/arrow.png" />
					<ul>
						<li>
							<button onClick={() => changeLanguage("en")}>English</button>
						</li>
						<li>
							<button onClick={() => changeLanguage("nl")}>Nederlands</button>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

Nav.propTypes = {
	activeSection: PropTypes.string,
}

export default Nav
