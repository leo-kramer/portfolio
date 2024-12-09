import { useRef, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import "../assets/css/index.css"
import "../assets/css/nav.css"

const setActiveNavItem = () => {
	const items = document.querySelectorAll("nav > ul > li:not(:last-of-type)")
	const links = document.querySelectorAll("nav > ul > li:not(:last-of-type) > a")

	links.forEach((link, index) => {
		const sectionID = link.href.split("#")[1]
		const section = document.getElementById(sectionID)

		if (section) {
			const position = section.getBoundingClientRect()

			if (
				position.top >= 0 &&
				position.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			) {
				items[index].classList.add("active")
			} else {
				items[index].classList.remove("active")
			}
		}
	})

	items.forEach((item) => {
		console.log(item)
		if (!item.classList.contains("active")) {
			item.classList.remove("active")
			items[0].classList.add("active")
		} else if (window.pageYOffset <= 64) {
			item.classList.remove("active")
			items[0].classList.add("active")
		}
	})
}

const Nav = ({ activeSection }) => {
	const { t, i18n } = useTranslation()
	const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
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

		const handleResize = () => {
			if (window.innerWidth <= 55 * 16) {
				// 55em in pixels
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		handleResize()
		window.addEventListener("resize", handleResize)

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
			window.removeEventListener("resize", handleResize)
		}
	}, [isLanguageMenuOpen])

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng)
		const LanguageMenu = languageMenuRef.current
		LanguageMenu.classList.remove("show-flex")
	}

	window.addEventListener("scroll", setActiveNavItem)

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#top">
							{isMobile ? <div className="svg-mask home"></div> : t("Home")}
						</a>
					</li>
					<li>
						<a href="#skills">
							{isMobile ? <div className="svg-mask skills"></div> : t("Skills")}
						</a>
					</li>
					<li>
						<a href="#projects">
							{isMobile ? <div className="svg-mask projects"></div> : t("Projects")}
						</a>
					</li>
					<li>
						<a href={`#${activeSection}`}>
							{isMobile ? (
								activeSection === "experience" ? (
									<div className="svg-mask experience"></div>
								) : (
									<div className="svg-mask education"></div>
								)
							) : activeSection === "experience" ? (
								t("Experience")
							) : (
								t("Education")
							)}
						</a>
					</li>
					<li>
						{isMobile ? (
							<button onClick={toggleLanguageMenu}>
								<div className="svg-mask language"></div>
							</button>
						) : (
							<button onClick={toggleLanguageMenu}>
								<div className="svg-mask language"></div>
								<p>{t("LNG")}</p>
								<div
									className={`svg-mask ${isLanguageMenuOpen ? "collapse" : "expand"}`}
								></div>
							</button>
						)}
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
