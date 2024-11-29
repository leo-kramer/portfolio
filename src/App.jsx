// Components
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div id="app-root">
      {/* <h1>THIS PAGE IS A WORK IN PROGRESS</h1> */}
      <Nav />
      <main>
        <About />
        <section>
          <Skills />
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App
