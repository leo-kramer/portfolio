// Components
import { useState } from "react"
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import ExpEduMenu from "./components/ExpEduMenu.jsx"

function App() {
	const [activeSection, setActiveSection] = useState("experience")

	return (
		<div id="app-root">
			<Nav activeSection={activeSection} />
			<main>
				<About />
				<section>
					<Skills />
					<Projects />
					<ExpEduMenu setActiveSection={setActiveSection} />
				</section>
			</main>
		</div>
	)
}

export default App
