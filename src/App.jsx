// Components
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import ExpEduMenu from "./components/ExpEduMenu.jsx"

function App() {
	return (
		<div id="app-root">
			<Nav />
			<main>
				<About />
				<section>
					<Skills />
					<Projects />
					<ExpEduMenu />
				</section>
			</main>
		</div>
	)
}

export default App
