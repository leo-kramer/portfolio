// Components
// import { useState, useEffect } from "react"
import { useState } from "react"
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import ExpEduMenu from "./components/ExpEduMenu.jsx"
// import Experience from "./components/Experience.jsx"
// import Education from "./components/Education.jsx"

function App() {
	const [activeSection, setActiveSection] = useState("experience")
	// const [isMobile, setIsMobile] = useState(false)

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		if (window.innerWidth <= 35 * 16) {
	// 			// 35em in pixels
	// 			setIsMobile(true)
	// 		} else {
	// 			setIsMobile(false)
	// 		}
	// 	}

	// 	handleResize() // Check initial size
	// 	window.addEventListener("resize", handleResize)

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize)
	// 	}
	// })

	return (
		<div id="app-root">
			<Nav activeSection={activeSection} />
			<main>
				<About />
				<section>
					<Skills />
					<Projects />
					{/* {isMobile ? (
						<section>
							<h2>Experience</h2>
							<Experience />

							<h2>Education</h2>
							<Education />
						</section>
					) : (
						<ExpEduMenu setActiveSection={setActiveSection} />
					)} */}
					<ExpEduMenu setActiveSection={setActiveSection} />
				</section>
			</main>
		</div>
	)
}

export default App
