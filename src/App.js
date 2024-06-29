import Header from "./containers/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Education from "./containers/education/Education";
import Projects from "./containers/projects/Projects";
import Experience from "./containers/experience/Experience";
import './App.scss';

function App() {
  return (
    <div>
        <Header />
        <Greeting />
        <Skills />
        <Experience />
        <Education />
        <Projects />
    </div>
  );
}

export default App;
